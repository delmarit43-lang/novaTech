import React, { useState } from 'react';
import Reveal from './Reveal.jsx';
import { Github, Linkedin, Mail, X } from 'lucide-react';

const TEAM = [
  {
    id: 'siddiiq',
    name: 'Siddiiq Awil Abdilahi',
    role: 'Founder & Full Stack Developer',
    photo: '/team-siddiiq.jpeg',
    bio: 'Siddiiq leads Nova Tech’s vision and engineering practice—building scalable web applications, enterprise systems, and digital platforms with a focus on quality and long-term maintainability.',
    skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'System Architecture'],
    socials: { linkedin: '#', github: 'https://github.com/Novatech97', email: 'siddiiq@novatech.com' },
  },
  {
    id: 'xuseen',
    name: 'Xuseen',
    role: 'Senior Full Stack Developer',
    photo: '/team-xuseen.jpeg',
    bio: 'Xuseen builds modern, high-performance applications across frontend and backend—delivering secure APIs, polished interfaces, and reliable production systems.',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    socials: { linkedin: '#', github: 'https://github.com/Novatech97', email: 'xuseen@novatech.com' },
  },
  {
    id: 'suhayb',
    name: 'Suhayb',
    role: 'Database & Marketing Specialist',
    photo: '/team-suhayb.jpeg',
    bio: 'Suhayb owns database architecture and performance while supporting brand growth—keeping data reliable and Nova Tech’s digital presence sharp.',
    skills: ['PostgreSQL', 'MySQL', 'SQL Tuning', 'Data Security', 'Digital Marketing'],
    socials: { linkedin: '#', github: 'https://github.com/Novatech97', email: 'suhayb@novatech.com' },
  },
];

export default function TeamSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="team" className="nt-section bg-white">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Team</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            The people behind the product
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            A tight leadership and engineering team focused on shipping systems organizations can trust.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.id} delay={i * 80}>
              <article className="nt-card overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-[#E5E7EB]">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-[#2563EB] font-semibold mt-1">{m.role}</p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-3">{m.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.skills.slice(0, 4).map((s) => (
                      <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-slate-600">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <div className="flex gap-2">
                      <a href={m.socials.linkedin} className="p-2 rounded-lg border border-[#E5E7EB] text-slate-500 hover:text-[#2563EB] hover:border-[#2563EB]/40" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={m.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-[#E5E7EB] text-slate-500 hover:text-[#2563EB] hover:border-[#2563EB]/40" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${m.socials.email}`} className="p-2 rounded-lg border border-[#E5E7EB] text-slate-500 hover:text-[#2563EB] hover:border-[#2563EB]/40" aria-label="Email">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                    <button type="button" onClick={() => setActive(m)} className="text-sm font-semibold text-[#2563EB] hover:underline">
                      Profile
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081226]/70 backdrop-blur-sm" onClick={() => setActive(null)}>
          <div className="w-full max-w-lg bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 bg-[#081226]">
              <img src={active.photo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <button type="button" onClick={() => setActive(null)} className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{active.name}</h3>
              <p className="text-[#2563EB] font-semibold text-sm mt-1">{active.role}</p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{active.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-[#EFF6FF] text-[#1d4ed8] font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
