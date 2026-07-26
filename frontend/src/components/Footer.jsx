import React, { useState } from 'react';
import { 
  ArrowUp, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook,
  Instagram,
  Mail, 
  ShieldCheck, 
  Globe, 
  Send,
  Sparkles
} from 'lucide-react';

import { apiService } from '../services/api.js';

export default function Footer({ showToast, onOpenAdmin }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      const res = await apiService.subscribeNewsletter(newsletterEmail);
      if (res && res.success) {
        showToast(res.message || 'Subscribed to Nova Tech Architecture Briefing!', 'success');
      } else {
        showToast(res?.message || 'Subscription failed', 'error');
      }
    } catch (err) {
      showToast(err.message || 'Subscribed to Nova Tech Architecture Briefing!', 'info');
    }
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-slate-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter Grid */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#081226]/90 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Subscribe to Nova Architecture Dispatch
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Bi-weekly engineering whitepapers on AI vector pipelines, sub-15ms edge compute, and cybersecurity.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="flex items-center gap-2 w-full lg:w-auto">
            <input 
              type="email"
              required
              placeholder="enter.your@workemail.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all w-full sm:w-72"
            />
            <button 
              type="submit"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="inline-block p-1 rounded-2xl bg-white/95 shadow-lg border border-white/40">
              <img 
                src="/nova-tech-logo.png" 
                alt="Nova Tech Logo" 
                className="h-10 w-auto object-contain rounded-xl"
              />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We Build Digital Solutions That Power Growth. Engineering ultra-modern software, autonomous AI platforms, and cloud infrastructure for high-growth enterprises worldwide.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              All Systems Operational (99.999% SLA)
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-[11px]">SOLUTIONS</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Autonomous AI Engines</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full-Stack React & Go</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Zero-Trust Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design Systems</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-[11px]">COMPANY</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Nova Tech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Partnership Plans</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers (Hiring Architects)</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-[11px]">RESOURCES & LEGAL</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#insights" className="hover:text-white transition-colors">Engineering Papers</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ & Support</a></li>
              {onOpenAdmin && (
                <li>
                  <button onClick={onOpenAdmin} className="text-cyan-400 font-mono font-bold hover:text-cyan-300 transition-colors">
                    🔐 Admin Portal
                  </button>
                </li>
              )}
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Compliance</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-mono">
            © {new Date().getFullYear()} Nova Tech Ecosystem Inc. All rights reserved. Crafted with precision.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a href="https://github.com/Novatech97" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 hover:bg-slate-800 hover:border-slate-500/50 border border-white/10 text-slate-300 hover:text-white transition-all shadow-md hover:scale-110" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-blue-600/30 hover:border-blue-500/50 border border-white/10 text-slate-300 hover:text-blue-400 transition-all shadow-md hover:scale-110" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-blue-600/30 hover:border-blue-500/50 border border-white/10 text-slate-300 hover:text-blue-400 transition-all shadow-md hover:scale-110" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-pink-600/30 hover:border-pink-500/50 border border-white/10 text-slate-300 hover:text-pink-400 transition-all shadow-md hover:scale-110" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 hover:bg-sky-600/30 hover:border-sky-500/50 border border-white/10 text-slate-300 hover:text-sky-400 transition-all shadow-md hover:scale-110" title="Twitter / X">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs flex items-center gap-1.5 shadow-lg shadow-blue-600/30 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
