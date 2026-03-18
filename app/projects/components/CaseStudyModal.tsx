"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

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
    github?: string;
    problem?: string;
    solution?: string;
    results?: string[];
    timeline: string;
    challenges?: string[];
    role: string;
    color: string;
  };
}

export default function CaseStudyModal({
  isOpen,
  onClose,
  project,
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
              title="Close modal"
            >
              <X size={20} />
            </button>

            <div className="h-full overflow-y-auto">
              {/* Header with gradient */}
              <div
                className={`p-8 bg-gradient-to-br ${project.color} relative`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">{project.emoji}</span>
                    <div>
                      <h2
                        id="modal-title"
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                      >
                        {project.title}
                      </h2>
                      <p className="text-white/80 text-lg">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-xl max-w-3xl">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main content - 2 columns */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Problem & Solution */}
                    {project.problem && (
                      <section>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-red-500 rounded-full" />
                          The Problem
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </section>
                    )}

                    {project.solution && (
                      <section>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-green-500 rounded-full" />
                          The Solution
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </section>
                    )}

                    {/* Features */}
                    <section>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Zap className="text-yellow-500" size={20} />
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                      <section>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <Award className="text-yellow-500" size={20} />
                          Results & Impact
                        </h3>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                      <section>
                        <h3 className="text-xl font-bold mb-3">
                          Challenges Overcome
                        </h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">⚠️</span>
                              <span className="text-gray-700 dark:text-gray-300">
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  {/* Sidebar - 1 column */}
                  <div className="space-y-6">
                    {/* Quick Info */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="font-bold mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Timeline</p>
                            <p className="font-medium">{project.timeline}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users size={18} className="text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Role</p>
                            <p className="font-medium">{project.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{project.emoji}</span>
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p
                              className={`font-medium ${
                                project.status === "Live"
                                  ? "text-green-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              {project.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="font-bold mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-sm shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition flex items-center justify-center gap-2"
                          aria-label={`View live demo of ${project.title} (opens in new tab)`}
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl transition flex items-center justify-center gap-2"
                          aria-label={`View source code for ${project.title} (opens in new tab)`}
                          title="Source Code"
                        >
                          <Github size={18} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
