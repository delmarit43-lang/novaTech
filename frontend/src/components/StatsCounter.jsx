import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      value: '$450M+',
      label: 'Enterprise Value Generated',
      sub: 'Client ARR Growth 2024-2025',
      icon: TrendingUp,
      glow: 'from-blue-600/20 to-cyan-500/20'
    },
    {
      value: '99.999%',
      label: 'Enterprise SLA Uptime',
      sub: 'Zero Unplanned Outages Logged',
      icon: ShieldCheck,
      glow: 'from-purple-600/20 to-indigo-500/20'
    },
    {
      value: '< 15ms',
      label: 'Global Edge Latency P99',
      sub: 'Sub-second API Execution',
      icon: Zap,
      glow: 'from-cyan-600/20 to-emerald-500/20'
    },
    {
      value: '120+',
      label: 'Production Systems Shipped',
      sub: 'Across North America, EU & Asia',
      icon: Globe2,
      glow: 'from-blue-600/20 to-indigo-600/20'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div 
                key={idx}
                className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 bg-[#081226]/90 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${st.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {st.value}
                  </div>
                  <h4 className="text-sm font-bold text-slate-200">{st.label}</h4>
                  <p className="text-[11px] font-mono text-slate-400">{st.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
