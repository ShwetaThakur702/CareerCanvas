import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TemplatesPage() {
  const templates = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and simple design focusing on content",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Elegant design for corporate environments",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for designers and artists",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with a tech feel",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "academic",
      name: "Academic",
      description: "Formal design for researchers and educators",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "startup",
      name: "Startup",
      description: "Dynamic design for entrepreneurs",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-[rgba(232,232,157,0.94)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#586080] mb-4">Choose Your Template</h1>
          <p className="text-lg text-[#494D5F] max-w-2xl mx-auto">
            Select from our professionally designed templates to showcase your skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-[#494D5F]">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={`${template.name} template preview`}
                  className="object-cover w-full h-48"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#586080] mb-2">{template.name}</h3>
                <p className="text-[#494D5F] mb-4">{template.description}</p>
                <div className="flex space-x-3">
                  <Link href={`/create?template=${template.id}`} className="flex-1">
                    <Button className="w-full bg-[#ff4500] hover:bg-[#e63900] text-white">Use Template</Button>
                  </Link>
                  <Link href={`/preview/${template.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-[#586080] text-[#586080] hover:bg-[#586080] hover:text-white"
                    >
                      Preview
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

