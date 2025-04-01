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

export default function CreativeTemplate({ data }: { data: PortfolioData }) {
  return (
    <div className="min-h-screen bg-[#FFFFF0] text-[#494D5F]">
      <div className="bg-[#ff4500] text-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <h1 className="text-6xl font-bold mb-4">{data.name}</h1>
          <p className="text-2xl mb-8">{data.title}</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-[#586080] mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ff4500]">
                About Me
              </h2>
              <p className="leading-relaxed text-lg">{data.about}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#586080] mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ff4500]">
                Experience
              </h2>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-[#ff4500]">
                    <h3 className="text-2xl font-semibold">{exp.position}</h3>
                    <div className="flex justify-between text-[#586080] mb-2">
                      <p className="font-medium">{exp.company}</p>
                      <p>{exp.duration}</p>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#586080] mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#ff4500]">
                Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.projects.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-semibold text-[#586080] mb-3">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
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

          <div className="md:col-span-5">
            <div className="sticky top-8 space-y-10 bg-white p-6 rounded-lg shadow-lg">
              <section>
                <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-[#ff4500]">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="bg-[#586080] text-white px-4 py-2 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#586080] mb-4 pb-2 border-b border-[#ff4500]">Education</h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-[#586080] pl-4">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p>{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

