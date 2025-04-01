document.addEventListener("DOMContentLoaded", () => {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const portfolioId = urlParams.get("id") || "minimal-abc123"
  const template = urlParams.get("template") || "minimal"

  // Update portfolio ID in the UI
  const portfolioIdElement = document.getElementById("portfolio-id")
  if (portfolioIdElement) {
    portfolioIdElement.textContent = portfolioId
  }

  // Get portfolio data from localStorage
  const portfolioData = JSON.parse(localStorage.getItem(`portfolio_${portfolioId}`)) || {
    personal: {
      name: "Not Found",
      title: "Portfolio Not Found",
      email: "",
      phone: "",
      location: "",
      about: "This portfolio could not be found. Please make sure you have created it first."
    },
    education: [],
    experience: [],
    skills: [],
    projects: []
  }

  // Load portfolio content based on template
  const portfolioContent = document.getElementById("portfolio-content")

  // Simulate loading
  setTimeout(() => {
    if (portfolioContent) {
      let templateHTML = ""

      switch (template) {
        case "professional":
          templateHTML = renderProfessionalTemplate(portfolioData)
          break
        case "creative":
          templateHTML = renderCreativeTemplate(portfolioData)
          break
        case "minimal":
        default:
          templateHTML = renderMinimalTemplate(portfolioData)
          break
      }

      portfolioContent.innerHTML = templateHTML
    }
  }, 1500)

  // Share button functionality
  const shareBtn = document.getElementById("share-btn")
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const portfolioUrl = document.getElementById("portfolio-url").textContent

      // Check if Web Share API is available
      if (navigator.share) {
        navigator
          .share({
            title: `${portfolioData.personal.name}'s Portfolio`,
            text: `Check out ${portfolioData.personal.name}'s professional portfolio!`,
            url: portfolioUrl,
          })
          .catch((error) => {
            console.error("Error sharing:", error)
            fallbackShare(portfolioUrl)
          })
      } else {
        fallbackShare(portfolioUrl)
      }
    })
  }

  // Fallback share function
  function fallbackShare(url) {
    // Create a temporary input to copy the URL
    const tempInput = document.createElement("input")
    tempInput.value = url
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)

    alert("Portfolio URL copied to clipboard!")
  }

  // Download button functionality (simplified for demo)
  const downloadBtn = document.getElementById("download-btn")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      alert("In a real application, this would generate a PDF of your portfolio.")
    })
  }
})

