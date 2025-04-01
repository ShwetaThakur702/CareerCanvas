document.addEventListener("DOMContentLoaded", () => {
  // Get template parameter from URL
  const urlParams = new URLSearchParams(window.location.search)
  const templateParam = urlParams.get("template")

  // Update template info text if template is selected
  if (templateParam) {
    const templateInfo = document.getElementById("template-info")
    if (templateInfo) {
      const templateName = templateParam.charAt(0).toUpperCase() + templateParam.slice(1)
      templateInfo.textContent = `Using the ${templateName} template`
    }
  }

  // Tab Navigation
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and panes
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Show corresponding tab pane
      const tabId = this.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Manual Entry Button
  const manualEntryBtn = document.getElementById("manual-entry-btn")
  if (manualEntryBtn) {
    manualEntryBtn.addEventListener("click", () => {
      document.querySelector('[data-tab="personal"]').click()
    })
  }

  // Next and Previous Buttons
  const nextBtns = document.querySelectorAll(".next-btn")
  const prevBtns = document.querySelectorAll(".prev-btn")

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const nextTab = this.getAttribute("data-next")
      document.querySelector(`[data-tab="${nextTab}"]`).click()
    })
  })

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const prevTab = this.getAttribute("data-prev")
      document.querySelector(`[data-tab="${prevTab}"]`).click()
    })
  })

  // Add Education
  let educationCount = 1
  const addEducationBtn = document.getElementById("add-education")
  const educationContainer = document.getElementById("education-container")

  if (addEducationBtn && educationContainer) {
    addEducationBtn.addEventListener("click", () => {
      educationCount++
      const newEducation = document.createElement("div")
      newEducation.className = "education-item"
      newEducation.innerHTML = `
                <div class="item-header">
                    <h3>Education #${educationCount}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="institution-${educationCount - 1}">Institution</label>
                        <input type="text" id="institution-${educationCount - 1}" placeholder="University Name">
                    </div>
                    <div class="form-group">
                        <label for="degree-${educationCount - 1}">Degree</label>
                        <input type="text" id="degree-${educationCount - 1}" placeholder="B.S. Computer Science">
                    </div>
                    <div class="form-group">
                        <label for="year-${educationCount - 1}">Year</label>
                        <input type="text" id="year-${educationCount - 1}" placeholder="2018-2022">
                    </div>
                </div>
            `
      educationContainer.appendChild(newEducation)

      // Add remove button functionality
      const removeBtn = newEducation.querySelector(".remove-btn")
      removeBtn.addEventListener("click", () => {
        educationContainer.removeChild(newEducation)
      })
    })
  }

  // Add Experience
  let experienceCount = 1
  const addExperienceBtn = document.getElementById("add-experience")
  const experienceContainer = document.getElementById("experience-container")

  if (addExperienceBtn && experienceContainer) {
    addExperienceBtn.addEventListener("click", () => {
      experienceCount++
      const newExperience = document.createElement("div")
      newExperience.className = "experience-item"
      newExperience.innerHTML = `
                <div class="item-header">
                    <h3>Experience #${experienceCount}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="company-${experienceCount - 1}">Company</label>
                        <input type="text" id="company-${experienceCount - 1}" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                        <label for="position-${experienceCount - 1}">Position</label>
                        <input type="text" id="position-${experienceCount - 1}" placeholder="Software Developer">
                    </div>
                    <div class="form-group">
                        <label for="duration-${experienceCount - 1}">Duration</label>
                        <input type="text" id="duration-${experienceCount - 1}" placeholder="2022-Present">
                    </div>
                </div>
                <div class="form-group">
                    <label for="description-${experienceCount - 1}">Description</label>
                    <textarea id="description-${experienceCount - 1}" placeholder="Describe your responsibilities and achievements" rows="3"></textarea>
                </div>
            `
      experienceContainer.appendChild(newExperience)

      // Add remove button functionality
      const removeBtn = newExperience.querySelector(".remove-btn")
      removeBtn.addEventListener("click", () => {
        experienceContainer.removeChild(newExperience)
      })
    })
  }

  // Add Skill
  const addSkillBtn = document.getElementById("add-skill")
  const skillsContainer = document.getElementById("skills-container")

  if (addSkillBtn && skillsContainer) {
    addSkillBtn.addEventListener("click", () => {
      const newSkill = document.createElement("div")
      newSkill.className = "skill-item"
      newSkill.innerHTML = `
                <input type="text" class="skill-input" placeholder="e.g., JavaScript, React, Node.js">
                <button type="button" class="remove-btn">Remove</button>
            `
      skillsContainer.appendChild(newSkill)

      // Add remove button functionality
      const removeBtn = newSkill.querySelector(".remove-btn")
      removeBtn.addEventListener("click", () => {
        skillsContainer.removeChild(newSkill)
      })
    })
  }

  // Add Project
  let projectCount = 1
  const addProjectBtn = document.getElementById("add-project")
  const projectsContainer = document.getElementById("projects-container")

  if (addProjectBtn && projectsContainer) {
    addProjectBtn.addEventListener("click", () => {
      projectCount++
      const newProject = document.createElement("div")
      newProject.className = "project-item"
      newProject.innerHTML = `
                <div class="item-header">
                    <h3>Project #${projectCount}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-group">
                    <label for="project-name-${projectCount - 1}">Project Name</label>
                    <input type="text" id="project-name-${projectCount - 1}" placeholder="Project Name">
                </div>
                <div class="form-group">
                    <label for="project-description-${projectCount - 1}">Description</label>
                    <textarea id="project-description-${projectCount - 1}" placeholder="Describe your project" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="project-link-${projectCount - 1}">Project Link</label>
                    <input type="url" id="project-link-${projectCount - 1}" placeholder="https://github.com/yourusername/project">
                </div>
            `
      projectsContainer.appendChild(newProject)

      // Add remove button functionality
      const removeBtn = newProject.querySelector(".remove-btn")
      removeBtn.addEventListener("click", () => {
        projectsContainer.removeChild(newProject)
      })
    })
  }

  // Handle PDF upload
  const pdfUploadInput = document.getElementById('linkedin-pdf');
  if (pdfUploadInput) {
    pdfUploadInput.addEventListener('change', async function(e) {
      const file = e.target.files[0];
      if (!file) {
        alert('Please select a PDF file');
        return;
      }

      // Verify file type
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file');
        return;
      }

      try {
        // Parse the PDF using AI Helper
        const processedData = await parsePDF(file);

        // Populate the form with the extracted data
        populateFormWithData(processedData);

          // Show success message
        alert('PDF processed successfully! Please review and edit the extracted information.');

          // Switch to personal tab
        document.querySelector('[data-tab="personal"]').click();
      } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Error processing PDF: ' + error.message + '\nPlease try again or enter information manually.');
      }
    });
  }

  // LinkedIn URL Extraction
  const linkedinUrlInput = document.getElementById("linkedin-url")
  const extractUrlBtn = document.getElementById("extract-url-btn")

  if (linkedinUrlInput && extractUrlBtn) {
    extractUrlBtn.addEventListener("click", () => {
      const url = linkedinUrlInput.value.trim()

      // Validate LinkedIn URL
      if (!url) {
        alert("Please enter a LinkedIn profile URL")
        return
      }

      // Check if it's a valid LinkedIn URL
      if (!isValidLinkedInUrl(url)) {
        alert("Please enter a valid LinkedIn profile URL (e.g., https://www.linkedin.com/in/username)")
        return
      }

      // Show loading state
      extractUrlBtn.textContent = "Extracting..."
      extractUrlBtn.disabled = true

      // Extract data from LinkedIn URL
      extractFromLinkedInUrl(url)
        .then((data) => {
          // Fill the form with extracted data
          populateFormWithData(data)

          // Reset button
          extractUrlBtn.textContent = "Extract"
          extractUrlBtn.disabled = false

          // Show success message
          alert("LinkedIn profile data extracted successfully! Please review and edit if needed.")

          // Switch to personal tab
          document.querySelector('[data-tab="personal"]').click()
        })
        .catch((error) => {
          console.error("Error extracting LinkedIn data:", error)
          alert("Error extracting data from LinkedIn URL. Please try again or enter information manually.")
          extractUrlBtn.textContent = "Extract"
          extractUrlBtn.disabled = false
        })
    })
  }

  /**
   * Validate if the URL is a LinkedIn profile URL
   * @param {string} url - URL to validate
   * @returns {boolean} - Whether the URL is valid
   */
  function isValidLinkedInUrl(url) {
    // Basic validation for LinkedIn profile URLs
    const linkedInRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/i
    return linkedInRegex.test(url)
  }

  /**
   * Extract data from LinkedIn profile URL
   * @param {string} url - LinkedIn profile URL
   * @returns {Promise<Object>} - Extracted data
   */
  function extractFromLinkedInUrl(url) {
    return new Promise((resolve, reject) => {
      // In a real application, we would:
      // 1. Send the URL to a server-side endpoint
      // 2. The server would use LinkedIn API or scraping techniques to extract data
      // 3. Return the structured data

      // For this demo, we'll simulate the extraction process

      // Extract username from URL
      const username = url.split("/in/")[1].replace(/\/$/, "")

      // Simulate API call delay
      setTimeout(() => {
        try {
          // Generate profile data based on username
          const data = generateProfileDataFromUsername(username)
          resolve(data)
        } catch (error) {
          reject(error)
        }
      }, 2000)
    })
  }

  /**
   * Generate profile data based on username
   * @param {string} username - LinkedIn username
   * @returns {Object} - Generated profile data
   */
  function generateProfileDataFromUsername(username) {
    // Create a deterministic but varied profile based on the username
    // This ensures the same username always generates the same profile

    // Create a simple hash of the username for deterministic randomness
    const hash = simpleHash(username)

    // Use the hash to select profile elements
    const names = [
      "Sarah Johnson",
      "Michael Chen",
      "Priya Patel",
      "David Rodriguez",
      "Emma Wilson",
      "Alex Thompson",
      "Olivia Martinez",
      "James Wilson",
      "Sophia Lee",
      "Ethan Brown",
    ]
    const titles = [
      "Frontend Developer",
      "UX/UI Designer",
      "Data Scientist",
      "Product Manager",
      "Software Engineer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Mobile App Developer",
      "AI Researcher",
      "Cloud Architect",
    ]
    const companies = [
      "Tech Innovations",
      "Digital Solutions",
      "Data Insights",
      "Product Labs",
      "Software Co",
      "Global Systems",
      "Future Tech",
      "Cloud Services",
      "Mobile Apps Inc",
      "AI Solutions",
    ]
    const universities = [
      "Stanford University",
      "MIT",
      "UC Berkeley",
      "Georgia Tech",
      "University of Michigan",
      "Carnegie Mellon",
      "Cornell University",
      "University of Washington",
      "Caltech",
      "Princeton",
    ]
    const degrees = [
      "B.S. Computer Science",
      "M.S. Information Systems",
      "B.A. Design",
      "MBA",
      "Ph.D. Computer Engineering",
      "B.S. Data Science",
      "M.S. Artificial Intelligence",
      "B.S. Software Engineering",
      "M.S. UX Design",
      "B.S. Cybersecurity",
    ]
    const cities = [
      "San Francisco, CA",
      "New York, NY",
      "Seattle, WA",
      "Austin, TX",
      "Chicago, IL",
      "Boston, MA",
      "Los Angeles, CA",
      "Denver, CO",
      "Atlanta, GA",
      "Portland, OR",
    ]

    // Select deterministic but varied elements based on username hash
    const nameIndex = hash % names.length
    const titleIndex = (hash * 3) % titles.length
    const companyIndex = (hash * 7) % companies.length
    const universityIndex = (hash * 11) % universities.length
    const degreeIndex = (hash * 13) % degrees.length
    const cityIndex = (hash * 17) % cities.length

    // Generate name parts for email
    const nameParts = names[nameIndex].toLowerCase().split(" ")

    // Generate skills (deterministic selection)
    const allSkills = [
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "HTML/CSS",
      "Python",
      "Data Analysis",
      "Machine Learning",
      "SQL",
      "AWS",
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Product Strategy",
      "Agile",
      "Scrum",
      "A/B Testing",
      "Market Analysis",
      "Java",
      "C#",
      "Docker",
      "Kubernetes",
      "Git",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ]

    // Select 4-6 skills deterministically
    const numSkills = 4 + (hash % 3)
    const skills = []
    for (let i = 0; i < numSkills; i++) {
      const skillIndex = (hash * (i + 1) * 19) % allSkills.length
      const skill = allSkills[skillIndex]
      if (!skills.includes(skill)) {
        skills.push(skill)
      }
    }

    // Generate project names (deterministic)
    const projectTypes = [
      "E-commerce",
      "Portfolio",
      "Dashboard",
      "Mobile App",
      "API",
      "Analytics",
      "Social Network",
      "Booking System",
    ]
    const projectIndex = hash % projectTypes.length

    // Construct the profile data
    return {
      name: names[nameIndex],
      title: titles[titleIndex],
      email: `${nameParts[0]}.${nameParts[1]}@example.com`,
      phone: `+1 (${555 + (hash % 400)}) ${100 + (hash % 900)}-${1000 + (hash % 9000)}`,
      location: cities[cityIndex],
      about: `Experienced ${titles[titleIndex].toLowerCase()} with a passion for creating innovative solutions and driving results. Skilled in ${skills.slice(0, 3).join(", ")}, and other technologies.`,
      education: [
        {
          institution: universities[universityIndex],
          degree: degrees[degreeIndex],
          year: `${2010 + (hash % 10)} - ${2014 + (hash % 10)}`,
        },
      ],
      experience: [
        {
          company: companies[companyIndex],
          position: titles[titleIndex],
          duration: `${2015 + (hash % 7)} - Present`,
          description: `Led development of key projects and collaborated with cross-functional teams to deliver high-quality solutions using ${skills.slice(0, 2).join(" and ")}.`,
        },
      ],
      skills: skills,
      projects: [
        {
          name: `${projectTypes[projectIndex]} Platform`,
          description: `Built a ${projectTypes[projectIndex].toLowerCase()} platform using ${skills[0]} and ${skills[1]}.`,
          link: `https://github.com/${username}/${projectTypes[projectIndex].toLowerCase().replace(" ", "-")}`,
        },
      ],
    }
  }

  /**
   * Simple string hash function
   * @param {string} str - String to hash
   * @returns {number} - Hash value
   */
  function simpleHash(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash)
  }

  /**
   * Parse PDF file and extract information
   * @param {File} file - The PDF file to parse
   * @returns {Promise<Object>} - Extracted data
   */
  async function parsePDF(file) {
    try {
      // Initialize AI Helper with the configured API key
      const aiHelper = new AIHelper('AIzaSyCY2sAerxoYxgqvgquTzTVJSTkfw6l5vwA');

      // Show loading state in UI
      const loadingEl = document.createElement('div');
      loadingEl.id = 'pdf-loading';
      loadingEl.innerHTML = '<div class="loading-spinner"></div><p>Processing PDF...</p>';
      document.body.appendChild(loadingEl);

      // Read the PDF file
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      console.log(`PDF loaded successfully. Number of pages: ${pdf.numPages}`);

      // Extract text from all pages
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
              .map(item => item.str)
              .join(' ');
          fullText += pageText + '\n';
      }

      console.log('Text extracted from PDF successfully');

      // Process the extracted text with AI
      console.log('Processing text with AI...');
      const processedData = await aiHelper.processResume(fullText);

      // Get AI suggestions for improvements
      const suggestions = await aiHelper.suggestImprovements(processedData);

      // Generate a professional summary if none exists
      if (!processedData.personalInfo.summary) {
          const summary = await aiHelper.generateSummary(
              processedData.experience,
              processedData.skills
          );
          processedData.personalInfo.summary = summary;
      }

      // Store AI suggestions in localStorage
      localStorage.setItem('portfolioSuggestions', JSON.stringify(suggestions));

      // Remove loading element
      document.body.removeChild(loadingEl);

      return processedData;
    } catch (error) {
      console.error('Error in parsePDF:', error);
      // Remove loading element if it exists
      const loadingEl = document.getElementById('pdf-loading');
      if (loadingEl) {
          document.body.removeChild(loadingEl);
      }
      throw error;
    }
  }

  /**
   * Populate form fields with extracted data
   * @param {Object} data - Extracted data from PDF
   */
  function populateFormWithData(data) {
    try {
        // Personal Information
        document.getElementById('name').value = data.personalInfo.name || '';
        document.getElementById('title').value = data.personalInfo.title || '';
        document.getElementById('email').value = data.personalInfo.email || '';
        document.getElementById('phone').value = data.personalInfo.phone || '';
        document.getElementById('location').value = data.personalInfo.location || '';
        document.getElementById('about').value = data.personalInfo.summary || '';

        // Education
        const educationContainer = document.getElementById('education-container');
        educationContainer.innerHTML = ''; // Clear existing items
        data.education.forEach((edu, index) => {
            const newEducation = document.createElement('div');
            newEducation.className = 'education-item';
            newEducation.innerHTML = `
                <div class="item-header">
                    <h3>Education #${index + 1}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="institution-${index}">Institution</label>
                        <input type="text" id="institution-${index}" value="${edu.institution || ''}" placeholder="University Name">
                    </div>
                    <div class="form-group">
                        <label for="degree-${index}">Degree</label>
                        <input type="text" id="degree-${index}" value="${edu.degree || ''}" placeholder="B.S. Computer Science">
                    </div>
                    <div class="form-group">
                        <label for="year-${index}">Year</label>
                        <input type="text" id="year-${index}" value="${edu.year || ''}" placeholder="2018-2022">
                    </div>
                </div>
            `;
            educationContainer.appendChild(newEducation);

            // Add remove button functionality
            const removeBtn = newEducation.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                educationContainer.removeChild(newEducation);
            });
        });

        // Experience
        const experienceContainer = document.getElementById('experience-container');
        experienceContainer.innerHTML = ''; // Clear existing items
        data.experience.forEach((exp, index) => {
            const newExperience = document.createElement('div');
            newExperience.className = 'experience-item';
            newExperience.innerHTML = `
                <div class="item-header">
                    <h3>Experience #${index + 1}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="company-${index}">Company</label>
                        <input type="text" id="company-${index}" value="${exp.company || ''}" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                        <label for="position-${index}">Position</label>
                        <input type="text" id="position-${index}" value="${exp.position || ''}" placeholder="Software Developer">
                    </div>
                    <div class="form-group">
                        <label for="duration-${index}">Duration</label>
                        <input type="text" id="duration-${index}" value="${exp.duration || ''}" placeholder="2022-Present">
                    </div>
                </div>
                <div class="form-group">
                    <label for="description-${index}">Description</label>
                    <textarea id="description-${index}" placeholder="Describe your responsibilities and achievements" rows="3">${exp.description || ''}</textarea>
                </div>
            `;
            experienceContainer.appendChild(newExperience);

            // Add remove button functionality
            const removeBtn = newExperience.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                experienceContainer.removeChild(newExperience);
            });
        });

        // Skills
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = ''; // Clear existing items
        data.skills.forEach(skill => {
            const newSkill = document.createElement('div');
            newSkill.className = 'skill-item';
            newSkill.innerHTML = `
                <input type="text" class="skill-input" value="${skill}" placeholder="e.g., JavaScript, React, Node.js">
                <button type="button" class="remove-btn">Remove</button>
            `;
            skillsContainer.appendChild(newSkill);

            // Add remove button functionality
            const removeBtn = newSkill.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                skillsContainer.removeChild(newSkill);
            });
        });

        // Projects
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = ''; // Clear existing items
        data.projects.forEach((project, index) => {
            const newProject = document.createElement('div');
            newProject.className = 'project-item';
            newProject.innerHTML = `
                <div class="item-header">
                    <h3>Project #${index + 1}</h3>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-group">
                    <label for="project-name-${index}">Project Name</label>
                    <input type="text" id="project-name-${index}" value="${project.name || ''}" placeholder="Project Name">
                </div>
                <div class="form-group">
                    <label for="project-description-${index}">Description</label>
                    <textarea id="project-description-${index}" placeholder="Describe your project" rows="3">${project.description || ''}</textarea>
                </div>
                <div class="form-group">
                    <label for="project-link-${index}">Project Link</label>
                    <input type="url" id="project-link-${index}" value="${project.link || ''}" placeholder="https://github.com/yourusername/project">
                </div>
            `;
            projectsContainer.appendChild(newProject);

            // Add remove button functionality
            const removeBtn = newProject.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                projectsContainer.removeChild(newProject);
            });
        });

        // Show AI suggestions if available
        const suggestions = localStorage.getItem('portfolioSuggestions');
        if (suggestions) {
            showAISuggestions(JSON.parse(suggestions));
        }

    } catch (error) {
        console.error('Error populating form:', error);
        alert('Error populating form with extracted data. Please try again or enter information manually.');
    }
  }

  // Function to show AI suggestions
  function showAISuggestions(suggestions) {
      const suggestionsContainer = document.createElement('div');
      suggestionsContainer.id = 'ai-suggestions';
      suggestionsContainer.className = 'ai-suggestions';

      let suggestionsHTML = '<h3>AI Suggestions for Improvement</h3><div class="suggestions-content">';

      // Add suggestions for each section
      Object.entries(suggestions).forEach(([section, sectionSuggestions]) => {
          if (sectionSuggestions.length > 0) {
              suggestionsHTML += `
                  <div class="suggestion-section">
                      <h4>${section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                      <ul>
                          ${sectionSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
                      </ul>
                  </div>
              `;
          }
      });

      suggestionsHTML += '</div><button id="close-suggestions">Close</button>';
      suggestionsContainer.innerHTML = suggestionsHTML;

      document.body.appendChild(suggestionsContainer);

      // Add close button functionality
      document.getElementById('close-suggestions').addEventListener('click', () => {
          document.body.removeChild(suggestionsContainer);
      });
  }

  // Create Portfolio Button
  const createPortfolioBtn = document.getElementById("create-portfolio-btn")

  if (createPortfolioBtn) {
    createPortfolioBtn.addEventListener("click", () => {
      // Collect all form data
      const formData = collectFormData()

      // Validate required fields
      if (!validateFormData(formData)) {
        return
      }

      // Store form data in localStorage for portfolio page to use
      const template = templateParam || "minimal"
      const portfolioId = template + "-" + Math.random().toString(36).substring(2, 8)
      localStorage.setItem(`portfolio_${portfolioId}`, JSON.stringify(formData))

      // Show success message and redirect
      alert("Portfolio created successfully! Your portfolio is now available at your unique URL.")
      window.location.href = `portfolio.html?id=${portfolioId}&template=${template}`
    })
  }

  /**
   * Collect all form data
   * @returns {Object} Form data object
   */
  function collectFormData() {
    const data = {
      personal: {
        name: document.getElementById("name")?.value || "",
        title: document.getElementById("title")?.value || "",
        email: document.getElementById("email")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        location: document.getElementById("location")?.value || "",
        about: document.getElementById("about")?.value || ""
      },
      education: [],
      experience: [],
      skills: [],
      projects: []
    }

    // Collect education data
    const educationItems = document.querySelectorAll(".education-item")
    educationItems.forEach(item => {
      const institution = item.querySelector(`input[id^="institution-"]`)?.value || ""
      const degree = item.querySelector(`input[id^="degree-"]`)?.value || ""
      const year = item.querySelector(`input[id^="year-"]`)?.value || ""

      if (institution || degree || year) {
        data.education.push({ institution, degree, year })
      }
    })

    // Collect experience data
    const experienceItems = document.querySelectorAll(".experience-item")
    experienceItems.forEach(item => {
      const company = item.querySelector(`input[id^="company-"]`)?.value || ""
      const position = item.querySelector(`input[id^="position-"]`)?.value || ""
      const duration = item.querySelector(`input[id^="duration-"]`)?.value || ""
      const description = item.querySelector(`textarea[id^="description-"]`)?.value || ""

      if (company || position || duration || description) {
        data.experience.push({ company, position, duration, description })
      }
    })

    // Collect skills
    const skillInputs = document.querySelectorAll(".skill-input")
    skillInputs.forEach(input => {
      const skill = input.value.trim()
      if (skill) {
        data.skills.push(skill)
      }
    })

    // Collect projects
    const projectItems = document.querySelectorAll(".project-item")
    projectItems.forEach(item => {
      const name = item.querySelector(`input[id^="project-name-"]`)?.value || ""
      const description = item.querySelector(`textarea[id^="project-description-"]`)?.value || ""
      const link = item.querySelector(`input[id^="project-link-"]`)?.value || ""

      if (name || description || link) {
        data.projects.push({ name, description, link })
      }
    })

    return data
  }

  /**
   * Validate required form fields
   * @param {Object} formData Form data object
   * @returns {boolean} Whether the form data is valid
   */
  function validateFormData(formData) {
    // Check required personal information
    if (!formData.personal.name.trim()) {
      alert("Please enter your name")
      return false
    }

    if (!formData.personal.email.trim()) {
      alert("Please enter your email")
      return false
    }

    // Check if at least one education entry exists
    if (formData.education.length === 0) {
      alert("Please add at least one education entry")
      return false
    }

    // Check if at least one experience entry exists
    if (formData.experience.length === 0) {
      alert("Please add at least one experience entry")
      return false
    }

    // Check if at least one skill exists
    if (formData.skills.length === 0) {
      alert("Please add at least one skill")
      return false
    }

    return true
  }
})

