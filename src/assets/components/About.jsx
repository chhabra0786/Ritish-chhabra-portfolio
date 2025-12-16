import React from 'react'
import { motion } from 'framer-motion'
import RitishImg from './Ritish.png'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={RitishImg}
            alt="About Ritish Chhabra"
            className="w-72 md:w-96 rounded-2xl shadow-xl border border-purple-500/30"
          />
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-lg mb-4">
            I’m <span className="text-white font-semibold">Ritish Chhabra</span>,
            a B.Tech Computer Science Engineering student with a strong interest in
            web development, software engineering, and artificial intelligence.
          </p>

          <p className="text-gray-400 text-lg mb-4">
            I enjoy building clean, responsive, and scalable applications using
            modern technologies like <span className="text-white">React</span>,
            <span className="text-white"> Tailwind CSS</span>, and backend tools.
          </p>

          <p className="text-gray-400 text-lg mb-8">
            My goal is to continuously learn, improve my problem-solving skills,
            and work on impactful real-world projects.
          </p>

          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition"
          >
            Let’s Connect
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default About
