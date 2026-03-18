"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
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
import { useState, useEffect, useCallback, useMemo } from "react";
import CaseStudyModal from "./components/CaseStudyModal";
import Image from "next/image";

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  status: string;
  link: string;
  emoji: string;
  features: string[];
  github?: string;
  problem?: string;
  solution?: string;
  results?: string[];
  timeline: string;
  challenges?: string[];
  role: string;
  color: string;
  bgImage?: string;
}

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Tenda - Leadership Scorecard",
      description:
        "Accountability platform for Kenyan leaders. Track achievements, promises, failures, and vote on whether leaders deserve another term.",
      category: "Full Stack",
      tech: ["Next.js 15", "TypeScript", "MongoDB", "Tailwind CSS", "NextAuth"],
      status: "In Development",
      link: "https://tenda.vercel.app",
      emoji: "🗳️",
      features: [
        "Leader profiles with promise tracking",
        "Citizen voting system (Yes/No for another term)",
        "County-wise performance data",
        "Real-time rating aggregation",
        "Achievements & failures timeline",
      ],
      github: "https://github.com/mamoshi572/tenda",
      problem:
        "Kenyans lack a centralized platform to track leader performance and make informed voting decisions based on actual achievements rather than empty promises.",
      solution:
        "Built Tenda - a Swahili word meaning 'deeds' - creating a transparent scorecard where citizens can view promises made vs delivered, and vote on whether leaders deserve another term.",
      results: [
        "Live platform with 5 counties and 50+ leaders profiled",
        "100+ citizen votes recorded",
        "Featured on tech blogs for civic tech innovation",
      ],
      timeline: "4 weeks",
      challenges: [
        "Data verification and integrity",
        "Preventing duplicate voting",
        "Making complex political data easily digestible",
      ],
      role: "Full Stack Developer & Product Owner",
      color: "from-indigo-500 to-orange-500",
      bgImage: "/images/projects/tenda-bg.jpg",
    },
    {
      title: "Soma Analytics Dashboard",
      description:
        "Real-time Kenyan Business Intelligence Dashboard with interactive metrics, revenue tracking, and transaction monitoring. Features Nairobi time updates, dark mode, and comprehensive data visualization.",
      category: "Full Stack",
      tech: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Framer Motion",
        "Lucide React",
      ],
      status: "Live",
      link: "https://https://soma-analytics-dashboard.vercel.app",
      emoji: "📊",
      features: [
        "Real-time Nairobi time updates",
        "Interactive metric cards with sparklines",
        "Revenue charts with target comparisons",
        "Transaction table with search & filters",
        "Dark/light mode toggle",
        "Auto-refresh functionality",
        "Export options (CSV, PDF, Excel)",
        "Kenyan flag themed design",
      ],
      github: "https://github.com/mamoshi572/soma-analytics",
      problem:
        "Kenyan businesses lack intuitive, real-time dashboards to monitor key performance metrics with local context (KES currency, Nairobi time, M-Pesa transactions).",
      solution:
        "Built a comprehensive analytics dashboard with Kenyan-centric features including Shilling formatting, Nairobi timezone, and M-Pesa transaction examples. Designed with Kenyan flag colors (green, black, red) and local business context.",
      results: [
        "Live dashboard with 8+ interactive metrics",
        "Real-time data visualization with 8-month revenue tracking",
        "Transaction monitoring with 8 sample Kenyan customers",
        "Fully responsive design working on all devices",
      ],
      timeline: "2 weeks",
      challenges: [
        "Implementing real-time clock with Nairobi timezone",
        "Creating responsive charts that work on mobile",
        "Designing a cohesive theme with Kenyan flag colors",
        "TypeScript type safety with Recharts library",
      ],
      role: "Full Stack Developer & UI Designer",
      color: "from-green-500 via-black to-red-500",
      bgImage: "/images/projects/soma-bg.jpg",
    },
    {
      title: "Ashen Bites Website",
      description:
        "Authentic Kenyan Street Food platform with modern e-commerce functionality.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript", "HTML5", "CSS3"],
      status: "Live",
      link: "https://cool-pony-d2b3a5.netlify.app",
      emoji: "🍟",
      features: [
        "Online Ordering",
        "Menu Management",
        "Responsive Design",
        "Payment Integration",
      ],

         github: "https://github.com/mamoshi572/mamoshi-kitchen",
      timeline: "2 weeks",
      role: "Full Stack Developer",
      color: "from-orange-500 to-red-500",
      bgImage: "/images/projects/ashen-bites-bg.jpg",
    },
    {
      title: "Styles N Tunes",
      description:
        "Platform showcasing intersection of urban streetwear and music culture.",
      category: "Frontend",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "Live",
      link: "#",
      emoji: "👕",
      features: [
        "Product Showcase",
        "Music Integration",
        "E-commerce",
        "Artist Collaborations",
      ],
      timeline: "3 weeks",
      role: "Frontend Developer",
      color: "from-purple-500 to-pink-500",
      bgImage: "/images/projects/styles-tunes-bg.jpg",
    },
    {
      title: "GreenLeaf Dispensary",
      description:
        "Premium cannabis e-commerce platform with inventory management.",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      status: "Live",
      link: "#",
      emoji: "🌿",
      features: [
        "E-commerce",
        "User Authentication",
        "Payment Gateway",
        "Inventory Management",
      ],
      timeline: "4 weeks",
      role: "Full Stack Developer",
      color: "from-green-500 to-emerald-500",
      bgImage: "/images/projects/greenleaf-bg.jpg",
    },
    {
      title: "AgriInfo Offline App",
      description:
        "Offline-first agricultural information platform for farmers.",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Python", "IndexedDB", "Flask"],
      status: "Live",
      link: "#",
      emoji: "🌾",
      features: [
        "Offline First",
        "Data Visualization",
        "Real-time Updates",
        "Weather Integration",
      ],
      timeline: "5 weeks",
      role: "Full Stack Developer",
      color: "from-green-600 to-teal-500",
      bgImage: "/images/projects/agriinfo-bg.jpg",
    },
    {
      title: "Modeling & Services Portfolio",
      description:
        "Dynamic portfolio for dual-skill professional in fashion and services.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
      status: "Live",
      link: "#",
      emoji: "💼",
      features: [
        "Portfolio Showcase",
        "Service Catalog",
        "Responsive Design",
        "Booking System",
      ],
      timeline: "2 weeks",
      role: "Full Stack Developer",
      color: "from-blue-500 to-cyan-500",
      bgImage: "/images/projects/modeling-bg.jpg",
    },
    {
      title: "FinTech Mobile Application",
      description: "Cross-platform mobile app for financial management.",
      category: "Mobile Development",
      tech: ["React Native", "TypeScript", "Firebase", "Redux"],
      status: "In Development",
      link: "#",
      emoji: "📱",
      features: [
        "Biometric Auth",
        "Real-time Data",
        "Cross Platform",
        "Budget Tracking",
      ],
      timeline: "6+ weeks",
      role: "Mobile Developer",
      color: "from-indigo-500 to-blue-500",
      bgImage: "/images/projects/fintech-bg.jpg",
    },
    {
      title: "EcoTrack Sustainability App",
      description:
        "Mobile application helping users track and reduce their carbon footprint.",
      category: "Mobile Development",
      tech: ["React Native", "TypeScript", "Firebase", "D3.js"],
      status: "Live",
      link: "#",
      emoji: "🌱",
      features: [
        "Carbon Footprint Calculator",
        "Personalized Tips",
        "Progress Tracking",
        "Social Sharing",
      ],
      timeline: "5 weeks",
      role: "Mobile Developer",
      color: "from-emerald-500 to-green-500",
      bgImage: "/images/projects/ecotrack-bg.jpg",
    },
    {
      title: "Portfolio 2024",
      description:
        "Personal portfolio website showcasing projects and skills with modern design.",
      category: "Frontend",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      status: "Live",
      link: "https://benson-portfolio-mu.vercel.app",
      emoji: "🚀",
      features: [
        "Project Showcase",
        "Case Studies",
        "Interactive UI",
        "Dark Mode",
      ],
      timeline: "3 weeks",
      role: "Designer & Developer",
      color: "from-primary-500 to-secondary-500",
      bgImage: "/images/projects/portfolio-bg.jpg",
    },
  ];

  // Memoized categories and counts
  const { allCategories, categoryCounts } = useMemo(() => {
    const cats = ["All", ...new Set(projects.map((p) => p.category))];
    const counts: Record<string, number> = {
      All: projects.length,
    };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return { allCategories: cats, categoryCounts: counts };
  }, [projects]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
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
  }, [projects, selectedCategory, searchQuery]);

  const openCaseStudy = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeCaseStudy = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategory("All");
    setSearchQuery("");
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeCaseStudy();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, closeCaseStudy]);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🚀</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Loading Projects...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 py-12 md:py-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float animation-delay-4000" />
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
            <span className="text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <Sparkles className="w-4 h-4 text-secondary-500" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Creations
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full" />
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
                className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-gray-700/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} bg-opacity-20 mb-3`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
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
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-3xl p-6 md:p-8 border border-white/20 dark:border-gray-700/20">
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Clear search"
                    title="Clear search"
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
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
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
                    aria-label={`Filter by ${category} category`}
                    title={`Show ${category} projects`}
                  >
                    <span className="relative z-10">{category}</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      {categoryCounts[category] || 0}
                    </span>
                    {selectedCategory === category && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-md opacity-50 -z-10" />
                    )}
                  </button>
                ))}
              </div>

              {(selectedCategory !== "All" || searchQuery) && (
                <div className="flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-2"
                    aria-label="Clear all filters"
                    title="Clear all filters"
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
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-white/20 dark:border-gray-700/20">
                    {/* Project Header with Background Image */}
                    <div className="relative h-64 overflow-hidden">
                      {/* Background Image */}
                      {project.bgImage ? (
                        <>
                          <Image
                            src={project.bgImage}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            priority={index < 3}
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                        </>
                      ) : (
                        /* Fallback gradient if no background image */
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                        >
                          <div className="absolute inset-0 bg-black/20" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-4xl bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                            {project.emoji}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                              {project.category}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                                project.status === "Live"
                                  ? "bg-green-500/40 text-white"
                                  : "bg-yellow-500/40 text-white"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 drop-shadow-lg">
                          {project.title}
                        </h3>

                        <p className="text-sm text-white/90 line-clamp-2 drop-shadow-md">
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
                          aria-label={`View case study for ${project.title}`}
                          title={`Learn more about ${project.title}`}
                        >
                          <Palette className="w-4 h-4" />
                          Case Study
                        </button>

                        <div className="flex gap-2">
                          {project.link && project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition flex items-center justify-center group/link"
                              aria-label={`View live demo of ${project.title} (opens in new tab)`}
                              title="Live Demo"
                            >
                              <Eye
                                size={18}
                                className="group-hover/link:scale-110 transition-transform"
                              />
                            </a>
                          )}
                          {project.github && project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition flex items-center justify-center group/link"
                              aria-label={`View source code for ${project.title} (opens in new tab)`}
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20" />
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
                onClick={clearFilters}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-xl transition-all hover:shadow-lg"
                aria-label="Clear all filters"
                title="Clear all filters"
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient-x" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-12 text-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16 blur-2xl" />

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
