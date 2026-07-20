'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, GitBranch, Share2, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@fairmethod.ai',
      href: 'mailto:info@fairmethod.ai'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-50/20 dark:via-cyan-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Have questions? We&apos;d love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-cyan-400 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-cyan-400 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-cyan-400 transition-all"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-cyan-400 transition-all h-32 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Items */}
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.label}</p>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              )
            })}

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: GitBranch, href: '#' },
                  { icon: Share2, href: '#' },
                  { icon: MessageCircle, href: '#' },
                ].map((social, i) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 dark:border-slate-700 pt-12 text-center"
        >
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">FM</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">FAIR Method</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Premium AI Recommendation System</p>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2024 FAIR Method. All rights reserved. | Built with React, Next.js, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
