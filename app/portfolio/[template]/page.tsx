"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Share2, Download, Edit } from "lucide-react"
import MinimalTemplate from "@/components/templates/minimal-template"
import ProfessionalTemplate from "@/components/templates/professional-template"
import CreativeTemplate from "@/components/templates/creative-template"

export default function PortfolioPage({ params }: { params: { template: string } }) {
  const [portfolioData, setPortfolioData] = useState({
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    about: "Experienced software developer with a passion for creating user-friendly applications.",
    education: [
      {
        institution: "Stanford University",
        degree: "B.S. Computer Science",
        year: "2018-2022",
      },
    ],
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022-Present",
        description: "Developed and maintained web applications using React and Node.js.",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS"],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB.",
        link: "https://github.com/johndoe/ecommerce",
      },
    ],
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, we would fetch the portfolio data from the server
    // For demo purposes, we'll just simulate a loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const renderTemplate = () => {
    switch (params.template) {
      case "professional":
        return <ProfessionalTemplate data={portfolioData} />
      case "creative":
        return <CreativeTemplate data={portfolioData} />
      case "minimal":
      default:
        return <MinimalTemplate data={portfolioData} />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgba(232,232,157,0.94)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#ff4500] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#586080] font-medium">Loading your portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[rgba(232,232,157,0.94)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white p-4 mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#586080]">Your Portfolio</h1>
              <p className="text-[#494D5F]">
                Share your unique URL:{" "}
                <span className="font-medium">
                  portfoliomaker.com/p/{params.template}-{Math.random().toString(36).substring(2, 8)}
                </span>
              </p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Link href="/create">
                <Button className="bg-[#ff4500] hover:bg-[#e63900] text-white flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">{renderTemplate()}</div>
      </div>
    </div>
  )
}

