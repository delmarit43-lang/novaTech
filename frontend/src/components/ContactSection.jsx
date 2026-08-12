import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Reveal from './Reveal.jsx';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { apiService } from '../services/api.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactSection({ showToast }) {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Website Design & Development',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      showToast?.(t('contact.required'), 'error');
      return;
    }
    setLoading(true);
    try {
      const res = await apiService.submitProjectRequest({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        projectType: form.projectType,
        description: form.description,
        timeline: 'To be discussed',
        budget: 'Custom',
      });
      if (res?.success) {
        setDone(true);
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 }, colors: ['#2563EB', '#3B82F6', '#081226'] });
        showToast?.(t('contact.submitSuccess'), 'success');
      } else {
        showToast?.(res?.message || t('contact.submitError'), 'error');
      }
    } catch (err) {
      showToast?.(err.message || t('contact.submitError'), 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="nt-section bg-[#F8FAFC]">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Contact</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            Let’s build your next digital product
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            Tell us what you need. Your request is saved to our admin dashboard so the team can respond quickly.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <Reveal className="lg:col-span-4 space-y-4">
            <div className="nt-card p-5 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <a href="mailto:NovaTech@gmail.com" className="font-semibold text-[#081226] hover:text-[#2563EB]">
                  NovaTech@gmail.com
                </a>
              </div>
            </div>
            <div className="nt-card p-5 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Phone</p>
                <a href="tel:+252634579898" className="font-semibold text-[#081226] hover:text-[#2563EB]">
                  +252 63 4579898
                </a>
              </div>
            </div>
            <div className="nt-card p-5 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Office</p>
                <p className="font-semibold text-[#081226]">Hargeisa, Somaliland</p>
              </div>
            </div>

            <div className="nt-card overflow-hidden h-48 bg-[#E5E7EB] relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium">
                Google Map placeholder
              </div>
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_40%,#2563EB33,transparent_50%)]" />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={80}>
            <div className="nt-card p-6 sm:p-8">
              {done ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold">Request received</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Thanks {form.name}. We’ll review your project details and follow up at {form.email}.
                  </p>
                  <button
                    type="button"
                    className="nt-btn nt-btn-dark mt-4"
                    onClick={() => {
                      setDone(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        projectType: 'Website Design & Development',
                        description: '',
                      });
                    }}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form id="project-build-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500" htmlFor="contact-full-name">Full name *</label>
                      <input
                        id="contact-full-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={onChange}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={onChange}
                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500">Project type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={onChange}
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB]"
                    >
                      <option>Website Design & Development</option>
                      <option>Web Application Development</option>
                      <option>School Management System</option>
                      <option>Hospital Management System</option>
                      <option>ERP / Custom Business System</option>
                      <option>UI/UX & Branding</option>
                      <option>Database & Cloud</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500">Project description *</label>
                    <textarea
                      name="description"
                      required
                      rows={5}
                      value={form.description}
                      onChange={onChange}
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB] resize-y"
                      placeholder="Goals, timeline, and what success looks like..."
                    />
                  </div>
                  <button type="submit" disabled={loading} className="nt-btn nt-btn-primary w-full sm:w-auto disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send project request'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
