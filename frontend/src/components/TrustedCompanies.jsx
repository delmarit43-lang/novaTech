import React from 'react';
import Reveal from './Reveal.jsx';
import { Landmark, GraduationCap, School } from 'lucide-react';

const ORGS = [
  { name: 'Ministry of Religion & Endowments', icon: Landmark },
  { name: 'Alpha University Berbera', icon: GraduationCap },
  { name: 'Barbaariye+ School', icon: School },
];

export default function TrustedCompanies() {
  return (
    <section id="trusted" className="nt-section bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="nt-container">
        <Reveal>
          <p className="nt-eyebrow text-center w-full justify-center">Trusted by leading organizations</p>
          <h2 className="nt-heading text-center text-2xl sm:text-3xl mt-3">Partners who rely on Nova Tech</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {ORGS.map((org, i) => {
            const Icon = org.icon;
            return (
              <Reveal key={org.name} delay={i * 80}>
                <div className="nt-card p-6 flex items-center gap-4 min-h-[104px]">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-[family-name:var(--font-display)] font-semibold text-[#081226] text-sm sm:text-base leading-snug">
                    {org.name}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
