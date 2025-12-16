import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'QuizArena',
    description:
      'A multiplayer quiz platform with real-time leaderboard, AI-based questions, and competitive duel mode.',
    image: 'src/assets/components/quiz.png',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Document Organizer',
    description:
      'An AI-powered app that automatically classifies and organizes personal documents like Aadhaar, PAN, and certificates.',
    image: 'src/assets/components/Ai.jpg',
    tech: ['React', 'Express', 'AI', 'Cloud'],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio showcasing projects, skills, and experience with smooth animations and modern UI.',
    image: 'src/assets/components/portfolio.png',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black py-20">
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
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Some of the work I’ve built recently
          </p>
        </motion.div>

        {/* ===== PROJECT CARDS ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden
                         hover:border-purple-500 transition"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-500/10 text-purple-400
                                 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects
