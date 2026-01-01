import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
       style={{
        background: 'linear-gradient(90deg, #1F3A2B 0%, rgba(31, 58, 43, 0.8) 50%, #FFE87C 100%)',
        width: '100%',
     
      }}
    className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">StoryTime</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Building modern, high-performance websites with clean design
            and powerful technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition">
              <FaGithub />
            </a>
          </div>

          <p className="mt-4 text-sm">
            Email: <span className="text-white">hello@yourbrand.com</span>
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
