export default function ProjectsPage() {
  const projects = [
    {
      title: "Ashen bites website",
      description:
        "Authentic Kenyan Street Food(Smochas, Mutura, Nyama Choma).",
      category: "Fullstack",
      tech: ["Next.js", "JavaScript (ES7+)", "HTML5", "netlify"],
      status: "Live",
      link: "https://cool-pony-d2b3a5.netlify.app",
    },

 {
      title: "styles n tunes",
      description:
        "A vibrant platform showcasing the intersection of urban streetwear and music culture, featuring exclusive drops and artist collaborations.",
      category: "Frontend",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://stylen-tunesrw.vercel.app ",
    },

    {
      title: "GreanLeaf Dispensary",
      description: "Premium cannabis products",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "Live",
      link: "https://cannabis-dispensar.vercel.app",
    },

    {
      title: "AgriInfo offline app",
      description:
        "A Revolutionary Offline-First Agricultural Information Platform",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker", "Redis"],
      status: "Live",
      link: "https://github.com/Mamoshi572/AgriInfoOffline",
    },

    {
      title: "Professional Modeling & Services Portfolio",
      description:
        "Designed and developed a dynamic, responsive portfolio to uniquely market a dual-skill professional in fashion modeling and client services. The site features a clean, modern interface to effectively showcase achievements, services, and professional experience, enhancing the client's online presence and brand cohesion.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript (ES7+)", "HTML5", "vercel"],
      status: "Live",
      link: "https://irene-portfolio-alpha.vercel.app",
    },

    {
      title: "FinTech Mobile Application",
      description:
        "Cross-platform mobile app for financial management with biometric authentication and real-time market data integration.",
      category: "Mobile Development",
      tech: [
        "React Native",
        "TypeScript",
        "Firebase",
        "GraphQL",
        "Jest",
        "Fastlane",
      ],
      status: "In Development",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Selected works showcasing technical expertise and problem-solving
            across different domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                <a
                  href={project.link}
                  className="block w-full py-3 text-center bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
