import React, { useState } from 'react';
import { Github, Linkedin, Facebook, Instagram, Send, ArrowUp } from 'lucide-react';
import { apiService } from '../services/api.js';

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await apiService.subscribeNewsletter(email);
      showToast?.(res?.message || 'Subscribed.', res?.success ? 'success' : 'error');
    } catch (err) {
      showToast?.(err.message || 'Subscription failed.', 'error');
    }
    setEmail('');
  };

  return (
    <footer className="bg-[#081226] text-white pt-16 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 nt-grid-bg opacity-30" aria-hidden />
      <div className="nt-glow w-96 h-96 bg-[#2563EB]/20 -top-20 right-0" aria-hidden />

      <div className="nt-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/nova-tech-logo.png" alt="Nova Tech" className="h-10 w-auto bg-white rounded-lg p-1" />
              <span className="font-[family-name:var(--font-display)] font-bold text-xl">Nova Tech</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We Build Digital Solutions—websites, software systems, design, and cloud platforms engineered for growth.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Newsletter email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#3B82F6]"
              />
              <button type="submit" className="nt-btn nt-btn-primary !px-4" aria-label="Subscribe">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-3 text-sm">
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white">Company</h4>
            <a href="#team" className="block text-slate-400 hover:text-white">Team</a>
            <a href="#trusted" className="block text-slate-400 hover:text-white">Partners</a>
            <a href="#contact" className="block text-slate-400 hover:text-white">Contact</a>
          </div>
          <div className="lg:col-span-2 space-y-3 text-sm">
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white">Services</h4>
            <a href="#services" className="block text-slate-400 hover:text-white">Web Solutions</a>
            <a href="#services" className="block text-slate-400 hover:text-white">Software</a>
            <a href="#services" className="block text-slate-400 hover:text-white">Design</a>
            <a href="#services" className="block text-slate-400 hover:text-white">Cloud</a>
          </div>
          <div className="lg:col-span-2 space-y-3 text-sm">
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white">Projects</h4>
            <a href="#projects" className="block text-slate-400 hover:text-white">Portfolio</a>
            <a href="#process" className="block text-slate-400 hover:text-white">Process</a>
            <a href="#testimonials" className="block text-slate-400 hover:text-white">Testimonials</a>
          </div>
          <div className="lg:col-span-2 space-y-3 text-sm">
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white">Quick links</h4>
            <a href="#faq" className="block text-slate-400 hover:text-white">FAQ</a>
            <a href="#why-us" className="block text-slate-400 hover:text-white">Why Us</a>
            <a href="#contact" className="block text-slate-400 hover:text-white">Start Building</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nova Tech. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Novatech97" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white" aria-label="GitHub"><Github className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-2 p-2 rounded-lg bg-white/10 text-white" aria-label="Back to top">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
