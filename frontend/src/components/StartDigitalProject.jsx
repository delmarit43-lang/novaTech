import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Briefcase, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function StartDigitalProject({ onOpenContact }) {
  const [selectedType, setSelectedType] = useState('Business Website');

  const projectTypes = [
    {
      id: 'business-website',
      title: 'Business Website',
      desc: 'Modern corporate and business websites designed for performance, branding, and growth.',
      icon: Globe,
      gradient: 'from-blue-600 to-cyan-500',
      badge: 'Web & Branding'
    },
    {
      id: 'web-application',
      title: 'Web Application',
      desc: 'Custom web applications tailored to automate business processes and improve productivity.',
      icon: Code2,
      gradient: 'from-cyan-600 to-blue-500',
      badge: 'Custom SaaS'
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      desc: 'Cross-platform Android and iOS applications with modern user experiences.',
      icon: Smartphone,
      gradient: 'from-purple-600 to-pink-500',
      badge: 'iOS & Android'
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software',
      desc: 'ERP, CRM, HRM, POS, Inventory, and Accounting Systems for organizations and businesses.',
      icon: Building2,
      gradient: 'from-emerald-600 to-teal-500',
      badge: 'ERP & CRM'
    },
    {
      id: 'education-solutions',
      title: 'Education Solutions',
      desc: 'School Management Systems, Learning Management Systems (LMS), Student Portals, Examination Systems, and University Management Systems.',
      icon: GraduationCap,
      gradient: 'from-indigo-600 to-blue-500',
      badge: 'EdTech'
    },
    {
      id: 'healthcare-solutions',
      title: 'Healthcare Solutions',
      desc: 'Hospital Management Systems, Clinic Systems, Pharmacy Systems, Appointment Booking, and Electronic Medical Records (EMR).',
      icon: Stethoscope,
      gradient: 'from-rose-600 to-pink-500',
      badge: 'HealthTech'
    },
    {
      id: 'government-solutions',
      title: 'Government Digital Solutions',
      desc: 'Government websites, ministry portals, citizen service platforms, and document management systems.',
      icon: Landmark,
      gradient: 'from-amber-600 to-orange-500',
      badge: 'GovTech'
    },
    {
      id: 'business-mgmt',
      title: 'Business Management Systems',
      desc: 'Hotel Management Systems, Car Rental Systems, Property Management Systems, Restaurant Management Systems, Warehouse Systems, and Booking Platforms.',
      icon: Briefcase,
      gradient: 'from-violet-600 to-purple-500',
      badge: 'Industry Systems'
    }
  ];

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[var(--paper)] border-t border-[var(--line)]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR DIGITAL PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your <span className="text-gradient-blue">Digital Project.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Get a quick overview of the type of digital solution your organization needs. Whether you're building a website, enterprise software, or a custom management system, Nova Tech is ready to turn your vision into reality.
          </p>
        </div>

        {/* Available Project Types Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {projectTypes.map((pt) => {
            const IconComp = pt.icon;
            const isSelected = selectedType === pt.title;

            return (
              <div
                key={pt.id}
                onClick={() => setSelectedType(pt.title)}
                className={`group relative rounded-3xl glass-panel p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-blue-600/20 border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]' 
                    : 'bg-white border-[var(--line)] hover:border-blue-500/40 hover:-translate-y-1.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${pt.gradient} text-white shadow-lg`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'Selected' : 'Select Scope'}
                  </span>
                  <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Prominent CTA */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-gradient-to-r from-blue-950/80 via-[#081226]/90 to-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">READY TO ACCELERATE GROWTH?</span>
            <h3 className="text-2xl font-bold text-white">Selected Project Scope: <span className="text-cyan-300">{selectedType}</span></h3>
            <p className="text-slate-300 text-xs sm:text-sm">Speak directly with our senior software architects to scope your requirements and timeline.</p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
