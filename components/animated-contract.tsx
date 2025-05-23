"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, FileText } from "lucide-react"

export default function AnimatedContract() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Contract lines
    const lines: { x: number; y: number; width: number; speed: number; highlighted: boolean }[] = []
    const numLines = 15
    const lineHeight = 12
    const lineSpacing = 10
    const startY = 50

    for (let i = 0; i < numLines; i++) {
      const width = Math.random() * 200 + 100
      lines.push({
        x: 30,
        y: startY + i * (lineHeight + lineSpacing),
        width,
        speed: Math.random() * 0.5 + 0.2,
        highlighted: Math.random() > 0.8, // 20% chance of being highlighted
      })
    }

    // Scanning effect
    let scanLineY = -100
    let scanDirection = 1
    const scanSpeed = 2

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw document background
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)"
      ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40)
      ctx.strokeStyle = "rgba(242, 239, 233, 0.1)"
      ctx.lineWidth = 2
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)

      // Draw document header
      ctx.fillStyle = "rgba(242, 239, 233, 0.8)"
      ctx.font = "bold 16px sans-serif"
      ctx.fillText("CONTRACT AGREEMENT", 40, 40)

      // Draw lines
      lines.forEach((line) => {
        // Draw line
        ctx.fillStyle = line.highlighted ? "rgba(242, 239, 233, 0.8)" : "rgba(242, 239, 233, 0.5)"
        ctx.fillRect(line.x, line.y, line.width, lineHeight)

        // Animate width for some lines
        if (Math.random() > 0.99) {
          line.width = Math.random() * 200 + 100
        }
      })

      // Draw scan line
      scanLineY += scanSpeed * scanDirection
      if (scanLineY > canvas.height) {
        scanDirection = -1
      } else if (scanLineY < -100) {
        scanDirection = 1
      }

      // Draw scan effect
      const gradient = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50)
      gradient.addColorStop(0, "rgba(242, 239, 233, 0)")
      gradient.addColorStop(0.5, "rgba(242, 239, 233, 0.2)")
      gradient.addColorStop(1, "rgba(242, 239, 233, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanLineY - 50, canvas.width, 100)

      // Draw highlights for risky clauses
      lines.forEach((line, index) => {
        if (line.highlighted) {
          // Check if scan line is near this line
          const distance = Math.abs(scanLineY - line.y)
          if (distance < 50) {
            // Highlight the line
            ctx.fillStyle = "rgba(255, 100, 100, 0.3)"
            ctx.fillRect(line.x - 5, line.y - 2, line.width + 10, lineHeight + 4)

            // Show alert icon
            const iconSize = 20
            ctx.fillStyle = "rgba(255, 100, 100, 0.8)"
            ctx.beginPath()
            ctx.arc(line.x + line.width + 20, line.y + lineHeight / 2, iconSize / 2, 0, Math.PI * 2)
            ctx.fill()

            // Draw exclamation mark
            ctx.fillStyle = "#000"
            ctx.font = "bold 14px sans-serif"
            ctx.fillText("!", line.x + line.width + 20 - 3, line.y + lineHeight / 2 + 5)
          }
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <canvas ref={canvasRef} className="w-full h-full rounded-2xl" style={{ background: "rgba(0,0,0,0.3)" }}></canvas>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
      >
        <div className="bg-black/30 backdrop-blur-sm border border-[#F2EFE9]/20 rounded-lg p-3 flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-[#F2EFE9]" />
          <span className="text-sm text-[#F2EFE9]">Auto-renewal detected</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 1 }}
      >
        <div className="bg-black/30 backdrop-blur-sm border border-[#F2EFE9]/20 rounded-lg p-3 flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-[#F2EFE9]" />
          <span className="text-sm text-[#F2EFE9]">Analyzing clauses...</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10"
        animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, delay: 0.5 }}
      >
        <div className="bg-black/30 backdrop-blur-sm border border-[#F2EFE9]/20 rounded-lg p-3 flex items-center space-x-2">
          <FileText className="h-5 w-5 text-[#F2EFE9]" />
          <span className="text-sm text-[#F2EFE9]">Scanning document...</span>
        </div>
      </motion.div>
    </div>
  )
}
