import React from 'react';
import Reveal from './Reveal.jsx';
import { Quote } from 'lucide-react';

const ITEMS = [
  {
    org: 'Ministry of Religion & Endowments',
    quote:
      'Nova Tech delivered a modern, reliable government website experience. Communication was clear and the final platform elevated how we publish information to the public.',
    role: 'Digital Services Stakeholder',
  },
  {
    org: 'Alpha University Berbera',
    quote:
      'Our university web presence became clearer for students and staff. The team understood academic workflows and translated them into a polished digital platform.',
    role: 'University Administration',
  },
  {
    org: 'Barbaariye+ School',
    quote:
      'The school management system simplified enrollment, records, and day-to-day operations. Nova Tech felt like a long-term partner, not a one-off vendor.',
    role: 'School Leadership',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="nt-section bg-[#F8FAFC]">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Testimonials</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            Trusted by institutions we serve
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {ITEMS.map((t, i) => (
            <Reveal key={t.org} delay={i * 70}>
              <blockquote className="nt-card p-6 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#2563EB]/40" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">“{t.quote}”</p>
                <footer className="mt-6 pt-4 border-t border-[#E5E7EB]">
                  <p className="font-bold text-sm text-[#081226]">{t.org}</p>
                  <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
