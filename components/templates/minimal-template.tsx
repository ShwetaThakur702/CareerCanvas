import { ExternalLink, Mail, Phone, MapPin } from "lucide-react"

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

export default function MinimalTemplate({ data }: { data: PortfolioData }) {
  return (
    <div className="min-h-screen bg-white text-[#494D5F]">
      <header className="bg-[#586080] text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
          <p className="text-xl mb-6">{data.title}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-gray-200">About Me</h2>
          <p>{data.about}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-gray-200">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex justify-between text-[#586080]">
                  <p>{exp.company}</p>
                  <p>{exp.duration}</p>
                </div>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-gray-200">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex justify-between text-[#586080]">
                  <p>{edu.institution}</p>
                  <p>{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-gray-200">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 text-[#586080] px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-gray-200">Projects</h2>
            <div className="space-y-4">
              {data.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mb-1">{project.description}</p>
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
      </main>
    </div>
  )
}

