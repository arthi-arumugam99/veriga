"use client"

import { motion } from "framer-motion"
import { FileText, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)
  const elements = [
    { icon: FileText, color: "text-[#F2EFE9]", delay: 0 },
    { icon: Shield, color: "text-[#F2EFE9]", delay: 0.5 },
    { icon: AlertTriangle, color: "text-[#F2EFE9]", delay: 1 },
    { icon: CheckCircle, color: "text-[#F2EFE9]", delay: 1.5 },
  ]

  // Only access window after component has mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything during SSR or when not mounted
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color} opacity-5`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Element.delay,
          }}
        >
          <Element.icon className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  )
}
