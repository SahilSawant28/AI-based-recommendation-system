'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, Database } from 'lucide-react'

export default function Overview() {
  const cards = [
    {
      icon: Brain,
      title: 'Intelligent Algorithms',
      description: 'Three sophisticated approaches: collaborative filtering, content-based, and knowledge-based recommendations using advanced machine learning.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Built with Spring Boot for lightning-fast API responses and optimal throughput, handling thousands of concurrent users.'
    },
    {
      icon: Database,
      title: 'Persistent Storage',
      description: 'MySQL database with optimized queries and indexing for reliable, scalable data management and real-time recommendations.'
    }
  ]

  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Why FAIR Method?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive solution combining multiple recommendation approaches for superior results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
