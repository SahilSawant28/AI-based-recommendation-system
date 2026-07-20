'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import TechStack from '@/components/TechStack'
import Features from '@/components/Features'
import Architecture from '@/components/Architecture'
import Modules from '@/components/Modules'
import Workflow from '@/components/Workflow'
import API from '@/components/API'
import Dashboard from '@/components/Dashboard'
import Visualization from '@/components/Visualization'
import Timeline from '@/components/Timeline'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    const newTheme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Overview />
      <TechStack />
      <Features />
      <Architecture />
      <Modules />
      <Workflow />
      <API />
      <Dashboard />
      <Visualization />
      <Timeline />
      <Team />
      <Contact />
    </div>
  )
}
