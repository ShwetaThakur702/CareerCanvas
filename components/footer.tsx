import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#586080] text-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PortfolioMaker</h3>
            <p className="text-sm">Create professional portfolios in minutes with our easy-to-use platform.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-sm hover:text-[#f74302] transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm hover:text-[#f74302] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-[#f74302] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-[#f74302] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm hover:text-[#f74302] transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm hover:text-[#f74302] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-[#f74302] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#f74302] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-[#f74302] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PortfolioMaker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

