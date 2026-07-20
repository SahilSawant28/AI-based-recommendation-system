'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const userGrowthData = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 620 },
    { month: 'Mar', users: 890 },
    { month: 'Apr', users: 1240 },
    { month: 'May', users: 1680 },
    { month: 'Jun', users: 2100 },
  ]

  const recommendationAccuracyData = [
    { algo: 'Collaborative', accuracy: 85 },
    { algo: 'Content-Based', accuracy: 82 },
    { algo: 'Knowledge-Based', accuracy: 78 },
    { algo: 'Hybrid', accuracy: 92 },
  ]

  const responseTimeData = [
    { hour: '00:00', time: 45 },
    { hour: '04:00', time: 48 },
    { hour: '08:00', time: 52 },
    { hour: '12:00', time: 58 },
    { hour: '16:00', time: 55 },
    { hour: '20:00', time: 49 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-50/20 dark:via-cyan-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Analytics Dashboard</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Real-time system performance and insights</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Users', value: '2.1K', change: '+18%' },
            { label: 'Recommendations/Day', value: '15.8K', change: '+24%' },
            { label: 'Avg Accuracy', value: '92%', change: '+5%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#e2e8f0' }} />
                <Area type="monotone" dataKey="users" stroke="#a855f7" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Recommendation Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Algorithm Accuracy</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recommendationAccuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="algo" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#e2e8f0' }} />
                <Bar dataKey="accuracy" fill="#06b6d4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">API Response Time (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <defs>
                  <linearGradient id="colorTime" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#e2e8f0' }} />
                <Line type="monotone" dataKey="time" stroke="url(#colorTime)" strokeWidth={3} dot={{ fill: '#a855f7', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
