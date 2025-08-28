import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import { Linkedin, Twitter, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <div className="bg-[#191A23]  rounded-t-2xl text-white p-4">
      {/* nav bar */}
      <div className="flex justify-between items-center flex-col md:flex-row ">
        <Logo />
        <nav
          aria-label="footer Navigation"
          className="space-x-4 flex flex-col md:flex-row justify-center items-center"
        >
          <Link to="/about-us" className=" px-4 py-2 hover:text-green-600">
            About us
          </Link>
          <Link to="/service" className=" px-4 py-2 hover:text-green-600">
            Services
          </Link>
          <Link to="/use-cases" className=" px-4 py-2 hover:text-green-600">
            Use Cases
          </Link>
          <Link to="/pricing" className=" px-4 py-2 hover:text-green-600">
            Pricing
          </Link>
          <Link to="/blog" className=" px-4 py-2 hover:text-green-600">
            Blog
          </Link>
        </nav>
        {/* Social Icons */}
        <div className="space-x-4 hidden md:flex">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-green-500 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 hover:text-green-500 transition-colors duration-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 hover:text-green-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
      {/* contact section */}
      <div className="flex flex-col md:flex-row justify-between items-center my-3 border-b ">
        <section className="space-y-2.5">
          <span className="bg-[#B9FF66] text-black rounded-lg p-1">
            Contact us:
          </span>
          <p className="mt-1.5">Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </section>
        <section className="bg-[#292A32] space-x-3 p-4 rounded-lg">
          <input
            type="email"
            name="email"
            id="email"
            className="text-base placeholder:text-emerald-50 border-2 border-white outline-none p-1 rounded-lg"
            placeholder="email"
          />
          <button className="p-3 bg-[#B9FF66] rounded-2xl text-black hover:bg-amber-400 cursor-pointer transition-all duration-300">
            Subscribe to news
          </button>
        </section>
      </div>
      <div className="flex items-center space-x-6">
        <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
        <span className="link underline">Privacy Policy</span>
      </div>
    </div>
  );
}
