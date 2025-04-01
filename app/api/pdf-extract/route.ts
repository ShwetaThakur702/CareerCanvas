import { type NextRequest, NextResponse } from "next/server"
import * as pdfjs from "pdfjs-dist"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Check if the file is a PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "File must be a PDF" }, { status: 400 })
    }

    // Convert the file to an ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()

    // Load the PDF document
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer })
    const pdf = await loadingTask.promise

    // Extract text from all pages
    let extractedText = ""
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()
      const strings = content.items.map((item: any) => item.str)
      extractedText += strings.join(" ")
    }

    // In a real application, we would use NLP or regex to extract structured data
    // For this demo, we'll return a simple extraction with mock data

    // Mock extraction result
    const extractedData = {
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
    }

    return NextResponse.json({ data: extractedData })
  } catch (error) {
    console.error("Error processing PDF:", error)
    return NextResponse.json({ error: "Failed to process PDF" }, { status: 500 })
  }
}

