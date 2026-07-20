'use client'

import { motion } from 'framer-motion'
import { GitBranch, Share2, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: 'Software Architect',
      role: 'Lead Developer',
      bio: 'Full-stack development and system architecture',
      initials: 'SA',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      name: 'Algorithm Expert',
      role: 'ML Engineer',
      bio: 'Recommendation algorithms and optimization',
      initials: 'AE',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Database Specialist',
      role: 'Database Admin',
      bio: 'Database design, indexing, and optimization',
      initials: 'DB',
      gradient: 'from-cyan-600 to-green-600'
    },
    {
      name: 'API Developer',
      role: 'Backend Engineer',
      bio: 'REST API design and integration',
      initials: 'AD',
      gradient: 'from-green-600 to-purple-600'
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Development Team</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Talented professionals dedicated to excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10 h-full">
                {/* Avatar */}
                <div className={`w-full h-32 bg-gradient-to-r ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center text-5xl font-bold text-white group-hover:scale-110 transition-transform`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {member.initials}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-purple-600 dark:text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <GitBranch className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <Share2 className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <Mail className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Combined Experience', value: '50+', unit: 'years' },
            { label: 'Projects Delivered', value: '30+', unit: 'successful' },
            { label: 'Code Quality Score', value: '98%', unit: 'excellent' },
          ].map((stat, i) => (
            <div key={stat.label} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{stat.unit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
