import React from 'react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  Landmark, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Award 
} from 'lucide-react';

export default function Testimonials() {

  const testimonials = [
    {
      id: 'ministry-religion',
      organization: 'Ministry of Religion & Endowments',
      industry: 'Government',
      badge: 'Government Project',
      icon: Landmark,
      gradient: 'from-cyan-600/30 to-blue-600/30',
      glow: 'shadow-cyan-500/10',
      quote: "Nova Tech delivered a modern, secure, and professional website that reflects our institution's mission and values. Their team demonstrated exceptional technical expertise, excellent communication, and a strong commitment to quality throughout the project.",
      rating: 5
    },
    {
      id: 'alph-berbera',
      organization: 'Alph Berbera University',
      industry: 'Higher Education',
      badge: 'Education Solution',
      icon: GraduationCap,
      gradient: 'from-blue-600/30 to-indigo-600/30',
      glow: 'shadow-blue-500/10',
      quote: "Our University Management System has significantly improved student administration, academic record management, and overall operational efficiency. Nova Tech provided a scalable solution tailored to our institutional needs.",
      rating: 5
    },
    {
      id: 'dawr-school',
      organization: 'Dawr School',
      product: 'Barbaariye+ School Management System',
      industry: 'Education',
      badge: 'School Management System',
      icon: BookOpen,
      gradient: 'from-purple-600/30 to-blue-600/30',
      glow: 'shadow-purple-500/10',
      quote: "Barbaariye+ has transformed the way we manage admissions, attendance, examinations, and communication with parents. The system is intuitive, reliable, and has greatly simplified our daily school operations.",
      rating: 5
    }
  ];

  const trustBadges = [
    { text: 'Government Institutions', icon: Landmark },
    { text: 'Educational Institutions', icon: GraduationCap },
    { text: 'Enterprise Solutions', icon: Building2 },
    { text: 'Trusted Technology Partner', icon: ShieldCheck }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Award className="w-3.5 h-3.5" />
            <span>CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Our <span className="text-gradient-blue">Clients Say.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We take pride in building reliable digital solutions that help organizations modernize their operations, improve efficiency, and achieve lasting impact. Here's what some of our clients have to say about working with Nova Tech.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => {
            const IconComp = t.icon;

            return (
              <div 
                key={t.id}
                className={`group relative rounded-3xl glass-panel p-7 sm:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-500 bg-[#081226]/90 shadow-xl hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${t.glow}`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10">
                  
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {t.badge}
                    </span>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-slate-200 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>

                </div>

                {/* Organization Details Footer */}
                <div className="pt-4 border-t border-white/10 relative z-10">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {t.organization}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {t.product ? <span className="text-blue-400">{t.product} — </span> : null}
                    <span>{t.industry}</span>
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-slate-950/70 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {trustBadges.map((badge, idx) => {
            const IconBadge = badge.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">{badge.text}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
