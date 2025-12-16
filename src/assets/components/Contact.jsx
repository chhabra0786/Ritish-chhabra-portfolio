import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black py-20">
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
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Let’s connect and build something amazing together
          </p>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ===== LEFT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="text-gray-400">
              I’m open to internships, freelance work, and collaboration opportunities.
              Feel free to reach out anytime.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-purple-500" />
                <span>ritishchhabra0786@email.com</span>
              </div>

            
              <div className="flex items-center gap-4 text-gray-300">
                <FaLinkedin className="text-purple-500" />
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  target="_blank"
                  className="hover:text-purple-400 transition"
                >
                 -linkedin.com/in/ritish-chhabra-59bb16291
                </a>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT FORM ===== */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  )
}

export default Contact
