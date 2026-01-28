"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Palette,
  Database,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Welcome Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200 dark:border-gray-700">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Open to Remote/on-site/Hybrid Opportunities
                  </span>
                </div>

                {/* Name & Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  Benson{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Mwiti
                  </span>
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <Code
                    className="text-blue-500 dark:text-blue-400"
                    size={28}
                  />
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
                    Full Stack Engineer & UI/UX Designer
                  </h2>
                  <Palette
                    className="text-purple-500 dark:text-purple-400"
                    size={28}
                  />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                >
                  Crafting exceptional digital experiences through clean code,
                  intuitive design, and scalable architecture.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="mailto:hello@bensonmwiti.com"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-3 gap-4 mb-10"
                >
                  {[
                    { value: "50+", label: "Projects", color: "blue" },
                    { value: "5+", label: "Years Exp", color: "purple" },
                    { value: "100%", label: "Satisfaction", color: "green" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      <div
                        className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/projects"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white font-medium rounded-lg hover:shadow-xl transition-all shadow flex items-center justify-center gap-2"
                  >
                    <Database size={20} />
                    check out my projects
                    <ArrowRight size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow flex items-center justify-center gap-2"
                  >
                    <Palette size={20} />
                    Contact Me
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Main Profile Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-gradient-xy">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src="/images/profile/profile-main.jpg"
                        alt="Benson Mwiti - Full Stack Developer & UI/UX Designer"
                        fill
                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-8"
                  >
                    {[
                      {
                        tech: "React",
                        color:
                          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                      },
                      {
                        tech: "Next.js",
                        color:
                          "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
                      },
                      {
                        tech: "TypeScript",
                        color:
                          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                      },
                      {
                        tech: "Node.js",
                        color:
                          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                      },
                    ].map((item, i) => (
                      <div
                        key={item.tech}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${i * 90}deg) translateX(160px) rotate(-${i * 90}deg)`,
                        }}
                      >
                        <div
                          className={`px-3 py-1 rounded-full shadow-lg text-sm font-medium ${item.color}`}
                        >
                          {item.tech}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        5+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section - Keep as before */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        {/* ... rest of your projects code ... */}
      </section>

      {/* Add to your global CSS for animations */}
      <style jsx global>{`
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
