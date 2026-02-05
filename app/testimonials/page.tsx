"use client";

import { motion } from "framer-motion";
import { Quote, Star, Users, Clock, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      content:
        "Benson transformed our e-commerce platform with exceptional attention to detail. The user engagement increased by 40% after his redesign and optimization.",
      author: "Alex Kamau",
      role: "CEO, Ashen Bites",
      company: "Ashen Bites",
      rating: 5,
      project: "Ashen Bites Website",
      link: "https://cool-pony-d2b3a5.netlify.app",
    },
    {
      content:
        "The analytics dashboard Benson built gave us real-time insights we desperately needed. His understanding of Kenyan business context was invaluable.",
      author: "Sarah Wanjiku",
      role: "Operations Director",
      company: "Soma Analytics",
      rating: 5,
      project: "Soma Analytics Dashboard",
      link: "https://soma-analytics.vercel.app",
    },
    {
      content:
        "Working with Benson was seamless. He delivered our streetwear platform ahead of schedule with features we didn't even think were possible.",
      author: "Marcus Ochieng",
      role: "Founder",
      company: "Styles N Tunes",
      rating: 5,
      project: "Styles N Tunes Platform",
      link: "https://stylen-tunesrw.vercel.app",
    },
    {
      content:
        "Benson's full-stack expertise saved us months of development time. His architecture decisions have made our platform incredibly scalable.",
      author: "David Mwangi",
      role: "CTO",
      company: "AgriTech Solutions",
      rating: 5,
      project: "AgriInfo Offline App",
      link: "https://agri-info-chi.vercel.app",
    },
    {
      content:
        "As a modeling agency, we needed a portfolio that stood out. Benson delivered beyond expectations with a design that perfectly captures our brand.",
      author: "Irene Wambui",
      role: "Model & Services Director",
      company: "Irene Portfolio",
      rating: 5,
      project: "Modeling Portfolio",
      link: "https://irene-portfolio-alpha.vercel.app",
    },
    {
      content:
        "The birthday celebration website was a technical marvel. Real-time features, M-Pesa integration, and flawless performance under heavy traffic.",
      author: "Festus Kiprotich",
      role: "Event Coordinator",
      rating: 5,
      project: "Interactive Birthday Platform",
      link: "https://birthday-project-phi.vercel.app",
    },
  ];

  const stats = [
    {
      value: "100%",
      label: "Client Retention",
      icon: <Users className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: <Star className="w-5 h-5" />,
      color: "text-yellow-600",
    },
    {
      value: "24h",
      label: "Avg Response Time",
      icon: <Clock className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      value: "30+",
      label: "Projects Delivered",
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full mb-6">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by{" "}
            <span className="text-blue-600 dark:text-blue-400">Clients</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's what startups, enterprises, and collaborators say about
            working with me
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

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                <Quote size={24} />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Project Link */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* View Project Link */}
              <div className="mt-6">
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  View Project
                  <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Be My Next Success Story?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the growing list of satisfied clients who have transformed
            their ideas into exceptional digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <a
              href="mailto:benshomwiti@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
