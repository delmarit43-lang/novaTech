import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, Layers, Cpu, Code2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onNavigate, onOpenContact, onOpenQuote }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Explore AI Autonomous Platform', category: 'Services', sectionId: 'services', icon: Cpu },
    { label: 'View Enterprise Case Studies', category: 'Portfolio', sectionId: 'projects', icon: Layers },
    { label: 'Check Partnership Investment Plans', category: 'Pricing', sectionId: 'pricing', icon: Sparkles },
    { label: 'Read Technical Whitepapers', category: 'Blog', sectionId: 'insights', icon: Code2 },
    { label: 'Review Development Methodology', category: 'Process', sectionId: 'process', icon: ShieldCheck },
    { label: 'Request Architectural Proposal', category: 'Contact', action: onOpenContact, icon: Mail },
    { label: 'Calculate Project Investment Quote', category: 'Quote', action: onOpenQuote, icon: Sparkles }
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl glass-panel rounded-3xl border border-white/20 bg-[#081226]/95 overflow-hidden shadow-2xl">
        
        {/* Search Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400" />
          <input 
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-slate-500 font-mono text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-xs font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    if (act.action) act.action();
                    else if (act.sectionId) onNavigate(act.sectionId);
                  }}
                  className="p-3 rounded-xl hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent flex items-center justify-between cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white group-hover:text-blue-300">
                      {act.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {act.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with arrows or click</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
}
