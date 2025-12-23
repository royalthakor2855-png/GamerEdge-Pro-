import React, { useState } from 'react';
import { getTacticalAdvice } from '../services/geminiService';
const AICoach = () => {
  const [q, setQ] = useState('');
  const [ans, setAns] = useState('');
  const [loading, setLoading] = useState(false);
  const ask = async () => { setLoading(true); setAns(await getTacticalAdvice('BGMI', 'Pro', q)); setLoading(false); };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-orbitron font-bold text-fuchsia-500">AI COACH</h2>
      <textarea value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask tactics..." className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl min-h-[100px]" />
      <button onClick={ask} disabled={loading} className="w-full bg-fuchsia-600 p-4 rounded-2xl font-bold">{loading?'Thinking...':'GET ADVICE'}</button>
      {ans && <div className="glass p-4 rounded-2xl text-sm leading-relaxed">{ans}</div>}
    </div>
  );
};
export default AICoach;
