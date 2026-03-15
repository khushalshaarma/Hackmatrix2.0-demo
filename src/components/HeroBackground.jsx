import React from 'react'
import { motion } from 'framer-motion'

export function HeroBackground(){
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden dark:opacity-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute -left-40 top-8 w-128 h-128 rounded-full bg-gradient-to-br from-teal-400/20 to-neon/20 blur-3xl mix-blend-screen"
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-gradient-to-tr from-neon/10 to-teal-100/10 blur-2xl mix-blend-overlay"
      />
      <div className="particle" style={{width:120,height:120,right:120,top:40,opacity:0.12,animationDuration:'10s'}} />
    </div>
  )
}
