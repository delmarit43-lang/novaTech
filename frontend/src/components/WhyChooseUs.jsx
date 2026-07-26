import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Users, 
  Lock, 
  Check, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  const [showMatrix, setShowMatrix] = useState(false);

  const features = [
    {
      icon: Zap,
      title: 'Sub-15ms Latency Engineering',
      desc: 'Edge-rendered micro-frontends and multi-region database routing ensure instantaneous page loads anywhere on Earth.',
      badge: 'Performance'
    },
    {
      icon: Cpu,
      title: 'Autonomous AI Integration',
      desc: 'We do not just add chat widgets. We integrate custom vector search and neural decision pipelines deep inside your product.',
      badge: 'AI Native'
    },
    {
      icon: ShieldCheck,
      title: 'Military-Grade Security',
      desc: 'Zero-trust architecture, automated continuous penetration testing, SOC2 Type II compliance, and AES-256 data isolation.',
      badge: 'Security'
    },
    {
      icon: Clock,
      title: '99.999% SLA Uptime Guarantee',
      desc: 'Our cloud architectures automatically self-heal and failover within seconds without customer disruption.',
      badge: 'Reliability'
    },
    {
      icon: Users,
      title: 'Dedicated Senior Squads',
      desc: 'You work directly with principal engineers and elite UI designers — no junior developers or offshore pass-throughs.',
      badge: 'Elite Team'
    },
    {
      icon: Lock,
      title: '100% IP & Code Ownership',
      desc: 'Clean, modular, thoroughly documented code with full intellectual property rights transferred upon every milestone.',
      badge: 'IP Rights'
    }
  ];

  const compareRows = [
    { feature: 'Senior Principal Engineers Only', nova: true, agency: false, inhouse: 'Varies' },
    { feature: 'Sub-15ms Global Latency Guarantee', nova: true, agency: false, inhouse: false },
    { feature: 'Autonomous Vector AI Integration', nova: true, agency: 'Basic API', inhouse: 'Costly' },
    { feature: 'Full Codebase IP Ownership', nova: true, agency: true, inhouse: true },
    { feature: 'Zero-Downtime Deployment SLA', nova: true, agency: false, inhouse: false },
    { feature: '24/7 Dedicated Cloud Ops', nova: true, agency: false, inhouse: 'Extra Overhead' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY NOVA TECH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Companies <br />
            <span className="text-gradient-blue">That Refuse to Settle.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We combine high-level Silicon Valley engineering standard with agency agility and custom craftsmanship.
          </p>

          <div className="pt-2">
            <button 
              onClick={() => setShowMatrix(!showMatrix)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/40 transition-all"
            >
              <span>{showMatrix ? 'Hide Comparison Matrix' : 'View Competitor Comparison Matrix'}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showMatrix ? 'rotate-90 text-blue-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Competitor Matrix (Collapsible) */}
        {showMatrix && (
          <div className="mb-16 glass-panel rounded-3xl p-6 sm:p-8 border border-blue-500/30 bg-[#081226]/95 animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="text-lg font-bold text-white mb-4 text-center font-mono">
              COMPETITIVE ADVANTAGE MATRIX
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4">ENGINEERING CAPABILITY</th>
                    <th className="py-3 px-4 text-blue-400 font-bold bg-blue-500/10 rounded-t-lg">NOVA TECH</th>
                    <th className="py-3 px-4">GENERIC AGENCY</th>
                    <th className="py-3 px-4">IN-HOUSE HIRING</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {compareRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                      <td className="py-3.5 px-4 bg-blue-500/5 font-bold text-emerald-400 flex items-center gap-1">
                        <Check className="w-4 h-4 text-emerald-400" /> Yes (Included)
                      </td>
                      <td className="py-3.5 px-4 text-rose-400">
                        {typeof row.agency === 'boolean' ? (row.agency ? 'Yes' : 'No') : row.agency}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {typeof row.inhouse === 'boolean' ? (row.inhouse ? 'Yes' : 'No') : row.inhouse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 bg-[#081226]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
