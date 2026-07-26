import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Briefcase, 
  Cloud, 
  BrainCircuit, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ServicesBento({ onSelectService }) {
  const [expandedCats, setExpandedCats] = useState({
    'web-solutions': true,
    'sw-development': true,
    'enterprise-systems': true
  });

  const categories = [
    {
      id: 'web-solutions',
      title: 'Web Solutions',
      icon: Globe,
      gradient: 'from-blue-600/30 via-indigo-600/20 to-cyan-600/30',
      badge: 'High Performance',
      desc: 'Responsive, high-performance, and SEO-optimized web solutions for corporate, government, and commercial entities.',
      items: [
        'Corporate Websites',
        'Business Websites',
        'E-Commerce Websites',
        'Government Websites',
        'NGO Websites'
      ]
    },
    {
      id: 'sw-development',
      title: 'Software Development',
      icon: Code2,
      gradient: 'from-cyan-600/20 via-blue-600/20 to-indigo-600/20',
      badge: 'Custom Engineering',
      desc: 'Bespoke web applications, cross-platform mobile apps, and scalable enterprise software built on modern stacks.',
      items: [
        'Web Applications',
        'Mobile Applications',
        'Enterprise Systems',
        'SaaS Platforms',
        'Custom Software'
      ]
    },
    {
      id: 'enterprise-systems',
      title: 'Enterprise Systems',
      icon: Building2,
      gradient: 'from-emerald-600/20 via-teal-600/20 to-blue-600/20',
      badge: 'ERP & Accounting',
      desc: 'Powerful enterprise solutions that automate workflows, streamline operations, and drive business growth.',
      items: [
        'ERP Systems',
        'CRM Systems',
        'HRM Systems',
        'POS Systems',
        'Inventory Management',
        'Accounting Systems'
      ]
    },
    {
      id: 'education-solutions',
      title: 'Education Solutions',
      icon: GraduationCap,
      gradient: 'from-indigo-600/20 via-purple-600/20 to-blue-600/20',
      badge: 'EdTech Portals',
      desc: 'Digital platforms for schools, colleges, and universities to manage admissions, LMS, exams, and student records.',
      items: [
        'School Management System',
        'University Management System',
        'Learning Management System (LMS)',
        'Student Information System',
        'Online Examination System'
      ]
    },
    {
      id: 'healthcare-solutions',
      title: 'Healthcare Solutions',
      icon: Stethoscope,
      gradient: 'from-rose-600/20 via-pink-600/20 to-indigo-600/20',
      badge: 'HealthTech & EMR',
      desc: 'Comprehensive hospital, clinic, and pharmacy management software built with strict data security.',
      items: [
        'Hospital Management System',
        'Clinic Management System',
        'Pharmacy Management System',
        'Medical Records System'
      ]
    },
    {
      id: 'government-solutions',
      title: 'Government Solutions',
      icon: Landmark,
      gradient: 'from-amber-600/20 via-orange-600/20 to-blue-600/20',
      badge: 'GovTech & Portals',
      desc: 'Secure digital platforms, ministry portals, citizen service platforms, and document management systems.',
      items: [
        'Ministry Websites',
        'Government Portals',
        'Citizen Service Platforms',
        'Document Management Systems'
      ]
    },
    {
      id: 'business-mgmt-solutions',
      title: 'Business Management Solutions',
      icon: Briefcase,
      gradient: 'from-violet-600/20 via-indigo-600/20 to-blue-600/20',
      badge: 'Turnkey Industry Systems',
      desc: 'Tailored management systems for hotels, car rentals, real estate, restaurants, and warehouses.',
      items: [
        'Hotel Management System',
        'Car Rental Management System',
        'Property Management System',
        'Restaurant Management System',
        'Warehouse Management System'
      ]
    },
    {
      id: 'cloud-db-solutions',
      title: 'Cloud & Database Solutions',
      icon: Cloud,
      gradient: 'from-sky-600/20 via-blue-600/20 to-purple-600/20',
      badge: 'DevOps & Data',
      desc: 'Cloud deployment, hosting, server administration, database design, optimization, and disaster recovery.',
      items: [
        'Cloud Deployment',
        'Cloud Hosting',
        'Server Management',
        'Database Design',
        'Database Optimization',
        'Backup & Recovery'
      ]
    },
    {
      id: 'it-consulting-support',
      title: 'IT Consulting & Support',
      icon: BrainCircuit,
      gradient: 'from-purple-600/20 via-indigo-600/20 to-cyan-600/20',
      badge: 'Advisory & 24/7 SLA',
      desc: 'Strategic technology advisory, software architecture, digital transformation, and 24/7 technical support.',
      items: [
        'Technology Consulting',
        'Digital Transformation',
        'Software Architecture',
        'System Maintenance',
        'Technical Support'
      ]
    }
  ];

  const toggleCategory = (id) => {
    setExpandedCats(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Digital <span className="text-gradient-blue">Solutions.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Nova Tech delivers innovative software solutions designed to help organizations operate more efficiently, improve user experiences, and accelerate digital transformation.
          </p>
        </div>

        {/* 9 Digital Solutions Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isExpanded = !!expandedCats[cat.id];

            return (
              <div
                key={cat.id}
                className="group relative rounded-3xl glass-panel border border-white/10 hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 bg-[#081226]/90 shadow-xl overflow-hidden hover:-translate-y-2"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors relative z-10">
                    {cat.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                    {cat.desc}
                  </p>

                  {/* Sub-services List */}
                  <div className="space-y-2 relative z-10 mb-6">
                    {cat.items.slice(0, isExpanded ? cat.items.length : 4).map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectService({
                          title: item,
                          category: cat.title,
                          desc: `Custom ${item} engineered by Nova Tech for optimal efficiency and scalability.`,
                          icon: cat.icon,
                          highlights: ['Enterprise Architecture', 'High Availability', 'Dedicated Support'],
                          metrics: 'Production Grade'
                        })}
                        className="group/item p-2.5 rounded-xl bg-slate-900/60 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-xs font-semibold text-white group-hover/item:text-cyan-300 transition-colors">
                            {item}
                          </span>
                        </div>

                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand / Collapse Button */}
                {cat.items.length > 4 && (
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 relative z-10"
                  >
                    <span>{isExpanded ? 'Collapse List' : `View All (${cat.items.length} Solutions)`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-blue-400" />}
                  </button>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
