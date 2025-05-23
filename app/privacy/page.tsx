import Image from "next/image"
import Link from "next/link"

export default function Privacy() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-[#F2EFE9]/70 text-lg">Last updated: May 23, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            Veriga ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website, use our application, or
            use our AI-powered contract auditing service.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
            do not access the site or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>

          <h3>Personal Data</h3>
          <p>
            When you sign up for our service or join our waitlist, we collect personally identifiable information, such
            as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Job role</li>
            <li>Contract processing volume</li>
            <li>Country</li>
          </ul>

          <h3>Contract Data</h3>
          <p>
            When you use our contract auditing service, we process the contracts you submit to our system. This may
            include:
          </p>
          <ul>
            <li>Contract text and clauses</li>
            <li>Party names and information</li>
            <li>Contract terms and conditions</li>
            <li>Other information contained in your contracts</li>
          </ul>

          <h3>Usage Data</h3>
          <p>We may also collect information on how our service is accessed and used. This data may include:</p>
          <ul>
            <li>Log and usage data</li>
            <li>Device information</li>
            <li>IP addresses</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time and date of your visit</li>
            <li>Other diagnostic data</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and analyze your contracts</li>
            <li>Communicate with you about our services</li>
            <li>Respond to your inquiries and customer service requests</li>
            <li>Send you technical notices, updates, and security alerts</li>
            <li>Monitor usage of our services</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Improve our AI model and algorithm performance</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information
            and contract data. While we have taken reasonable steps to secure the information you provide to us, please
            be aware that no security measures are perfect or impenetrable, and no method of data transmission can be
            guaranteed against interception or other types of misuse.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will retain your personal information and contract data only for as long as is necessary for the purposes
            set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply
            with our legal obligations, resolve disputes, and enforce our policies.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we have about you</li>
            <li>The right to correct inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to or restrict processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services to support our service, including hosting, analytics, and customer service.
            These services may have access to your personal information only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@veriga.app" className="text-[#F2EFE9] underline">
              hello@veriga.app
            </a>
            .
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
