'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Visualization() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">AI Processing Pipeline</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">How recommendations are generated in real-time</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Processing Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { stage: 'Input', desc: 'User request received', progress: 100 },
              { stage: 'Parsing', desc: 'Extract user preferences', progress: 100 },
              { stage: 'Processing', desc: 'Run algorithms in parallel', progress: 85 },
              { stage: 'Scoring', desc: 'Calculate recommendation scores', progress: 70 },
              { stage: 'Ranking', desc: 'Sort by relevance', progress: 55 },
              { stage: 'Output', desc: 'Return results', progress: 30 },
            ].map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{item.stage}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-purple-600 dark:text-cyan-400">{item.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                {[
                  { label: 'Avg Response Time', value: '52ms', status: 'Excellent' },
                  { label: 'Throughput', value: '1.2K req/s', status: 'Excellent' },
                  { label: 'Accuracy', value: '92%', status: 'Excellent' },
                  { label: 'Availability', value: '99.9%', status: 'Excellent' },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{metric.label}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      {metric.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-purple-50/50 to-cyan-50/50 dark:from-purple-950/20 dark:to-cyan-950/20 backdrop-blur-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Real-time Processing</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Parallel algorithm execution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Caching for frequently accessed data
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Optimized database queries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Load balancing across servers
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
