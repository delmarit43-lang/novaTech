import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Code2, 
  Palette, 
  Building2, 
  Briefcase, 
  Landmark, 
  Cloud, 
  BrainCircuit, 
  Zap, 
  Layers
} from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Navbar({ onOpenCommand, onOpenContact, onOpenQuote }) {
  const { lang, setLang, t, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuItems = {
    services: [
      { icon: Code2, title: 'Web & App Development', desc: 'Websites, Web Apps & Mobile Apps (iOS/Android)', badge: 'Core' },
      { icon: Palette, title: 'UI/UX & Brand Identity', desc: 'UI/UX, Design Systems, Logos & Branding', badge: 'Creative' },
      { icon: Building2, title: 'Enterprise Software', desc: 'ERP, CRM, HRM, POS, Inventory & Accounting', badge: 'Business' },
      { icon: Briefcase, title: 'Industry Solutions', desc: 'EdTech, HealthTech, Hotels, Fleet & Property', badge: 'Turnkey' },
      { icon: Landmark, title: 'Government Solutions', desc: 'Ministry Websites, e-Gov & Citizen Portals', badge: 'Secure' },
      { icon: Cloud, title: 'Cloud & Database', desc: 'AWS/GCP Cloud, Hosting & Database Tuning', badge: 'Sub-15ms' },
      { icon: BrainCircuit, title: 'IT Consulting & Support', desc: 'Digital Strategy, Architecture & 24/7 SLA', badge: '24/7 Ops' }
    ]
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-[#081226]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/20' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="logo-container group flex items-center gap-3">
            <div className="relative p-1 rounded-2xl bg-white/95 shadow-xl shadow-blue-500/20 group-hover:shadow-blue-500/40 border border-white/40 transition-all duration-300">
              <img 
                src="/nova-tech-logo.png" 
                alt="Nova Tech Logo" 
                className="h-10 sm:h-11 w-auto object-contain rounded-xl"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 bg-slate-950/40">
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {/* Mega Menu Popup */}
              {activeMegaMenu === 'services' && (
                <div className="absolute top-full -left-20 mt-3 w-[660px] p-5 glass-panel rounded-3xl border border-white/15 shadow-2xl bg-[#081226]/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-cyan-400">{t('nav.megaMenuLabel')}</span>
                    <span className="text-[10px] font-mono text-slate-400">Explore Capabilities</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {megaMenuItems.services.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div 
                          key={idx} 
                          onClick={() => {
                            setActiveMegaMenu(null);
                            const el = document.getElementById('services');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="group/card p-3 rounded-2xl hover:bg-blue-600/15 border border-transparent hover:border-blue-500/30 cursor-pointer transition-all flex items-start gap-3"
                        >
                          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>

                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-white group-hover/card:text-blue-300 transition-colors">{item.title}</h4>
                              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">Need a tailored enterprise solution?</span>
                    <button 
                      onClick={() => {
                        setActiveMegaMenu(null);
                        onOpenQuote();
                      }}
                      className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-1.5 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20"
                    >
                      <span>{t('nav.requestProposal')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.about')}</a>
            <a href="#projects" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.portfolio')}</a>
            <a href="#process" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.process')}</a>
            <a href="#pricing" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.pricing')}</a>
            <a href="#insights" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.insights')}</a>
            <a href="#faq" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-all">{t('nav.faq')}</a>
          </nav>

          {/* Header Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Command Palette Trigger */}
            <button 
              onClick={onOpenCommand}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-mono transition-all"
              title="Search command palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('nav.search')}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">⌘K</kbd>
            </button>

            {/* Language Selector */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 glass-panel rounded-xl p-1.5 border border-white/10 shadow-xl bg-[#081226] z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        lang === l.code ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              type="button"
              onClick={onOpenContact}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('nav.startBuilding')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold"
            >
              {lang}
            </button>
            {langOpen && (
              <div className="absolute top-16 right-4 z-[60] w-36 glass-panel rounded-xl p-1 border border-white/10 bg-[#081226]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:bg-white/5"
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
            <button 
              onClick={onOpenCommand}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            >
              <Search className="w-4 h-4 text-blue-400" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#081226]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">Services (7 Categories)</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">About Nova Tech</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">Featured Projects</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">Process</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">Pricing Plans</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">Blog & Whitepapers</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-blue-400 font-medium py-2 border-b border-white/5">FAQ</a>
            
            <div className="pt-4 flex flex-col gap-3">
              <button 
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                {t('nav.startProject')} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
