"use client"

import { Upload, Search, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-[#F2EFE9]" />,
      title: "1. Upload your contract",
      description: "Simply upload your contract in PDF or DOCX format to our secure platform.",
      delay: 0.1,
    },
    {
      icon: <Search className="h-8 w-8 text-[#F2EFE9]" />,
      title: "2. AI analyzes and flags red flags",
      description: "Our AI scans the document, identifying potentially problematic clauses and terms.",
      delay: 0.2,
    },
    {
      icon: <FileText className="h-8 w-8 text-[#F2EFE9]" />,
      title: "3. Get clear rewrites and a report",
      description: "Receive suggested rewrites, risk assessment, and a downloadable comprehensive report.",
      delay: 0.3,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 relative">
      {/* Connecting line */}
      <div className="absolute top-8 left-0 right-0 h-1 bg-[#F2EFE9]/10 hidden md:block"></div>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: step.delay }}
          className="flex flex-col items-center text-center relative"
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-[#0A1128] border border-[#F2EFE9]/20 flex items-center justify-center mb-6 relative z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {step.icon}
            <div className="absolute inset-0 rounded-full bg-[#F2EFE9]/5 animate-ping opacity-75"></div>
          </motion.div>

          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-[#F2EFE9]/70">{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
