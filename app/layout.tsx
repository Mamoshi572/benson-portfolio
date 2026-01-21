"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
                <span>Benson Mwiti</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Contact
                </Link>

                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition"
                >
                  Hire Me
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center gap-4 md:hidden">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Benson Mwiti</h3>
                <p className="text-gray-400 mb-4">
                  Full Stack Engineer & UI/UX Designer crafting exceptional
                  digital experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {["Home", "Projects", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Full Stack Development</li>
                  <li>UI/UX Design</li>
                  <li>Web Applications</li>
                  <li>Mobile Apps</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <div className="space-y-3 text-gray-400">
                  <p>📍 Nairobi, Kenya</p>
                  <p>📧 benshomwiti@gmail.com</p>
                  <p>🌍 Available for remote work</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Benson Mwiti. All rights reserved.
              </p>
              <p className="text-sm mt-2">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
