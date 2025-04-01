"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#586080] text-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              PortfolioMaker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#f74302] transition-colors">
              Home
            </Link>
            <Link href="/templates" className="hover:text-[#f74302] transition-colors">
              Templates
            </Link>
            <Link href="/features" className="hover:text-[#f74302] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-[#f74302] transition-colors">
              Pricing
            </Link>
            <Link href="/create">
              <Button className="bg-[#ff4500] hover:bg-[#e63900] text-white ml-4">Get Started</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-[#FFFFF0]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-[#f74302] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/templates"
                className="hover:text-[#f74302] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                href="/features"
                className="hover:text-[#f74302] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="hover:text-[#f74302] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link href="/create" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#ff4500] hover:bg-[#e63900] text-white w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

