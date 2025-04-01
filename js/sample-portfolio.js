// Sample portfolio data for preview
const samplePortfolioData = {
    personal: {
        name: "Priya Sharma",
        title: "Full Stack Developer",
        email: "priya.sharma@email.com",
        phone: "+91 98765 43210",
        location: "Mumbai, Maharashtra",
        about: "Passionate Full Stack Developer with expertise in modern web technologies. Experienced in building scalable applications and implementing innovative solutions. Strong problem-solving skills and a collaborative team player."
    },
    education: [
        {
            institution: "Indian Institute of Technology, Mumbai",
            degree: "B.Tech in Computer Science",
            year: "2018-2022"
        },
        {
            institution: "Delhi Public School, Delhi",
            degree: "High School (Science & Mathematics)",
            year: "2016-2018"
        }
    ],
    experience: [
        {
            position: "Senior Full Stack Developer",
            company: "Tech Solutions India Pvt. Ltd.",
            duration: "2022-Present",
            description: "Leading development of enterprise-level web applications using React, Node.js, and MongoDB. Mentoring junior developers and implementing best practices."
        },
        {
            position: "Full Stack Developer",
            company: "Infosys",
            duration: "2020-2022",
            description: "Developed and maintained multiple client projects using Java, Spring Boot, and Angular. Collaborated with international teams on global projects."
        }
    ],
    skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Python",
        "MongoDB",
        "AWS",
        "Docker",
        "Git",
        "Agile",
        "REST APIs",
        "TypeScript",
        "Next.js"
    ],
    projects: [
        {
            name: "E-Commerce Platform",
            description: "Built a full-stack e-commerce platform with features like user authentication, product management, shopping cart, and payment integration using Razorpay.",
            link: "https://github.com/priyasharma/ecommerce-platform"
        },
        {
            name: "Task Management App",
            description: "Developed a collaborative task management application with real-time updates using Socket.io and MongoDB. Features include task assignment, progress tracking, and team collaboration.",
            link: "https://github.com/priyasharma/task-manager"
        },
        {
            name: "Portfolio Website",
            description: "Created a responsive portfolio website using React and Tailwind CSS. Implemented dark mode, animations, and SEO optimization.",
            link: "https://github.com/priyasharma/portfolio"
        }
    ]
};

// Store the sample data in localStorage for preview
localStorage.setItem('preview_portfolio_data', JSON.stringify(samplePortfolioData));