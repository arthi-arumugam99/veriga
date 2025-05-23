"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, AlertTriangle, CheckCircle, Upload, Zap, Shield } from "lucide-react"

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [foundIssues, setFoundIssues] = useState<number[]>([])

  const contractText = `MASTER SERVICE AGREEMENT

This Master Service Agreement (the "Agreement") is entered into as of the Effective Date by and between Client and Service Provider.

1. TERM AND TERMINATION
1.1 Term. This Agreement shall commence on the Effective Date and shall continue for an initial term of one (1) year. Thereafter, this Agreement shall automatically renew for successive one (1) year periods unless either party provides written notice of non-renewal at least sixty (60) days prior to the end of the then-current term.

2. PAYMENT TERMS
2.1 Fees. Client shall pay Service Provider the fees set forth in the applicable Statement of Work. All fees are non-refundable and non-cancellable.

3. LIMITATION OF LIABILITY
3.1 Limitation. IN NO EVENT SHALL SERVICE PROVIDER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, HOWEVER CAUSED, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. SERVICE PROVIDER'S TOTAL LIABILITY SHALL NOT EXCEED $100.`

  const issues = [
    {
      id: 1,
      text: "automatically renew for successive one (1) year periods unless either party provides written notice of non-renewal at least sixty (60) days",
      type: "high",
      title: "Auto-Renewal Trap",
      description: "60-day notice requirement is excessive and easy to miss",
      suggestion: "Change to 30-day notice requirement",
    },
    {
      id: 2,
      text: "All fees are non-refundable and non-cancellable",
      type: "medium",
      title: "Non-Refundable Fees",
      description: "No protection if service quality is poor",
      suggestion: "Add pro-rata refund clause for unused services",
    },
    {
      id: 3,
      text: "SERVICE PROVIDER'S TOTAL LIABILITY SHALL NOT EXCEED $100",
      type: "high",
      title: "Liability Cap Too Low",
      description: "$100 liability cap is unreasonably low",
      suggestion: "Increase to at least 12 months of fees paid",
    },
  ]

  useEffect(() => {
    if (currentStep === 1) {
      setIsScanning(true)
      const timer = setTimeout(() => {
        setIsScanning(false)
        setCurrentStep(2)

        // Reveal issues one by one
        issues.forEach((issue, index) => {
          setTimeout(() => {
            setFoundIssues((prev) => [...prev, issue.id])
          }, index * 800)
        })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentStep])

  const startDemo = () => {
    setCurrentStep(1)
    setFoundIssues([])
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setFoundIssues([])
    setIsScanning(false)
  }

  const getHighlightedText = () => {
    let text = contractText

    foundIssues.forEach((issueId) => {
      const issue = issues.find((i) => i.id === issueId)
      if (issue) {
        const colorClass =
          issue.type === "high" ? "bg-[#F2EFE9]/20 border-[#F2EFE9]/40" : "bg-[#F2EFE9]/10 border-[#F2EFE9]/30"
        text = text.replace(
          issue.text,
          `<span class="px-2 py-1 rounded border-2 ${colorClass} animate-pulse">${issue.text}</span>`,
        )
      }
    })

    return text
  }

  return (
    <div className="bg-[#F2EFE9]/5 backdrop-blur-xl border border-[#F2EFE9]/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-[#F2EFE9]/10 border-b border-[#F2EFE9]/10 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="h-6 w-6 text-[#F2EFE9]" />
          <span className="text-[#F2EFE9] font-bold text-lg">Contract Analysis Demo</span>
        </div>
        {currentStep > 0 && (
          <button onClick={resetDemo} className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors text-sm">
            Reset Demo
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Contract Display */}
        <div className="p-6 border-r border-[#F2EFE9]/10">
          {currentStep === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F2EFE9]/10 border-2 border-dashed border-[#F2EFE9]/30 rounded-2xl p-12 cursor-pointer hover:bg-[#F2EFE9]/20 transition-all"
                onClick={startDemo}
              >
                <Upload className="h-16 w-16 text-[#F2EFE9]/60 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Upload Contract</h3>
                <p className="text-[#F2EFE9] mb-6">Click to analyze a sample contract</p>
                <div className="bg-[#F2EFE9] text-black px-6 py-3 rounded-full font-bold">Start Demo</div>
              </motion.div>
            </div>
          ) : (
            <div className="h-full overflow-auto">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#F2EFE9]">Master Service Agreement</h3>
                {isScanning && (
                  <div className="flex items-center text-[#F2EFE9]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[#F2EFE9] border-t-transparent rounded-full mr-2"
                    />
                    <span className="text-sm">Scanning...</span>
                  </div>
                )}
              </div>

              <div
                className="text-sm leading-relaxed text-[#F2EFE9]/80 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: getHighlightedText() }}
              />
            </div>
          )}
        </div>

        {/* Analysis Panel */}
        <div className="p-6">
          {currentStep === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Zap className="h-16 w-16 text-[#F2EFE9]/40 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">AI Analysis Ready</h3>
              <p className="text-[#F2EFE9]">Upload a contract to see Veriga's AI in action</p>
            </div>
          ) : currentStep === 1 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-20 h-20 bg-[#F2EFE9]/10 rounded-full flex items-center justify-center mb-6"
              >
                <Zap className="h-10 w-10 text-[#F2EFE9]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">Analyzing Contract</h3>
              <p className="text-[#F2EFE9]">Our AI is scanning for potential risks...</p>

              <div className="mt-8 w-full max-w-xs">
                <div className="bg-[#F2EFE9]/10 rounded-full h-2">
                  <motion.div
                    className="bg-[#F2EFE9]/40 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3 }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Risk Analysis Complete</h3>
                <div className="bg-[#F2EFE9]/10 border border-[#F2EFE9]/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-[#F2EFE9]" />
                    <span className="font-bold text-[#F2EFE9]">High Risk Contract</span>
                  </div>
                  <p className="text-sm text-[#F2EFE9]/80">Found {issues.length} critical issues that need attention</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg text-[#F2EFE9]">Identified Issues</h4>

                <AnimatePresence>
                  {foundIssues.map((issueId) => {
                    const issue = issues.find((i) => i.id === issueId)
                    if (!issue) return null

                    return (
                      <motion.div
                        key={issue.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`border rounded-xl p-4 ${
                          issue.type === "high"
                            ? "bg-[#F2EFE9]/10 border-[#F2EFE9]/30"
                            : "bg-[#F2EFE9]/5 border-[#F2EFE9]/20"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {issue.type === "high" ? (
                            <AlertTriangle className="h-5 w-5 text-[#F2EFE9] mt-0.5 flex-shrink-0" />
                          ) : (
                            <Shield className="h-5 w-5 text-[#F2EFE9] mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h5 className="font-bold text-white">{issue.title}</h5>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  issue.type === "high"
                                    ? "bg-[#F2EFE9]/20 text-[#F2EFE9]"
                                    : "bg-[#F2EFE9]/10 text-[#F2EFE9]/80"
                                }`}
                              >
                                {issue.type === "high" ? "High Risk" : "Medium Risk"}
                              </span>
                            </div>
                            <p className="text-sm text-[#F2EFE9]/80 mb-3">{issue.description}</p>

                            <div className="bg-[#F2EFE9]/5 border border-[#F2EFE9]/10 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <CheckCircle className="h-4 w-4 text-[#F2EFE9]" />
                                <span className="text-sm font-medium text-[#F2EFE9]">Suggested Fix</span>
                              </div>
                              <p className="text-sm text-[#F2EFE9]/80">{issue.suggestion}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
