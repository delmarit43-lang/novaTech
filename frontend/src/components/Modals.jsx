import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Cpu, Code2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { apiService } from '../services/api.js';

export function ServiceModal({ service, onClose, onOpenContact }) {
  if (!service) return null;
  const IconComp = service.icon || Cpu;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl glass-panel rounded-3xl border border-white/20 bg-[#081226]/95 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
            <IconComp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
              {service.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{service.title}</h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>

        <div className="space-y-3 pt-4 border-t border-white/10">
          <h4 className="text-xs font-mono text-slate-400 uppercase">CORE TECHNICAL DELIVERABLES</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-400 font-bold">Guaranteed Performance: {service.metrics}</span>
          <button 
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            Consult Architect <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl glass-panel rounded-3xl border border-white/20 bg-[#081226]/95 p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {project.category} — {project.year}
          </span>
          <h3 className="text-3xl font-extrabold text-white mt-2">{project.title}</h3>
          <p className="text-sm text-slate-400 font-mono mt-1">Client: {project.client}</p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950 border border-white/10">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-bold font-mono text-cyan-400">{m.value}</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase">TECHNOLOGY STACK USED</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t, i) => (
              <span key={i} className="text-xs font-mono text-slate-200 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400">Want similar results for your product?</span>
          <button 
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            Request Case Study Blueprint <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl glass-panel rounded-3xl border border-white/20 bg-[#081226]/95 p-6 sm:p-10 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {article.category} — {article.readTime}
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{article.title}</h3>
          <p className="text-xs font-mono text-slate-400">Published on {article.date} by {article.author} ({article.authorRole})</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 pt-4 border-t border-white/10 font-sans">
          {article.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs"
          >
            Close Article Reader
          </button>
        </div>
      </div>
    </div>
  );
}

export function QuoteModal({ isOpen, onClose, showToast }) {
  const [goal, setGoal] = useState('Business & Corporate Website');
  const [timeline, setTimeline] = useState('Rapid Sprint (2 - 4 Weeks)');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your work email.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await apiService.submitProjectRequest({
        name: email.split('@')[0],
        email,
        projectType: goal,
        timeline,
        description: `Project Goal: ${goal}, Timeline: ${timeline}. Generated via Enterprise Investment Estimator.`
      });

      setIsSubmitting(false);

      if (res && res.success) {
        setSubmitted(true);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#3B82F6', '#38BDF8', '#8B5CF6', '#10B981'] });
        showToast(res.message || `Custom Proposal generated! Scoping proposal sent to ${email}`, 'success');
      } else {
        showToast(res?.message || 'Failed to process project request.', 'error');
      }
    } catch (err) {
      setIsSubmitting(false);
      showToast(err.message || 'Error generating proposal request.', 'error');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl glass-panel rounded-3xl border border-white/20 bg-[#081226]/95 p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button 
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> NOVA TECH PROJECT ESTIMATOR
          </span>
          <h3 className="text-2xl font-bold text-white">Calculate Enterprise Investment</h3>
          <p className="text-xs text-slate-300 font-sans">
            Select your digital scope and receive a customized technical specification and timeline proposal.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Proposal PDF Transmitted!</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              We have generated a tailored PDF project blueprint for <span className="text-cyan-400 font-bold">{goal}</span> ({timeline}) and dispatched it to <span className="text-blue-400 font-bold">{email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-mono">
            <div>
              <label className="text-slate-300 block mb-1.5 uppercase font-bold">PRIMARY PROJECT GOAL *</label>
              <select 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
              >
                <option>Business & Corporate Website</option>
                <option>Custom Web Application</option>
                <option>Enterprise Software (ERP, CRM, HRM, POS)</option>
                <option>Education Solution (School/University Management, LMS)</option>
                <option>Healthcare Solution (Hospital Management, Clinic, EMR)</option>
                <option>Government Digital Solution (Ministry Portal, E-Gov)</option>
                <option>Business Management System (Car Rental, Hotel, Real Estate)</option>
                <option>Cloud Infrastructure & Database Engineering</option>
              </select>
            </div>

            <div>
              <label className="text-slate-300 block mb-1.5 uppercase font-bold">DESIRED TIMELINE *</label>
              <select 
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
              >
                <option>Rapid Sprint (2 - 4 Weeks)</option>
                <option>Standard Release (4 - 8 Weeks)</option>
                <option>Enterprise Digital Transformation (8+ Weeks)</option>
              </select>
            </div>

            <div>
              <label className="text-slate-300 block mb-1.5 uppercase font-bold">WORK EMAIL FOR DETAILED PDF BREAKDOWN *</label>
              <input 
                type="email"
                required
                placeholder="alexander@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Generating Scoping PDF...
                </span>
              ) : (
                <>
                  <span>Generate & Send Proposal PDF</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

