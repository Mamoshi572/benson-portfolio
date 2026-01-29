"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Rocket,
  Award,
  TrendingUp,
  Users,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Vue.js",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "blue",
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Python",
        "Express",
        "GraphQL",
        "FastAPI",
        "REST APIs",
      ],
      icon: <Database className="w-6 h-6" />,
      color: "green",
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "AWS", "Docker"],
      icon: <Globe className="w-6 h-6" />,
      color: "purple",
    },
    {
      category: "UI/UX Design",
      items: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Prototyping",
        "Wireframing",
        "Design Systems",
      ],
      icon: <Palette className="w-6 h-6" />,
      color: "pink",
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "CI/CD", "Linux", "Git", "Webpack", "Testing"],
      icon: <Zap className="w-6 h-6" />,
      color: "yellow",
    },
    {
      category: "Mobile Development",
      items: ["React Native", "Flutter", "iOS", "Android", "Expo", "Mobile UI"],
      icon: <Rocket className="w-6 h-6" />,
      color: "orange",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started Freelancing",
      description: "Began working on web projects for local businesses",
    },
    {
      year: "2020",
      title: "Full Stack Developer",
      description: "Joined a tech startup building SaaS products",
    },
    {
      year: "2021",
      title: "UI/UX Specialization",
      description: "Completed advanced design courses and certifications",
    },
    {
      year: "2022",
      title: "Senior Developer",
      description: "Led multiple teams on complex web applications",
    },
    {
      year: "2023",
      title: "Remote Consulting",
      description: "Started working with international clients worldwide",
    },
    {
      year: "2024",
      title: "Current Focus",
      description: "Building scalable products and mentoring junior developers",
    },
  ];

  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      icon: <Rocket className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      value: "5+",
      label: "Years Experience",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <Users className="w-5 h-5" />,
      color: "text-purple-600",
    },
    {
      value: "30+",
      label: "Happy Clients",
      icon: <Award className="w-5 h-5" />,
      color: "text-yellow-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">My Story & Expertise</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full Stack Engineer & UI/UX Designer with 5+ years of experience
              crafting exceptional digital experiences that solve real problems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center"
              >
                <div
                  className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Journey in Tech
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm{" "}
                  <span className="font-bold text-gray-900 dark:text-white">
                    Benson Mwiti
                  </span>
                  , a passionate Full Stack Engineer and UI/UX Designer based in
                  Nairobi, Kenya. My journey began with a curiosity about how
                  things work on the web, which evolved into a career dedicated
                  to building exceptional digital experiences.
                </p>

                <p className="leading-relaxed">
                  Over the past 5+ years, I've had the privilege of working with
                  startups, enterprises, and agencies across different
                  continents. What drives me is the opportunity to transform
                  complex challenges into elegant, user-friendly solutions that
                  not only meet business goals but exceed user expectations.
                </p>

                <p className="leading-relaxed">
                  My approach is unique because I bridge the gap between{" "}
                  <span className="font-semibold">
                    technical implementation
                  </span>{" "}
                  and <span className="font-semibold">creative design</span>. I
                  believe that great products require both solid engineering and
                  thoughtful design working in harmony.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 mt-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    My Philosophy
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Great software is built on three pillars: clean code,
                    intuitive design, and scalable architecture. When these
                    elements work together, they create experiences that users
                    love and businesses thrive on."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      🌍
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-blue-100">
                        Nairobi, Kenya (Remote Worldwide)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-bold">Specialization</h4>
                      <p className="text-blue-100">
                        Full Stack Web & Mobile Development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold">Availability</h4>
                      <p className="text-blue-100">
                        Open for new projects & collaborations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Career Timeline
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full inline-block mb-2">
                          {item.year}
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Expertise
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive toolkit of technologies and methodologies I use
                to build exceptional products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`w-12 h-12 bg-${skillGroup.color}-100 dark:bg-${skillGroup.color}-900/30 text-${skillGroup.color}-600 dark:text-${skillGroup.color}-400 rounded-xl flex items-center justify-center mb-4`}
                  >
                    {skillGroup.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-100 dark:border-gray-600 group-hover:border-gray-200 dark:group-hover:border-gray-500 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Whether you have a project in mind or just want to discuss
              potential opportunities, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
              <a
                href="/projects"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
