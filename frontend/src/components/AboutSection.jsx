import React from 'react';
import { 
  Rocket, 
  Palette, 
  Building2, 
  Cloud, 
  Handshake, 
  Wrench, 
  Sparkles,
  ArrowRight,
  Globe2
} from 'lucide-react';

export default function AboutSection({ onOpenContact }) {

  const features = [
    {
      icon: Rocket,
      title: 'Modern Development',
      desc: 'We build fast, scalable, and secure websites, web applications, and mobile solutions using modern technologies and industry best practices.',
      gradient: 'from-blue-600 to-cyan-500',
      glow: 'group-hover:shadow-blue-500/20'
    },
    {
      icon: Palette,
      title: 'User-Centered Design',
      desc: 'Every interface is carefully designed to provide intuitive navigation, exceptional user experiences, and visually engaging interactions.',
      gradient: 'from-purple-600 to-pink-500',
      glow: 'group-hover:shadow-purple-500/20'
    },
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      desc: 'From ERP and CRM systems to School, Hospital, and Car Rental Management Systems, we develop reliable software that streamlines operations.',
      gradient: 'from-emerald-600 to-teal-500',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    {
      icon: Cloud,
      title: 'Cloud & Database Solutions',
      desc: 'We design robust cloud infrastructure and optimized database architectures that ensure security, performance, and scalability.',
      gradient: 'from-cyan-600 to-blue-500',
      glow: 'group-hover:shadow-cyan-500/20'
    },
    {
      icon: Handshake,
      title: 'Strategic IT Consulting',
      desc: 'We help organizations choose the right technologies, plan digital transformation, and implement solutions that support long-term growth.',
      gradient: 'from-amber-500 to-orange-500',
      glow: 'group-hover:shadow-amber-500/20'
    },
    {
      icon: Wrench,
      title: 'Long-Term Support',
      desc: 'Our partnership continues after deployment through maintenance, performance optimization, system updates, and dedicated technical support.',
      gradient: 'from-indigo-600 to-blue-500',
      glow: 'group-hover:shadow-indigo-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Ambient Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Globe2 className="w-3.5 h-3.5" />
            <span>ABOUT NOVA TECH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built to Power <br />
            <span className="text-gradient-blue">Digital Growth.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Nova Tech delivers modern websites, custom software, enterprise systems, and digital solutions that help businesses, educational institutions, healthcare providers, government organizations, and startups accelerate their digital transformation. We combine innovative technology, strategic thinking, and user-centered design to build secure, scalable, and high-performance solutions tailored to every client's vision.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div 
                key={idx}
                className={`group relative rounded-3xl glass-panel border border-white/10 hover:border-blue-500/30 p-7 transition-all duration-500 cursor-default hover:-translate-y-2 shadow-xl hover:shadow-2xl ${feature.glow} overflow-hidden`}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComp className="w-6 h-6 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button 
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Start Your Digital Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
