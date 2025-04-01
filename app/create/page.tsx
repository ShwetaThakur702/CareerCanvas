"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileUp, User, Briefcase, GraduationCap, Code } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CreatePage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "minimal"
  const { toast } = useToast()

  const [activeTab, setActiveTab] = useState("upload")
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    education: [{ institution: "", degree: "", year: "" }],
    experience: [{ company: "", position: "", duration: "", description: "" }],
    skills: [""],
    projects: [{ name: "", description: "", link: "" }],
  })

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Only accept PDF files
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file exported from LinkedIn",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate PDF processing
    setTimeout(() => {
      // In a real application, we would send the file to the server for processing
      // and extract the data from the PDF

      // For demo purposes, we'll just populate with sample data
      setFormData({
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

      setIsUploading(false)
      setActiveTab("personal")

      toast({
        title: "LinkedIn PDF processed successfully",
        description: "Your information has been extracted. Please review and edit if needed.",
      })
    }, 2000)
  }

  const handleInputChange = (section: string, index: number, field: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev }
      if (section === "personal") {
        newData[field as keyof typeof formData] = value
      } else {
        ;(newData[section as keyof typeof formData] as any[])[index][field] = value
      }
      return newData
    })
  }

  const addItem = (section: string) => {
    setFormData((prev) => {
      const newData = { ...prev }
      if (section === "education") {
        ;(newData.education as any[]).push({ institution: "", degree: "", year: "" })
      } else if (section === "experience") {
        ;(newData.experience as any[]).push({ company: "", position: "", duration: "", description: "" })
      } else if (section === "skills") {
        ;(newData.skills as string[]).push("")
      } else if (section === "projects") {
        ;(newData.projects as any[]).push({ name: "", description: "", link: "" })
      }
      return newData
    })
  }

  const removeItem = (section: string, index: number) => {
    setFormData((prev) => {
      const newData = { ...prev }
      if (section === "education" || section === "experience" || section === "projects") {
        ;(newData[section as keyof typeof formData] as any[]).splice(index, 1)
      } else if (section === "skills") {
        ;(newData.skills as string[]).splice(index, 1)
      }
      return newData
    })
  }

  const handleSkillChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newSkills = [...prev.skills]
      newSkills[index] = value
      return { ...prev, skills: newSkills }
    })
  }

  const handleSubmit = () => {
    // In a real application, we would send the data to the server
    // and generate the portfolio

    toast({
      title: "Portfolio created successfully!",
      description: "Your portfolio is now available at your unique URL.",
    })

    // Redirect to the portfolio page
    window.location.href = `/portfolio/${templateId}`
  }

  return (
    <div className="min-h-screen bg-[rgba(232,232,157,0.94)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#586080] mb-2">Create Your Portfolio</h1>
          <p className="text-[#494D5F]">
            {templateId
              ? `Using the ${templateId.charAt(0).toUpperCase() + templateId.slice(1)} template`
              : "Choose a template to get started"}
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">Upload</span>
                </TabsTrigger>
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">Skills</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <FileUp className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-[#586080] mb-2">Upload LinkedIn PDF</h3>
                  <p className="text-sm text-[#494D5F] mb-4">
                    Export your LinkedIn profile as a PDF and upload it here to automatically fill your portfolio
                    information.
                  </p>
                  <div className="relative">
                    <Input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      id="linkedin-pdf"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                    />
                    <Label
                      htmlFor="linkedin-pdf"
                      className="bg-[#ff4500] hover:bg-[#e63900] text-white py-2 px-4 rounded-md cursor-pointer inline-block"
                    >
                      {isUploading ? "Processing..." : "Select PDF File"}
                    </Label>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[#494D5F]">
                    Don&apos;t have a LinkedIn PDF? You can{" "}
                    <button className="text-[#ff4500] hover:underline" onClick={() => setActiveTab("personal")}>
                      manually enter your information
                    </button>
                    .
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("personal", 0, "name", e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("personal", 0, "title", e.target.value)}
                      placeholder="Full Stack Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("personal", 0, "email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("personal", 0, "phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("personal", 0, "location", e.target.value)}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">About Me</Label>
                  <Textarea
                    id="about"
                    value={formData.about}
                    onChange={(e) => handleInputChange("personal", 0, "about", e.target.value)}
                    placeholder="Write a brief introduction about yourself"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setActiveTab("education")}
                    className="bg-[#ff4500] hover:bg-[#e63900] text-white"
                  >
                    Next: Education
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                {formData.education.map((edu, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-[#586080]">Education #{index + 1}</h3>
                      {formData.education.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem("education", index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${index}`}>Institution</Label>
                        <Input
                          id={`institution-${index}`}
                          value={edu.institution}
                          onChange={(e) => handleInputChange("education", index, "institution", e.target.value)}
                          placeholder="University Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${index}`}>Degree</Label>
                        <Input
                          id={`degree-${index}`}
                          value={edu.degree}
                          onChange={(e) => handleInputChange("education", index, "degree", e.target.value)}
                          placeholder="B.S. Computer Science"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`year-${index}`}>Year</Label>
                        <Input
                          id={`year-${index}`}
                          value={edu.year}
                          onChange={(e) => handleInputChange("education", index, "year", e.target.value)}
                          placeholder="2018-2022"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => addItem("education")}
                  className="w-full border-dashed border-gray-300"
                >
                  + Add Another Education
                </Button>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("personal")}
                    className="border-[#586080] text-[#586080]"
                  >
                    Previous: Personal
                  </Button>
                  <Button
                    onClick={() => setActiveTab("experience")}
                    className="bg-[#ff4500] hover:bg-[#e63900] text-white"
                  >
                    Next: Experience
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-[#586080]">Experience #{index + 1}</h3>
                      {formData.experience.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem("experience", index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`company-${index}`}>Company</Label>
                        <Input
                          id={`company-${index}`}
                          value={exp.company}
                          onChange={(e) => handleInputChange("experience", index, "company", e.target.value)}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`position-${index}`}>Position</Label>
                        <Input
                          id={`position-${index}`}
                          value={exp.position}
                          onChange={(e) => handleInputChange("experience", index, "position", e.target.value)}
                          placeholder="Software Developer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`duration-${index}`}>Duration</Label>
                        <Input
                          id={`duration-${index}`}
                          value={exp.duration}
                          onChange={(e) => handleInputChange("experience", index, "duration", e.target.value)}
                          placeholder="2022-Present"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`description-${index}`}>Description</Label>
                      <Textarea
                        id={`description-${index}`}
                        value={exp.description}
                        onChange={(e) => handleInputChange("experience", index, "description", e.target.value)}
                        placeholder="Describe your responsibilities and achievements"
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => addItem("experience")}
                  className="w-full border-dashed border-gray-300"
                >
                  + Add Another Experience
                </Button>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("education")}
                    className="border-[#586080] text-[#586080]"
                  >
                    Previous: Education
                  </Button>
                  <Button onClick={() => setActiveTab("skills")} className="bg-[#ff4500] hover:bg-[#e63900] text-white">
                    Next: Skills & Projects
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-[#586080]">Skills</h3>
                  <div className="space-y-3">
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                          placeholder="e.g., JavaScript, React, Node.js"
                        />
                        {formData.skills.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem("skills", index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => addItem("skills")}
                    className="w-full border-dashed border-gray-300"
                  >
                    + Add Another Skill
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-[#586080]">Projects</h3>
                  {formData.projects.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-[#586080]">Project #{index + 1}</h4>
                        {formData.projects.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem("projects", index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                          <Input
                            id={`project-name-${index}`}
                            value={project.name}
                            onChange={(e) => handleInputChange("projects", index, "name", e.target.value)}
                            placeholder="Project Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`project-description-${index}`}>Description</Label>
                          <Textarea
                            id={`project-description-${index}`}
                            value={project.description}
                            onChange={(e) => handleInputChange("projects", index, "description", e.target.value)}
                            placeholder="Describe your project"
                            className="min-h-[80px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`project-link-${index}`}>Project Link</Label>
                          <Input
                            id={`project-link-${index}`}
                            value={project.link}
                            onChange={(e) => handleInputChange("projects", index, "link", e.target.value)}
                            placeholder="https://github.com/yourusername/project"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => addItem("projects")}
                    className="w-full border-dashed border-gray-300"
                  >
                    + Add Another Project
                  </Button>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("experience")}
                    className="border-[#586080] text-[#586080]"
                  >
                    Previous: Experience
                  </Button>
                  <Button onClick={handleSubmit} className="bg-[#ff4500] hover:bg-[#e63900] text-white">
                    Create Portfolio
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

