export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Python", "Express", "GraphQL"] },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Linux"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS/Android"] },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Full Stack Engineer & UI/UX Designer with 5+ years of experience
            crafting exceptional digital experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm Benson Mwiti, a passionate Full Stack Engineer and UI/UX
                Designer based in Nairobi, Kenya. I specialize in transforming
                complex problems into simple, beautiful, and intuitive designs
                and implementations.
              </p>
              <p>
                With over 5 years of experience, I've worked with startups and
                enterprises to build scalable web applications, mobile apps, and
                design systems that deliver exceptional user experiences.
              </p>
              <p>
                My approach combines technical expertise with creative design
                thinking, ensuring that every project not only functions
                flawlessly but also delights users.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>📍 Based in Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>🌍 Available for remote work worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>🚀 50+ projects delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>🎯 100% client satisfaction rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
