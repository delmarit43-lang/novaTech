import React from 'react';
import Reveal from './Reveal.jsx';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Ministry of Religion Website',
    industry: 'Government',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    challenge: 'Modernize public information delivery with accessibility and bilingual content needs.',
    solution: 'A secure government portal with structured content, announcements, and admin publishing.',
    result: 'Faster updates, clearer navigation, and a trusted digital presence for citizens.',
    accent: 'from-[#1e3a8a] to-[#2563EB]',
  },
  {
    title: 'Alpha University Website',
    industry: 'Education',
    tech: ['React', 'Express', 'MySQL'],
    challenge: 'Unify admissions, academics, and campus information into one modern experience.',
    solution: 'Responsive university site with program pages, news, and inquiry workflows.',
    result: 'Improved discovery for prospective students and simpler content operations.',
    accent: 'from-[#0f766e] to-[#2563EB]',
  },
  {
    title: 'Barbaariye+ School Management',
    industry: 'EdTech',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    challenge: 'Replace fragmented school processes spanning students, fees, exams, and parents.',
    solution: 'End-to-end school platform covering enrollment, attendance, grading, and portals.',
    result: 'Centralized records and reduced administrative overhead across departments.',
    accent: 'from-[#1d4ed8] to-[#3B82F6]',
  },
  {
    title: 'Hospital Management System',
    industry: 'HealthTech',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    challenge: 'Coordinate patients, appointments, billing, and clinical workflows securely.',
    solution: 'Modular HMS with role-based access, scheduling, and operational dashboards.',
    result: 'Smoother care coordination and cleaner operational reporting.',
    accent: 'from-[#0ea5e9] to-[#2563EB]',
  },
  {
    title: 'Car Rental Management System',
    industry: 'Fleet',
    tech: ['React', 'Express', 'PostgreSQL'],
    challenge: 'Digitize bookings, fleet status, payments, and customer accounts.',
    solution: 'DriveFlow-style rental platform with reservations and fleet controls.',
    result: 'Higher booking conversion and real-time fleet visibility.',
    accent: 'from-[#4338ca] to-[#3B82F6]',
  },
  {
    title: 'E-Commerce Website',
    industry: 'Commerce',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    challenge: 'Launch a conversion-focused storefront with inventory and order tracking.',
    solution: 'Modern commerce experience with catalog, cart, payments, and admin tools.',
    result: 'Cleaner checkout and measurable improvement in order completion.',
    accent: 'from-[#0369a1] to-[#2563EB]',
  },
];

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section id="projects" className="nt-section bg-[#F8FAFC]">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Portfolio</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            Selected work across industries
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            Real platforms for government, education, healthcare, and commerce—designed for daily use.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article
                className="nt-card overflow-hidden h-full flex flex-col cursor-pointer group"
                onClick={() =>
                  onSelectProject?.({
                    ...p,
                    category: p.industry,
                    year: '2024–2026',
                    description: p.solution,
                  })
                }
              >
                <div className={`h-36 bg-gradient-to-br ${p.accent} relative`}>
                  <div className="absolute inset-0 opacity-30 nt-grid-bg" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur px-2.5 py-1 rounded-lg border border-white/15">
                      {p.industry}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{p.challenge}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-[#EFF6FF] text-[#1d4ed8] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 pt-4 border-t border-[#E5E7EB] text-xs text-slate-500">
                    <span className="font-semibold text-[#081226]">Result: </span>
                    {p.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
