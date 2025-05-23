"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, CheckCircle, FileText, AlertTriangle } from "lucide-react"

export default function ContractDemo() {
  const [step, setStep] = useState(0)
  const [scanning, setScanning] = useState(false)
  const [highlightedText, setHighlightedText] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const contractText = `MASTER SERVICE AGREEMENT

This Master Service Agreement (the "Agreement") is entered into as of the Effective Date by and between Client and Service Provider.

1. TERM AND TERMINATION

1.1 Term. This Agreement shall commence on the Effective Date and shall continue for an initial term of one (1) year (the "Initial Term"). Thereafter, this Agreement shall automatically renew for successive one (1) year periods (each, a "Renewal Term") unless either party provides written notice of non-renewal at least sixty (60) days prior to the end of the then-current term.

1.2 Termination for Convenience. Client may terminate this Agreement for convenience upon ninety (90) days' prior written notice to Service Provider.

2. PAYMENT TERMS

2.1 Fees. Client shall pay Service Provider the fees set forth in the applicable Statement of Work. All fees are non-refundable.

2.2 Invoicing. Service Provider shall invoice Client monthly for all fees and expenses. Client shall pay all undisputed amounts within thirty (30) days of receipt of invoice.

2.3 Late Payments. Any amounts not paid when due shall accrue interest at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.

3. LIMITATION OF LIABILITY

3.1 Limitation of Liability. IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

3.2 Cap on Liability. EACH PARTY'S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE AMOUNTS PAID BY CLIENT TO SERVICE PROVIDER IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.

4. GENERAL PROVISIONS

4.1 Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any choice of law or conflict of law provisions.

4.2 Assignment. Neither party may assign this Agreement without the prior written consent of the other party, which consent shall not be unreasonably withheld.

4.3 Entire Agreement. This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements or communications.`

  const riskyClauses = [
    {
      text: 'This Agreement shall automatically renew for successive one (1) year periods (each, a "Renewal Term") unless either party provides written notice of non-renewal at least sixty (60) days prior to the end of the then-current term.',
      risk: "high",
      issue: "Auto-renewal clause with a 60-day notice requirement",
      suggestion:
        "This Agreement shall renew only upon written agreement of both parties at least thirty (30) days prior to the end of the then-current term.",
    },
    {
      text: "All fees are non-refundable.",
      risk: "medium",
      issue: "Non-refundable fees clause",
      suggestion:
        "Fees shall be refundable on a pro-rata basis if Service Provider fails to deliver the services as specified in the Statement of Work.",
    },
    {
      text: "EACH PARTY'S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE AMOUNTS PAID BY CLIENT TO SERVICE PROVIDER IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.",
      risk: "medium",
      issue: "Liability cap limited to fees paid in last 12 months",
      suggestion:
        "EACH PARTY'S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED TWO (2) TIMES THE AMOUNTS PAID BY CLIENT TO SERVICE PROVIDER IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.",
    },
  ]

  useEffect(() => {
    if (step === 1) {
      setScanning(true)
      const timer = setTimeout(() => {
        setScanning(false)
        setStep(2)

        // Highlight risky clauses one by one
        riskyClauses.forEach((clause, index) => {
          setTimeout(() => {
            setHighlightedText((prev) => [...prev, clause.text])
          }, index * 1000)
        })

        // Show suggestions after all highlights
        setTimeout(() => {
          setShowSuggestions(true)
        }, riskyClauses.length * 1000)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [step])

  const handleUploadClick = () => {
    setStep(1)
  }

  const handleReset = () => {
    setStep(0)
    setScanning(false)
    setHighlightedText([])
    setShowSuggestions(false)
  }

  const getHighlightedText = (text: string) => {
    let result = text

    highlightedText.forEach((highlight) => {
      const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "g")
      result = result.replace(regex, '<span class="bg-[#F2EFE9]/20 text-[#F2EFE9] px-1 rounded">$1</span>')
    })

    return result
  }

  return (
    <div className="bg-[#0A1128] border border-[#F2EFE9]/10 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-[#0A1128] border-b border-[#F2EFE9]/10 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <FileText className="h-5 w-5 text-[#F2EFE9] mr-2" />
          <span className="text-[#F2EFE9]">Contract Analysis</span>
        </div>
        {step > 0 && (
          <button onClick={handleReset} className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] text-sm">
            Reset Demo
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
        {/* Contract display area */}
        <div className="border-r border-[#F2EFE9]/10 p-4 h-full overflow-auto">
          {step === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F2EFE9]/5 border-2 border-dashed border-[#F2EFE9]/20 rounded-lg p-8 text-center cursor-pointer"
                onClick={handleUploadClick}
              >
                <FileText className="h-12 w-12 text-[#F2EFE9]/60 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Upload Contract</h3>
                <p className="text-[#F2EFE9]/60 mb-4">Click to upload a PDF or DOCX file</p>
                <button className="bg-[#F2EFE9] text-[#0A1128] px-4 py-2 rounded-md font-medium">Select File</button>
              </motion.div>
            </div>
          ) : (
            <div>
              <div className="mb-4 flex items-center">
                <h3 className="font-bold">Master Service Agreement</h3>
                {scanning && (
                  <div className="ml-2 flex items-center text-[#F2EFE9]/60 text-sm">
                    <div className="w-3 h-3 rounded-full bg-[#F2EFE9]/60 mr-1 animate-pulse"></div>
                    Scanning...
                  </div>
                )}
              </div>

              <div className="prose prose-invert max-w-none">
                {step >= 2 ? (
                  <div dangerouslySetInnerHTML={{ __html: getHighlightedText(contractText) }}></div>
                ) : (
                  <div>{contractText}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Analysis area */}
        <div className="p-4 h-full overflow-auto">
          {step === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <AlertCircle className="h-12 w-12 text-[#F2EFE9]/60 mb-4" />
              <h3 className="text-xl font-bold mb-2">No Contract Uploaded</h3>
              <p className="text-[#F2EFE9]/60">Upload a contract to see Veriga's AI analysis in action</p>
            </div>
          ) : step === 1 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-[#F2EFE9]/20 border-t-[#F2EFE9] rounded-full animate-spin mb-4"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#F2EFE9]/60" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Analyzing Contract</h3>
              <p className="text-[#F2EFE9]/60">Our AI is scanning for potential issues...</p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold mb-4">Risk Analysis</h3>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#F2EFE9]/80">Overall Risk Score</span>
                  <span className="text-[#F2EFE9] font-bold">Medium</span>
                </div>
                <div className="w-full bg-[#F2EFE9]/10 rounded-full h-2.5">
                  <motion.div
                    className="bg-[#F2EFE9] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>

              <h4 className="font-bold mb-3">Identified Issues</h4>

              <AnimatePresence>
                {highlightedText.length > 0 && (
                  <div className="space-y-4">
                    {riskyClauses.map(
                      (clause, index) =>
                        highlightedText.includes(clause.text) && (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#0A1128] border border-[#F2EFE9]/10 rounded-lg p-4"
                          >
                            <div className="flex items-start gap-3">
                              {clause.risk === "high" ? (
                                <AlertCircle className="h-5 w-5 text-[#F2EFE9] flex-shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="h-5 w-5 text-[#F2EFE9] flex-shrink-0 mt-0.5" />
                              )}
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-bold">{clause.issue}</h5>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${
                                      clause.risk === "high"
                                        ? "bg-[#F2EFE9]/20 text-[#F2EFE9]"
                                        : "bg-[#F2EFE9]/10 text-[#F2EFE9]/80"
                                    }`}
                                  >
                                    {clause.risk === "high" ? "High Risk" : "Medium Risk"}
                                  </span>
                                </div>
                                <p className="text-sm text-[#F2EFE9]/70 mb-3">"{clause.text}"</p>

                                {showSuggestions && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                  >
                                    <h6 className="text-sm font-medium mb-1 flex items-center">
                                      <CheckCircle className="h-4 w-4 text-[#F2EFE9] mr-1" />
                                      Suggested Rewrite
                                    </h6>
                                    <p className="text-sm bg-[#F2EFE9]/5 p-2 rounded border border-[#F2EFE9]/10">
                                      {clause.suggestion}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ),
                    )}
                  </div>
                )}
              </AnimatePresence>

              {highlightedText.length === 0 && (
                <div className="text-center py-8 text-[#F2EFE9]/60">
                  <div className="w-8 h-8 border-2 border-[#F2EFE9]/20 border-t-[#F2EFE9]/60 rounded-full animate-spin mx-auto mb-4"></div>
                  Identifying issues...
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
