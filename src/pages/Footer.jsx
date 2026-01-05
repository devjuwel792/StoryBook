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
          <h2 className="text-2xl font-bold text-white headerFont">StoryTime</h2>
          <p className="mt-4 text-sm leading-relaxed normalFont">
            Building modern, high-performance websites with clean design
            and powerful technology.
          </p>
        </div>



        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 normalFont">Connect</h3>

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

          <p className="mt-4 text-sm normalFont">
            Email: <span className="text-white">hello@yourbrand.com</span>
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400 headerFont">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
