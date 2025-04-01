import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFF0] bg-opacity-90">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[rgba(232,232,157,0.94)] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#586080] mb-6">
                Create Your Professional Portfolio in Minutes
              </h1>
              <p className="text-lg md:text-xl text-[#494D5F] mb-8">
                Upload your LinkedIn PDF or manually enter your details to generate a stunning portfolio website
                instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create">
                  <Button className="bg-[#ff4500] hover:bg-[#e63900] text-white px-8 py-6 rounded-md text-lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/templates">
                  <Button
                    variant="outline"
                    className="border-[#586080] text-[#586080] hover:bg-[#586080] hover:text-white px-8 py-6 rounded-md text-lg"
                  >
                    View Templates
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#586080] rounded-lg p-6 shadow-xl transform rotate-3 z-10 relative">
                <div className="bg-white rounded-md p-4">
                  <div className="h-8 bg-[#586080] rounded-md mb-4"></div>
                  <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                  <div className="h-12 bg-gray-100 rounded-md mb-4"></div>
                  <div className="h-40 bg-gray-100 rounded-md"></div>
                </div>
              </div>
              <div className="absolute top-10 -left-10 bg-[#586080] rounded-lg p-6 shadow-xl transform -rotate-6 z-0">
                <div className="bg-white rounded-md p-4">
                  <div className="h-8 bg-[#586080] rounded-md mb-4"></div>
                  <div className="h-24 bg-gray-100 rounded-md mb-4"></div>
                  <div className="h-12 bg-gray-100 rounded-md mb-4"></div>
                  <div className="h-40 bg-gray-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#586080] mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFF0] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ff4500] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#586080] mb-3">Choose a Template</h3>
              <p className="text-[#494D5F]">
                Select from our collection of professionally designed portfolio templates.
              </p>
            </div>
            <div className="bg-[#FFFFF0] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ff4500] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#586080] mb-3">Upload LinkedIn PDF</h3>
              <p className="text-[#494D5F]">Upload your LinkedIn profile PDF or manually enter your information.</p>
            </div>
            <div className="bg-[#FFFFF0] p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ff4500] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#586080] mb-3">Share Your Portfolio</h3>
              <p className="text-[#494D5F]">
                Get a unique link to your professional portfolio that you can share with employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(232,232,157,0.3)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#586080] mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[#494D5F] mb-4 italic">
                "I was able to create a professional portfolio in just 10 minutes! The LinkedIn PDF upload feature saved
                me hours of manual work."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#586080] rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#586080]">Rahul Sharma</h4>
                  <p className="text-sm text-[#494D5F]">B.Tech Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[#494D5F] mb-4 italic">
                "The templates are beautiful and professional. I received multiple interview calls after sharing my
                portfolio link with recruiters."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#586080] rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#586080]">Priya Patel</h4>
                  <p className="text-sm text-[#494D5F]">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#586080] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Professional Portfolio?</h2>
          <p className="text-lg mb-8 text-[#FFFFF0]">
            Join thousands of professionals who have boosted their online presence with our portfolio maker.
          </p>
          <Link href="/create">
            <Button className="bg-[#ff4500] hover:bg-[#e63900] text-white px-8 py-6 rounded-md text-lg">
              Create Your Portfolio Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

