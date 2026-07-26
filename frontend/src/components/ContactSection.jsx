import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Code2,
  Smartphone,
  GraduationCap,
  Stethoscope,
  Landmark,
  Briefcase,
  Cloud,
  BrainCircuit,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

import { apiService } from '../services/api.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactSection({ showToast }) {
  const { t } = useLanguage();
  const [selectedProjectType, setSelectedProjectType] = useState('Website Design & Development');
  const [timeline, setTimeline] = useState('1–3 Months');
  const [budget, setBudget] = useState('Standard Scope');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { name: 'Website Design & Development', icon: Globe },
    { name: 'Web Application Development', icon: Code2 },
    { name: 'Mobile Application Development', icon: Smartphone },
    { name: 'Enterprise Software Development', icon: Building2 },
    { name: 'Education Solutions', icon: GraduationCap },
    { name: 'Healthcare Solutions', icon: Stethoscope },
    { name: 'Government Digital Solutions', icon: Landmark },
    { name: 'Business Management Systems', icon: Briefcase },
    { name: 'Cloud & Database Solutions', icon: Cloud },
    { name: 'IT Consulting', icon: BrainCircuit }
  ];

  const timelines = [
    'Less than 1 Month',
    '1–3 Months',
    '3–6 Months',
    'More than 6 Months',
    'Flexible Timeline'
  ];

  const trustBadges = [
    'Custom Digital Solutions',
    'Professional Development Team',
    'Secure & Scalable Systems',
    'Modern Technologies',
    'Reliable Technical Support',
    'Transparent Communication'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !description) {
      if (showToast) showToast(t('contact.required'), 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await apiService.submitProjectRequest({
        name: fullName,
        email,
        phone,
        company,
        projectType: selectedProjectType,
        timeline,
        budget,
        description: `${description}${message ? `\n\nAdditional Note: ${message}` : ''}`
      });

      setIsSubmitting(false);

      if (res && res.success) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#38BDF8', '#8B5CF6', '#10B981']
        });
        if (showToast) showToast(t('contact.submitSuccess'), 'success');
      } else {
        if (showToast) showToast(res?.message || t('contact.submitError'), 'error');
      }
    } catch (err) {
      setIsSubmitting(false);
      if (showToast) {
        showToast(err.message || t('contact.submitError'), 'error');
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setDescription('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR DIGITAL PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Your <span className="text-gradient-blue">Vision Together.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you need a modern website, custom software, enterprise management system, or complete digital transformation, Nova Tech is ready to help you build reliable, scalable, and high-performance digital solutions.
          </p>
          <p className="text-xs sm:text-sm text-cyan-300 font-mono">
            Our team works closely with businesses, educational institutions, healthcare providers, government organizations, NGOs, and startups to deliver technology that drives growth and innovation.
          </p>
        </div>

        {/* 10 Interactive Project Types Bar */}
        <div className="mb-14 space-y-4">
          <div className="text-center">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">CHOOSE YOUR PROJECT TYPE</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {projectTypes.map((pt) => {
              const IconComp = pt.icon;
              const isSelected = selectedProjectType === pt.name;

              return (
                <button
                  key={pt.name}
                  type="button"
                  onClick={() => setSelectedProjectType(pt.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-mono transition-all duration-300 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-lg shadow-blue-600/30 scale-105'
                      : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-blue-500/30 hover:text-white'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                  <span>{pt.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Grid: Contact Info + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Details & Trust */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/15 bg-[#081226]/95 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white pb-3 border-b border-white/10">
                Official Contact Information
              </h3>

              <div className="space-y-5 text-xs font-mono">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">EMAIL ADDRESS</span>
                    <a href="mailto:NovaTech@gmail.com" className="text-white font-bold text-sm hover:text-cyan-300 transition-colors">
                      NovaTech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">PHONE NUMBER</span>
                    <a href="tel:+252634579898" className="text-white font-bold text-sm hover:text-cyan-300 transition-colors">
                      +252 63 4579898
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">OFFICIAL WEBSITE</span>
                    <a href="https://www.novatech.so" target="_blank" rel="noreferrer" className="text-white font-bold text-sm hover:text-cyan-300 transition-colors">
                      www.novatech.so
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">BUSINESS HOURS</span>
                    <span className="text-white font-bold block">Saturday – Thursday</span>
                    <span className="text-cyan-400">8:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Nova Tech Trust Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/15 bg-[#081226]/90 space-y-4 shadow-xl">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Why Work With Nova Tech?</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-2">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#081226]/95 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Request Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <span className="text-cyan-400 font-bold">{fullName}</span>. We have received your inquiry for <span className="text-blue-400 font-bold">{selectedProjectType}</span>. Our technical leads will review your requirements and respond to <span className="text-cyan-300 font-bold">{email}</span> shortly.
                </p>
                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-600/30 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form id="project-build-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    Scope: {selectedProjectType}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">FULL NAME *</label>
                    <input 
                      id="contact-full-name"
                      type="text" 
                      required
                      placeholder="e.g. Siddiiq Awil"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">COMPANY / ORGANIZATION</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dawr School / Ministry"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="client@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      placeholder="+252 63 XXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PROJECT TYPE *</label>
                    <select
                      value={selectedProjectType}
                      onChange={(e) => setSelectedProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    >
                      {projectTypes.map(pt => (
                        <option key={pt.name} value={pt.name}>{pt.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PREFERRED TIMELINE</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                    >
                      {timelines.map(tl => (
                        <option key={tl} value={tl}>{tl}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PROJECT BUDGET (OPTIONAL)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Flexible / Standard Business Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">PROJECT DESCRIPTION *</label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Provide a brief summary of the software or website solution your organization needs..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-sans leading-relaxed"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-bold">ADDITIONAL MESSAGE *</label>
                  <textarea 
                    rows={2}
                    placeholder="Any specific feature requests, target launch date, or questions for our team..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-all font-sans leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Transmitting Inquiry...
                    </span>
                  ) : (
                    <>
                      <span>Start My Project</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
