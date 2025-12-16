import React from 'react'
import { motion } from 'framer-motion'
import RitishImg from './Ritish.png'   // 👈 IMPORT IMAGE

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I’m <span className="text-purple-500">Ritish Chhabra</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            B.Tech CSE student | Web Developer | AI Enthusiast
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-purple-600 px-6 py-3 rounded-md text-white">
              View Projects
            </a>
            <a href="#contact" className="border border-purple-500 px-6 py-3 rounded-md text-purple-500">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end border-amber-400"
        >
          <img
            src={RitishImg}
            alt="Ritish Chhabra"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
