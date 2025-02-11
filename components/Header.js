"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header >
      <h1>DevEdge</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}