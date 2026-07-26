import React from 'react';
import { 
  Cpu, 
  Code2, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Hotel, 
  Car, 
  Home, 
  Users,
  ShieldCheck,
  Zap,
  Layout,
  Search,
  Lock,
  GitBranch
} from 'lucide-react';

export default function TrustedCompanies() {

  const frontendTech = [
    { name: 'Next.js', tag: 'Frontend Framework' },
    { name: 'React', tag: 'UI Library' },
    { name: 'TypeScript', tag: 'Typed JS' },
    { name: 'JavaScript', tag: 'Core Language' },
    { name: 'Tailwind CSS', tag: 'Styling Engine' },
    { name: 'HTML5', tag: 'Structure' },
    { name: 'CSS3', tag: 'Styling' }
  ];

  const backendTech = [
    { name: 'Node.js', tag: 'Runtime Environment' },
    { name: 'Express.js', tag: 'API Framework' },
    { name: 'PHP', tag: 'Server Language' },
    { name: 'Laravel', tag: 'PHP Framework' }
  ];

  const databaseTech = [
    { name: 'PostgreSQL', tag: 'Relational DB' },
    { name: 'MySQL', tag: 'SQL Database' },
    { name: 'Prisma ORM', tag: 'Database Toolkit' }
  ];

  const devTools = [
    { name: 'Git', tag: 'Version Control' },
    { name: 'GitHub', tag: 'Code Hosting' },
    { name: 'Docker', tag: 'Containerization' },
    { name: 'Vercel', tag: 'Cloud Deployment' },
    { name: 'Postman', tag: 'API Testing' }
  ];

  const marqueeTechnologies = [
    ...frontendTech,
    ...backendTech,
    ...databaseTech,
    ...devTools
  ];

  const industries = [
    { title: 'Business & Corporate', desc: 'Enterprise websites & business tools', icon: Building2 },
    { title: 'Education', desc: 'Schools, Universities & LMS platforms', icon: GraduationCap },
    { title: 'Healthcare', desc: 'Hospitals, Clinics & EMR systems', icon: Stethoscope },
    { title: 'Government', desc: 'Ministry portals & E-Gov platforms', icon: Landmark },
    { title: 'Retail & E-Commerce', desc: 'Digital storefronts & POS systems', icon: ShoppingBag },
    { title: 'Hospitality', desc: 'Hotel & restaurant management', icon: Hotel },
    { title: 'Transportation', desc: 'Fleet & car rental systems', icon: Car },
    { title: 'Property Management', desc: 'Real estate & leasing systems', icon: Home },
    { title: 'NGOs & Organizations', desc: 'Non-profit portals & donation systems', icon: Users }
  ];

  const whyChooseUs = [
    'Custom Software Development',
    'Modern Web Technologies',
    'Responsive UI/UX Design',
    'Secure & Scalable Solutions',
    'Professional Development Team',
    'Long-Term Technical Support',
    'Enterprise-Grade Quality',
    'Client-Focused Approach'
  ];

  const performanceHighlights = [
    'Responsive Across All Devices',
    'SEO-Friendly Development',
    'Fast Loading Performance',
    'Secure Authentication',
    'Optimized Database Design',
    'Scalable Architecture',
    'Clean & Maintainable Code',
    'Modern Development Standards'
  ];

  return (
    <section id="technologies" className="py-24 relative border-y border-white/10 bg-slate-950/60 overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGIES WE USE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building Modern Digital Solutions with <br />
            <span className="text-gradient-blue">Trusted Technologies.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            At Nova Tech, we use reliable, modern, and industry-proven technologies to build secure, scalable, and high-performance digital solutions for businesses, educational institutions, healthcare providers, government organizations, and startups.
          </p>
        </div>

        {/* Infinite Technology Marquee Track */}
        <div className="relative w-full overflow-hidden flex items-center py-4 bg-slate-900/60 rounded-3xl border border-white/10">
          
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#081226] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#081226] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...marqueeTechnologies, ...marqueeTechnologies].map((t, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer group bg-slate-950/80"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></div>
                <span className="text-sm font-bold font-mono text-white tracking-wide">
                  {t.name}
                </span>
                <span className="text-[10px] font-mono bg-blue-500/10 text-cyan-300 px-2 py-0.5 rounded-full border border-blue-500/20">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#081226]/90 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 pb-2 border-b border-white/10">
              <Code2 className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">FRONTEND TECH</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendTech.map(t => (
                <span key={t.name} className="text-xs font-mono text-white bg-white/5 hover:bg-blue-600/20 px-3 py-1.5 rounded-xl border border-white/10 transition-colors">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#081226]/90 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-blue-400 pb-2 border-b border-white/10">
              <Cpu className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">BACKEND TECH</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendTech.map(t => (
                <span key={t.name} className="text-xs font-mono text-white bg-white/5 hover:bg-blue-600/20 px-3 py-1.5 rounded-xl border border-white/10 transition-colors">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#081226]/90 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400 pb-2 border-b border-white/10">
              <Database className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">DATABASE TECH</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {databaseTech.map(t => (
                <span key={t.name} className="text-xs font-mono text-white bg-white/5 hover:bg-blue-600/20 px-3 py-1.5 rounded-xl border border-white/10 transition-colors">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#081226]/90 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-purple-400 pb-2 border-b border-white/10">
              <GitBranch className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">DEV TOOLS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {devTools.map(t => (
                <span key={t.name} className="text-xs font-mono text-white bg-white/5 hover:bg-blue-600/20 px-3 py-1.5 rounded-xl border border-white/10 transition-colors">
                  {t.name}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Industries We Serve Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">SECTORS & INDUSTRIES</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Industries We Serve</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div 
                  key={idx}
                  className="group glass-panel p-6 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 bg-[#081226]/80 hover:-translate-y-1 flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Section: Why Choose Us & Performance Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          {/* Why Choose Nova Tech */}
          <div className="glass-panel p-8 rounded-3xl border border-white/15 bg-[#081226]/95 space-y-6 shadow-xl">
            <h4 className="text-lg font-bold text-white flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Why Organizations Choose Nova Tech</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Highlights */}
          <div className="glass-panel p-8 rounded-3xl border border-white/15 bg-[#081226]/95 space-y-6 shadow-xl">
            <h4 className="text-lg font-bold text-white flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Performance & Quality Highlights</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {performanceHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
