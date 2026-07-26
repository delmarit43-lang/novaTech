import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Car, 
  Landmark, 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  BookOpen,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function FeaturedProjects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeCardTab, setActiveCardTab] = useState({});

  const projects = [
    {
      id: 'driveflow-rental',
      title: 'DriveFlow – Car Rental Management System',
      industry: 'Transportation',
      icon: Car,
      gradient: 'from-blue-900 via-indigo-900 to-slate-950',
      glow: 'from-blue-600/20 to-cyan-500/20',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      challenge: 'Rental operations were managed manually, making it difficult to track vehicles, reservations, payments, and customer information efficiently.',
      solution: 'Nova Tech developed DriveFlow, a complete Car Rental Management System featuring online reservations, fleet management, customer management, payment processing, reporting, and an intuitive administrative dashboard.',
      result: 'Improved operational efficiency, faster booking processes, centralized fleet management, and an enhanced customer experience.',
      url: 'https://driveflow.novatech.io'
    },
    {
      id: 'ministry-religion',
      title: 'Ministry of Religion Official Website',
      industry: 'Government',
      icon: Landmark,
      gradient: 'from-cyan-950 via-slate-900 to-blue-950',
      glow: 'from-cyan-600/20 to-blue-500/20',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Multilingual i18n'],
      challenge: 'The ministry lacked a modern digital platform to communicate with the public and manage online content efficiently.',
      solution: 'Nova Tech designed and developed a secure, responsive government website with an intuitive content management system, modern UI/UX, multilingual support, and optimized performance.',
      result: 'Improved public access to information, strengthened the ministry\'s digital presence, and simplified content management.',
      url: 'https://religion.gov.so'
    },
    {
      id: 'barbaariye-school',
      title: 'Barbaariye+ School Management System',
      industry: 'Education',
      icon: GraduationCap,
      gradient: 'from-purple-950 via-slate-950 to-indigo-950',
      glow: 'from-purple-600/20 to-indigo-500/20',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      challenge: 'Schools relied on manual processes for admissions, attendance, examinations, fee collection, and academic record management.',
      solution: 'Nova Tech developed Barbaariye+, a complete School Management System with student enrollment, attendance tracking, examinations, grading, fee management, teacher administration, parent communication, and administrative dashboards.',
      result: 'Centralized school operations, improved efficiency, reduced paperwork, enhanced communication, and provided real-time academic reporting.',
      url: 'https://barbaariye.novatech.io'
    },
    {
      id: 'alph-berbera-univ',
      title: 'Alph Berbera University Management System',
      industry: 'Higher Education',
      icon: BookOpen,
      gradient: 'from-emerald-950 via-slate-950 to-slate-900',
      glow: 'from-emerald-600/20 to-teal-500/20',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      challenge: 'The university required a modern digital platform to manage admissions, student records, academic activities, examinations, and administrative operations.',
      solution: 'Nova Tech developed a comprehensive University Management System featuring admissions, course registration, student information management, attendance, examinations, grading, faculty management, fee management, and advanced reporting.',
      result: 'Simplified university administration, improved student services, centralized academic records, and enhanced operational efficiency across all departments.',
      url: 'https://portal.berbera.edu.so'
    },
    {
      id: 'hospital-mgmt',
      title: 'Hospital Management System',
      industry: 'Healthcare',
      icon: Stethoscope,
      gradient: 'from-rose-950 via-slate-950 to-blue-950',
      glow: 'from-rose-600/20 to-indigo-500/20',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'EMR Engine'],
      challenge: 'Hospitals struggled with fragmented patient records, manual appointment scheduling, billing, and inefficient administrative workflows.',
      solution: 'Nova Tech built a comprehensive Hospital Management System with patient registration, appointment scheduling, electronic medical records (EMR), pharmacy management, laboratory integration, billing, reporting, and staff management.',
      result: 'Improved patient care, streamlined hospital operations, reduced administrative workload, and increased data accuracy.',
      url: 'https://hms.novatech.io'
    },
    {
      id: 'modern-ecommerce',
      title: 'Modern E-Commerce Platform',
      industry: 'Retail & E-Commerce',
      icon: ShoppingBag,
      gradient: 'from-amber-950 via-slate-950 to-indigo-950',
      glow: 'from-amber-600/20 to-blue-500/20',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
      challenge: 'Businesses required a secure and scalable online platform to sell products, manage inventory, and process online orders efficiently.',
      solution: 'Nova Tech designed and developed a modern e-commerce platform featuring product management, shopping cart, secure payment integration, customer accounts, order tracking, inventory management, and an administrative dashboard.',
      result: 'Increased online sales, enhanced customer experience, simplified inventory management, and provided a scalable platform for future business growth.',
      url: 'https://store.novatech.io'
    }
  ];

  const categories = ['ALL', 'Transportation', 'Government', 'Education', 'Healthcare', 'Retail & E-Commerce'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.industry.includes(activeCategory) || (activeCategory === 'Education' && p.industry.includes('Education')));

  const setCardTab = (projId, tabName) => {
    setActiveCardTab(prev => ({
      ...prev,
      [projId]: tabName
    }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Transformative Systems <br />
              <span className="text-gradient-blue">Delivered with Precision.</span>
            </h2>
            <p className="text-slate-300 text-base">
              A showcase of enterprise systems built by Nova Tech across transportation, government, education, healthcare, and e-commerce.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-2 rounded-2xl border border-white/10 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComp = project.icon;
            const currentTab = activeCardTab[project.id] || 'solution';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel border border-white/15 overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl bg-[#081226]/90 flex flex-col justify-between"
              >
                {/* Browser Laptop Header Bar */}
                <div className="px-6 py-3 bg-slate-950 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline">
                      {project.url}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {project.industry}
                  </span>
                </div>

                {/* Visual Dashboard Banner */}
                <div className={`h-56 sm:h-64 w-full bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-700`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <button 
                      onClick={() => onSelectProject(project)}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg"
                      title="Inspect Case Study"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-cyan-300 bg-black/40 px-2.5 py-0.5 rounded-lg border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Body with Challenge/Solution/Result Tabs */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Card Internal Tab Buttons */}
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 text-xs font-mono">
                      {['solution', 'challenge', 'result'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setCardTab(project.id, t)}
                          className={`px-3 py-1 rounded-xl uppercase transition-all ${
                            currentTab === t 
                              ? 'bg-blue-600 text-white font-bold' 
                              : 'text-slate-400 hover:text-white bg-white/5'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[90px] text-xs text-slate-300 leading-relaxed font-sans">
                      {currentTab === 'challenge' && (
                        <div className="space-y-1 animate-in fade-in duration-200">
                          <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">CLIENT CHALLENGE</span>
                          <p>{project.challenge}</p>
                        </div>
                      )}

                      {currentTab === 'solution' && (
                        <div className="space-y-1 animate-in fade-in duration-200">
                          <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">NOVA TECH SOLUTION</span>
                          <p>{project.solution}</p>
                        </div>
                      )}

                      {currentTab === 'result' && (
                        <div className="space-y-1 animate-in fade-in duration-200">
                          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">BUSINESS RESULT</span>
                          <p>{project.result}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Production Verified
                    </span>

                    <button 
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* View All Projects Bottom Banner */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => onSelectProject(projects[0])}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>Explore All 6 Enterprise Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
