"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Clock,
  Users,
  Target,
  CheckCircle,
  Award,
  AlertCircle,
} from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    category: string;
    tech: string[];
    status: string;
    link: string;
    emoji: string;
    features: string[];
    github: string;
    problem: string;
    solution: string;
    results: string[];
    timeline: string;
    challenges: string[];
    role: string;
  };
}

export default function CaseStudyModal({
  isOpen,
  onClose,
  project,
}: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition"
                >
                  <X size={24} />
                </button>

                {/* Modal content */}
                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{project.emoji}</div>
                        <div>
                          <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
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

                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-blue-100">{project.description}</p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock
                            className="text-blue-600 dark:text-blue-400"
                            size={18}
                          />
                          <span className="font-semibold text-blue-700 dark:text-blue-300">
                            Timeline
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.timeline}
                        </p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Users
                            className="text-purple-600 dark:text-purple-400"
                            size={18}
                          />
                          <span className="font-semibold text-purple-700 dark:text-purple-300">
                            Role
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.role}
                        </p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Target
                            className="text-green-600 dark:text-green-400"
                            size={18}
                          />
                          <span className="font-semibold text-green-700 dark:text-green-300">
                            Features
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.features.length} implemented
                        </p>
                      </div>
                    </div>

                    {/* Case Study Sections */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <AlertCircle className="text-red-500" size={22} />
                          The Challenge
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 bg-red-50 dark:bg-red-900/10 p-4 rounded-lg mb-6">
                          {project.problem}
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Target className="text-green-500" size={22} />
                          The Solution
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircle className="text-blue-500" size={22} />
                          Key Results
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Award className="text-yellow-500" size={22} />
                          Challenges Overcome
                        </h3>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
