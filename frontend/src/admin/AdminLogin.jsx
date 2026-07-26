import React, { useState } from 'react';
import { Shield, Mail, Lock, RefreshCw, AlertCircle } from 'lucide-react';

export default function AdminLogin({ onLogin, onGoToWebsite, loginLoading, loginError }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginEmail, loginPassword);
  };

  return (
    <div className="min-h-screen bg-[#081226] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#0B0F19]/90 shadow-2xl relative z-10">
        <div className="text-center space-y-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 mx-auto flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white">Nova Admin Portal</h2>
          <p className="text-xs text-slate-400 font-mono">Gal — Admin ama Editor (URL sir ah loo baahan yahay)</p>
        </div>

        {loginError && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">E-MAIL</label>
            <div className="relative">
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@novatech.com"
                className="w-full px-4 py-3 pl-10 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-all"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PASSWORD</label>
            <div className="relative">
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pl-10 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-all"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loginLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Hubinta...
              </>
            ) : (
              'Kuso Gal Dashboard-ka'
            )}
          </button>
        </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-[10px] text-slate-500 font-mono">
              Haddii aadan haysan furaha gelitaanka, xiriir maamulka Nova Tech.
            </p>
          {onGoToWebsite && (
            <button
              type="button"
              onClick={onGoToWebsite}
              className="mt-2 block w-full text-center text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Kusoo laabo websaydhka
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
