'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Architecture() {
  const layers = [
    { name: 'Client Layer', items: ['Web Interface', 'Mobile App', 'API Client'] },
    { name: 'API Gateway', items: ['REST Endpoints', 'Authentication', 'Rate Limiting'] },
    { name: 'Business Logic', items: ['Recommendation Engine', 'Hybrid Algorithms', 'Data Processing'] },
    { name: 'Data Layer', items: ['MySQL Database', 'Caching', 'Indexing'] },
  ]

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-50/20 dark:via-cyan-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">System Architecture</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Layered, scalable, and maintainable design</p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Arrow between layers */}
              {i < layers.length - 1 && (
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 text-purple-600 dark:text-cyan-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}

              <div className="p-6 rounded-xl border-2 border-gradient-to-b from-purple-600 to-cyan-500 bg-gradient-to-br from-white/80 to-slate-50/50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm h-full hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white text-center bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {layer.name}
                </h3>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Architecture Principles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Modularity', desc: 'Each component has clear responsibilities and can be updated independently' },
              { title: 'Scalability', desc: 'Designed to handle growing user bases and data volumes efficiently' },
              { title: 'Maintainability', desc: 'Clean code structure and documentation for easy maintenance' },
              { title: 'Performance', desc: 'Optimized queries, caching, and efficient algorithms' },
            ].map((principle) => (
              <div key={principle.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{principle.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
