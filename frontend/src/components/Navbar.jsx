import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, Globe, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const LINKS = [
  { href: '#services', key: 'nav.services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', key: 'nav.process' },
  { href: '#projects', key: 'nav.portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#faq', key: 'nav.faq' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onOpenCommand, onOpenContact }) {
  const { lang, setLang, t, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#081226]/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="nt-container flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img src="/nova-tech-logo.png" alt="Nova Tech" className="h-10 w-auto object-contain rounded-lg bg-white p-1" />
          <span className="hidden sm:block font-[family-name:var(--font-display)] text-white font-bold text-lg tracking-tight">
            Nova Tech
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              {l.key ? t(l.key) : l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
              {lang}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#0b1a33] p-1.5 shadow-xl z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                      lang === l.code ? 'bg-[#2563EB] text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button type="button" onClick={onOpenContact} className="nt-btn nt-btn-primary !py-2.5 !px-4 !text-sm">
            {t('nav.startBuilding')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2.5 rounded-xl border border-white/15 bg-white/5 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 border-t border-white/10 bg-[#081226]/98 backdrop-blur-xl px-5 py-4">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/85 font-medium border-b border-white/5"
              >
                {l.key ? t(l.key) : l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              className="nt-btn nt-btn-primary mt-4 w-full"
            >
              {t('nav.startBuilding')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
