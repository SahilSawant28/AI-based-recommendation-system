'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Collaborative Filtering',
      description: 'Analyzes user behavior patterns to find similarities and provide personalized recommendations based on crowd intelligence.',
      highlights: ['User-based', 'Item-based', 'Real-time learning']
    },
    {
      title: 'Content-Based Recommendations',
      description: 'Recommends items similar to those users have liked before by analyzing item attributes and user preferences.',
      highlights: ['Feature extraction', 'Similarity matching', 'Preference learning']
    },
    {
      title: 'Knowledge-Based Recommendations',
      description: 'Leverages domain knowledge and explicit user requirements to suggest highly relevant items.',
      highlights: ['Domain modeling', 'Constraint solving', 'Expert systems']
    },
    {
      title: 'Hybrid Approach',
      description: 'Combines all three methods using intelligent weighting to overcome individual limitations and provide superior results.',
      highlights: ['Adaptive weighting', 'Cold-start handling', 'Diversity optimization']
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Recommendation Algorithms</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Powerful approaches to deliver accurate, diverse recommendations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-purple-500/10"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-3">
                {feature.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
