import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle(){
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])
  return (
    <button onClick={()=>setDark(!dark)} className="p-2 rounded-md glass hover:scale-105 transition-transform">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
