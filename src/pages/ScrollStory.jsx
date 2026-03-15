import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { id:1, title: 'Upload Medical Document', subtitle: 'Drag & Drop upload card', note: 'User uploads PDF → document floats into pipeline' },
  { id:2, title: 'AI OCR Extraction', subtitle: 'Tesseract + LayoutLMv3', note: 'Document splits into text blocks' },
  { id:3, title: 'AI Medical Entity Detection', subtitle: '7 Specialized AI Agents', note: 'Highlights: HbA1c 7.2%, Metformin 500mg, Diabetes' },
  { id:4, title: 'Medical Code Normalization', subtitle: 'ICD-10 / CPT / RxNorm', note: 'Diabetes → E11.9 ; Metformin → RxNorm ID' },
  { id:5, title: 'Fraud Detection', subtitle: 'Signature, Duplicate, Date checks', note: 'Claim Verified' },
  { id:6, title: 'Blockchain Claim Recording', subtitle: 'Polygon zkEVM', note: 'Block connected to nodes' },
  { id:7, title: 'Automatic Claim Approval', subtitle: 'Smart Contract', note: 'APPROVED' }
]

export function ScrollStory(){
  const container = useRef()

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      // animate panels with staggered 3D-like entrance
      const panels = gsap.utils.toArray('.panel')
      panels.forEach((panel, i)=>{
        gsap.fromTo(panel.querySelector('.visual-card'), {opacity:0, y:60, rotationX:8, scale:0.98}, {
          opacity:1, y:0, rotationX:0, scale:1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: true
          }
        })
        gsap.fromTo(panel.querySelector('.meta'), {opacity:0, x:-40}, {opacity:1, x:0, scrollTrigger:{trigger:panel, start:'top 70%', end:'bottom 50%', scrub:true}})
      })

      // pipeline connector animation
      gsap.to('.pipeline-line', {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6
        }
      })
    }, container)

    return ()=>ctx.revert()
  },[])

  return (
    <div className="min-h-screen text-white relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/medd2.avif" alt="med background" className="w-full h-full object-cover blur-md scale-105" />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16" ref={container}>
        <h2 className="text-4xl font-extrabold">How MedNorm AI Works</h2>
        <p className="text-slate-300 mt-2 max-w-xl">Scroll to explore the AI pipeline — each step animates into view with 3D motion and a connected visual pipeline.</p>

        <div className="relative mt-12">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={s.id} className="flex gap-8 items-start">

                {/* ── Chain node + links ── */}
                <div className="flex flex-col items-center w-16 flex-shrink-0">
                  {/* Numbered node */}
                  <div className="visual-card w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-xl text-black z-10
                    bg-gradient-to-br from-cyan-300 to-teal-500 shadow-lg shadow-cyan-500/50 border-2 border-cyan-200/60">
                    {s.id}
                  </div>
                  {/* Chain links between nodes */}
                  {i < steps.length - 1 && (
                    <div className="flex flex-col items-center gap-[4px] my-2">
                      {Array.from({ length: 8 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-[18px] h-[26px] rounded-full border-[3px] border-cyan-400/80 bg-transparent"
                          style={{ transform: j % 2 === 0 ? 'rotate(0deg)' : 'rotate(90deg)' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Step content ── */}
                <div className="panel story-step pb-20 flex-1 pt-1">
                  <div className="max-w-2xl">
                    <div className="meta">
                      <h3 className="text-2xl font-bold">{s.title}</h3>
                      <p className="text-slate-300 mt-2">{s.subtitle}</p>
                    </div>
                    <div className="mt-6 glass p-6 rounded-2xl visual-card">
                      <p className="text-slate-200">{s.note}</p>
                      {s.id===1 && (
                        <div className="mt-4 p-6 bg-gradient-to-b from-white/3 to-white/2 rounded-lg">
                          <div className="border-2 border-dashed border-white/10 p-8 rounded text-center">Drag & Drop PDF here</div>
                        </div>
                      )}
                      {s.id===2 && (
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="p-3 bg-white/6 rounded">Diagnosis</div>
                          <div className="p-3 bg-white/6 rounded">Lab Results</div>
                          <div className="p-3 bg-white/6 rounded">Medicines</div>
                          <div className="p-3 bg-white/6 rounded">Billing</div>
                        </div>
                      )}
                      {s.id===3 && (
                        <div className="mt-4 flex gap-3">
                          <span className="px-3 py-1 rounded bg-yellow-600/20">HbA1c 7.2%</span>
                          <span className="px-3 py-1 rounded bg-sky-600/20">Metformin 500mg</span>
                          <span className="px-3 py-1 rounded bg-rose-600/20">Diabetes</span>
                        </div>
                      )}
                      {s.id===4 && (
                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div className="p-3 bg-white/6 rounded">Diabetes → <strong>E11.9</strong></div>
                          <div className="p-3 bg-white/6 rounded">Blood test → <strong>CPT:80053</strong></div>
                          <div className="p-3 bg-white/6 rounded">Metformin → <strong>RxNorm:860975</strong></div>
                        </div>
                      )}
                      {s.id===5 && (
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-3 text-green-300">✔ Signature validation</div>
                          <div className="flex items-center gap-3 text-green-300">✔ Duplicate detection</div>
                          <div className="flex items-center gap-3 text-green-300">✔ Date mismatch detection</div>
                          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-teal-500 text-black text-xs">Claim Verified</div>
                        </div>
                      )}
                      {s.id===6 && (
                        <div className="mt-4 flex items-center gap-4">
                          <div className="p-3 bg-white/6 rounded">Claim → Block</div>
                          <div className="p-3 bg-white/6 rounded">Nodes •••</div>
                        </div>
                      )}
                      {s.id===7 && (
                        <div className="mt-4">
                          <div className="text-5xl font-extrabold text-green-400">APPROVED</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
