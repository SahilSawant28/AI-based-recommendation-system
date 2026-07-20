'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Workflow() {
  const steps = [
    { number: 1, title: 'User Input', description: 'User submits preferences or browsing history', color: 'from-purple-600 to-blue-600' },
    { number: 2, title: 'Data Processing', description: 'System analyzes user profile and item features', color: 'from-blue-600 to-cyan-600' },
    { number: 3, title: 'Algorithm Selection', description: 'Choose optimal recommendation approach', color: 'from-cyan-600 to-green-600' },
    { number: 4, title: 'Scoring & Ranking', description: 'Calculate scores using algorithms', color: 'from-green-600 to-purple-600' },
    { number: 5, title: 'Result Aggregation', description: 'Combine results with intelligent weighting', color: 'from-purple-600 to-pink-600' },
    { number: 6, title: 'Delivery', description: 'Return personalized recommendations to user', color: 'from-pink-600 to-purple-600' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-50/20 dark:via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Recommendation Workflow</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">How the system processes and delivers recommendations</p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-6 gap-4 mb-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-8 w-4 h-4 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  </div>
                )}

                <div className={`relative p-6 rounded-xl border-2 border-gradient-to-r ${step.color} bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm`}>
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mb-4 shadow-lg`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg`}>
                {step.number}
              </div>
              <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
