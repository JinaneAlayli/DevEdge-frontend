"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header({ isFixed = false, bgColor = "#27273D", isHero = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isHero) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHero]);

  return (
    <header
      className={`${
        isFixed
          ? "fixed top-0 left-0 w-full z-50 md:px-12 lg:px-20 py-4 transition-all duration-300"
          : "relative px-6 md:px-12 lg:px-20 py-4"
      } ${isHero && (isScrolled ? "bg-[#27273D]" : "bg-transparent")} ${
        !isHero && "bg-[#27273D]"
      }`}
    >
      <div className="flex items-center justify-between md:justify-start">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>

        <div className="flex items-center flex-grow justify-center md:justify-start px-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="DevEdge Logo"
              width={172}
              height={40}
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
 
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-lg">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/#about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/#services" className="text-white hover:text-gray-300">Services</Link></li>
            <li><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
          </ul>
        </nav>
 
        <div className="hidden md:block px-28">
          <Link
            href="/contact"
            className="bg-[#FFB300] text-black px-14 py-2 hover:bg-white hover:text-[#FFB300] transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isOpen && (
        <nav
          className={`absolute top-full left-0 w-full p-4 md:hidden transition-all duration-300 ${
            isScrolled || !isHero ? "bg-[#27273D]" : "bg-transparent"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg text-white">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/#about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/#services" className="text-white hover:text-gray-300">Services</Link></li>
            <li><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
          </ul>
          <div className="mt-4 text-center">
            <Link
              href="/contact"
              className="bg-[#FFB300] text-black px-14 py-2 hover:bg-white hover:text-[#FFB300] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}