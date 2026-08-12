import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Cpu, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { apiService } from '../services/api.js';

export function ServiceModal({ service, onClose, onOpenContact }) {
  if (!service) return null;
  const IconComp = service.icon || Cpu;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/65 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute top-5 right-5 p-2 rounded-xl hover:bg-[#F8FAFC] text-slate-400" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white shadow-lg shadow-blue-500/30">
            <IconComp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#2563EB]">{service.category}</span>
            <h3 className="text-2xl font-bold text-[#081226] mt-0.5">{service.title}</h3>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
        <div className="space-y-3 pt-2 border-t border-[#E5E7EB]">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Included</h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {(service.highlights || []).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#081226] bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E5E7EB]">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact?.();
            }}
            className="nt-btn nt-btn-primary"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/65 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute top-5 right-5 p-2 rounded-xl hover:bg-[#F8FAFC] text-slate-400" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        <div>
          <span className="text-xs font-semibold text-[#2563EB]">{project.industry || project.category}</span>
          <h3 className="text-2xl font-bold text-[#081226] mt-1">{project.title}</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] p-3">
            <p className="text-[11px] uppercase text-slate-400 font-semibold">Challenge</p>
            <p className="mt-1 text-slate-600">{project.challenge}</p>
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] p-3">
            <p className="text-[11px] uppercase text-slate-400 font-semibold">Solution</p>
            <p className="mt-1 text-slate-600">{project.solution || project.description}</p>
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] p-3">
            <p className="text-[11px] uppercase text-slate-400 font-semibold">Results</p>
            <p className="mt-1 text-slate-600">{project.result}</p>
          </div>
        </div>
        {project.tech && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-[#EFF6FF] text-[#1d4ed8] font-medium">{t}</span>
            ))}
          </div>
        )}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact?.();
            }}
            className="nt-btn nt-btn-dark"
          >
            Build something similar
          </button>
        </div>
      </div>
    </div>
  );
}

export function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/65 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl bg-white rounded-3xl p-6 border border-[#E5E7EB]" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="float-right p-2 text-slate-400"><X className="w-5 h-5" /></button>
        <h3 className="text-xl font-bold text-[#081226]">{article.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{article.excerpt || article.content}</p>
      </div>
    </div>
  );
}

export function QuoteModal({ isOpen, onClose, showToast }) {
  const [goal, setGoal] = useState('Business Website');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast?.('Please enter your email.', 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await apiService.submitProjectRequest({
        name: email.split('@')[0],
        email,
        projectType: goal,
        timeline: 'To be discussed',
        description: `Proposal request for: ${goal}`,
      });
      if (res?.success) {
        setSubmitted(true);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.65 }, colors: ['#2563EB', '#3B82F6'] });
        showToast?.(res.message || 'Proposal request sent.', 'success');
      } else {
        showToast?.(res?.message || 'Request failed.', 'error');
      }
    } catch (err) {
      showToast?.(err.message || 'Request failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/65 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400" aria-label="Close"><X className="w-5 h-5" /></button>
        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-bold">Request received</h3>
            <p className="text-sm text-slate-500">We’ll follow up at {email}.</p>
            <button type="button" className="nt-btn nt-btn-dark" onClick={() => { setSubmitted(false); setEmail(''); onClose(); }}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Get a proposal
            </div>
            <h3 className="text-2xl font-bold text-[#081226]">Tell us what you’re building</h3>
            <div>
              <label className="text-xs font-semibold text-slate-500">Project focus</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value)} className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm">
                <option>Business Website</option>
                <option>Web Application</option>
                <option>School Management System</option>
                <option>Hospital Management System</option>
                <option>E-Commerce</option>
                <option>UI/UX & Branding</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">Work email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm" placeholder="you@company.com" />
            </div>
            <button type="submit" disabled={loading} className="nt-btn nt-btn-primary w-full disabled:opacity-60">
              {loading ? 'Sending...' : 'Request proposal'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
