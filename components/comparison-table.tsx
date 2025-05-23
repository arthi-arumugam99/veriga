"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ComparisonTable() {
  const features = [
    { name: "Built for contracts", veriga: true, chatgpt: false },
    { name: "Clause flagging", veriga: true, chatgpt: false },
    { name: "Rewrite suggestions", veriga: true, chatgpt: false },
    { name: "Risk summaries", veriga: true, chatgpt: false },
    { name: "PDF support", veriga: true, chatgpt: false },
    { name: "Specialized legal knowledge", veriga: true, chatgpt: false },
  ]

  return (
    <div className="overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <table className="w-full max-w-3xl mx-auto border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 border-b-2 border-[#F2EFE9]/10">Feature</th>
              <th className="p-4 border-b-2 border-[#F2EFE9]/10 bg-[#F2EFE9]/5 rounded-tl-lg">
                <div className="flex items-center justify-center">
                  <img src="/images/veriga-logo.png" alt="Veriga" className="h-8 w-auto" />
                </div>
              </th>
              <th className="p-4 border-b-2 border-[#F2EFE9]/10 bg-[#F2EFE9]/5 rounded-tr-lg">ChatGPT</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td className="p-4 border-b border-[#F2EFE9]/10 font-medium">{feature.name}</td>
                <td className="p-4 border-b border-[#F2EFE9]/10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block"
                  >
                    <CheckCircle className="h-6 w-6 text-[#F2EFE9] mx-auto" />
                  </motion.div>
                </td>
                <td className="p-4 border-b border-[#F2EFE9]/10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block"
                  >
                    <XCircle className="h-6 w-6 text-[#F2EFE9]/40 mx-auto" />
                  </motion.div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
