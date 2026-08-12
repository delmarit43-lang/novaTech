import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';

const STATS = [
  { label: 'Featured Projects', value: 6, suffix: '+' },
  { label: 'Institutional Clients', value: 3, suffix: '+' },
  { label: 'Core Team', value: 3, suffix: '' },
  { label: 'Service Categories', value: 4, suffix: '' },
  { label: 'Delivery Focus', value: 100, suffix: '%' },
];

function useCountUp(target, active, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);
  return n;
}

function StatItem({ label, value, suffix, active }) {
  const n = useCountUp(value, active);
  return (
    <div className="text-center sm:text-left p-4">
      <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white tracking-tight">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#081226] py-16 sm:py-20" ref={ref}>
      <div className="absolute inset-0 nt-grid-bg opacity-40" aria-hidden />
      <div className="nt-glow w-80 h-80 bg-[#2563EB]/30 top-0 left-1/3" aria-hidden />
      <div className="nt-container relative z-10">
        <Reveal>
          <p className="nt-eyebrow text-[#93c5fd]">Impact</p>
          <h2 className="font-[family-name:var(--font-display)] font-bold tracking-tight text-white text-3xl sm:text-4xl mt-3">
            What we’ve shipped so far
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl">
            Real delivery numbers based on our portfolio, partners, and team—not inflated marketing stats.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
