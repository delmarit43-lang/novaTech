import React, { useState } from 'react';
import { Cpu, Cloud, Code2, ShieldCheck, Terminal, Layers } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const techCategories = [
    {
      category: 'AI & Data Intelligence',
      icon: Cpu,
      technologies: [
        { name: 'PyTorch', version: '2.5', role: 'Neural Training', status: 'Core' },
        { name: 'OpenAI API / GPT-4o', version: 'v1.4', role: 'LLM Orchestration', status: 'Core' },
        { name: 'Pinecone Vector DB', version: 'v3.0', role: 'Vector Search', status: 'Production' },
        { name: 'LangChain & LlamaIndex', version: 'v0.2', role: 'RAG Pipeline', status: 'Production' },
        { name: 'Hugging Face Transformers', version: 'v4.45', role: 'Model Fine-tuning', status: 'Production' }
      ]
    },
    {
      category: 'Frontend & Mobile Craft',
      icon: Code2,
      technologies: [
        { name: 'React 19 & Next.js 15', version: '15.1', role: 'UI Engine', status: 'Core' },
        { name: 'TypeScript', version: 'v5.7', role: 'Type System', status: 'Core' },
        { name: 'Tailwind CSS v4', version: 'v4.0', role: 'Design Tokens', status: 'Core' },
        { name: 'Framer Motion', version: 'v11', role: 'Animations', status: 'Production' },
        { name: 'WebAssembly (Wasm)', version: 'v2.0', role: 'Low-latency Canvas', status: 'Production' }
      ]
    },
    {
      category: 'Cloud & High-Speed Backend',
      icon: Cloud,
      technologies: [
        { name: 'Node.js & Bun', version: 'v22', role: 'Async I/O', status: 'Core' },
        { name: 'Go (Golang)', version: '1.23', role: 'Microservices', status: 'Core' },
        { name: 'Rust', version: '1.84', role: 'Zero-cost Memory', status: 'High-Perf' },
        { name: 'PostgreSQL & pgvector', version: 'v17', role: 'Relational & Vector', status: 'Core' },
        { name: 'Redis Enterprise', version: 'v7.4', role: 'Sub-ms Caching', status: 'Core' }
      ]
    },
    {
      category: 'Cloud Infrastructure & DevOps',
      icon: Terminal,
      technologies: [
        { name: 'AWS & GCP Serverless', version: 'Multi-Region', role: 'Global Compute', status: 'Core' },
        { name: 'Kubernetes (EKS/GKE)', version: 'v1.31', role: 'Container Mesh', status: 'Core' },
        { name: 'Terraform & Pulumi', version: 'IaC', role: 'Infrastructure Code', status: 'Production' },
        { name: 'Docker', version: 'v27', role: 'Containerization', status: 'Core' },
        { name: 'Cloudflare Workers', version: 'V8 Edge', role: 'Edge Computing', status: 'Production' }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on Battle-Tested <br />
            <span className="text-gradient-glow">Next-Generation Tools.</span>
          </h2>
          <p className="text-slate-300 text-base">
            We use bleeding-edge technologies carefully benchmarked for speed, reliability, and security.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#081226]/80 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cat.technologies.map((t, tidx) => (
                    <div 
                      key={tidx}
                      className="group relative p-3 rounded-2xl bg-white/5 hover:bg-slate-800 border border-white/5 hover:border-blue-500/40 transition-all cursor-pointer flex items-center justify-between gap-4 w-full sm:w-[calc(50%-0.375rem)]"
                    >
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {t.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          {t.role}
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
