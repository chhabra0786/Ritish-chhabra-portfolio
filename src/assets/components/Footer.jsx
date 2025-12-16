import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-8 py-10">

        {/* ===== TOP ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Ritish <span className="text-purple-500">Chhabra</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Building ideas into digital reality
            </p>
          </div>


          {/* SOCIALS */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ritishchhabra@email.com"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>

        

        {/* ===== BOTTOM ===== */}
        <div className=" mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Ritish Chhabra. All rights reserved.
          </p>

          {/* BACK TO TOP */}
          <a
            href="#home"
            className="flex items-center gap-2 hover:text-purple-500 transition mt-4 md:mt-0"
          >
            <FaArrowUp />
            Back to top
          </a>

        </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
