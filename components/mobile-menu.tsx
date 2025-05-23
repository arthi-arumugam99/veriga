"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#0A1128] flex flex-col"
    >
      <div className="flex items-center justify-between p-4 border-b border-[#F2EFE9]/10">
        <div className="flex items-center gap-2">
          <Image src="/images/veriga-logo.png" alt="Veriga Logo" width={100} height={30} className="h-8 w-auto" />
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center h-10 w-10 rounded-md border border-[#F2EFE9]/20"
        >
          <X className="h-5 w-5 text-[#F2EFE9]" />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <nav className="flex flex-col space-y-6">
          <Link
            href="#features"
            className="text-xl font-medium transition-colors hover:text-[#F2EFE9]/80"
            onClick={onClose}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-xl font-medium transition-colors hover:text-[#F2EFE9]/80"
            onClick={onClose}
          >
            How It Works
          </Link>
          <Link
            href="#demo"
            className="text-xl font-medium transition-colors hover:text-[#F2EFE9]/80"
            onClick={onClose}
          >
            Demo
          </Link>
          <Link
            href="#testimonials"
            className="text-xl font-medium transition-colors hover:text-[#F2EFE9]/80"
            onClick={onClose}
          >
            Testimonials
          </Link>
        </nav>
      </div>

      <div className="p-6 border-t border-[#F2EFE9]/10">
        <Link
          href="#waitlist"
          className="flex items-center justify-center w-full h-12 rounded-md bg-[#F2EFE9] px-6 py-2 text-base font-medium text-[#0A1128] shadow transition-colors hover:bg-[#F2EFE9]/90 focus-visible:outline-none focus-visible:ring-1"
          onClick={onClose}
        >
          Join Waitlist
        </Link>
      </div>
    </motion.div>
  )
}
