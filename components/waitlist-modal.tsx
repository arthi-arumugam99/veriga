"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles, X, AlertCircle } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    role: "",
    contracts_per_month: "",
    country: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to join waitlist")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setError("")
    setFormData({ full_name: "", email: "", company: "", role: "", contracts_per_month: "", country: "" })
    onClose()
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setError("")
    setFormData({ full_name: "", email: "", company: "", role: "", contracts_per_month: "", country: "" })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-black border border-[#F2EFE9]/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button onClick={handleClose} className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {isSubmitted ? (
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
                className="text-3xl font-black mb-4 text-white"
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
                <br />
                <span className="text-base text-[#F2EFE9]/80">Check your email for a welcome message!</span>
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={resetForm}
                className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] underline transition-colors"
              >
                Submit another email
              </motion.button>
            </motion.div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black mb-4 text-white">Join the Waitlist</h2>
                <p className="text-lg text-[#F2EFE9]">
                  Be among the first to experience AI-powered contract protection
                </p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Label htmlFor="full_name" className="text-white mb-3 block text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-12 text-base backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-white mb-3 block text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-12 text-base backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
                      placeholder="you@company.com"
                      disabled={isLoading}
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Label htmlFor="company" className="text-white mb-3 block text-base font-medium">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-12 text-base backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
                      placeholder="Acme Inc"
                      disabled={isLoading}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Label htmlFor="role" className="text-white mb-3 block text-base font-medium">
                      Role *
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                      required
                      disabled={isLoading}
                    >
                      <SelectTrigger className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] h-12 text-base backdrop-blur-sm">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-[#F2EFE9]/20 backdrop-blur-xl">
                        <SelectItem value="founder">Founder</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Label htmlFor="contracts_per_month" className="text-white mb-3 block text-base font-medium">
                      Contracts per Month *
                    </Label>
                    <Select
                      value={formData.contracts_per_month}
                      onValueChange={(value) => setFormData({ ...formData, contracts_per_month: value })}
                      required
                      disabled={isLoading}
                    >
                      <SelectTrigger className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] h-12 text-base backdrop-blur-sm">
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

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Label htmlFor="country" className="text-white mb-3 block text-base font-medium">
                      Country *
                    </Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="bg-[#F2EFE9]/10 border-[#F2EFE9]/20 text-[#F2EFE9] placeholder:text-[#F2EFE9]/40 h-12 text-base backdrop-blur-sm focus:bg-[#F2EFE9]/20 transition-all"
                      placeholder="United States"
                      disabled={isLoading}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.div whileHover={{ scale: isLoading ? 1 : 1.02 }} whileTap={{ scale: isLoading ? 1 : 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#F2EFE9] hover:bg-white text-black py-4 h-14 text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mr-3"
                          />
                          Joining Waitlist...
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
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-sm text-[#F2EFE9]/60 text-center"
                >
                  By joining, you agree to our Terms of Service and Privacy Policy.
                  <br />
                  We'll keep you updated and won't spam you. Promise! 🤝
                </motion.p>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
