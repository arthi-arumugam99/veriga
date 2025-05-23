"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-[#0A1128] p-6 rounded-xl border border-[#F2EFE9]/10 hover:border-[#F2EFE9]/20 shadow-lg transition-all"
    >
      <div className="mb-4 p-3 inline-block rounded-lg bg-[#F2EFE9]/5">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#F2EFE9]/70">{description}</p>
    </motion.div>
  )
}
