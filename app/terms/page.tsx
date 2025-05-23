import Image from "next/image"
import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F2EFE9]">
      <header className="border-b border-[#F2EFE9]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-block">
            <Image src="/images/veriga-logo.png" alt="Veriga" width={140} height={40} className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-[#F2EFE9]/70 text-lg">Last updated: May 23, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you and Veriga ("we," "us," or
            "our"), concerning your access to and use of our AI-powered contract auditing service.
          </p>
          <p>
            You agree that by accessing our Service, you have read, understood, and agree to be bound by all of these
            Terms of Service. If you do not agree with all of these terms, you are prohibited from using our service and
            should discontinue use immediately.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Veriga provides an AI-powered contract auditing service that analyzes contracts for potential risks, hidden
            clauses, and other areas of concern. Our service is designed to assist you in reviewing contracts but is not
            a replacement for professional legal advice.
          </p>

          <h2>3. User Representations</h2>
          <p>By using the Service, you represent and warrant that:</p>
          <ul>
            <li>You have the legal capacity to accept these Terms of Service.</li>
            <li>You are not under the age of 18.</li>
            <li>
              You will not access the Service through automated or non-human means, except as specifically permitted by
              us.
            </li>
            <li>You will not use the Service for any illegal or unauthorized purpose.</li>
            <li>Your use of the Service will not violate any applicable law or regulation.</li>
          </ul>

          <h2>4. User Registration</h2>
          <p>
            You may be required to register with Veriga to access and use our Service. You agree to provide accurate,
            current, and complete information during the registration process and to update such information to keep it
            accurate, current, and complete.
          </p>

          <h2>5. Service Usage</h2>
          <h3>5.1. Contract Submission</h3>
          <p>
            You are responsible for ensuring that any contracts you submit to our Service do not contain any
            confidential, proprietary, or sensitive information that you are not authorized to share.
          </p>

          <h3>5.2. AI Analysis Disclaimer</h3>
          <p>
            Our AI-powered analysis is provided for informational purposes only. While we strive for accuracy, our
            Service is not a substitute for professional legal review. We do not guarantee the accuracy, completeness,
            or usefulness of any analysis provided by our Service.
          </p>

          <h3>5.3. Usage Limitations</h3>
          <p>
            We reserve the right to limit the number of contracts you can submit, the size of contracts, or other usage
            parameters as needed to ensure service quality for all users.
          </p>

          <h2>6. Intellectual Property Rights</h2>
          <h3>6.1. Our Intellectual Property</h3>
          <p>
            The Service and its original content (excluding content provided by users), features, and functionality are
            and will remain the exclusive property of Veriga and its licensors. The Service is protected by copyright,
            trademark, and other laws.
          </p>

          <h3>6.2. Your Content</h3>
          <p>
            You retain all rights to contracts and other content you submit to our Service. By submitting contracts to
            our Service, you grant us a license to use, process, and analyze such contracts for the purpose of providing
            our Service to you.
          </p>

          <h2>7. Fees and Payment</h2>
          <p>
            We may offer paid subscription plans for our Service. By selecting a paid subscription, you agree to pay all
            fees associated with the plan. Unless otherwise stated, fees are quoted in U.S. Dollars and are
            non-refundable.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall Veriga, its directors, employees, partners, agents, suppliers, or affiliates, be liable
            for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
            inability to access or use the Service.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your access to our Service immediately, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach these Terms of Service.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we
            will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
            change will be determined at our sole discretion.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:hello@veriga.app" className="text-[#F2EFE9] underline">
              hello@veriga.app
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="border-t border-[#F2EFE9]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F2EFE9]/60 text-sm">© 2024 Veriga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
