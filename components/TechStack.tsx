'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    { name: 'Java', category: 'Backend', icon: '☕' },
    { name: 'Spring Boot', category: 'Framework', icon: '🍃' },
    { name: 'MySQL', category: 'Database', icon: '🗄️' },
    { name: 'REST API', category: 'Architecture', icon: '🔗' },
    { name: 'Maven', category: 'Build', icon: '📦' },
    { name: 'JPA/Hibernate', category: 'ORM', icon: '🔄' },
    { name: 'Lombok', category: 'Productivity', icon: '⚙️' },
    { name: 'Swagger/OpenAPI', category: 'Documentation', icon: '📚' },
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
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Modern, scalable, and production-ready technologies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 cursor-pointer text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{tech.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{tech.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
