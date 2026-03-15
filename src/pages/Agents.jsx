import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const agents = [
  { name: 'OCR Agent',                  desc: 'Extracts text from scanned medical PDFs using Tesseract + LayoutLMv3' },
  { name: 'Medical NLP Agent',           desc: 'Identifies diagnoses, medications, and lab values from unstructured text' },
  { name: 'Code Mapping Agent',          desc: 'Maps entities to ICD-10, CPT, and RxNorm medical codes' },
  { name: 'Fraud Detection Agent',       desc: 'Detects duplicate claims, forged signatures, and date mismatches' },
  { name: 'Document Validation Agent',   desc: 'Cross-validates all document fields against policy rules' },
  { name: 'Blockchain Agent',            desc: 'Records verified claims on Polygon zkEVM for immutable audit trail' },
  { name: 'Consensus Agent',             desc: 'Aggregates all agent outputs and issues final approval decision' },
]

export function Agents(){
  const headerRef = useRef()
  const pageRef   = useRef()

  useEffect(()=>{
    const ctx = gsap.context(()=>{

      // ── Header fade-up on entry ──
      gsap.fromTo('.agents-heading', { opacity:0, y:50 }, {
        opacity:1, y:0, duration:0.8, ease:'power3.out',
        scrollTrigger:{ trigger:'.agents-heading', start:'top 85%', toggleActions:'play none none reverse' }
      })
      gsap.fromTo('.agents-subheading', { opacity:0, y:30 }, {
        opacity:1, y:0, duration:0.7, delay:0.15, ease:'power3.out',
        scrollTrigger:{ trigger:'.agents-subheading', start:'top 85%', toggleActions:'play none none reverse' }
      })

      // ── Progress bar fills as you scroll through the cards ──
      gsap.fromTo('.agents-progress-bar', { scaleX:0 }, {
        scaleX:1, ease:'none',
        scrollTrigger:{
          trigger: pageRef.current,
          start: 'top 80%',
          end:   'bottom 20%',
          scrub: 0.6
        }
      })

      // ── Per-card: slide in from alternating sides + fade ──
      const cards = gsap.utils.toArray('.agent-card')
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -80 : 80
        gsap.fromTo(card,
          { opacity:0, x: fromX, y:40, scale:0.94 },
          {
            opacity:1, x:0, y:0, scale:1,
            duration:0.7,
            ease:'power3.out',
            scrollTrigger:{
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // blob rotation on scroll
        const blob = card.querySelector('.agent-blob')
        if(blob){
          gsap.to(blob, {
            rotation:360, ease:'none',
            scrollTrigger:{ trigger:card, start:'top bottom', end:'bottom top', scrub:0.8 }
          })
        }

        // glow pulse when card centre hits viewport centre
        ScrollTrigger.create({
          trigger: card,
          start: 'top 60%',
          end:   'bottom 40%',
          onEnter:     ()=> gsap.to(card, { boxShadow:'0 0 40px rgba(0,210,255,0.22)', duration:0.3 }),
          onLeave:     ()=> gsap.to(card, { boxShadow:'none', duration:0.4 }),
          onEnterBack: ()=> gsap.to(card, { boxShadow:'0 0 40px rgba(0,210,255,0.22)', duration:0.3 }),
          onLeaveBack: ()=> gsap.to(card, { boxShadow:'none', duration:0.4 }),
        })
      })

    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <h2 className="agents-heading text-3xl font-bold text-primary">AI Agents</h2>
        <p className="agents-subheading text-muted mt-2">7 specialized agents collaborate to extract, normalize, validate and approve claims.</p>

        {/* scroll progress bar */}
        <div className="relative h-[3px] mt-6 rounded-full bg-white/10 overflow-hidden">
          <div className="agents-progress-bar absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full" />
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              whileHover={{ scale:1.04, y:-4 }}
              transition={{ type:'spring', stiffness:300, damping:20 }}
              className="agent-card glass p-6 rounded-2xl cursor-pointer relative overflow-hidden"
            >
              {/* glow blob */}
              <div className="agent-blob absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 opacity-25 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-semibold text-primary">{a.name}</h4>
                  <p className="text-xs text-muted mt-0.5">Agent #{i+1}</p>
                </div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-black font-bold text-sm shadow-lg"
                  animate={{ y:[0,-7,0] }}
                  transition={{ duration:3 + i*0.2, repeat:Infinity, ease:'easeInOut' }}
                >
                  AI
                </motion.div>
              </div>

              <p className="mt-4 text-xs text-slate-300 leading-relaxed relative z-10">{a.desc}</p>

              <div className="mt-3 text-xs text-teal-400 relative z-10">
                Specialized in: <span className="font-semibold">{a.name.split(' ')[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
