import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen fixed top-0 bg-[#1A0B2E] p-0 m-0 z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo or Brand Name */}
          {/* <a href="/" className="text-white text-xl font-bold">
            My Portfolio
          </a> */}

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              <a
                href="/cv_aya-bani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                CV
              </a>
              <a
                href="https://www.linkedin.com/in/aya-bani-75354a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aya-bani"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
              >
                GitHub
              </a>
              {/* Contact Details */}
      
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#1A0B2E]">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a
              href="/cv_aya-bani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
            >
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/aya-bani-75354a284/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
