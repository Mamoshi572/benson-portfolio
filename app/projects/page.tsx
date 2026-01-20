export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description:
        "Scalable online marketplace serving 10k+ daily users with real-time inventory, payment processing, and AI-powered recommendations.",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "Live",
      link: "#",
    },
    {
      title: "Healthcare Analytics Dashboard",
      description:
        "Real-time data visualization platform for healthcare providers with predictive analytics and HIPAA-compliant security.",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker", "Redis"],
      status: "Live",
      link: "#",
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
