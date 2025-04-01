import { ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Code } from "lucide-react"

interface PortfolioData {
  name: string
  title: string
  email: string
  phone: string
  location: string
  about: string
  education: {
    institution: string
    degree: string
    year: string
  }[]
  experience: {
    company: string
    position: string
    duration: string
    description: string
  }[]
  skills: string[]
  projects: {
    name: string
    description: string
    link: string
  }[]
}

export default function ProfessionalTemplate({ data }: { data: PortfolioData }) {
  return (
    <div className="min-h-screen bg-white text-[#494D5F]">
      <div className="bg-[#586080] text-white">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
              <p className="text-xl mb-4">{data.title}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{data.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 mr-2 text-[#ff4500]" />
                  <h2 className="text-xl font-bold text-[#586080]">Skills</h2>
                </div>
                <div className="space-y-2">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#ff4500] rounded-full mr-2"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-5 w-5 mr-2 text-[#ff4500]" />
                  <h2 className="text-xl font-bold text-[#586080]">Education</h2>
                </div>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#586080] mb-6 pb-2 border-b-2 border-[#ff4500]">About Me</h2>
              <p className="leading-relaxed">{data.about}</p>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 mr-2 text-[#ff4500]" />
                <h2 className="text-2xl font-bold text-[#586080] pb-2 border-b-2 border-[#ff4500]">Experience</h2>
              </div>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200"
                  >
                    <div className="absolute left-0 top-1 w-2 h-2 bg-[#ff4500] rounded-full transform -translate-x-1/2"></div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex justify-between text-[#586080] mb-2">
                      <p className="font-medium">{exp.company}</p>
                      <p className="text-sm">{exp.duration}</p>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#586080] mb-6 pb-2 border-b-2 border-[#ff4500]">Projects</h2>
              <div className="space-y-6">
                {data.projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#586080] mb-2">{project.name}</h3>
                    <p className="mb-3">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4500] hover:underline flex items-center"
                      >
                        View Project <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

