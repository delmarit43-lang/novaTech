import React from 'react';
import { 
  Globe, 
  Code2, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Rocket,
  ShieldCheck,
  Cpu,
  Users,
  Wrench
} from 'lucide-react';

export default function PricingSection({ onOpenQuote, onOpenContact }) {

  const whatWeBuild = [
    {
      id: 'website-design',
      title: 'Website Design & Development',
      desc: 'Modern, responsive, and SEO-optimized websites for businesses, organizations, and government institutions.',
      icon: Globe,
      gradient: 'from-blue-600 to-cyan-500',
      badge: 'Web Excellence'
    },
    {
      id: 'custom-web-apps',
      title: 'Custom Web Applications',
      desc: 'Scalable web applications built to automate workflows and improve business efficiency.',
      icon: Code2,
      gradient: 'from-cyan-600 to-blue-500',
      badge: 'Custom SaaS'
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software',
      desc: 'ERP, CRM, HRM, POS, Inventory, Accounting, and other enterprise-grade business systems.',
      icon: Building2,
      gradient: 'from-emerald-600 to-teal-500',
      badge: 'ERP & CRM'
    },
    {
      id: 'education-solutions',
      title: 'Education Solutions',
      desc: 'School Management Systems, University Management Systems, Learning Management Systems (LMS), and Examination Platforms.',
      icon: GraduationCap,
      gradient: 'from-indigo-600 to-purple-500',
      badge: 'EdTech'
    },
    {
      id: 'healthcare-solutions',
      title: 'Healthcare Solutions',
      desc: 'Hospital Management Systems, Clinic Systems, Pharmacy Management Systems, and Electronic Medical Records (EMR).',
      icon: Stethoscope,
      gradient: 'from-rose-600 to-pink-500',
      badge: 'HealthTech'
    },
    {
      id: 'government-solutions',
      title: 'Government Digital Solutions',
      desc: 'Ministry websites, government portals, citizen service platforms, and document management systems.',
      icon: Landmark,
      gradient: 'from-amber-600 to-orange-500',
      badge: 'GovTech'
    },
    {
      id: 'business-mgmt-systems',
      title: 'Business Management Systems',
      desc: 'Car Rental Systems, Hotel Management Systems, Property Management Systems, Restaurant Management Systems, and Warehouse Systems.',
      icon: Briefcase,
      gradient: 'from-violet-600 to-purple-500',
      badge: 'Industry Systems'
    }
  ];

  const trustBadges = [
    { text: 'Custom-Built Solutions', icon: Cpu },
    { text: 'Modern Technologies', icon: Rocket },
    { text: 'Secure & Scalable Systems', icon: ShieldCheck },
    { text: 'Long-Term Technical Support', icon: Wrench },
    { text: 'Professional Development Team', icon: Users }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/10">
      
      {/* Ambient Glow Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUILD WITH NOVA TECH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Your Next <br />
            <span className="text-gradient-blue">Digital Solution.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every organization has unique goals, challenges, and digital requirements. At Nova Tech, we design and develop tailored digital solutions that align with your vision, business objectives, timeline, and budget. Whether you need a modern website, enterprise software, or a complete digital transformation, our team is ready to bring your ideas to life.
          </p>
        </div>

        {/* "What We Build" Bento Grid Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">WHAT WE BUILD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-3xl glass-panel p-7 border border-white/10 hover:border-blue-500/40 transition-all duration-500 bg-[#081226]/90 shadow-xl overflow-hidden hover:-translate-y-2 flex flex-col justify-between ${
                    idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors relative z-10">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Custom Tailored
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary Call-to-Action Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 bg-gradient-to-br from-blue-950/90 via-[#081226] to-slate-950 text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Contact our engineering and design team today for a custom scope, technical audit, and project timeline.
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenContact || onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuote || onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs uppercase tracking-wider border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Request a Free Consultation</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Trust Indicators Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative z-10">
            {trustBadges.map((badge, bidx) => {
              const IconB = badge.icon;
              return (
                <div 
                  key={bidx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
