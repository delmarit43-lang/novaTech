import React from 'react';
import Reveal from './Reveal.jsx';
import {
  Users,
  Cpu,
  Puzzle,
  Smartphone,
  Layers,
  LifeBuoy,
} from 'lucide-react';

const REASONS = [
  { icon: Users, title: 'Experienced Team', desc: 'Practitioners who ship real systems—not slide decks.' },
  { icon: Cpu, title: 'Modern Technologies', desc: 'React, Node, PostgreSQL, and cloud-native patterns.' },
  { icon: Puzzle, title: 'Custom Solutions', desc: 'Built around your workflows, constraints, and goals.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Interfaces that feel native on every screen size.' },
  { icon: Layers, title: 'Scalable Systems', desc: 'Architecture that grows without expensive rewrites.' },
  { icon: LifeBuoy, title: 'Long-Term Support', desc: 'Maintenance, monitoring, and continuous improvement.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="nt-section bg-[#F8FAFC]">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Why Nova Tech</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            Built for teams that care about outcomes
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            We combine product thinking, engineering rigor, and clear communication—so delivery stays predictable.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 60}>
                <div className="nt-card p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
