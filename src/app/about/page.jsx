'use client'
/*
NRIIT Landing Component
Drop this file into your Next.js project (e.g. /components/NRIITLanding.jsx) and import it into pages/index.jsx
Requires: Tailwind CSS (already enabled in your project)
Optional: framer-motion (used for subtle animations). Install with: npm i framer-motion

Design notes:
- Headings use color #EB1165
- Background is white, text is black
- Layout minimizes vertical scrolling by using tabs, accordions and a compact stats strip
*/

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function NRIITLanding() {
  const [tab, setTab] = useState('overview')
  const [openDept, setOpenDept] = useState(null)

  const departments = {
    'Undergraduate (B.Tech)': [
      'CSE',
      'CSE (AI & ML)',
      'CSE (DS)',
      'AI & ML',
      'CSE - Telugu Medium',
      'IT',
      'ECE',
      'EEE',
      'MECH',
      'CIVIL'
    ],
    'Postgraduate (M.Tech & MBA)': [
      'M.Tech - Computer Science & Engineering',
      'M.Tech - Digital Electronics & Communication Systems',
      'M.Tech - Power Electronics & Drives',
      'M.Tech - Structural Engineering',
      'M.Tech - Thermal Engineering',
      'Master of Business Administration (MBA)'
    ]
  }

  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: '#EB1165' }}>
              NRI Institute of Technology (Autonomous), Pothavarappadu
            </h1>
            <p className="mt-4 text-gray-800 max-w-3xl">
              Established in 2008 under Sri Durga Malleswari Educational Society, NRIIT provides quality technical
              education and fosters research across Engineering, Science and Management. The campus is set on 20 acres
              of mango groves on the Vijayawada–Nuziveedu State Highway, offering a calm, green learning environment and
              easy transport connectivity.
            </p>

            {/* Quick callouts */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: '#EB1165', color: '#EB1165' }}>Established 2008</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: '#EB1165', color: '#EB1165' }}>20 acres campus</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: '#EB1165', color: '#EB1165' }}>10 B.Tech • 6 PG Programs</span>
            </div>

            {/* Tabs */}
            <nav className="mt-8 border-b">
              <ul className="flex gap-4 text-sm">
                {['overview', 'courses', 'facilities'].map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => setTab(t)}
                      className={`pb-3 ${tab === t ? 'border-b-2' : 'border-b-2 border-transparent'}`}
                      style={{ borderColor: tab === t ? '#EB1165' : 'transparent', color: tab === t ? '#EB1165' : '#111827' }}
                    >
                      {t === 'overview' ? 'Overview' : t === 'courses' ? 'Courses' : 'Facilities & Labs'}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.section className="mt-6" key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
              {tab === 'overview' && (
                <div className="prose max-w-none text-black">
                  <h3 style={{ color: '#EB1165' }}>Campus & Location</h3>
                  <p>
                    Ideally located about <strong>23 KM from Vijayawada</strong> and <strong>22 KM from Gannavaram Airport</strong>, the campus offers serene surroundings and is well connected by college buses and public
                    transport.
                  </p>

                  <h3 style={{ color: '#EB1165' }}>Mission</h3>
                  <p>
                    To provide strong technical foundations, promote research and development, and prepare graduates to
                    succeed in industry and academia.
                  </p>
                </div>
              )}

              {tab === 'courses' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold" style={{ color: '#EB1165' }}>Undergraduate (B.Tech)</h4>
                    <ul className="mt-3 list-disc list-inside text-black">
                      {departments['Undergraduate (B.Tech)'].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold" style={{ color: '#EB1165' }}>Postgraduate & MBA</h4>
                    <ul className="mt-3 list-disc list-inside text-black">
                      {departments['Postgraduate (M.Tech & MBA)'].map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {tab === 'facilities' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold" style={{ color: '#EB1165' }}>Labs & Equipment</h4>
                    <p className="mt-2 text-black">All departments are equipped with state-of-the-art labs, advanced computer systems and contemporary software to support teaching and research.</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold" style={{ color: '#EB1165' }}>Support & Connectivity</h4>
                    <p className="mt-2 text-black">Well-connected campus with college buses and public transport. Quiet, green environment ideal for study and research.</p>
                  </div>
                </div>
              )}
            </motion.section>
          </motion.header>

          {/* Right column: compact stats + accordion */}
          <aside className="space-y-6">
            <div className="p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-semibold" style={{ color: '#EB1165' }}>Quick Facts</p>
                  <h3 className="text-xl font-bold">NRIIT at a glance</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm">20 acres</p>
                  <p className="text-xs text-gray-600">Mango groves campus</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 rounded border text-center">
                  <div className="font-bold">2008</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="p-2 rounded border text-center">
                  <div className="font-bold">10</div>
                  <div className="text-gray-600">B.Tech Courses</div>
                </div>
                <div className="p-2 rounded border text-center">
                  <div className="font-bold">6</div>
                  <div className="text-gray-600">PG Programs</div>
                </div>
                <div className="p-2 rounded border text-center">
                  <div className="font-bold">23 KM</div>
                  <div className="text-gray-600">From Vijayawada</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold mb-3" style={{ color: '#EB1165' }}>Departments</h4>
              <div className="space-y-2">
                {Object.entries(departments).map(([group, list]) => (
                  <div key={group} className="border rounded">
                    <button
                      className="w-full text-left px-3 py-2 flex justify-between items-center"
                      onClick={() => setOpenDept(openDept === group ? null : group)}
                    >
                      <span className="font-medium">{group}</span>
                      <svg className={`w-4 h-4 transform ${openDept === group ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8L10 12L14 8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {openDept === group && (
                      <div className="px-4 pb-3 text-sm">
                        <ul className="list-disc list-inside">
                          {list.map((d) => <li key={d}>{d}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="p-4 rounded-lg shadow-sm border text-center">
              <h4 className="font-semibold" style={{ color: '#EB1165' }}>Visit / Contact</h4>
              <p className="mt-2 text-sm">Pothavarappadu, Vijayawada • Well connected by buses</p>
              <a href="#contact" className="inline-block mt-3 px-4 py-2 rounded-md font-medium" style={{ background: '#EB1165', color: 'white' }}>Get in touch</a>
            </div>
          </aside>
        </div>

        
      </div>
    </div>
  )
}
