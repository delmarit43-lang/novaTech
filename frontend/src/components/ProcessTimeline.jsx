import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Code2, 
  ShieldCheck, 
  Cloud, 
  Rocket, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function ProcessTimeline({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & System Architecture Strategy',
      subtitle: 'Mapping data models, traffic estimates, and infrastructure requirements.',
      desc: 'We analyze your business objectives, perform technical audits of existing systems, and produce an exhaustive System Architecture Blueprint specifying APIs, database schemas, and AI integration points.',
      duration: 'Week 1 - 2',
      deliverables: ['System Architecture Blueprint', 'Tech Stack Selection Specification', 'API & Schema Contract', 'Security Risk Assessment'],
      icon: Terminal
    },
    {
      number: '02',
      title: 'High-Fidelity UI/UX & Interactive Design System',
      subtitle: 'Crafting luxury visual identity and clickable Figma prototypes.',
      desc: 'Our design team creates bespoke component libraries, responsive viewports, custom dark mode luxury aesthetics, and micro-interaction tokens that ensure your product stands apart.',
      duration: 'Week 2 - 4',
      deliverables: ['Framer & Figma Design System', 'Interactive High-Fi Prototype', 'Usability Benchmark Test', 'Design Tokens Package'],
      icon: Code2
    },
    {
      number: '03',
      title: 'Agile Full-Stack & Microservice Sprint',
      subtitle: 'High-velocity test-driven engineering with bi-weekly live demos.',
      desc: 'Our senior squad executes rapid two-week sprints, deploying clean, typed, modular code to a staging sandbox where you can test live progress in real-time.',
      duration: 'Week 4 - 8',
      deliverables: ['Modular React/Next Frontend', 'Ultra-fast Go/Rust Microservices', 'Staging Sandbox Access', 'Automated Unit & E2E Tests'],
      icon: Sparkles
    },
    {
      number: '04',
      title: 'AI Pipeline & Vector Model Fine-Tuning',
      subtitle: 'Embedding private intelligence and custom LLM workflows.',
      desc: 'We clean enterprise data, generate high-dimensional vector embeddings, configure RAG retrieval pipelines, and fine-tune models with strict privacy guardrails.',
      duration: 'Week 6 - 9',
      deliverables: ['Fine-tuned Enterprise LLM Model', 'Pinecone Vector Indexing', 'RAG Retrieval Sub-second Pipeline', 'AI Safety Guardrail System'],
      icon: ShieldCheck
    },
    {
      number: '05',
      title: 'Security Audit & Automated Penetration Testing',
      subtitle: 'Zero-trust verification before zero-downtime release.',
      desc: 'Independent cyber security engineers conduct rigorous vulnerability scans, load stress tests, and SOC2 readiness audits to guarantee bank-grade reliability.',
      duration: 'Week 9 - 10',
      deliverables: ['Penetration Audit Certificate', 'Load Test Benchmark Report (100k Req/s)', 'SOC2 Compliance Mapping'],
      icon: Cloud
    },
    {
      number: '06',
      title: 'Global Cloud Deployment & Continuous Scaling',
      subtitle: 'Live launch on multi-region AWS/GCP serverless mesh with 24/7 monitoring.',
      desc: 'We execute a smooth, zero-downtime production deployment, configure Datadog metrics, and provide ongoing SLAs and continuous optimization.',
      duration: 'Week 10+',
      deliverables: ['Production Multi-Region Cloud', '24/7 Real-Time Telemetry Dashboard', 'Dedicated SLA Maintenance'],
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPMENT METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Blueprint to Launch: <br />
            <span className="text-gradient-blue">A Predictable Process.</span>
          </h2>
          <p className="text-slate-300 text-base">
            No surprises. No missed deadlines. Just transparent, disciplined engineering executed at world-class speed.
          </p>
        </div>

        {/* Vertical Timeline & Step Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Timeline List */}
          <div className="lg:col-span-6 space-y-4 relative">
            
            {/* Timeline Line Connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-white/10 pointer-events-none hidden sm:block"></div>

            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative p-5 sm:pl-16 rounded-2xl border transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600/15 border-blue-500/40 text-white shadow-xl shadow-blue-500/10' 
                      : 'bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {/* Circle Badge Number */}
                  <div className={`hidden sm:flex absolute left-3 top-5 w-7 h-7 rounded-full items-center justify-center font-mono text-xs font-bold transition-all ${
                    isActive ? 'bg-blue-600 text-white ring-4 ring-blue-500/30' : 'bg-slate-800 text-slate-400 border border-white/10'
                  }`}>
                    {step.number}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                          {step.duration}
                        </span>
                        <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{step.subtitle}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-blue-400' : 'opacity-40'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Active Step Detail Card */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#081226]/95 sticky top-28 shadow-2xl">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
                      PHASE {steps[activeStep].number} SPECIFICATION
                    </span>
                    <h3 className="text-xl font-bold text-white">{steps[activeStep].title}</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {steps[activeStep].duration}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">PHASE DELIVERABLES</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to initiate Phase 01?</span>
                <button 
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:scale-[1.02] transition-all"
                >
                  Start Phase 01 Discovery <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
