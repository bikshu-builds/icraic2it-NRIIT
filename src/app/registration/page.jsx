// pages/registration.jsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

export default function RegistrationPage() {
  const [activeTab, setActiveTab] = useState('quick')
  const [copied, setCopied] = useState('')
  const [showBankModal, setShowBankModal] = useState(false)
  const [showOrganizer, setShowOrganizer] = useState(false)
  const contentRef = useRef(null)

  const bank = {
    beneficiary: 'The Principal, NRI Institute of Technology, Agiripalli',
    bankName: 'BANK OF BARODA',
    accountNumber: '26360100033044',
    ifsc: 'BARB0BENVIJ',
    micr: '520012002',
    swift: 'BARBINBB',
    branch: 'Benz Circle, Vijayawada, Krishna Dt., ANDHRA PRADESH',
    country: 'INDIA',
    tan: 'HYDS23089D'
  }

  // small helper to copy & show short feedback
  const copyToClipboard = async (label, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(`${label} copied`)
      setTimeout(() => setCopied(''), 2500)
    } catch {
      setCopied('Copy failed')
      setTimeout(() => setCopied(''), 2500)
    }
  }

  // Keep focus in content area when tab changes to aid keyboard navigation
  useEffect(() => {
    contentRef.current?.focus()
  }, [activeTab])

  return (
    <>
      <Head>
        <title>Conference Registration — NRIIT</title>
        <meta name="description" content="Conference registration details, bank transfer instructions, fee table and registration link for NRI Institute of Technology conference." />
        <meta name="theme-color" content="#EB1165" />
      </Head>

      <main className="min-h-screen bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              
              <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: '#EB1165' }}>
                Conference Registration
              </h1>
              <p className="mt-2 text-1xl text-gray-800 max-w-2xl">
                The authors must agree that if the paper is accepted for oral/ poster presentation, at least one of the authors will register for the conference and present the paper at conference venue by completing the two step registration process as mentioned below. Co−authors and other persons intending to attend the conference can register as Listeners (Attendee)
              </p>

              {/* compact quick-pills */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: '#EB1165', color: '#EB1165' }}>Step 1 — Pay</span>
                <span className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: '#EB1165', color: '#EB1165' }}>Step 2 — Fill form</span>
                <span className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: '#EB1165', color: '#EB1165' }}>Scopus publication option</span>
              </div>
            </div>

            {/* Sticky quick actions (compact) */}
            <div className="hidden sm:flex sm:flex-col items-end gap-2">
              <a
                href="https://forms.gle/EtVwNHoA8RNn6EUT6"
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-2 rounded-md text-1xl"
                style={{ background: '#EB1165', color: '#fff' }}
              >
                Open Registration Form
              </a>

              <div className="text-1xl text-gray-600 mt-2">{copied}</div>
            </div>
          </div>

          {/* Tabs + content: make main content area compact with internal scrolling */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left tabs (vertical on desktop) */}
            <nav className="lg:col-span-1 bg-white border rounded-lg p-2 sticky top-6" aria-label="Sections">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('quick')}
                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'quick' ? 'bg-[#ffeef6] border' : ''}`}
                    style={{ borderColor: activeTab === 'quick' ? '#EB1165' : 'transparent', color: activeTab === 'quick' ? '#EB1165' : '#111827' }}
                  >
                    Quick Steps
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab('fees')}
                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'fees' ? 'bg-[#ffeef6] border' : ''}`}
                    style={{ borderColor: activeTab === 'fees' ? '#EB1165' : 'transparent', color: activeTab === 'fees' ? '#EB1165' : '#111827' }}
                  >
                    Fees (Compact)
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => { setShowBankModal(true); setActiveTab('bank') }}
                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'bank' ? 'bg-[#ffeef6] border' : ''}`}
                    style={{ borderColor: activeTab === 'bank' ? '#EB1165' : 'transparent', color: activeTab === 'bank' ? '#EB1165' : '#111827' }}
                  >
                    Bank Details
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveTab('organizer')}
                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'organizer' ? 'bg-[#ffeef6] border' : ''}`}
                    style={{ borderColor: activeTab === 'organizer' ? '#EB1165' : 'transparent', color: activeTab === 'organizer' ? '#EB1165' : '#111827' }}
                  >
                    Organizer Statement
                  </button>
                </li>
              </ul>
            </nav>

            {/* Main content area: compact + scrollable internally */}
            <section
              className="lg:col-span-3 border rounded-lg"
              style={{ minHeight: '380px', maxHeight: '65vh', overflow: 'hidden' }}
            >
              <div
                ref={contentRef}
                tabIndex={-1}
                className="h-full overflow-auto p-4 focus:outline-none"
              >
                {/* QUICK */}
                {activeTab === 'quick' && (
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Two-step Registration (compact)</h2>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-sm bg-gray-50">
                        <div className="text-1xl text-gray-600">Step 1 — Fee Submission</div>
                        <div className="mt-2 text-1xl font-medium">{bank.beneficiary}</div>
                        <div className="mt-1 text-1xl text-gray-600">Bank: {bank.bankName}</div>

                        <div className="mt-2 flex gap-2">
                          <button onClick={() => setShowBankModal(true)} className="text-1xl px-2 py-1 border rounded" style={{ borderColor: '#EB1165', color: '#EB1165' }}>
                            View/Copy Bank Details
                          </button>

                          <button onClick={() => copyToClipboard('Account Number', bank.accountNumber)} className="text-1xl px-2 py-1 border rounded">
                            Copy Account
                          </button>
                        </div>

                        <div className="mt-2 text-1xl text-gray-600">Keep payment UTR/receipt for the form.</div>
                      </div>

                      <div className="p-3 border rounded-sm">
                        <div className="text-1xl text-gray-600">Step 2 — Fill Form</div>
                        <a href="https://forms.gle/EtVwNHoA8RNn6EUT6" target="_blank" rel="noreferrer noopener" className="inline-block mt-2 px-3 py-1 rounded text-sm" style={{ background: '#EB1165', color: 'white' }}>
                          Open Registration Form
                        </a>

                        <div className="mt-2 text-1xl text-gray-600">Upload UTR/transaction reference in the form where requested.</div>
                      </div>
                    </div>

                    {/* Tiny summary / notes */}
                    <div className="mt-4 text-1xl text-gray-700 space-y-2">
                      <div>* At least one author must register & present the paper at the venue.</div>
                      <div>* No modification in paper after final submission date.</div>
                      <div>* Publication options: Scopus indexed proceedings (publication fee) or Online Proceedings with ISBN (non-Scopus).</div>
                    </div>
                  </div>
                )}

                {/* FEES */}
                {activeTab === 'fees' && (
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Registration Fees — Compact View</h2>

                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-1xl table-fixed">
                        <thead>
                          <tr className="text-left text-1xl text-gray-600">
                            <th className="w-2/5 px-2 py-2">Category</th>
                            <th className="w-1/5 px-2 py-2">India — Author (Rs.)</th>
                            <th className="w-1/5 px-2 py-2">India — Listener (Rs.)</th>
                            <th className="w-1/5 px-2 py-2">Other Countries — Author (USD)</th>
                            <th className="w-1/5 px-2 py-2">Other Countries — Listener (USD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-2 py-2">Students / Research Scholars</td>
                            <td className="px-2 py-2">1000</td>
                            <td className="px-2 py-2">1000</td>
                            <td className="px-2 py-2">$75</td>
                            <td className="px-2 py-2">$75</td>
                          </tr>
                          <tr className="border-t bg-white">
                            <td className="px-2 py-2">Academician</td>
                            <td className="px-2 py-2">1500</td>
                            <td className="px-2 py-2">1000</td>
                            <td className="px-2 py-2">$75</td>
                            <td className="px-2 py-2">$75</td>
                          </tr>
                          <tr className="border-t bg-gray-50">
                            <td className="px-2 py-2">Industry Professional</td>
                            <td className="px-2 py-2">3000</td>
                            <td className="px-2 py-2">2500</td>
                            <td className="px-2 py-2">$75</td>
                            <td className="px-2 py-2">$75</td>
                          </tr>

                          <tr className="border-t bg-white">
                            <td className="px-2 py-2">Publication Fee (Scopus Indexed)</td>
                            <td className="px-2 py-2">10000</td>
                            <td className="px-2 py-2">–</td>
                            <td className="px-2 py-2">$100</td>
                            <td className="px-2 py-2">–</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-3 text-xs text-gray-600">
                      * Papers accepted for presentation shall be published in the chosen proceedings type. Scopus-indexed proceedings usually require the Scopus publication fee.
                    </div>
                  </div>
                )}

                {/* BANK (modal opens separately) */}
                {activeTab === 'bank' && (
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Bank Details (Quick)</h2>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">Beneficiary</div>
                        <div className="font-medium">{bank.beneficiary}</div>
                      </div>

                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">Account</div>
                        <div className="font-medium">{bank.accountNumber}</div>
                      </div>

                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">IFSC</div>
                        <div className="font-medium">{bank.ifsc}</div>
                      </div>

                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">Branch</div>
                        <div className="font-medium">{bank.branch}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button onClick={() => copyToClipboard('Account Number', bank.accountNumber)} className="px-3 py-1 text-sm border rounded">
                        Copy Account
                      </button>
                      <button onClick={() => copyToClipboard('IFSC', bank.ifsc)} className="px-3 py-1 text-sm border rounded">
                        Copy IFSC
                      </button>
                      <button onClick={() => setShowBankModal(true)} className="px-3 py-1 text-sm border rounded" style={{ borderColor: '#EB1165', color: '#EB1165' }}>
                        Open Full Details
                      </button>
                    </div>
                  </div>
                )}

                {/* ORGANIZER */}
                {activeTab === 'organizer' && (
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Organizer Statement</h2>

                    <div className="mt-3 text-sm space-y-2">
                      <div>
                        If the conference cannot be held physically due to force majeure (weather, disasters, etc.), it will be held online.
                        The organizer will not bear compensation and will not refund the registration fee. Participants must cooperate with arrangements.
                      </div>

                      <div>
                        Organizers plan to publish proceedings with reputed indexed journals. Exact details will be posted on the conference website.
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTACT */}
                {activeTab === 'contact' && (
                  <div>
                    <h2 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Contact & Accommodation</h2>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">Accommodation queries</div>
                        <a href="mailto:accommodation@nriit.edu.in" className="mt-2 inline-block text-sm" style={{ color: '#EB1165' }}>
                          accommodation@nriit.edu.in
                        </a>
                        <div className="mt-2 text-xs text-gray-600">Please include check-in/out dates and special needs.</div>
                      </div>

                      <div className="p-3 border rounded-sm">
                        <div className="text-xs text-gray-600">Registration queries</div>
                        <a href="mailto:info@nriit.edu.in" className="mt-2 inline-block text-sm" style={{ color: '#EB1165' }}>
                          info@nriit.edu.in
                        </a>
                        <div className="mt-2 text-xs text-gray-600">For bank/UTR help or payment issues mention tx/reference id.</div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-gray-600">
                      Quick buttons:
                      <div className="mt-2 flex gap-2">
                        <button onClick={() => copyToClipboard('Beneficiary', bank.beneficiary)} className="px-2 py-1 border rounded text-sm">
                          Copy beneficiary
                        </button>
                        <button onClick={() => copyToClipboard('All details', Object.values(bank).join(' | '))} className="px-2 py-1 border rounded text-sm">
                          Copy all bank details
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          
        </div>

        {/* BANK Modal (overlay) */}
        {showBankModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowBankModal(false)} />

            <div className="relative max-w-xl w-full bg-white rounded-lg shadow-lg border p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#EB1165' }}>Bank Details</h3>
                  <p className="mt-1 text-xs text-gray-600">Use online transfer and keep UTR/transaction slip for upload.</p>
                </div>
                <button onClick={() => setShowBankModal(false)} className="text-sm px-2 py-1 border rounded">Close</button>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-gray-600">Beneficiary</div>
                  <div className="font-medium">{bank.beneficiary}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">Bank</div>
                  <div className="font-medium">{bank.bankName}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">Account Number</div>
                  <div className="font-medium">{bank.accountNumber}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">IFSC Code</div>
                  <div className="font-medium">{bank.ifsc}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">MICR-Code</div>
                  <div className="font-medium">{bank.micr}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">Swift Code</div>
                  <div className="font-medium">{bank.swift}</div>
                </div>

                <div className="sm:col-span-2">
                  <div className="text-xs text-gray-600">Branch Location</div>
                  <div className="font-medium">{bank.branch}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">Country</div>
                  <div className="font-medium">{bank.country}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600">TAN</div>
                  <div className="font-medium">{bank.tan}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => copyToClipboard('Account Number', bank.accountNumber)} className="px-3 py-1 border rounded text-sm">
                  Copy Account
                </button>
                <button onClick={() => copyToClipboard('IFSC', bank.ifsc)} className="px-3 py-1 border rounded text-sm">
                  Copy IFSC
                </button>
                <button onClick={() => copyToClipboard('Beneficiary', bank.beneficiary)} className="px-3 py-1 border rounded text-sm">
                  Copy beneficiary
                </button>
                <button onClick={() => copyToClipboard('All details', Object.values(bank).join(' | '))} className="px-3 py-1 border rounded text-sm">
                  Copy all details
                </button>

                <a href="/brochure.pdf" download className="ml-auto px-3 py-1 border rounded text-sm" style={{ borderColor: '#EB1165', color: '#EB1165' }}>
                  Download Payment Instructions
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
