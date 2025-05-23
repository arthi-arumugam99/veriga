"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Copy, X, CheckCircle } from "lucide-react"
import { useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)
  const email = "hello@veriga.app"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-black border border-[#F2EFE9]/20 rounded-3xl p-6 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#F2EFE9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-[#F2EFE9]" />
            </div>
            <h3 className="text-2xl font-bold text-[#F2EFE9] mb-2">Contact Us</h3>
            <p className="text-[#F2EFE9]/80">Reach out to our team via email</p>
          </div>

          <div className="flex items-center justify-between bg-[#F2EFE9]/10 border border-[#F2EFE9]/20 rounded-2xl p-4 mb-6">
            <span className="text-[#F2EFE9] font-medium">{email}</span>
            <button
              onClick={handleCopy}
              className="ml-3 text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>

          <p className="text-[#F2EFE9]/60 text-sm text-center">We typically respond within 24-48 business hours.</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
