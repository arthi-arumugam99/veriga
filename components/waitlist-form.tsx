"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles } from "lucide-react"

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
    contractVolume: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-[#F2EFE9]/10 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="h-12 w-12 text-[#F2EFE9]" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-black mb-4 text-white"
        >
          You're on the list! 🎉
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-[#F2EFE9] mb-8"
        >
          We'll be in touch soon with exclusive early access.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsSubmitted(false)}
          className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] underline transition-colors"
        >
          Submit another email
        </motion.button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Label htmlFor="email" className="text-white mb-3 block text-lg font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-14 text-lg backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
            placeholder="you@company.com"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Label htmlFor="company" className="text-white mb-3 block text-lg font-medium">
            Company
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-14 text-lg backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
            placeholder="Acme Inc"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Label htmlFor="role" className="text-white mb-3 block text-lg font-medium">
            Role
          </Label>
          <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
            <SelectTrigger className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] h-14 text-lg backdrop-blur-sm">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-[#F2EFE9]/20 backdrop-blur-xl">
              <SelectItem value="founder">Founder</SelectItem>
              <SelectItem value="ops">Operations</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Label htmlFor="contractVolume" className="text-white mb-3 block text-lg font-medium">
            Contracts per Year
          </Label>
          <Select
            value={formData.contractVolume}
            onValueChange={(value) => setFormData({ ...formData, contractVolume: value })}
          >
            <SelectTrigger className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] h-14 text-lg backdrop-blur-sm">
              <SelectValue placeholder="Select volume" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-[#F2EFE9]/20 backdrop-blur-xl">
              <SelectItem value="1-5">1-5</SelectItem>
              <SelectItem value="6-20">6-20</SelectItem>
              <SelectItem value="21-50">21-50</SelectItem>
              <SelectItem value="50+">50+</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#F2EFE9] hover:bg-white text-black py-4 h-16 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300"
          >
            {isLoading ? (
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mr-3"
                />
                Processing...
              </div>
            ) : (
              <div className="flex items-center">
                <Sparkles className="mr-3 h-6 w-6" />
                Join the Waitlist
              </div>
            )}
          </Button>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-sm text-[#F2EFE9]/60 text-center"
      >
        By joining, you agree to our Terms of Service and Privacy Policy.
        <br />
        We'll keep you updated and won't spam you. Promise! 🤝
      </motion.p>
    </form>
  )
}
