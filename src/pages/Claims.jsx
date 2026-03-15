import React from 'react'

const MOCK = [
  { patient: 'John Doe', diagnosis: 'Diabetes', code: 'E11.9', claimAmount: '$250', status: 'Approved' },
  { patient: 'Mary Smith', diagnosis: 'Hypertension', code: 'I10', claimAmount: '$120', status: 'Pending' },
  { patient: 'Alan S.', diagnosis: 'Anemia', code: 'D64.9', claimAmount: '$80', status: 'Flagged' },
  { patient: 'Zoe K', diagnosis: 'Fracture', code: 'S52.5', claimAmount: '$400', status: 'Approved' }
]

function StatusBadge({s}){
  const cls = s === 'Approved' ? 'bg-green-100 text-green-700' : s === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${cls}`}>{s}</span>
}

export function Claims(){
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Claims</h2>
        <div className="mt-6 glass p-4 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-sm">
                <th className="py-2">Patient</th>
                <th className="py-2">Diagnosis</th>
                <th className="py-2">Extracted Code</th>
                <th className="py-2">Claim Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK.map((c, i)=> (
                <tr key={i} className="border-t border-white/5 hover:bg-white/3">
                  <td className="py-3">{c.patient}</td>
                  <td>{c.diagnosis}</td>
                  <td>{c.code}</td>
                  <td>{c.claimAmount}</td>
                  <td><StatusBadge s={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
