import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Hero({ onOpenContact, onOpenQuote }) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081226] text-white">
      <div className="absolute inset-0 nt-grid-bg opacity-70" aria-hidden />
      <div className="nt-glow nt-pulse-soft w-[520px] h-[520px] bg-[#2563EB]/35 -top-24 left-1/4" aria-hidden />
      <div className="nt-glow nt-pulse-soft w-[420px] h-[420px] bg-[#3B82F6]/25 bottom-0 right-0" aria-hidden />
      <div className="nt-glow w-[280px] h-[280px] bg-cyan-400/10 top-1/2 left-0" aria-hidden />

      <div className="nt-container relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-24 min-h-screen grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="nt-rise nt-eyebrow text-[#93c5fd]">Digital Engineering Studio</p>
          <h1 className="nt-rise-2 mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            We Build Digital Solutions
          </h1>
          <p className="nt-rise-3 mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Nova Tech designs and delivers websites, enterprise software, and cloud platforms that help organizations grow with clarity, speed, and lasting reliability.
          </p>

          <div className="nt-rise-3 mt-8 flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={onOpenContact} className="nt-btn nt-btn-primary">
              {t('hero.launch')}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={onOpenQuote} className="nt-btn nt-btn-secondary">
              <Play className="w-4 h-4 fill-current" />
              Get a Proposal
            </button>
          </div>
        </div>

        {/* Animated dashboard mockup */}
        <div className="lg:col-span-6 xl:col-span-7 relative">
          <div className="nt-rise-3 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#2563EB]/30 via-transparent to-cyan-400/20 blur-2xl nt-pulse-soft" aria-hidden />

            <div className="relative nt-glass rounded-3xl p-3 sm:p-4 overflow-hidden">
              <div className="rounded-2xl bg-[#0b172c] border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-[11px] font-mono text-white/40">nova-ops.dashboard</span>
                </div>

                <div className="p-4 sm:p-5 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Active Systems', value: '48', trend: '+12%' },
                    { label: 'Uptime', value: '99.9%', trend: 'SLA' },
                    { label: 'Delivery', value: '2.4w', trend: 'avg' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                      <p className="text-[11px] text-white/45 uppercase tracking-wider">{m.label}</p>
                      <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">{m.value}</p>
                      <p className="text-xs text-[#60a5fa] mt-1">{m.trend}</p>
                    </div>
                  ))}
                </div>

                <div className="px-4 sm:px-5 pb-5">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 h-40 relative overflow-hidden">
                    <div className="absolute inset-x-4 bottom-4 flex items-end gap-2 h-24">
                      {[40, 62, 48, 78, 55, 88, 70, 92, 64, 80, 58, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#2563EB] to-[#60a5fa] opacity-90"
                          style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                        />
                      ))}
                    </div>
                    <p className="relative text-[11px] text-white/40 font-mono">Project velocity · last 12 sprints</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="nt-float absolute -left-3 top-10 hidden sm:block nt-glass rounded-2xl px-4 py-3 text-xs text-white/90">
              Secure · Scalable · Maintained
            </div>
            <div className="nt-float-delay absolute -right-2 bottom-16 hidden sm:block nt-glass rounded-2xl px-4 py-3 text-xs text-white/90">
              Web · Software · Cloud
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
