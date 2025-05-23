"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Briefcase, ShoppingCart } from "lucide-react"

export default function UseCaseCards() {
  const useCases = [
    {
      icon: <Rocket className="h-8 w-8 text-[#F2EFE9]" />,
      persona: "Startup Founders",
      value: "Catch legal traps in vendor/SaaS deals",
      description: "Avoid costly mistakes in your first enterprise contracts",
      delay: 0.1,
    },
    {
      icon: <Users className="h-8 w-8 text-[#F2EFE9]" />,
      persona: "Ops Teams",
      value: "Review contracts faster than Legal",
      description: "Get instant analysis without waiting weeks for legal review",
      delay: 0.2,
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#F2EFE9]" />,
      persona: "Freelancers & Agencies",
      value: "Avoid being locked into bad projects",
      description: "Spot unfair terms before signing client agreements",
      delay: 0.3,
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#F2EFE9]" />,
      persona: "Procurement Leads",
      value: "Flag red flags in mass vendor contracts",
      description: "Scale contract review across hundreds of suppliers",
      delay: 0.4,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {useCases.map((useCase, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: useCase.delay }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-[#F2EFE9]/5 backdrop-blur-xl border border-[#F2EFE9]/10 rounded-2xl p-6 text-center hover:bg-[#F2EFE9]/10 transition-all duration-300 group"
        >
          <motion.div
            className="w-16 h-16 bg-[#F2EFE9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F2EFE9]/20 transition-colors"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {useCase.icon}
          </motion.div>
          <h3 className="text-lg font-bold mb-2 text-[#F2EFE9]">{useCase.persona}</h3>
          <p className="text-[#F2EFE9] font-medium mb-3">{useCase.value}</p>
          <p className="text-[#F2EFE9]/70 text-sm leading-relaxed">{useCase.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
