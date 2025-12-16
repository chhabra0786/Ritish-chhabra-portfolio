import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
]

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto px-8">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">
            Skills & <span className="text-purple-500">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Tools and technologies I work with
          </p>
        </motion.div>

        {/* ===== SKILLS GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6
                         flex flex-col items-center justify-center
                         hover:border-purple-500 transition cursor-pointer"
            >
              {/* ICON */}
              <div className="text-5xl text-purple-500 mb-4">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-lg font-medium text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
