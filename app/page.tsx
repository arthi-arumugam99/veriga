"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronRight, AlertTriangle, Zap, Target, Eye } from "lucide-react"
import WaitlistModal from "@/components/waitlist-modal"
import ContactModal from "@/components/contact-modal"
import ContractScanner from "@/components/contract-scanner"
import AnimatedCounter from "@/components/animated-counter"
import FloatingElements from "@/components/floating-elements"
import AnimatedContract from "@/components/animated-contract"
import RiskShowcase from "@/components/risk-showcase"
import UseCaseCards from "@/components/use-case-cards"

export default function LandingPage() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -500])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen bg-[#000000] text-[#F2EFE9] overflow-x-hidden">
      <FloatingElements />

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={waitlistModalOpen} onClose={() => setWaitlistModalOpen(false)} />

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
          <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#F2EFE9]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F2EFE9]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F2EFE9]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Logo positioned above the tagline - Much Bigger */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
              >
                <Image
                  src="/images/veriga-logo.png"
                  alt="Veriga"
                  width={800}
                  height={240}
                  className="h-32 md:h-40 w-auto"
                  priority
                />
              </motion.div>

              {/* Smaller Tagline */}
              <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-white">Find the </span>
                <motion.span
                  className="text-[#F2EFE9]"
                  animate={{
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  fine print
                </motion.span>
                <span className="text-white"> that could </span>
                <span className="text-[#F2EFE9]">cost you.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg mb-10 font-light"
              >
                <span className="text-white">Veriga scans your </span>
                <span className="text-[#F2EFE9]">vendor contracts</span>
                <span className="text-white"> for hidden traps — </span>
                <span className="text-[#F2EFE9]">before you sign.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center md:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(242,239,233,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setWaitlistModalOpen(true)}
                    className="bg-[#F2EFE9] text-black px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-white transition-all duration-300 inline-flex items-center shadow-2xl"
                  >
                    Join the Waitlist
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ChevronRight className="ml-2 h-6 w-6" />
                    </motion.div>
                  </button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <AnimatedCounter end={43265} prefix="$" className="text-3xl font-black text-white" />
                  <p className="text-[#F2EFE9] mt-2 text-sm">Average savings</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={95} suffix="%" className="text-3xl font-black text-white" />
                  <p className="text-[#F2EFE9] mt-2 text-sm">Accuracy rate</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={30} suffix="s" className="text-3xl font-black text-white" />
                  <p className="text-[#F2EFE9] mt-2 text-sm">Analysis time</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/30 backdrop-blur-sm border border-[#F2EFE9]/10 rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <AnimatedContract />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-6 h-10 border-2 border-[#F2EFE9]/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What Veriga Catches Section */}
      <section className="pb-8 pt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Eye className="h-8 w-8 text-[#F2EFE9] mr-3" />
              <span className="text-[#F2EFE9]/80 text-lg font-medium">Risk Detection</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="text-white">What </span>
              <span className="text-[#F2EFE9]">Veriga Catches</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              <span className="text-white">Real red flags that might be </span>
              <span className="text-[#F2EFE9]">buried in your contracts</span>
            </p>
          </motion.div>

          <RiskShowcase />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-6 mb-0"
          >
            <div className="bg-[#F2EFE9]/5 border border-[#F2EFE9]/20 rounded-2xl p-4 max-w-2xl mx-auto">
              <p className="text-lg">
                <span className="text-white">These are just </span>
                <span className="text-[#F2EFE9] font-bold">4 examples</span>
                <span className="text-white"> of the </span>
                <span className="text-[#F2EFE9] font-bold">50+ risk patterns</span>
                <span className="text-white"> Veriga identifies automatically.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Uses Veriga Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3">
              <span className="text-white">Who Uses </span>
              <span className="text-[#F2EFE9]">Veriga</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              <span className="text-white">From startups to enterprises, </span>
              <span className="text-[#F2EFE9]">smart teams</span>
              <span className="text-white"> protect themselves with AI</span>
            </p>
          </motion.div>

          <UseCaseCards />
        </div>
      </section>

      {/* Contract Scanner Visualization */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFE9]/5 to-[#F2EFE9]/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="text-white">AI-Powered </span>
              <span className="text-[#F2EFE9]">Contract Scanner</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              <span className="text-white">Our advanced AI scans </span>
              <span className="text-[#F2EFE9]">every clause, every word, </span>
              <span className="text-white">every detail</span>
            </p>
          </motion.div>

          <ContractScanner />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="text-white">Why Choose </span>
              <span className="text-[#F2EFE9]">Veriga?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <AlertTriangle className="h-12 w-12 text-[#F2EFE9]" />,
                title: "Spot Hidden Traps",
                description: (
                  <>
                    <span className="text-white">Auto-renewals, liability caps, and </span>
                    <span className="text-[#F2EFE9]">other costly clauses</span>
                    <span className="text-white"> that even lawyers miss.</span>
                  </>
                ),
                delay: 0.1,
              },
              {
                icon: <Zap className="h-12 w-12 text-[#F2EFE9]" />,
                title: "Lightning Fast",
                description: (
                  <>
                    <span className="text-white">Get comprehensive </span>
                    <span className="text-[#F2EFE9]">contract analysis</span>
                    <span className="text-white"> in under 30 seconds.</span>
                  </>
                ),
                delay: 0.2,
              },
              {
                icon: <Target className="h-12 w-12 text-[#F2EFE9]" />,
                title: "Precision Accuracy",
                description: (
                  <>
                    <span className="text-white">95% accuracy rate with </span>
                    <span className="text-[#F2EFE9]">AI trained on millions</span>
                    <span className="text-white"> of contracts.</span>
                  </>
                ),
                delay: 0.3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#F2EFE9]/5 backdrop-blur-xl border border-[#F2EFE9]/10 rounded-3xl p-8 text-center hover:bg-[#F2EFE9]/10 transition-all duration-300"
              >
                <motion.div
                  className="w-20 h-20 bg-[#F2EFE9]/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#F2EFE9]">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="text-white">Beta User </span>
              <span className="text-[#F2EFE9]">Feedback</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: (
                  <>
                    <span className="text-white">This caught several </span>
                    <span className="text-[#F2EFE9]">risky clauses</span>
                    <span className="text-white"> I would have missed. The analysis is </span>
                    <span className="text-[#F2EFE9]">incredibly thorough</span>
                    <span className="text-white"> and easy to understand.</span>
                  </>
                ),
                role: "Operations Manager",
                avatar: "OM",
                delay: 0.1,
              },
              {
                quote: (
                  <>
                    <span className="text-white">The speed and accuracy are </span>
                    <span className="text-[#F2EFE9]">impressive.</span>
                    <span className="text-white"> It's like having a </span>
                    <span className="text-[#F2EFE9]">contract expert</span>
                    <span className="text-white"> review everything instantly.</span>
                  </>
                ),
                role: "Legal Counsel",
                avatar: "LC",
                delay: 0.2,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: testimonial.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#F2EFE9]/5 backdrop-blur-xl border border-[#F2EFE9]/10 rounded-3xl p-8 hover:bg-[#F2EFE9]/10 transition-all duration-300"
              >
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#F2EFE9]/10 rounded-full flex items-center justify-center text-[#F2EFE9] font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-[#F2EFE9]">Beta User</div>
                    <div className="text-[#F2EFE9]/60">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFE9]/5 via-black to-[#F2EFE9]/5" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Much larger logo with cropping effect */}
            <div className="overflow-hidden mb-6">
              <Image
                src="/images/veriga-logo.png"
                alt="Veriga"
                width={400}
                height={120}
                className="h-32 w-auto object-cover object-center transform scale-125"
              />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
              <span className="text-white">Join the </span>
              <span className="text-[#F2EFE9]">Revolution</span>
            </h2>

            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              <span className="text-white">Be among the first to experience </span>
              <span className="text-[#F2EFE9]">AI-powered contract protection.</span>
              <span className="text-white"> Early users get </span>
              <span className="text-[#F2EFE9]">lifetime pricing.</span>
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-12">
              <button
                onClick={() => setWaitlistModalOpen(true)}
                className="bg-[#F2EFE9] text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 shadow-2xl"
              >
                Join the Waitlist
              </button>
            </motion.div>

            {/* Footer content */}
            <div className="border-t border-[#F2EFE9]/10 pt-8 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-[#F2EFE9]/60 text-sm">© 2024 Veriga. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] text-sm transition-colors"
                  >
                    Contact
                  </button>
                  <Link href="/privacy" className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] text-sm transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] text-sm transition-colors">
                    Terms
                  </Link>
                  <Link href="/security" className="text-[#F2EFE9]/60 hover:text-[#F2EFE9] text-sm transition-colors">
                    Security
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
