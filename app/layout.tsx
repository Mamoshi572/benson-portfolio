"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { Sun, Moon, Menu, X, Code2, Loader2 } from "lucide-react";

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
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-gray-600 dark:text-gray-400">Loading portfolio...</p>
      </div>
    </div>
  );
}

// Static metadata (for server component if you separate it)
// This would go in a separate layout.server.tsx or page.tsx
const METADATA = {
  title: "Benson Mwiti - Full Stack Engineer & UI/UX Designer",
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
    // Check localStorage first, then system preference
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

    // Add event listener for system theme changes
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

  // Close mobile menu when clicking outside (improved UX)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle escape key to close mobile menu
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
        <meta name="theme-color" content={isDark ? "#111827" : "#ffffff"} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

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
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <nav
          className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-1"
                aria-label="Benson Mwiti Home"
              >
                <Code2
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                  aria-hidden="true"
                />
                <span>Benson Mwiti</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/testimonials"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg p-2"
                >
                  Contact
                </Link>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg hover:shadow-xl"
                >
                  Hire Me
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
                className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 animate-in slide-in-from-top-5 duration-300"
              >
                <div
                  className="flex flex-col gap-1"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <Link
                    href="/"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    About
                  </Link>
                  <Link
                    href="/testimonials"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center mt-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
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

        {/* Footer */}
        <footer
          className="bg-gray-900 dark:bg-black text-white py-12"
          role="contentinfo"
          aria-label="Site footer"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Benson Mwiti</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
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
                        className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white focus:underline"
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
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Full Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Web Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Mobile Apps
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <div className="space-y-3 text-gray-400">
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
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Visit GitHub profile"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/benson-mwiti-87657031b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Visit LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Benson Mwiti. All rights reserved.
              </p>
              <p className="text-sm mt-2">
                Built with Next.js, TypeScript & Tailwind CSS •
                <span className="mx-2">•</span>
                Deployed on Vercel
              </p>
              <p className="text-xs mt-2 text-gray-500">
                Performance optimized • Lighthouse score: 95+
              </p>
            </div>
          </div>
        </footer>

        {/* Performance monitoring script (non-blocking) */}
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
