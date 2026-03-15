import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const claimsData = [
  {name:'Jan', approvals: 120, time: 30},
  {name:'Feb', approvals: 210, time: 25},
  {name:'Mar', approvals: 150, time: 20},
  {name:'Apr', approvals: 300, time: 18},
  {name:'May', approvals: 260, time: 15},
]

export function Dashboard(){
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-slate-500">Claims Processed</p>
            <div className="text-2xl font-bold">1,420</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-slate-500">Denial Rate</p>
            <div className="text-2xl font-bold">3.2%</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-slate-500">Avg Processing Time</p>
            <div className="text-2xl font-bold">18s</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-slate-500">Revenue Saved</p>
            <div className="text-2xl font-bold">$34,200</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="glass p-4 rounded-lg">
            <h4 className="font-semibold">Claim approvals</h4>
            <div style={{width:'100%', height:240}}>
              <ResponsiveContainer>
                <LineChart data={claimsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="approvals" stroke="#00d2ff" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="glass p-4 rounded-lg">
            <h4 className="font-semibold">Processing speed comparison</h4>
            <div style={{width:'100%', height:240}}>
              <ResponsiveContainer>
                <BarChart data={claimsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="time" fill="#09a8a8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
