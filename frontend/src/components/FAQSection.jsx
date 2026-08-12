import React, { useState } from 'react';
import Reveal from './Reveal.jsx';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: 'What types of projects does Nova Tech take on?',
    a: 'We build websites, web applications, enterprise systems (schools, hospitals, ERP), branding/UI work, and database/cloud integrations—from discovery through support.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on scope. Landing sites may ship in weeks; management systems usually run in phased milestones over one to several months with clear deliverables.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer maintenance, monitoring, feature iterations, training, and operational support so your platform stays secure and useful.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Absolutely. We regularly integrate with current databases, APIs, payment providers, and internal tools while modernizing the user experience.',
  },
  {
    q: 'How do we start?',
    a: 'Share your goals through the contact form. We schedule a discovery call, outline scope and investment, then begin with planning and design.',
  },
];

export default function FAQSection({ onOpenContact }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="nt-section bg-white">
      <div className="nt-container grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-4">
          <p className="nt-eyebrow">FAQ</p>
          <h2 className="nt-heading text-3xl sm:text-4xl mt-3">Answers before you start</h2>
          <p className="nt-lead mt-4">
            Still deciding? Reach out—we’ll help you scope the right path.
          </p>
          {onOpenContact && (
            <button type="button" onClick={onOpenContact} className="nt-btn nt-btn-dark mt-6">
              Talk to us
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </Reveal>

        <div className="lg:col-span-8 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div className={`rounded-2xl border transition-colors ${isOpen ? 'border-[#2563EB]/40 bg-[#F8FAFC]' : 'border-[#E5E7EB] bg-white'}`}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-[family-name:var(--font-display)] font-semibold text-[#081226]">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
