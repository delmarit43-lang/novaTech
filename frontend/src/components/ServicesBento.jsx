import React from 'react';
import Reveal from './Reveal.jsx';
import {
  Globe,
  Code2,
  Palette,
  Database,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Web Solutions',
    icon: Globe,
    desc: 'High-performance websites and web products built for clarity, conversion, and speed.',
    features: [
      'Website Design & Development',
      'Web Application Development',
      'E-Commerce Development',
      'Landing Pages',
      'Business Websites',
    ],
  },
  {
    title: 'Software Solutions',
    icon: Code2,
    desc: 'Custom systems that streamline operations for education, healthcare, government, and business.',
    features: [
      'School Management Systems',
      'Hospital Management Systems',
      'ERP Systems',
      'Custom Business Systems',
      'Government Digital Systems',
    ],
  },
  {
    title: 'Design & Branding',
    icon: Palette,
    desc: 'Interfaces and brand systems that feel premium, consistent, and easy to use.',
    features: ['UI/UX Design', 'Brand Identity', 'Logo Design', 'Graphic Design'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    desc: 'Reliable data architecture and integrations that keep products stable as they scale.',
    features: [
      'Database Design',
      'Database Management',
      'PostgreSQL',
      'MySQL',
      'System Integration',
    ],
  },
];

export default function ServicesBento({ onSelectService, onOpenContact }) {
  return (
    <section id="services" className="nt-section bg-white">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Services</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            Everything you need to ship digital products
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            Four focused practice areas—so every engagement has clear ownership, craft, and delivery standards.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5 lg:gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={i * 70}>
                <article
                  className="nt-card p-6 sm:p-8 h-full cursor-pointer group"
                  onClick={() =>
                    onSelectService?.({
                      title: cat.title,
                      desc: cat.desc,
                      category: 'Capability',
                      highlights: cat.features,
                      metrics: 'Custom scope',
                      icon: Icon,
                    })
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{cat.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#081226]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        {onOpenContact && (
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <button type="button" onClick={onOpenContact} className="nt-btn nt-btn-dark">
                Discuss your project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
