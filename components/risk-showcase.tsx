"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Clock, DollarSign } from "lucide-react"

export default function RiskShowcase() {
  const risks = [
    {
      icon: <Clock className="h-6 w-6 text-[#F2EFE9]" />,
      clause: "Auto-Renewal After 12 Months",
      risk: "You get charged $40,000 again without notice",
      severity: "high",
      delay: 0.1,
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#F2EFE9]" />,
      clause: "No Termination Clause",
      risk: "You can't cancel even if they underdeliver",
      severity: "high",
      delay: 0.2,
    },
    {
      icon: <DollarSign className="h-6 w-6 text-[#F2EFE9]" />,
      clause: "Uncapped Indemnity",
      risk: "You're financially liable for their mistakes",
      severity: "critical",
      delay: 0.3,
    },
    {
      icon: <Shield className="h-6 w-6 text-[#F2EFE9]" />,
      clause: "Missing SLA Details",
      risk: "No deadlines = no accountability",
      severity: "medium",
      delay: 0.4,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-red-500/50 bg-red-500/10"
      case "high":
        return "border-orange-500/50 bg-orange-500/10"
      case "medium":
        return "border-yellow-500/50 bg-yellow-500/10"
      default:
        return "border-[#F2EFE9]/20 bg-[#F2EFE9]/5"
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "high":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      default:
        return "bg-[#F2EFE9]/20 text-[#F2EFE9] border-[#F2EFE9]/30"
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {risks.map((risk, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: risk.delay }}
          whileHover={{ y: -5, scale: 1.02 }}
          className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${getSeverityColor(
            risk.severity,
          )}`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#F2EFE9]/10 rounded-xl flex items-center justify-center">
              {risk.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-[#F2EFE9] text-lg">{risk.clause}</h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full border ${getSeverityBadge(risk.severity)} font-medium`}
                >
                  {risk.severity.toUpperCase()}
                </span>
              </div>
              <p className="text-[#F2EFE9]/80 mb-4 leading-relaxed">{risk.risk}</p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-[#F2EFE9] rounded-full animate-pulse"></div>
                <span className="text-[#F2EFE9] font-medium">Veriga flags this before you sign</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
