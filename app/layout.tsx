"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  Loader2,
  MessageSquare,
  XCircle,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-[#F9A26C] animate-spin" />
        <p className="text-white/80">Loading portfolio...</p>
      </div>
    </div>
  );
}

// WhatsApp Button Component
function WhatsAppButton() {
  const phoneNumber = "254746562072";
  const message =
    "Hi Benson, I saw your portfolio and would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all z-40 flex items-center gap-2 group"
      aria-label="Contact Benson on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp
        size={24}
        className="group-hover:scale-110 transition-transform"
        aria-hidden="true"
      />
      <span className="hidden md:inline font-medium text-sm">Chat Now</span>
    </a>
  );
}

// Chatbot Component
function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting. Please contact Benson directly via WhatsApp or email for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoResponse = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm Benson's portfolio assistant. I can tell you about his projects, skills, and experience. Try asking:",
      },
      {
        role: "assistant",
        content:
          "• 'What projects has Benson built?'\n• 'What is his tech stack?'\n• 'How can I contact him?'",
      },
    ]);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleDemoResponse();
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 right-6 bg-[#F9A26C] text-white p-4 rounded-full shadow-lg hover:bg-[#e8894a] transition-all z-40 flex items-center justify-center group"
        aria-label={
          isOpen
            ? "Close AI chat assistant"
            : "Open AI chat assistant to ask about Benson's work"
        }
        title={isOpen ? "Close chat" : "Ask about Benson's work"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
        aria-haspopup="dialog"
      >
        {isOpen ? (
          <XCircle
            size={22}
            className="group-hover:rotate-90 transition-transform"
            aria-hidden="true"
          />
        ) : (
          <MessageSquare size={22} aria-hidden="true" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chat-window"
          className="fixed bottom-48 right-6 w-96 max-w-[calc(100vw-3rem)] h-[32rem] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-40 overflow-hidden"
          role="dialog"
          aria-label="AI chat assistant dialog"
          aria-modal="true"
          aria-describedby="chat-description"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0F4C5C] to-[#2C7A7B] text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageSquare size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg" id="chat-title">
                  Portfolio Assistant
                </h3>
                <p className="text-sm opacity-90" id="chat-description">
                  Ask me about Benson&apos;s work!
                </p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <div className="inline-block p-3 bg-[#0F4C5C]/10 dark:bg-[#0F4C5C]/20 rounded-full mb-3">
                  <MessageSquare
                    size={24}
                    className="text-[#0F4C5C] dark:text-[#F9A26C]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-medium">Hi! I can tell you about:</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Benson&apos;s projects & skills</li>
                  <li>• Tech stack experience</li>
                  <li>• How to contact him</li>
                </ul>
              </div>
            ) : (
              <div
                className="space-y-4"
                role="region"
                aria-label="Chat messages"
              >
                {messages.map((m, index) => (
                  <div
                    key={index}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        m.role === "user"
                          ? "bg-[#F9A26C] text-white rounded-br-none"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{m.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800"
          >
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, or contact..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                disabled={isLoading}
                aria-label="Chat message input"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[#F9A26C] text-white p-3 rounded-full hover:bg-[#e8894a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
                title="Send message"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
              AI assistant •{" "}
              <a
                href="/contact"
                className="text-[#F9A26C] dark:text-[#F9A26C] hover:underline"
              >
                Contact directly
              </a>{" "}
              for detailed inquiries
            </p>
          </form>
        </div>
      )}
    </>
  );
}

// Static metadata
const METADATA = {
  title: "Benson Mwiti - Full Stack Engineer",
  description:
    "Full Stack Engineer & UI/UX Designer with 5+ years experience crafting exceptional digital experiences. Specializing in React, Next.js, TypeScript, and scalable web applications.",
  keywords:
    "Full Stack Developer, UI/UX Designer, React Developer, Next.js, TypeScript, Web Development, Mobile Development, Kenya Developer, Nairobi Developer",
  url: "https://benson-portfolio-flame.vercel.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    setThemeLoaded(true);
    setIsLoading(false);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("portfolio-theme")) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Primary Meta Tags */}
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <meta name="keywords" content={METADATA.keywords} />
        <meta name="author" content="Benson Mwiti" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={METADATA.url} />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:site_name" content="Benson Mwiti Portfolio" />
        <meta property="og:image" content="/images/profile/profile-main.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Benson Mwiti - Full Stack Engineer & UI/UX Designer"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={METADATA.title} />
        <meta name="twitter:description" content={METADATA.description} />
        <meta name="twitter:image" content="/images/profile/profile-main.jpg" />
        <meta name="twitter:creator" content="@bensonmwiti" />

        {/* Additional SEO Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={METADATA.url} />

        {/* Performance & PWA */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {/* Theme color based on dark mode preference */}
        <meta
          name="theme-color"
          content="#0F4C5C"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1E2A2E"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Benson Mwiti",
              url: METADATA.url,
              image: "/images/profile/profile-main.jpg",
              jobTitle: "Full Stack Engineer & UI/UX Designer",
              description: METADATA.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "Kenya",
              },
              email: "benshomwiti@gmail.com",
              telephone: "+254746562072",
              sameAs: [
                "https://github.com/mamoshi572",
                "https://www.linkedin.com/in/benson-mwiti-87657031b",
              ],
              knowsAbout: [
                "Full Stack Development",
                "UI/UX Design",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      {/* UPDATED: Ocean Depths gradient with dark mode handling */}
      <body
        className={`${inter.className} bg-gradient-to-br from-[#0F4C5C] via-[#2C7A7B] to-[#F9A26C] dark:from-[#0F4C5C] dark:via-[#2C7A7B] dark:to-[#F9A26C] text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#F9A26C] text-white px-4 py-2 rounded-lg"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <nav
          className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-1"
                aria-label="Benson Mwiti Home"
              >
                <Code2
                  className="text-[#F9A26C] dark:text-[#F9A26C]"
                  size={24}
                  aria-hidden="true"
                />
                <span className="text-white dark:text-white">Benson Mwiti</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-white hover:text-[#F9A26C] dark:text-white dark:hover:text-[#F9A26C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-white hover:text-[#F9A26C] dark:text-white dark:hover:text-[#F9A26C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#F9A26C] dark:text-white dark:hover:text-[#F9A26C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/testimonials"
                  className="text-white hover:text-[#F9A26C] dark:text-white dark:hover:text-[#F9A26C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#F9A26C] dark:text-white dark:hover:text-[#F9A26C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Contact
                </Link>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  title={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDark ? (
                    <Sun size={20} aria-hidden="true" />
                  ) : (
                    <Moon size={20} aria-hidden="true" />
                  )}
                </button>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-[#F9A26C] hover:bg-[#e8894a] text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl"
                >
                  Hire Me
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-white"
                  aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  title={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDark ? (
                    <Sun size={20} aria-hidden="true" />
                  ) : (
                    <Moon size={20} aria-hidden="true" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-white"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  title={
                    isMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMenuOpen ? (
                    <X size={24} aria-hidden="true" />
                  ) : (
                    <Menu size={24} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div
                id="mobile-menu"
                className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-in slide-in-from-top-5 duration-300"
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/testimonials"
                    className="py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 bg-[#F9A26C] hover:bg-[#e8894a] text-white rounded-lg text-center mt-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Loading State */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Suspense fallback={<LoadingSpinner />}>
            <main
              id="main-content"
              className="min-h-screen focus:outline-none"
              tabIndex={-1}
            >
              {children}
            </main>
          </Suspense>
        )}

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* AI Chatbot */}
        <ChatWindow />

        {/* Footer */}
        <footer
          className="bg-[#0F4C5C]/90 dark:bg-[#0F4C5C]/95 text-white py-12 backdrop-blur-sm"
          role="contentinfo"
          aria-label="Site footer"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Benson Mwiti</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Full Stack Engineer & UI/UX Designer crafting exceptional
                  digital experiences through clean code and intuitive design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Projects", path: "/projects" },
                    { name: "About", path: "/about" },
                    { name: "Testimonials", path: "/testimonials" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white focus:underline"
                        aria-label={`Go to ${item.name}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 bg-[#F9A26C] rounded-full"
                      aria-hidden="true"
                    ></span>
                    Full Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 bg-[#F9A26C] rounded-full"
                      aria-hidden="true"
                    ></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 bg-[#F9A26C] rounded-full"
                      aria-hidden="true"
                    ></span>
                    Web Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 bg-[#F9A26C] rounded-full"
                      aria-hidden="true"
                    ></span>
                    Mobile Apps
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <div className="space-y-3 text-white/70">
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">📍</span>
                    Nairobi, Kenya
                  </p>
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">📧</span>
                    <a
                      href="mailto:benshomwiti@gmail.com"
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white focus:underline"
                    >
                      benshomwiti@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span aria-hidden="true">🌍</span>
                    Available for remote work
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://github.com/mamoshi572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C]"
                      aria-label="Visit GitHub profile (opens in new tab)"
                      title="GitHub"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/benson-mwiti-87657031b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F9A26C]"
                      aria-label="Visit LinkedIn profile (opens in new tab)"
                      title="LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 text-center text-white/60">
              <p>
                © {new Date().getFullYear()} Benson Mwiti. All rights reserved.
              </p>
              <p className="text-sm mt-2">
                Built with Next.js, TypeScript & Tailwind CSS •
                <span className="mx-2">•</span>
                <a
                  href="https://wa.me/254746562072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F9A26C] hover:text-white focus:outline-none focus:underline"
                  aria-label="Open WhatsApp chat (opens in new tab)"
                >
                  WhatsApp Chat Available
                </a>
              </p>
              <p className="text-xs mt-2 text-white/40">
                AI Assistant powered by OpenAI • Last updated:{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </footer>

        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(error) {
                    console.log('ServiceWorker registration failed:', error);
                  });
                });
              }
              
              // Performance monitoring
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const perfData = window.performance.timing;
                  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                  console.log('Page loaded in', pageLoadTime, 'ms');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
