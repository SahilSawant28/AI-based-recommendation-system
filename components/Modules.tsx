'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Modules() {
  const [expanded, setExpanded] = useState(0)

  const modules = [
    {
      name: 'User Management',
      description: 'Handles user registration, authentication, profile management, and preference tracking.',
      features: ['User registration & login', 'Profile management', 'Preference tracking', 'Session management']
    },
    {
      name: 'Item Catalog',
      description: 'Manages the item database with attributes, categories, metadata, and content features.',
      features: ['Item storage', 'Feature extraction', 'Category management', 'Metadata indexing']
    },
    {
      name: 'Recommendation Engine',
      description: 'Core module combining collaborative, content-based, and knowledge-based algorithms.',
      features: ['Algorithm orchestration', 'Scoring system', 'Result aggregation', 'Optimization']
    },
    {
      name: 'Data Analytics',
      description: 'Collects and analyzes user interactions, feedback, and system performance metrics.',
      features: ['Event tracking', 'Performance metrics', 'User behavior analysis', 'System monitoring']
    },
    {
      name: 'API Layer',
      description: 'RESTful API endpoints for client applications to interact with the recommendation system.',
      features: ['REST endpoints', 'Request validation', 'Response formatting', 'Error handling']
    },
  ]

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">System Modules</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Click to explore each module</p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
            >
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{module.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{module.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-purple-600 dark:text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <div className="p-6 bg-gradient-to-br from-purple-50/50 to-cyan-50/50 dark:from-purple-950/20 dark:to-cyan-950/20">
                      <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {module.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
