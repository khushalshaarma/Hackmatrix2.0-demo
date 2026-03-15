import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBackground } from '../components/HeroBackground'
import { motion } from 'framer-motion'

export function Home(){
  return (
    <main className="relative overflow-hidden">
      <HeroBackground />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">AI-Powered Healthcare Data Normalization</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">MedNorm AI converts unstructured medical documents into normalized, code-mapped, and fraud-checked claims — ready for automated processing and approval.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/story" className="px-5 py-3 rounded-lg bg-teal-500 text-white font-medium">Try Demo</Link>
              <Link to="/dashboard" className="px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm">View Dashboard</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="glass p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-semibold">AI Document Extraction</h4>
                <p className="text-xs text-slate-500">OCR + Layout understanding</p>
              </div>
              <div className="glass p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-semibold">Medical Code Normalization</h4>
                <p className="text-xs text-slate-500">ICD-10, CPT, RxNorm mapping</p>
              </div>
              <div className="glass p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-semibold">Fraud Detection</h4>
                <p className="text-xs text-slate-500">Signature & duplicate checks</p>
              </div>
              <div className="glass p-4 rounded-xl shadow-sm">
                <h4 className="text-sm font-semibold">Blockchain Verification</h4>
                <p className="text-xs text-slate-500">zkEVM anchored claims</p>
              </div>
            </div>
          </div>
          <div className="scene">
            <motion.div className="glass p-6 rounded-2xl shadow-xl neon card-3d" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} whileHover={{ scale: 1.01 }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">PDF</div>
                <div>
                  <h3 className="font-semibold">Sample Insurance Claim.pdf</h3>
                  <p className="text-xs text-slate-500">Uploaded 2 minutes ago • 230 KB</p>
                </div>
              </div>
              <div className="mt-4 bg-white/5 p-4 rounded-md">
                <p className="text-sm">Patient: John Doe</p>
                <p className="text-sm">Diagnosis: Diabetes</p>
                <p className="text-sm">Claim: $250</p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="particle" style={{width:90,height:90,left:'-40px',top:'-20px',opacity:0.6}} />
              <div className="particle" style={{width:60,height:60,right:'-20px',bottom:'-30px',opacity:0.5,animationDuration:'8s'}} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
