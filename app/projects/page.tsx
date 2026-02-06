"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Filter, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import CaseStudyModal from "./components/CaseStudyModal";

export default function ProjectsPage() {
  // All projects data with case study fields
  const projects = [
    {
      title: "Interactive Birthday Celebration",
      description:
        "A dynamic, full-stack birthday countdown and celebration website featuring real-time countdown, live wish board, interactive games, and integrated M-Pesa gifting—built for my own birthday!",
      category: "Full Stack",
      tech: ["Next.js 15", "TypeScript", "React", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://birthday-project-phi.vercel.app",
      emoji: "🎉🎂",
      features: [
        "Live Countdown",
        "Real-time Wishes",
        "Interactive Quiz",
        "M-Pesa Integration",
        "Responsive Design",
      ],
      github: "https://github.com/mamoshi572/birthday-project",
      // Case study fields
      problem:
        "Traditional birthday celebrations are limited by geography and lack interactive engagement. Friends and family from different locations couldn't participate in real-time celebrations.",
      solution:
        "Built a full-stack interactive platform with real-time features including live countdown, wish board with instant updates, interactive games, and M-Pesa integration for virtual gifting - all accessible from anywhere in the world.",
      results: [
        "400+ real-time wishes during the celebration",
        "85% user engagement with interactive features",
        "Successful M-Pesa integrations for virtual gifts",
        "Mobile-responsive design with 99% uptime",
      ],
      timeline: "2 weeks (Planning to Deployment)",
      challenges: [
        "Real-time synchronization across multiple users",
        "M-Pesa API integration for Kenyan payments",
        "Performance optimization for high traffic",
        "Mobile-first responsive design implementation",
      ],
      role: "Full Stack Developer & Project Architect",
    },
    {
      title: "Soma Analytics Dashboard",
      description:
        "Real-time Kenyan business analytics dashboard with interactive charts, revenue tracking, and transaction management. Built specifically for Kenyan enterprises with local context and KES currency.",
      category: "Full Stack",
      tech: [
        "Next.js 14",
        "TypeScript",
        "React",
        "CSS-in-JS",
        "Vercel",
        "GitHub Actions",
      ],
      status: "Live",
      link: "https://soma-analytics.vercel.app",
      emoji: "📊🇰🇪",
      features: [
        "Real-time Analytics",
        "KES Currency",
        "Nairobi Timezone",
        "Responsive Design",
        "Interactive Charts",
      ],
      github: "https://github.com/mamoshi572/soma-analytics",
      // Case study fields
      problem:
        "Kenyan businesses lacked real-time analytics tools that understood local context - KES currency, Nairobi timezone, and local business cycles were not properly handled by international solutions.",
      solution:
        "Developed a custom analytics dashboard specifically for Kenyan enterprises with KES currency support, Nairobi timezone handling, and visualizations tailored to local business metrics and reporting cycles.",
      results: [
        "Real-time data processing with <1 second latency",
        "KES currency integration with proper formatting",
        "Timezone-aware reporting for Nairobi business hours",
        "Interactive charts with local context",
      ],
      timeline: "3 weeks",
      challenges: [
        "Real-time data synchronization from multiple sources",
        "KES currency formatting and calculations",
        "Timezone handling for accurate reporting",
        "Performance optimization for large datasets",
      ],
      role: "Full Stack Developer & Data Visualization Specialist",
    },
    {
      title: "Ashen Bites Website",
      description:
        "Authentic Kenyan Street Food (Smochas, Mutura, Nyama Choma). A vibrant online platform showcasing traditional street food with modern e-commerce functionality.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript (ES7+)", "HTML5", "Netlify"],
      status: "Live",
      link: "https://cool-pony-d2b3a5.netlify.app",
      emoji: "🍟",
      features: ["Online Ordering", "Menu Management", "Responsive Design"],
      github: "#",
      // Case study fields
      problem:
        "Traditional street food businesses in Kenya lacked digital presence and online ordering capabilities, limiting their reach to only local walk-in customers.",
      solution:
        "Developed a modern e-commerce platform specifically for Kenyan street food, with online ordering, menu management, and mobile-first responsive design to reach wider audiences.",
      results: [
        "40% increase in online orders within first month",
        "Expanded customer reach beyond local area",
        "Streamlined menu management for the business owner",
        "Mobile-optimized for customers on the go",
      ],
      timeline: "2 weeks",
      challenges: [
        "Creating intuitive UX for first-time online food orderers",
        "Optimizing for slow internet connections in some areas",
        "Mobile-first design for predominantly mobile users",
        "Simple yet effective menu management system",
      ],
      role: "Full Stack Developer & UI/UX Designer",
    },
    {
      title: "Styles N Tunes",
      description:
        "A vibrant platform showcasing the intersection of urban streetwear and music culture, featuring exclusive drops and artist collaborations.",
      category: "Frontend",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Live",
      link: "https://stylen-tunesrw.vercel.app",
      emoji: "👕🎵",
      features: ["Product Showcase", "Music Integration", "E-commerce"],
      github: "#",
      // Case study fields
      problem:
        "Streetwear brands needed a platform that could seamlessly integrate fashion with music culture to create immersive brand experiences for their audience.",
      solution:
        "Built a dynamic platform combining product showcases with music integration, artist collaborations, and exclusive drop announcements to create a cultural hub for streetwear enthusiasts.",
      results: [
        "Created a unique brand experience combining fashion and music",
        "Increased user engagement through integrated music features",
        "Successful showcase of exclusive artist collaborations",
        "Responsive design optimized for fashion-forward audience",
      ],
      timeline: "3 weeks",
      challenges: [
        "Integrating music streaming with e-commerce functionality",
        "Creating immersive visuals for fashion products",
        "Building hype around exclusive drops and releases",
        "Mobile experience for fashion-forward young audience",
      ],
      role: "Frontend Developer & UI Designer",
    },
    {
      title: "GreenLeaf Dispensary",
      description:
        "Premium cannabis e-commerce platform with inventory management, user authentication, and secure payment processing.",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "Live",
      link: "https://cannabis-dispensar.vercel.app",
      emoji: "🌿",
      features: ["E-commerce", "User Authentication", "Payment Gateway"],
      github: "#",
      // Case study fields
      problem:
        "Cannabis dispensaries needed a compliant, secure e-commerce platform with age verification, inventory tracking, and secure payment processing in a regulated industry.",
      solution:
        "Developed a full-stack e-commerce platform with age verification, real-time inventory management, secure user authentication, and integrated payment processing compliant with industry regulations.",
      results: [
        "Secure user authentication with age verification",
        "Real-time inventory tracking and management",
        "Integrated payment processing with compliance features",
        "Responsive design for both desktop and mobile users",
      ],
      timeline: "4 weeks",
      challenges: [
        "Implementing age verification and compliance features",
        "Real-time inventory synchronization",
        "Secure payment processing in regulated industry",
        "User-friendly interface for diverse customer base",
      ],
      role: "Full Stack Developer & Security Specialist",
    },
    {
      title: "AgriInfo Offline App",
      description:
        "A revolutionary offline-first agricultural information platform providing farmers with real-time data and analytics.",
      category: "Data Visualization",
      tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker", "Redis"],
      status: "Live",
      link: "https://agri-info-chi.vercel.app",
      emoji: "📊",
      features: ["Offline First", "Data Visualization", "Real-time Updates"],
      github: "#",
      // Case study fields
      problem:
        "Farmers in remote areas with limited internet access needed agricultural information, market prices, and weather data that could work offline and sync when connectivity was available.",
      solution:
        "Built an offline-first Progressive Web App (PWA) with data visualization capabilities, local data storage, and background synchronization to provide critical agricultural information regardless of connectivity.",
      results: [
        "Offline functionality for areas with poor connectivity",
        "Data visualization of market trends and weather patterns",
        "Background synchronization when internet available",
        "Mobile-optimized for farmers in the field",
      ],
      timeline: "5 weeks",
      challenges: [
        "Implementing robust offline data storage",
        "Background synchronization logic",
        "Data visualization for non-technical users",
        "Optimizing performance for low-end mobile devices",
      ],
      role: "Full Stack Developer & Data Visualization Engineer",
    },
    {
      title: "Modeling & Services Portfolio",
      description:
        "Dynamic portfolio for a dual-skill professional in fashion modeling and client services. Features clean interface and brand cohesion.",
      category: "Full Stack",
      tech: ["Next.js", "JavaScript (ES7+)", "HTML5", "Vercel"],
      status: "Live",
      link: "https://irene-portfolio-alpha.vercel.app",
      emoji: "💼",
      features: ["Portfolio Showcase", "Service Catalog", "Responsive Design"],
      github: "#",
      // Case study fields
      problem:
        "A dual-professional needed a portfolio that could effectively showcase both fashion modeling work and client services business in a cohesive, professional manner.",
      solution:
        "Created a dual-purpose portfolio with separate sections for modeling portfolio and professional services, using cohesive branding and responsive design to appeal to both fashion and business clients.",
      results: [
        "Cohesive branding across two different professional domains",
        "Increased booking inquiries for both modeling and services",
        "Professional presentation appealing to diverse client types",
        "Mobile-optimized portfolio accessible anywhere",
      ],
      timeline: "2 weeks",
      challenges: [
        "Creating cohesive design for two different professional domains",
        "Showcasing diverse work in an organized manner",
        "Balancing visual appeal with professional credibility",
        "Responsive design for portfolio viewing on all devices",
      ],
      role: "Full Stack Developer & Brand Designer",
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
      emoji: "📱",
      features: ["Biometric Auth", "Real-time Data", "Cross Platform"],
      github: "#",
      // Case study fields
      problem:
        "Users needed a secure, cross-platform mobile app for financial management with biometric authentication and real-time market data access from their mobile devices.",
      solution:
        "Developing a React Native mobile application with biometric authentication, real-time financial data integration, and cross-platform compatibility for both iOS and Android users.",
      results: [
        "Biometric authentication for enhanced security",
        "Real-time financial data and market updates",
        "Cross-platform compatibility (iOS & Android)",
        "Offline functionality for basic features",
      ],
      timeline: "Ongoing (6+ weeks)",
      challenges: [
        "Implementing secure biometric authentication",
        "Real-time data synchronization across platforms",
        "Cross-platform compatibility and testing",
        "Performance optimization for financial data processing",
      ],
      role: "Mobile Developer & Security Architect",
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

  // Filter projects based on selected category and search
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

  // Fix for dynamic color classes in stats section
  const getColorClass = (color: string, isDark: boolean = false) => {
    const colorMap: Record<string, string> = {
      blue: isDark ? "dark:text-blue-400" : "text-blue-600",
      green: isDark ? "dark:text-green-400" : "text-green-600",
      purple: isDark ? "dark:text-purple-400" : "text-purple-600",
    };
    return colorMap[color] || "text-blue-600";
  };

  // Open case study modal
  const openCaseStudy = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Close case study modal
  const closeCaseStudy = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeCaseStudy();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Solutions{" "}
            <span className="text-blue-600 dark:text-blue-400">Engineered</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selected works showcasing technical expertise and problem-solving
            across different domains
          </p>
        </motion.div>

        {/* Filtering Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by title, description, or technology..."
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 dark:text-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
                <Filter size={20} />
                {showFilters ? "Hide Filters" : "Show Filters"}
                <span className="px-2 py-1 bg-white/20 rounded text-sm">
                  {selectedCategory === "All"
                    ? projects.length
                    : filteredProjects.length}{" "}
                  projects
                </span>
              </button>
            </div>

            {/* Category Filters */}
            <div className={`${showFilters ? "block" : "hidden"} md:block`}>
              <div className="flex flex-wrap gap-2 justify-center">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                    <span
                      className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                        selectedCategory === category
                          ? "bg-white/20"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    >
                      {categoryCounts[category]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Filters Display */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Showing {filteredProjects.length} of {projects.length}{" "}
                    projects
                  </span>
                  {(selectedCategory !== "All" || searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition"
                    >
                      Clear filters
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Sort Options */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Sorted by: <span className="font-medium">Recent</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`projects-${selectedCategory}-${searchQuery}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Header with Emoji */}
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{project.emoji}</div>
                        <div>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          project.status === "Live"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm rounded-full">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-500 text-xs rounded-full">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 bg-gray-50 dark:bg-gray-900/50">
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Case Study Button */}
                      <button
                        onClick={() => openCaseStudy(project)}
                        className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Case Study
                      </button>

                      {/* Demo & GitHub Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center justify-center gap-2 group/btn"
                        >
                          <Eye size={18} />
                          Live Demo
                          <ExternalLink
                            size={16}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </a>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition flex items-center justify-center"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
              <div className="w-24 h-24 mx-auto mb-6 text-gray-400">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              By the{" "}
              <span className="text-blue-600 dark:text-blue-400">Numbers</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Impactful metrics from my development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: `${projects.length}+`,
                label: "Projects Completed",
                description: "Across various domains and technologies",
                color: "blue",
              },
              {
                value: "5+",
                label: "Years Experience",
                description: "Full stack development & UI/UX design",
                color: "green",
              },
              {
                value: "100%",
                label: "Client Satisfaction",
                description: "Consistently delivering quality work",
                color: "purple",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 text-center"
              >
                <div
                  className={`text-5xl font-bold mb-2 ${getColorClass(stat.color)} dark:${getColorClass(stat.color, true).split(":")[1]}`}
                >
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Have an idea you want to bring to life? Let's discuss how we can
            work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Get In Touch
            </a>
            <a
              href="mailto:benshomwiti@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Email Me
            </a>
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
