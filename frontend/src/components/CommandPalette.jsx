import React, { useState, useEffect } from 'react';
import { Search, X, Layers, Cpu, Code2, ShieldCheck, Mail, ArrowRight, Users, HelpCircle } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onNavigate, onOpenContact, onOpenQuote }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Services', sectionId: 'services', icon: Cpu },
    { label: 'Portfolio', sectionId: 'projects', icon: Layers },
    { label: 'Process', sectionId: 'process', icon: ShieldCheck },
    { label: 'Team', sectionId: 'team', icon: Users },
    { label: 'FAQ', sectionId: 'faq', icon: HelpCircle },
    { label: 'Start Building', action: onOpenContact, icon: Mail },
    { label: 'Request Proposal', action: onOpenQuote, icon: Code2 },
  ];

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#081226]/55 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-[#E5E7EB] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#2563EB]" />
          <input
            type="text"
            autoFocus
            placeholder="Jump to a section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-[#081226] placeholder:text-slate-400"
          />
          <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-[#F8FAFC] text-slate-400" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.map((action, i) => {
            const Icon = action.icon;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  onClose();
                  if (action.action) action.action();
                  else if (action.sectionId) onNavigate(action.sectionId);
                }}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="flex-1 text-sm font-semibold text-[#081226]">{action.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            );
          })}
          {filtered.length === 0 && <p className="text-center text-sm text-slate-400 py-8">No matches</p>}
        </div>
      </div>
    </div>
  );
}