// Template rendering functions
function renderMinimalTemplate(data) {
  return `
        <div class="minimal-template">
            <header class="minimal-header">
                <div class="minimal-header-content">
                    <h1>${data.personal.name}</h1>
                    <p>${data.personal.title}</p>
                    <div class="minimal-contact">
                        <div class="minimal-contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${data.personal.email}</span>
                        </div>
                        <div class="minimal-contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${data.personal.phone}</span>
                        </div>
                        <div class="minimal-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${data.personal.location}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main class="minimal-main">
                <section class="minimal-section">
                    <h2 class="minimal-section-title">About Me</h2>
                    <p>${data.personal.about}</p>
                </section>

                <section class="minimal-section">
                    <h2 class="minimal-section-title">Experience</h2>
                    <div class="minimal-experience-list">
                        ${data.experience
                          .map(
                            (exp) => `
                            <div class="minimal-experience-item">
                                <h3>${exp.position}</h3>
                                <div class="minimal-experience-meta">
                                    <p>${exp.company}</p>
                                    <p>${exp.duration}</p>
                                </div>
                                <p>${exp.description}</p>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <section class="minimal-section">
                    <h2 class="minimal-section-title">Education</h2>
                    <div class="minimal-education-list">
                        ${data.education
                          .map(
                            (edu) => `
                            <div class="minimal-education-item">
                                <h3>${edu.degree}</h3>
                                <div class="minimal-education-meta">
                                    <p>${edu.institution}</p>
                                    <p>${edu.year}</p>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <div class="minimal-two-columns">
                    <section class="minimal-section">
                        <h2 class="minimal-section-title">Skills</h2>
                        <div class="minimal-skills">
                            ${data.skills
                              .map(
                                (skill) => `
                                <span class="minimal-skill">${skill}</span>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>

                    <section class="minimal-section">
                        <h2 class="minimal-section-title">Projects</h2>
                        <div class="minimal-projects-list">
                            ${data.projects
                              .map(
                                (project) => `
                                <div class="minimal-project-item">
                                    <h3>${project.name}</h3>
                                    <p>${project.description}</p>
                                    ${
                                      project.link
                                        ? `
                                        <a href="${project.link}" class="minimal-project-link" target="_blank">
                                            View Project <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    `
                                        : ""
                                    }
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    `
}

function renderProfessionalTemplate(data) {
  return `
        <div class="professional-template">
            <header class="professional-header">
                <div class="professional-header-content">
                    <div>
                        <h1>${data.personal.name}</h1>
                        <p>${data.personal.title}</p>
                    </div>
                    <div class="professional-contact">
                        <div class="professional-contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${data.personal.email}</span>
                        </div>
                        <div class="professional-contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${data.personal.phone}</span>
                        </div>
                        <div class="professional-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${data.personal.location}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main class="professional-main">
                <section class="professional-section">
                    <h2 class="professional-section-title">About Me</h2>
                    <p>${data.personal.about}</p>
                </section>

                <section class="professional-section">
                    <h2 class="professional-section-title">Experience</h2>
                    <div class="professional-experience-list">
                        ${data.experience
                          .map(
                            (exp) => `
                            <div class="professional-experience-item">
                                <h3>${exp.position}</h3>
                                <div class="professional-experience-meta">
                                    <p>${exp.company}</p>
                                    <p>${exp.duration}</p>
                                </div>
                                <p>${exp.description}</p>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <section class="professional-section">
                    <h2 class="professional-section-title">Education</h2>
                    <div class="professional-education-list">
                        ${data.education
                          .map(
                            (edu) => `
                            <div class="professional-education-item">
                                <h3>${edu.degree}</h3>
                                <div class="professional-education-meta">
                                    <p>${edu.institution}</p>
                                    <p>${edu.year}</p>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <div class="professional-two-columns">
                    <section class="professional-section">
                        <h2 class="professional-section-title">Skills</h2>
                        <div class="professional-skills">
                            ${data.skills
                              .map(
                                (skill) => `
                                <span class="professional-skill">${skill}</span>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>

                    <section class="professional-section">
                        <h2 class="professional-section-title">Projects</h2>
                        <div class="professional-projects-list">
                            ${data.projects
                              .map(
                                (project) => `
                                <div class="professional-project-item">
                                    <h3>${project.name}</h3>
                                    <p>${project.description}</p>
                                    ${
                                      project.link
                                        ? `
                                        <a href="${project.link}" class="professional-project-link" target="_blank">
                                            View Project <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    `
                                        : ""
                                    }
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    `
}

function renderCreativeTemplate(data) {
  return `
        <div class="creative-template">
            <header class="creative-header">
                <div class="creative-header-content">
                    <div>
                        <h1>${data.personal.name}</h1>
                        <p>${data.personal.title}</p>
                    </div>
                    <div class="creative-contact">
                        <div class="creative-contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${data.personal.email}</span>
                        </div>
                        <div class="creative-contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${data.personal.phone}</span>
                        </div>
                        <div class="creative-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${data.personal.location}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main class="creative-main">
                <section class="creative-section">
                    <h2 class="creative-section-title">About Me</h2>
                    <p>${data.personal.about}</p>
                </section>

                <section class="creative-section">
                    <h2 class="creative-section-title">Experience</h2>
                    <div class="creative-experience-list">
                        ${data.experience
                          .map(
                            (exp) => `
                            <div class="creative-experience-item">
                                <h3>${exp.position}</h3>
                                <div class="creative-experience-meta">
                                    <p>${exp.company}</p>
                                    <p>${exp.duration}</p>
                                </div>
                                <p>${exp.description}</p>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <section class="creative-section">
                    <h2 class="creative-section-title">Education</h2>
                    <div class="creative-education-list">
                        ${data.education
                          .map(
                            (edu) => `
                            <div class="creative-education-item">
                                <h3>${edu.degree}</h3>
                                <div class="creative-education-meta">
                                    <p>${edu.institution}</p>
                                    <p>${edu.year}</p>
                                </div>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </section>

                <div class="creative-two-columns">
                    <section class="creative-section">
                        <h2 class="creative-section-title">Skills</h2>
                        <div class="creative-skills">
                            ${data.skills
                              .map(
                                (skill) => `
                                <span class="creative-skill">${skill}</span>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>

                    <section class="creative-section">
                        <h2 class="creative-section-title">Projects</h2>
                        <div class="creative-projects-list">
                            ${data.projects
                              .map(
                                (project) => `
                                <div class="creative-project-item">
                                    <h3>${project.name}</h3>
                                    <p>${project.description}</p>
                                    ${
                                      project.link
                                        ? `
                                        <a href="${project.link}" class="creative-project-link" target="_blank">
                                            View Project <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    `
                                        : ""
                                    }
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    `
}

