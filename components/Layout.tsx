import React from 'react';
import { Icons, MOCK_WINNERS } from '../constants';

const Layout = ({ children, activeTab, setActiveTab, user, onWalletClick }: any) => (
  <div className="min-h-screen pb-24">
    <div className="bg-violet-900/30 py-2 overflow-hidden whitespace-nowrap border-b border-white/5">
      <div className="inline-block animate-marquee">{MOCK_WINNERS.map((w, i) => <span key={i} className="mx-8 text-xs">🔥 {w}</span>)}</div>
    </div>
    <header className="p-4 flex justify-between items-center glass sticky top-0 z-50">
      <span className="font-orbitron font-bold">GAMEREDGE</span>
      <button onClick={onWalletClick} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm font-bold">₹{user?.walletBalance}</button>
    </header>
    <main className="p-4 max-w-lg mx-auto">{children}</main>
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl p-2 flex gap-1 w-[90%] max-w-md">
      <button onClick={() => setActiveTab('home')} className={`flex-1 p-2 rounded-xl flex flex-col items-center ${activeTab==='home'?'bg-violet-600':''}`}><Icons.Trophy className="w-5 h-5" /><span className="text-[8px] uppercase mt-1">Home</span></button>
      <button onClick={() => setActiveTab('coach')} className={`flex-1 p-2 rounded-xl flex flex-col items-center ${activeTab==='coach'?'bg-violet-600':''}`}><Icons.MessageSquare className="w-5 h-5" /><span className="text-[8px] uppercase mt-1">Coach</span></button>
      <button onClick={() => setActiveTab('leaderboard')} className={`flex-1 p-2 rounded-xl flex flex-col items-center ${activeTab==='leaderboard'?'bg-violet-600':''}`}><Icons.History className="w-5 h-5" /><span className="text-[8px] uppercase mt-1">Stats</span></button>
      <button onClick={() => setActiveTab('profile')} className={`flex-1 p-2 rounded-xl flex flex-col items-center ${activeTab==='profile'?'bg-violet-600':''}`}><Icons.User className="w-5 h-5" /><span className="text-[8px] uppercase mt-1">Profile</span></button>
    </nav>
  </div>
);
export default Layout;
