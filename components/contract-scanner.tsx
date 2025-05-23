"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Scan, AlertTriangle, CheckCircle, FileText } from "lucide-react"

export default function ContractScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [foundClauses, setFoundClauses] = useState<string[]>([])

  const clauses = [
    "Auto-renewal clause detected",
    "Liability limitation found",
    "Non-refundable fees identified",
    "Termination notice period flagged",
    "Intellectual property clause reviewed",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScanning) {
        setIsScanning(true)
        setScanProgress(0)
        setFoundClauses([])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isScanning])

  useEffect(() => {
    if (isScanning) {
      const progressInterval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false)
            return 100
          }

          // Add clauses as we progress
          const clauseIndex = Math.floor((prev / 100) * clauses.length)
          if (clauseIndex < clauses.length && !foundClauses.includes(clauses[clauseIndex])) {
            setFoundClauses((prev) => [...prev, clauses[clauseIndex]])
          }

          return prev + 2
        })
      }, 100)

      return () => clearInterval(progressInterval)
    }
  }, [isScanning, foundClauses])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <div className="text-center mb-8">
          <motion.div
            animate={{
              rotate: isScanning ? 360 : 0,
              scale: isScanning ? [1, 1.1, 1] : 1,
            }}
            transition={{
              rotate: { duration: 2, repeat: isScanning ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
              scale: { duration: 1, repeat: isScanning ? Number.POSITIVE_INFINITY : 0 },
            }}
            className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Scan className="h-12 w-12 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 text-white">
            {isScanning ? "Scanning Contract..." : "Ready to Scan"}
          </h3>

          <div className="w-full max-w-md mx-auto bg-white/10 rounded-full h-3 mb-6">
            <motion.div
              className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${scanProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="text-[#F2EFE9] text-lg">{scanProgress}% Complete</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Document Preview */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Sample Contract</span>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="p-3 bg-white/5 rounded-lg">
                <motion.div
                  animate={{
                    backgroundColor: foundClauses.includes("Auto-renewal clause detected")
                      ? "rgba(239, 68, 68, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                  }}
                  className="p-2 rounded"
                >
                  "This Agreement shall automatically renew for successive periods..."
                </motion.div>
              </div>

              <div className="p-3 bg-white/5 rounded-lg">
                <motion.div
                  animate={{
                    backgroundColor: foundClauses.includes("Liability limitation found")
                      ? "rgba(239, 68, 68, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                  }}
                  className="p-2 rounded"
                >
                  "Total liability shall not exceed $100..."
                </motion.div>
              </div>

              <div className="p-3 bg-white/5 rounded-lg">
                <motion.div
                  animate={{
                    backgroundColor: foundClauses.includes("Non-refundable fees identified")
                      ? "rgba(239, 68, 68, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                  }}
                  className="p-2 rounded"
                >
                  "All fees are non-refundable and non-cancellable..."
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scan Results */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 text-white">Scan Results</h4>

            <div className="space-y-3">
              {foundClauses.map((clause, index) => (
                <motion.div
                  key={clause}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3 p-3 bg-red-500/10 border border-red-400/30 rounded-lg"
                >
                  <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span className="text-sm">{clause}</span>
                </motion.div>
              ))}

              {!isScanning && foundClauses.length === clauses.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-400/30 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Scan complete - 5 issues found</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
