'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function API() {
  const endpoints = [
    { method: 'POST', path: '/api/recommendations', description: 'Get personalized recommendations for a user', status: '200' },
    { method: 'GET', path: '/api/recommendations/{id}', description: 'Retrieve a specific recommendation', status: '200' },
    { method: 'POST', path: '/api/users', description: 'Create a new user profile', status: '201' },
    { method: 'GET', path: '/api/users/{id}', description: 'Get user profile information', status: '200' },
    { method: 'PUT', path: '/api/users/{id}', description: 'Update user preferences', status: '200' },
    { method: 'GET', path: '/api/items', description: 'List all items in catalog', status: '200' },
    { method: 'GET', path: '/api/items/{id}', description: 'Get item details and metadata', status: '200' },
    { method: 'POST', path: '/api/feedback', description: 'Submit user feedback on recommendations', status: '201' },
    { method: 'GET', path: '/api/analytics', description: 'Get system analytics and metrics', status: '200' },
    { method: 'GET', path: '/api/health', description: 'Health check endpoint', status: '200' },
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
      case 'POST':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
      case 'PUT':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
      case 'DELETE':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
      default:
        return 'bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300'
    }
  }

  return (
    <section id="api" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">API Endpoints</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">RESTful API for seamless integration</p>
        </motion.div>

        <div className="grid gap-4">
          {endpoints.map((endpoint, i) => (
            <motion.div
              key={`${endpoint.method}${endpoint.path}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-purple-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                    <Code2 className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded font-bold text-xs ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{endpoint.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">Status:</span>
                  <span className="px-3 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">{endpoint.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Documentation Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-purple-50/50 to-cyan-50/50 dark:from-purple-950/20 dark:to-cyan-950/20 backdrop-blur-sm text-center"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Full API documentation available with request/response examples and authentication details
          </p>
          <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            View Full Documentation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
