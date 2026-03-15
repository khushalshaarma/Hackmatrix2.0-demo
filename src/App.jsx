import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScrollStory } from './pages/ScrollStory'
import { Agents } from './pages/Agents'
import { Dashboard } from './pages/Dashboard'
import { Claims } from './pages/Claims'
import { ThemeToggle } from './components/ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

function Nav(){
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 sticky top-0 z-40 glass dark:glass-dark">
      <div className="flex items-center gap-4">
        <div className="rounded-md p-2 bg-gradient-to-br from-teal-400 to-neon text-white font-bold">MedNorm AI</div>
        <div className="hidden md:flex gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/story" className="hover:underline">How it Works</Link>
          <Link to="/agents" className="hover:underline">AI Agents</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/claims" className="hover:underline">Claims</Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link to="/story" className="px-3 py-1 rounded-md bg-teal-500 text-white text-sm">Try Demo</Link>
      </div>
    </nav>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-[#02141a] dark:to-[#01121a] transition-colors">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/story" element={<ScrollStory/>} />
          <Route path="/agents" element={<Agents/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/claims" element={<Claims/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
