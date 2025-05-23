"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#F2EFE9]/5 backdrop-blur-xl border border-[#F2EFE9]/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Video Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-black to-black flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/20" />

          {/* Play Button Overlay */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-24 h-24 bg-[#F2EFE9]/20 backdrop-blur-sm border border-[#F2EFE9]/30 rounded-full flex items-center justify-center hover:bg-[#F2EFE9]/30 transition-all"
          >
            {isPlaying ? (
              <Pause className="h-10 w-10 text-[#F2EFE9] ml-1" />
            ) : (
              <Play className="h-10 w-10 text-[#F2EFE9] ml-1" />
            )}
          </motion.button>

          {/* Video Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">See Veriga Analyze a Real Contract</h3>
            <p className="text-[#F2EFE9]">Watch as our AI identifies 7 critical issues in under 30 seconds</p>
          </div>

          {/* Controls */}
          <div className="absolute top-6 right-6 flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
              className="w-12 h-12 bg-[#F2EFE9]/20 backdrop-blur-sm border border-[#F2EFE9]/30 rounded-full flex items-center justify-center hover:bg-[#F2EFE9]/30 transition-all"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-[#F2EFE9]" />
              ) : (
                <Volume2 className="h-5 w-5 text-[#F2EFE9]" />
              )}
            </motion.button>
          </div>

          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F2EFE9]/20">
              <motion.div
                className="h-full bg-[#F2EFE9]/60"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 30, ease: "linear" }}
              />
            </div>
          )}
        </div>

        {/* Video Description */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <p className="text-[#F2EFE9]">Critical Issues Found</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">28s</div>
              <p className="text-[#F2EFE9]">Analysis Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$85K</div>
              <p className="text-[#F2EFE9]">Potential Savings</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
