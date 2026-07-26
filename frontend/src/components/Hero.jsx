import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Zap, 
  Globe, 
  Server, 
  Terminal, 
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  Lock,
  Layers
} from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Hero({ onOpenContact, onOpenQuote }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('telemetry');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [latency, setLatency] = useState(14);
  const [requests, setRequests] = useState(482910);

  // Dynamic live metric simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(12 + Math.random() * 5));
      setRequests((prev) => prev + Math.floor(Math.random() * 45 + 12));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Radial Glow & Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs font-mono text-blue-300 shadow-xl backdrop-blur-md hover:border-blue-400/50 transition-all cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-300">Announcing Nova AI Engine 3.0</span>
            <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read Benchmark <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            We Build Digital Solutions <br className="hidden sm:inline" />
            <span className="text-gradient-glow relative">
              That Power Growth.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/40" viewBox="0 0 300 12" fill="none">
                <path d="M1 9C50 3 150 3 299 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Nova Tech engineers enterprise-grade software, autonomous AI platforms, custom cloud architecture, and ultra-resilient cybersecurity for high-growth global leaders.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>{t('hero.launch')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 text-slate-200 font-semibold text-sm hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-xl"
            >
              <Play className="w-4 h-4 text-blue-400 fill-blue-400/20" />
              <span>Explore Ecosystem</span>
            </button>
          </div>

          {/* Key Value Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Sub-15ms Latency Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>99.999% Enterprise Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>SOC2 Type II & ISO 27001 Certified</span>
            </div>
          </div>
        </div>

        {/* 3D Floating Dashboard Mockup */}
        <div 
          className="mt-16 relative max-w-5xl mx-auto transition-transform duration-700 ease-out"
          style={{
            transform: `perspective(1200px) rotateX(${mousePos.y * 0.25}deg) rotateY(${mousePos.x * 0.25}deg)`
          }}
        >
          {/* Glass Card Backdrop Light */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative rounded-3xl glass-panel border border-white/15 overflow-hidden shadow-2xl bg-[#081226]/90">
            
            {/* Dashboard Header Bar */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-4 font-mono text-xs text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  nova-core-v3.4.1 // telemetry-active
                </span>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/5 text-xs font-mono">
                <button 
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'telemetry' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Neural AI
                </button>
                <button 
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'cloud' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cloud Mesh
                </button>
                <button 
                  onClick={() => setActiveTab('security')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'security' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Security Vault
                </button>
              </div>
            </div>

            {/* Dashboard Main Content Area */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Chart Card */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Global Requests</span>
                    <div className="text-xl sm:text-2xl font-bold text-white font-mono mt-1 flex items-center gap-2">
                      {requests.toLocaleString()}
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">+18.4% vs last hour</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Edge Latency</span>
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono mt-1">
                      {latency} <span className="text-xs text-slate-400 font-normal">ms</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-mono">Ultra-fast P99</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Active Nodes</span>
                    <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono mt-1">
                      1,480 <span className="text-xs text-slate-400 font-normal">clusters</span>
                    </div>
                    <span className="text-[10px] text-purple-400 font-mono">100% Health</span>
                  </div>
                </div>

                {/* Simulated Graph Canvas / SVG Graph */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                      Real-time Autonomous Decision Flow
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      LIVE STREAM
                    </span>
                  </div>

                  {/* SVG Wave Graph */}
                  <div className="h-40 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradientGraph" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 80 Q 60 20 120 70 T 240 30 T 360 80 T 480 20 L 500 40 L 500 120 L 0 120 Z" 
                        fill="url(#gradientGraph)" 
                      />
                      <path 
                        d="M 0 80 Q 60 20 120 70 T 240 30 T 360 80 T 480 20 L 500 40" 
                        fill="none" 
                        stroke="#38BDF8" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                      {/* Pulse point */}
                      <circle cx="360" cy="80" r="5" fill="#60A5FA" className="animate-ping" />
                      <circle cx="360" cy="80" r="4" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Side Status & Terminal Panel */}
              <div className="space-y-4 flex flex-col justify-between">
                
                {/* Terminal Stream */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 font-mono text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
                    <span>SYSTEM EXECUTION LOG</span>
                    <span className="text-cyan-400">SYNCED</span>
                  </div>
                  <div className="text-[11px] space-y-1.5 font-mono text-slate-300">
                    <p className="text-emerald-400">✔ [00:00:01] AI Orchestrator initialized</p>
                    <p className="text-blue-400">ℹ [00:00:02] Routing 45.2k requests/sec</p>
                    <p className="text-purple-400">⚙ [00:00:03] Kubernetes auto-scale +120 nodes</p>
                    <p className="text-slate-400">⚡ [00:00:04] Security sandbox active (0 threats)</p>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
                    <Cpu className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Nova Core Engine</h5>
                    <p className="text-xs text-slate-400">Optimized for high-throughput enterprise SaaS</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a 
            href="#companies" 
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span>DISCOVER ECOSYSTEM</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1 group-hover:border-blue-400 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-blue-400 animate-bounce mt-1"></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
