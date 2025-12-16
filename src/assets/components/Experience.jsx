import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experienceData = [
  {
    role: 'Full Stack Developer (Student Project)',
    company: 'QuizArena',
    duration: '2024 – Present',
    points: [
      'Designed and developed a multiplayer quiz platform with real-time leaderboard.',
      'Integrated AI-based question generation aligned with academic syllabi.',
      'Implemented user authentication, scoring logic, and performance comparison.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Personal Projects',
    duration: '2023 – Present',
    points: [
      'Built responsive web applications using React, Tailwind CSS, and JavaScript.',
      'Focused on clean UI, scalability, and performance optimization.',
      'Worked with REST APIs and backend integration using Node.js and Express.',
    ],
  },
  {
    role: 'Backend Developer (Learning & Practice)',
    company: 'Self Learning',
    duration: '2023 – Present',
    points: [
      'Practicing backend development with Express.js and MongoDB.',
      'Learning authentication, API security, and database design.',
      'Building real-world mini projects to strengthen backend logic.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-black py-20">
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
            My <span className="text-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 mt-4">
            What I’ve worked on and learned so far
          </p>
        </motion.div>

        {/* ===== TIMELINE ===== */}
        <div className="max-w-4xl mx-auto space-y-12">

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
            >
              {/* ICON */}
              <div className="absolute -top-4 -left-4 bg-purple-600 p-3 rounded-full">
                <FaBriefcase className="text-white" />
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-purple-400 text-sm mt-1">
                {exp.company} • {exp.duration}
              </p>

              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Experience
