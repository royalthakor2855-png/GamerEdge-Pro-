import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import AdminPanel from './components/AdminPanel';
import AICoach from './components/AICoach';
import { MOCK_TOURNAMENTS, MOCK_LEADERBOARD, Icons } from './constants';
import { User } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('ge_user');
    if (savedUser) { setUser(JSON.parse(savedUser)); setIsAuthenticated(true); }
  }, []);

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '786198') { // Master OTP
      const newUser = { phoneNumber, username: `Gamer_${phoneNumber.slice(-4)}`, walletBalance: 100, isAdmin: phoneNumber === '9974053021' };
      setUser(newUser as any);
      setIsAuthenticated(true);
      localStorage.setItem('ge_user', JSON.stringify(newUser));
    } else { alert("Invalid OTP! Try 786198"); }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
        <div className="w-full max-w-md glass p-8 rounded-3xl text-center space-y-6">
          <h1 className="text-3xl font-orbitron font-black">GAMEREDGE <span className="text-violet-500">PRO</span></h1>
          {!showOtp ? (
            <form onSubmit={(e) => { e.preventDefault(); setShowOtp(true); }} className="space-y-4">
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl" />
              <button type="submit" className="w-full bg-violet-600 p-4 rounded-2xl font-bold">SEND OTP</button>
            </form>
          ) : (
            <form onSubmit={handleOtpVerify} className="space-y-4">
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 786198" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-center text-xl tracking-widest" />
              <button type="submit" className="w-full bg-violet-600 p-4 rounded-2xl font-bold">VERIFY</button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} user={user} onWalletClick={() => setShowWallet(true)}>
      {activeTab === 'home' && (
        <div className="space-y-6">
          <h2 className="text-xl font-orbitron font-bold">Live Tournaments</h2>
          {MOCK_TOURNAMENTS.map(t => (
            <div key={t.id} className="glass p-4 rounded-2xl flex justify-between items-center">
              <div>
                <h3 className="font-bold">{t.title}</h3>
                <p className="text-xs text-gray-400">Prize: ₹{t.prizePool} | Entry: ₹{t.entryFee}</p>
              </div>
              <button className="bg-violet-600 px-4 py-2 rounded-lg text-xs font-bold">JOIN</button>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'coach' && <AICoach />}
      {activeTab === 'admin' && <AdminPanel />}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          <h2 className="text-xl font-orbitron font-bold">Leaderboard</h2>
          {MOCK_LEADERBOARD.map((l, i) => (
            <div key={i} className="glass p-3 rounded-xl flex justify-between">
              <span>#{i+1} {l.username}</span>
              <span className="text-violet-400">₹{l.winnings}</span>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default App;
