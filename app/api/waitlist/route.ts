import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["full_name", "email", "company", "role", "contracts_per_month", "country"]
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Insert into database
    const { data: insertData, error: insertError } = await supabase
      .from("waitlist")
      .insert([
        {
          full_name: data.full_name,
          email: data.email.toLowerCase(),
          company: data.company,
          role: data.role,
          contracts_per_month: data.contracts_per_month,
          country: data.country,
        },
      ])
      .select()

    if (insertError) {
      // Handle duplicate email
      if (insertError.code === "23505") {
        return NextResponse.json(
          {
            error: "This email is already on our waitlist!",
          },
          { status: 409 },
        )
      }

      console.error("Database error:", insertError)
      return NextResponse.json(
        {
          error: "Failed to join waitlist. Please try again.",
        },
        { status: 500 },
      )
    }

    // Send welcome email via edge function
    try {
      const edgeFunctionUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-welcome-email`

      await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          to: data.email,
          fullName: data.full_name,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't fail the signup if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    )
  }
}
