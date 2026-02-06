"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  X,
  Search,
  Sparkles,
  Zap,
  Rocket,
  Target,
  Trophy,
  Clock,
  Users,
  Code,
  Palette,
} from "lucide-react";
import { useState, useEffect } from "react";
import CaseStudyModal from "./components/CaseStudyModal";

export default function ProjectsPage() {
  // All projects data with case study fields
  const projects = [
    {
      title: "Interactive Birthday Celebration",
      description:
        "A dynamic, full-stack birthday countdown and celebration website with real-time features.",
      category: "Full Stack",
      tech: ["Next.js 15", "TypeScript", "React", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://birthday-project-phi.vercel.app",
      emoji: "🎉",
      features: [
        "Live Countdown",
        "Real-time Wishes",
        "Interactive Quiz",
        "M-Pesa Integration",
      ],
      github: "https://github.com/mamoshi572/birthday-project",
      problem:
        "Traditional birthday celebrations are limited by geography and lack interactive engagement.",
      solution:
        "Built a full-stack interactive platform with real-time features accessible from anywhere.",
      results: [
        "400+ real-time wishes",
        "85% user engagement",
        "Successful M-Pesa integrations",
      ],
      timeline: "2 weeks",
      challenges: [
        "Real-time sync",
        "M-Pesa API integration",
        "Performance optimization",
      ],
      role: "Full Stack Developer & Project Architect",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Soma Analytics Dashboard",
      description:
        "Real-time Kenyan business analytics dashboard with local context and KES currency.",
      category: "Full Stack",
      tech: ["Next.js 14", "TypeScript", "React", "CSS-in-JS", "Vercel"],
      status: "Live",
      link: "https://soma-analytics.vercel.app",
      emoji: "📊",
      features: [
        "Real-time Analytics",
        "KES Currency",
        "Nairobi Timezone",
        "Interactive Charts",
      ],
      github: "https://github.com/mamoshi572/soma-analytics",
      problem:
        "Kenyan businesses lacked real-time analytics tools with local context.",
      solution:
        "Custom analytics dashboard specifically for Kenyan enterprises.",
      results: ["<1s latency", "KES integration", "Timezone-aware reporting"],
      timeline: "3 weeks",
      challenges: [
        "Data synchronization",
        "Currency formatting",
        "Timezone handling",
      ],
      role: "Full Stack Developer & Data Visualization",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Ashen Bites Website",
      description:
        "Authentic Kenyan Street Food platform with modern e-commerce functionality.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript", "HTML5", "Netlify"],
      status: "Live",
      link: "https://cool-pony-d2b3a5.netlify.app",
      emoji: "🍟",
      features: ["Online Ordering", "Menu Management", "Responsive Design"],
      github: "#",
      problem:
        "Street food businesses lacked digital presence and online ordering.",
      solution: "Modern e-commerce platform for Kenyan street food.",
      results: [
        "40% increase in orders",
        "Expanded customer reach",
        "Streamlined management",
      ],
      timeline: "2 weeks",
      challenges: [
        "UX for beginners",
        "Slow internet optimization",
        "Mobile-first design",
      ],
      role: "Full Stack Developer & UI/UX Designer",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Styles N Tunes",
      description:
        "Platform showcasing intersection of urban streetwear and music culture.",
      category: "Frontend",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://stylen-tunesrw.vercel.app",
      emoji: "👕",
      features: ["Product Showcase", "Music Integration", "E-commerce"],
      github: "#",
      problem:
        "Streetwear brands needed platform integrating fashion with music culture.",
      solution:
        "Dynamic platform combining product showcases with music integration.",
      results: [
        "Unique brand experience",
        "Increased engagement",
        "Artist collaborations",
      ],
      timeline: "3 weeks",
      challenges: [
        "Music streaming integration",
        "Visual design",
        "Exclusive drops",
      ],
      role: "Frontend Developer & UI Designer",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "GreenLeaf Dispensary",
      description:
        "Premium cannabis e-commerce platform with inventory management.",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      link: "https://cannabis-dispensar.vercel.app",
      emoji: "🌿",
      features: ["E-commerce", "User Authentication", "Payment Gateway"],
      github: "#",
      problem:
        "Cannabis dispensaries needed compliant, secure e-commerce platform.",
      solution:
        "Full-stack platform with age verification and inventory management.",
      results: [
        "Secure authentication",
        "Real-time inventory",
        "Compliant payments",
      ],
      timeline: "4 weeks",
      challenges: [
        "Age verification",
        "Inventory sync",
        "Regulatory compliance",
      ],
      role: "Full Stack Developer & Security Specialist",
      color: "from-lime-500 to-green-500",
    },
    {
      title: "AgriInfo Offline App",
      description:
        "Offline-first agricultural information platform for farmers.",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      status: "Live",
      link: "https://agri-info-chi.vercel.app",
      emoji: "🌾",
      features: ["Offline First", "Data Visualization", "Real-time Updates"],
      github: "#",
      problem:
        "Farmers in remote areas needed agricultural info that works offline.",
      solution:
        "Offline-first PWA with data visualization and background sync.",
      results: [
        "Offline functionality",
        "Data visualization",
        "Background sync",
      ],
      timeline: "5 weeks",
      challenges: ["Offline storage", "Sync logic", "Performance optimization"],
      role: "Full Stack Developer & Data Visualization",
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Modeling & Services Portfolio",
      description:
        "Dynamic portfolio for dual-skill professional in fashion and services.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript", "HTML5", "Vercel"],
      status: "Live",
      link: "https://irene-portfolio-alpha.vercel.app",
      emoji: "💼",
      features: ["Portfolio Showcase", "Service Catalog", "Responsive Design"],
      github: "#",
      problem:
        "Dual-professional needed portfolio showcasing both fashion and services.",
      solution: "Dual-purpose portfolio with cohesive branding.",
      results: [
        "Cohesive branding",
        "Increased inquiries",
        "Professional presentation",
      ],
      timeline: "2 weeks",
      challenges: [
        "Dual domain design",
        "Work organization",
        "Brand credibility",
      ],
      role: "Full Stack Developer & Brand Designer",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "FinTech Mobile Application",
      description: "Cross-platform mobile app for financial management.",
      category: "Mobile Development",
      tech: ["React Native", "TypeScript", "Firebase", "GraphQL"],
      status: "In Development",
      link: "#",
      emoji: "📱",
      features: ["Biometric Auth", "Real-time Data", "Cross Platform"],
      github: "#",
      problem: "Users needed secure mobile app for financial management.",
      solution:
        "React Native app with biometric authentication and real-time data.",
      results: ["Biometric security", "Real-time updates", "Cross-platform"],
      timeline: "6+ weeks",
      challenges: [
        "Secure authentication",
        "Data sync",
        "Cross-platform testing",
      ],
      role: "Mobile Developer & Security Architect",
      color: "from-rose-500 to-pink-500",
    },
  ];

  // All available categories from projects
  const allCategories = ["All", ...new Set(projects.map((p) => p.category))];

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // State for case study modal
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Count projects per category
  const categoryCounts: Record<string, number> = {};
  allCategories.forEach((category) => {
    if (category === "All") {
      categoryCounts[category] = projects.length;
    } else {
      categoryCounts[category] = projects.filter(
        (p) => p.category === category,
      ).length;
    }
  });

  // Open case study modal
  const openCaseStudy = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close case study modal
  const closeCaseStudy = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeCaseStudy();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 py-12 md:py-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-500/20">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium gradient-text">
              Featured Projects
            </span>
            <Sparkles className="w-4 h-4 text-secondary-500" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gradient-text text-shadow-lg">
            Digital{" "}
            <span className="relative">
              Creations
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Where{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              innovation
            </span>{" "}
            meets{" "}
            <span className="font-semibold text-secondary-600 dark:text-secondary-400">
              execution
            </span>{" "}
            — transforming ideas into impactful digital experiences
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: <Trophy className="w-5 h-5" />,
                value: `${projects.length}+`,
                label: "Projects",
                color: "text-yellow-500",
              },
              {
                icon: <Target className="w-5 h-5" />,
                value: "100%",
                label: "Success Rate",
                color: "text-green-500",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                value: "5+",
                label: "Years Exp",
                color: "text-blue-500",
              },
              {
                icon: <Rocket className="w-5 h-5" />,
                value: "∞",
                label: "Innovation",
                color: "text-purple-500",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} bg-opacity-20 mb-3`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filtering Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-primary-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for projects, technologies, or features..."
                  className="w-full pl-12 pr-12 py-4 bg-white/50 dark:bg-gray-800/50 border-2 border-primary-500/20 rounded-2xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary-500" />
                  Filter by Category
                </h3>
                <span className="px-3 py-1 bg-primary-500/10 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  {filteredProjects.length} projects
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group relative px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105"
                        : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/50 hover:scale-105"
                    }`}
                  >
                    <span className="relative z-10">{category}</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      {categoryCounts[category]}
                    </span>
                    {selectedCategory === category && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-md opacity-50"></div>
                    )}
                  </button>
                ))}
              </div>

              {(selectedCategory !== "All" || searchQuery) && (
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2"
                  >
                    Clear all filters
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`projects-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative glass-card rounded-3xl overflow-hidden hover-lift h-full">
                    {/* Project Header */}
                    <div
                      className={`p-8 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="text-5xl">{project.emoji}</div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                              {project.category}
                            </span>
                            <span
                              className={`px-3 py-1 text-sm font-medium rounded-full ${
                                project.status === "Live"
                                  ? "bg-green-500/20 text-green-100"
                                  : "bg-yellow-500/20 text-yellow-100"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition">
                          {project.title}
                        </h3>

                        <p className="text-white/80 mb-6 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-4 h-4 text-primary-500" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Key Features
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-primary-500/5 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-500/20"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{project.features.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-4 h-4 text-secondary-500" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Tech Stack
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gradient-to-r from-secondary-500/10 to-secondary-500/5 text-secondary-700 dark:text-secondary-300 text-xs rounded-full border border-secondary-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {project.timeline}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            {project.role.split("&")[0]}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => openCaseStudy(project)}
                          className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg"
                        >
                          <Palette className="w-4 h-4" />
                          Case Study
                        </button>

                        <div className="flex gap-2">
                          {project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition flex items-center justify-center group/link"
                              title="Live Demo"
                            >
                              <Eye
                                size={18}
                                className="group-hover/link:scale-110 transition-transform"
                              />
                            </a>
                          )}
                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition flex items-center justify-center group/link"
                              title="View Code"
                            >
                              <Github
                                size={18}
                                className="group-hover/link:scale-110 transition-transform"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Search className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-xl transition-all hover:shadow-lg"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient-x"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-12 text-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16 blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Something{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent-200">
                  Amazing?
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Let's collaborate to transform your vision into a stunning
                digital reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start a Project
                </a>
                <a
                  href="mailto:benshomwiti@gmail.com"
                  className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Let's Chat
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          isOpen={isModalOpen}
          onClose={closeCaseStudy}
          project={selectedProject}
        />
      )}
    </div>
  );
}
