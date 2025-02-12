"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-6 md:px-12 lg:px-20 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Mobile Menu Button & Logo */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Image src="/logo.svg" alt="DevEdge Logo" width={172} height={40} />
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: Contact Button (with some space after the nav) */}
        <div className="ml-6"> {/* Added space to the left */}
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-2 rounded-none hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 bg-blue-700 p-4 rounded-lg">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
