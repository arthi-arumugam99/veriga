"use client"

import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  author: string
  company: string
  initials: string
  delay?: number
}

export default function Testimonial({ quote, author, company, initials, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-[#0A1128] p-6 rounded-xl border border-[#F2EFE9]/10 hover:border-[#F2EFE9]/20 shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F2EFE9]/5 border border-[#F2EFE9]/10 flex items-center justify-center text-[#F2EFE9] font-medium"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {initials}
        </motion.div>
        <div>
          <p className="italic text-[#F2EFE9]/80 mb-4">"{quote}"</p>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-[#F2EFE9]/60">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
