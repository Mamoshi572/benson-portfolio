"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Linkedin,
  Github,
  AlertCircle,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Validation rules
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name is too long";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 1000) return "Message is too long";
        return "";

      default:
        return "";
    }
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((field) => {
      if (field !== "projectType") {
        // projectType is optional
        const error = validateField(
          field,
          formData[field as keyof typeof formData],
        );
        if (error) newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field blur
  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(
      field,
      formData[field as keyof typeof formData],
    );
    setErrors({ ...errors, [field]: error });
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle radio change
  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, projectType: value });
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
      projectType: true,
    });

    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        document.getElementById(firstError)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Create FormData object
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);
    if (formData.projectType) {
      formDataObj.append("projectType", formData.projectType);
    }
    formDataObj.append(
      "_subject",
      `New Contact Form Submission - ${formData.name}`,
    );
    formDataObj.append("_replyto", formData.email);
    formDataObj.append(
      "_next",
      "https://benson-portfolio-flame.vercel.app/contact?success=true",
    );

    try {
      const response = await fetch("https://formspree.io/f/xdazgdpk", {
        method: "POST",
        body: formDataObj,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "", projectType: "" });
        setErrors({});
        setTouched({});

        // Reset success message after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Character counter for message
  const messageLength = formData.message.length;
  const messageMaxLength = 1000;

  // Check if form is valid for submission
  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.message.trim() &&
      !errors.name &&
      !errors.email &&
      !errors.message
    );
  };

  // Animation variants
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

  // Project types
  const projectTypes = [
    { id: "web", label: "Web App", icon: "🌐" },
    { id: "mobile", label: "Mobile App", icon: "📱" },
    { id: "design", label: "UI/UX Design", icon: "🎨" },
    { id: "consult", label: "Consultation", icon: "💡" },
  ];

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
            Let's{" "}
            <span className="text-blue-600 dark:text-blue-400">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:benshomwiti@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      benshomwiti@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+254746562072"
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                    >
                      +254 746 562 072
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/benson-mwiti-87657031b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/mamoshi572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock size={24} />
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>Currently accepting new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>Remote work available worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-300" />
                  <span>Typical response time: 30 mins - 1 hour</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle
                      size={32}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Thank you for reaching out, <strong>{formData.name}</strong>
                    ! I've received your message and will get back to you within
                    24 hours.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      📧 A confirmation email has been sent to {formData.email}
                    </p>
                    <p>⏳ Expected response time: 1-24 hours</p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                    >
                      <User size={16} />
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 dark:text-white ${
                          errors.name && touched.name
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Enter your full name"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && touched.name && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.name && touched.name && (
                      <p
                        id="name-error"
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                    >
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 dark:text-white ${
                          errors.email && touched.email
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="you@example.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && touched.email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <p
                        id="email-error"
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Project Type (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`
                            relative flex flex-col items-center p-4 border rounded-xl cursor-pointer transition-all
                            ${
                              formData.projectType === type.label
                                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-500"
                                : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.label}
                            checked={formData.projectType === type.label}
                            onChange={() => handleRadioChange(type.label)}
                            className="sr-only"
                          />
                          <span className="text-2xl mb-2">{type.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {type.label}
                          </span>
                          {formData.projectType === type.label && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      Your Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        rows={5}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 dark:text-white resize-none ${
                          errors.message && touched.message
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                          errors.message ? "message-error" : "message-help"
                        }
                      />
                      {errors.message && touched.message && (
                        <div className="absolute right-3 top-3">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      {errors.message && touched.message ? (
                        <p
                          id="message-error"
                          className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.message}
                        </p>
                      ) : (
                        <p
                          id="message-help"
                          className="text-sm text-gray-500 dark:text-gray-400"
                        >
                          Minimum 10 characters required
                        </p>
                      )}
                      <div
                        className={`text-sm ${
                          messageLength > messageMaxLength * 0.9
                            ? "text-red-600 dark:text-red-400"
                            : messageLength > messageMaxLength * 0.75
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {messageLength}/{messageMaxLength}
                      </div>
                    </div>
                  </div>

                  {/* Submit Error */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                        <AlertCircle size={20} />
                        <p className="font-medium">Submission Error</p>
                      </div>
                      <p className="mt-1 text-sm text-red-600 dark:text-red-300">
                        {submitError}
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        You can also email me directly at{" "}
                        <a
                          href="mailto:benshomwiti@gmail.com"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          benshomwiti@gmail.com
                        </a>
                      </p>
                    </motion.div>
                  )}

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      * Required fields
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting || !isFormValid()}
                      className={`
                        px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg
                        hover:from-blue-700 hover:to-blue-800 transition flex items-center gap-2
                        ${
                          isSubmitting || !isFormValid()
                            ? "opacity-70 cursor-not-allowed"
                            : "shadow-lg hover:shadow-xl"
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    What's your typical response time?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I typically respond within 30 mins - 1 hour during business
                    hours (9 AM - 6 PM EAT). For urgent matters, please include
                    "URGENT" in your message.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Do you work with international clients?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! I work with clients from all over the world. My working
                    hours are flexible to accommodate different time zones.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    What information should I include in my project request?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Please include: Project overview, goals, timeline, budget
                    range, and any specific requirements or existing designs you
                    have.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
