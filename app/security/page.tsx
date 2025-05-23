import Image from "next/image"
import Link from "next/link"
import { Shield, Lock, Search, Server, FileText, Eye } from "lucide-react"

export default function Security() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F2EFE9]">
      <header className="border-b border-[#F2EFE9]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-block">
            <Image src="/images/veriga-logo.png" alt="Veriga" width={140} height={40} className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Security Policy</h1>
          <p className="text-[#F2EFE9]/70 text-lg">Last updated: May 23, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>Our Commitment to Security</h2>
          <p>
            At Veriga, we take the security of your data seriously. We understand that you entrust us with sensitive
            contract information, and we are committed to implementing and maintaining robust security measures to
            protect that information.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-[#F2EFE9]/5 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-[#F2EFE9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Encryption</h3>
              <p className="text-[#F2EFE9]/80">
                All data is encrypted in transit and at rest using industry-standard encryption protocols.
              </p>
            </div>
            <div className="bg-[#F2EFE9]/5 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#F2EFE9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Access Controls</h3>
              <p className="text-[#F2EFE9]/80">
                Strict access controls limit who can access your data, with regular auditing of access patterns.
              </p>
            </div>
            <div className="bg-[#F2EFE9]/5 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center mb-4">
                <Server className="w-8 h-8 text-[#F2EFE9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Infrastructure</h3>
              <p className="text-[#F2EFE9]/80">
                Our systems are hosted in secure, SOC 2 compliant facilities with 24/7 monitoring.
              </p>
            </div>
            <div className="bg-[#F2EFE9]/5 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-[#F2EFE9]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Audits</h3>
              <p className="text-[#F2EFE9]/80">
                We conduct regular security audits and penetration testing to identify and address vulnerabilities.
              </p>
            </div>
          </div>

          <h2>Data Protection</h2>
          <p>
            We implement multiple layers of security to protect your contract data throughout its lifecycle in our
            system:
          </p>

          <h3>Contract Upload & Storage</h3>
          <ul>
            <li>All contracts are encrypted immediately upon upload.</li>
            <li>Contracts are stored in secure, isolated environments.</li>
            <li>Access to stored contracts is strictly limited and logged.</li>
          </ul>

          <h3>Processing & Analysis</h3>
          <ul>
            <li>Contract analysis occurs in isolated, secure processing environments.</li>
            <li>Our AI models are designed to process data securely without retaining sensitive information.</li>
            <li>We implement data minimization principles to limit data exposure.</li>
          </ul>

          <h3>Data Retention</h3>
          <p>
            We only retain your data for as long as necessary to provide our services or as required by applicable laws.
            You can request deletion of your data at any time.
          </p>

          <h2>Security Practices</h2>

          <div className="my-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#F2EFE9]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Regular Security Updates</h3>
                <p className="text-[#F2EFE9]/80">
                  We regularly update our systems and software to address security vulnerabilities. Our team follows
                  industry best practices for patch management to ensure timely application of critical security
                  updates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F2EFE9]/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-[#F2EFE9]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
                <p className="text-[#F2EFE9]/80">
                  Our security team continuously monitors our systems for suspicious activities and potential security
                  threats. We have automated alerts and response procedures in place for quick mitigation of identified
                  issues.
                </p>
              </div>
            </div>
          </div>

          <h2>Security Measures for Users</h2>
          <p>We recommend that all users follow these security best practices:</p>
          <ul>
            <li>Use strong, unique passwords for your Veriga account.</li>
            <li>Enable two-factor authentication when available.</li>
            <li>Keep your login credentials confidential.</li>
            <li>Log out from your account when using shared devices.</li>
            <li>Regularly review your account activity for any unusual behavior.</li>
          </ul>

          <h2>Security Updates</h2>
          <p>
            We are committed to continuously improving our security measures. As security technologies and best
            practices evolve, we update our systems and procedures accordingly.
          </p>

          <h2>Reporting Security Concerns</h2>
          <p>
            If you discover a security vulnerability or have a security concern about our services, please contact us
            immediately at{" "}
            <a href="mailto:hello@veriga.app" className="text-[#F2EFE9] underline">
              hello@veriga.app
            </a>
            . We appreciate your help in keeping Veriga secure.
          </p>
        </div>
      </main>

      <footer className="border-t border-[#F2EFE9]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#F2EFE9]/60 text-sm">© 2024 Veriga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
