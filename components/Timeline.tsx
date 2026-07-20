'use client'

import { motion } from 'framer-motion'

export default function Timeline() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Research & Design',
      description: 'Analyzed recommendation algorithms and designed system architecture',
      status: 'Completed',
      date: 'Q1 2024'
    },
    {
      phase: 'Phase 2',
      title: 'Backend Development',
      description: 'Built Spring Boot application with all three recommendation algorithms',
      status: 'Completed',
      date: 'Q2 2024'
    },
    {
      phase: 'Phase 3',
      title: 'Database & Integration',
      description: 'Implemented MySQL database and integrated all modules',
      status: 'Completed',
      date: 'Q3 2024'
    },
    {
      phase: 'Phase 4',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and deployment',
      status: 'In Progress',
      date: 'Q4 2024'
    },
    {
      phase: 'Phase 5',
      title: 'Advanced Features',
      description: 'Machine learning improvements, real-time updates, and mobile app',
      status: 'Planned',
      date: '2025'
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-50/20 dark:via-purple-950/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Project Timeline</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Development journey and milestones</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-cyan-500 -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {phases.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 border-4 border-white dark:border-slate-950 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600/20 to-cyan-500/20 text-purple-700 dark:text-cyan-400">
                        {item.phase}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                        item.status === 'In Progress' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                        'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{item.description}</p>
                    <p className="text-sm font-semibold text-purple-600 dark:text-cyan-400">{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
