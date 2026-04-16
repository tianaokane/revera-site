"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight gradient-text">
          Revera
        </span>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#use-cases" className="hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="text-sm bg-sky-500 hover:bg-sky-400 text-white font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
