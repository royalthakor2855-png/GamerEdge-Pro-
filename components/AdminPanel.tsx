import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [{name:'M',r:4000},{name:'T',r:3000},{name:'W',r:5000}];
const AdminPanel = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-orbitron font-bold">Admin Panel</h2>
    <div className="glass p-4 rounded-2xl h-48">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}><XAxis dataKey="name" hide /><Area type="monotone" dataKey="r" stroke="#8b5cf6" fill="#8b5cf633" /></AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="glass p-4 rounded-2xl"><p className="text-xs text-gray-400">Total Users: 1,204</p><p className="text-sm font-bold">Revenue: ₹45,200</p></div>
  </div>
);
export default AdminPanel;
