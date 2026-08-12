import React from 'react';
import Reveal from './Reveal.jsx';
import {
  Search,
  Map,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  Headphones,
} from 'lucide-react';

const STEPS = [
  { n: '01', title: 'Discovery', desc: 'Goals, users, constraints, and success metrics.', icon: Search },
  { n: '02', title: 'Planning', desc: 'Scope, milestones, architecture, and delivery plan.', icon: Map },
  { n: '03', title: 'UI/UX Design', desc: 'Flows, interfaces, and brand-aligned visual systems.', icon: PenTool },
  { n: '04', title: 'Development', desc: 'Clean, tested code across frontend and backend.', icon: Code2 },
  { n: '05', title: 'Testing', desc: 'Quality assurance across devices, roles, and edge cases.', icon: FlaskConical },
  { n: '06', title: 'Deployment', desc: 'Secure launch with monitoring and rollback readiness.', icon: Rocket },
  { n: '07', title: 'Support', desc: 'Ongoing improvements, training, and operational care.', icon: Headphones },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="nt-section bg-white">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow">Process</p>
          <h2 className="nt-heading text-3xl sm:text-4xl lg:text-5xl mt-3 max-w-2xl">
            A clear path from idea to production
          </h2>
          <p className="nt-lead mt-4 max-w-2xl">
            Seven stages designed for transparency—so stakeholders always know what is shipping next.
          </p>
        </Reveal>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute left-8 right-8 top-[2.25rem] h-px bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6]/50 to-[#2563EB]/20" aria-hidden />
          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 50}>
                  <div className="relative pt-2">
                    <div className="mx-auto w-12 h-12 rounded-2xl bg-[#081226] text-white flex items-center justify-center shadow-lg shadow-blue-900/20 relative z-10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mt-4 text-center lg:text-left">
                      <p className="text-[11px] font-mono text-[#2563EB] font-semibold">{step.n}</p>
                      <h3 className="mt-1 text-sm font-bold">{step.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
