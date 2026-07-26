import React, { useState } from 'react';
import { 
  Sparkles, 
  Linkedin, 
  Github, 
  Mail, 
  Briefcase, 
  ChevronRight, 
  Code2, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Cpu,
  Layers,
  Sparkle,
  UserCheck
} from 'lucide-react';

export default function TeamSection() {
  const [activeTabMap, setActiveTabMap] = useState({});
  const [selectedMemberModal, setSelectedMemberModal] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const setCardTab = (memberId, tab) => {
    setActiveTabMap(prev => ({ ...prev, [memberId]: tab }));
  };

  const teamMembers = [
    {
      id: 'siddiiq',
      name: 'Siddiiq Awil Abdilahi',
      role: 'Founder, CEO & Full Stack Software Engineer',
      shortRole: 'Founder & Full-Stack Architect',
      photo: '/team-siddiiq.jpeg',
      status: 'Executive Leadership',
      icon: Terminal,
      bio: "Siddiiq is the founder of Nova Tech and leads the company's vision, product strategy, and software engineering initiatives. He specializes in designing scalable web applications, enterprise software, and digital transformation solutions while ensuring every project meets the highest standards of quality and innovation.",
      highlights: [
        'Enterprise Software Architecture',
        'Visionary Tech Strategy & Direction',
        'End-to-End Scalable Systems Development'
      ],
      responsibilities: [
        'Company Leadership & Visionary Direction',
        'Strategic Project Management & High-Quality Delivery',
        'Full Stack Web & System Architecture',
        'High-Performance System Engineering',
        'Client Consultation & Digital Transformation'
      ],
      skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'System Architecture', 'Cloud Infrastructure'],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      badgeGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent text-cyan-300 border-cyan-500/30',
      accentColor: '#38bdf8',
      glowClass: 'hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]',
      badge: 'Founder & CEO',
      socials: {
        linkedin: '#',
        github: 'https://github.com/Novatech97',
        email: 'siddiiq@novatech.com'
      }
    },
    {
      id: 'xuseen',
      name: 'Xuseen',
      role: 'Senior Full Stack Developer',
      shortRole: 'Senior Full-Stack Engineer',
      photo: '/team-xuseen.jpeg',
      status: 'Engineering Lead',
      icon: Code2,
      bio: 'Xuseen is a Senior Full Stack Developer responsible for building modern, scalable, and high-performance web applications. He works across both frontend and backend technologies to deliver secure, responsive, and enterprise-grade software solutions.',
      highlights: [
        'Modern Frontend & API Engineering',
        'High-Performance Code Optimization',
        'Robust Security & System Integration'
      ],
      responsibilities: [
        'Full Stack Web & API Development',
        'Advanced Interactive Frontend User Experiences',
        'Scalable Microservices & Backend API Architecture',
        'RESTful & GraphQL API Integration',
        'Code Quality Audits & Performance Tuning',
        'Technical Collaboration & Peer Mentorship'
      ],
      skills: ['Next.js', 'React', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'API Security'],
      gradient: 'from-purple-500 via-indigo-500 to-blue-600',
      badgeGradient: 'from-purple-500/20 via-indigo-500/10 to-transparent text-purple-300 border-purple-500/30',
      accentColor: '#a855f7',
      glowClass: 'hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]',
      badge: 'Senior Engineer',
      socials: {
        linkedin: '#',
        github: 'https://github.com/Novatech97',
        email: 'xuseen@novatech.com'
      }
    },
    {
      id: 'suhayb',
      name: 'Suhayb',
      role: 'Database Administrator & Marketing Specialist',
      shortRole: 'DB Administrator & Marketing Lead',
      photo: '/team-suhayb.jpeg',
      status: 'Data & Growth Specialist',
      icon: Database,
      bio: "Suhayb manages database architecture, data security, and system performance while also supporting Nova Tech's marketing initiatives. He ensures reliable data management and helps strengthen the company's digital presence through strategic marketing efforts.",
      highlights: [
        'Database Optimization & Data Reliability',
        'Enterprise Security & Disaster Recovery',
        'Digital Marketing & Strategic Growth'
      ],
      responsibilities: [
        'Database Architecture & Administration',
        'SQL Optimization & Database Query Tuning',
        'Enterprise Data Security & Regular Backups',
        'System Disaster Recovery & High Availability',
        'Digital Growth & Brand Strategy',
        'Targeted Marketing Campaigns',
        'Client Relations & Engagement'
      ],
      skills: ['PostgreSQL', 'MySQL', 'Database Management', 'SQL Tuning', 'Data Security', 'Digital Marketing', 'Brand Strategy', 'Analytics'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      badgeGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent text-emerald-300 border-emerald-500/30',
      accentColor: '#10b981',
      glowClass: 'hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]',
      badge: 'DBA & Marketing',
      socials: {
        linkedin: '#',
        github: 'https://github.com/Novatech97',
        email: 'suhayb@novatech.com'
      }
    }
  ];

  return (
    <section id="team" className="py-28 relative overflow-hidden bg-[#050B17]/90 text-slate-100">
      
      {/* Futuristic Background Ambient Glows & Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          
          {/* Cyber Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-cyan-400 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">THE PEOPLE BEHIND NOVA TECH</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Meet the Team <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Behind Nova Tech.
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Our team combines creative vision, deep technical mastery, and strategic execution to build cutting-edge software solutions that empower organizations, businesses, and startups to thrive.
          </p>

          {/* Quick Leadership Features */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% Dedicated In-House Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Full Stack & Enterprise Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>High Security & Data Integrity</span>
            </div>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const Icon = member.icon;
            const currentTab = activeTabMap[member.id] || 'overview';
            const isHovered = hoveredMember === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className={`group relative rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 transition-all duration-500 flex flex-col justify-between overflow-hidden ${member.glowClass}`}
              >
                {/* Top Subtle Color Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${member.gradient}`}></div>

                <div>
                  {/* Photo & Hologram Card Header */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for photo contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B17] via-[#050B17]/40 to-transparent"></div>

                    {/* Badge Floating Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border backdrop-blur-md ${member.badgeGradient}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{member.badge}</span>
                      </div>
                    </div>

                    {/* Status Floating Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{member.status}</span>
                      </div>
                    </div>

                    {/* Social Hover Quick Action Strip */}
                    <div className={`absolute right-4 top-16 z-20 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'}`}>
                      <a 
                        href={member.socials.linkedin} 
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors shadow-lg hover:scale-110"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shadow-lg hover:scale-110"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white hover:bg-cyan-600 transition-colors shadow-lg hover:scale-110"
                        title="Direct Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Overlay Info at bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold tracking-wide uppercase text-cyan-400">
                          {member.shortRole}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Body Content with Tabs */}
                  <div className="p-6 space-y-5">
                    
                    {/* Navigation Tabs */}
                    <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-mono">
                      <button
                        onClick={() => setCardTab(member.id, 'overview')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                          currentTab === 'overview'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setCardTab(member.id, 'responsibilities')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                          currentTab === 'responsibilities'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Duties ({member.responsibilities.length})
                      </button>
                      <button
                        onClick={() => setCardTab(member.id, 'skills')}
                        className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                          currentTab === 'skills'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Skills ({member.skills.length})
                      </button>
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[160px]">
                      {currentTab === 'overview' && (
                        <div className="space-y-4 animate-fadeIn">
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                            {member.bio}
                          </p>
                          
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                              Key Focus Areas
                            </span>
                            <div className="space-y-1">
                              {member.highlights.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {currentTab === 'responsibilities' && (
                        <div className="space-y-2 animate-fadeIn">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold mb-2">
                            Key Responsibilities
                          </span>
                          <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
                            {member.responsibilities.map((resp, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentTab === 'skills' && (
                        <div className="space-y-3 animate-fadeIn">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                            Tech Stack & Competencies
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-mono font-medium text-cyan-200 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-lg hover:border-cyan-400 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4">
                  <button
                    onClick={() => setSelectedMemberModal(member)}
                    className="w-full mt-4 py-3 px-4 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-xs font-mono font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>View Full Profile & Contact</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Collaboration Callout Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-purple-950/60 border border-blue-500/20 backdrop-blur-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <UserCheck className="w-4 h-4" />
              <span>EXPERT SOFTWARE TEAM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to collaborate with Nova Tech's engineering team?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-light">
              Whether you need scalable enterprise architecture, custom web applications, or data administration, our team is ready to deliver.
            </p>
          </div>

          <div className="z-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-semibold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Member Full Detail Modal */}
      {selectedMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#091328] border border-cyan-500/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header Bar */}
            <div className="p-6 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${selectedMemberModal.gradient}`}>
                  <selectedMemberModal.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedMemberModal.name}</h4>
                  <p className="text-xs font-mono text-cyan-400">{selectedMemberModal.role}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMemberModal(null)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
              
              {/* Photo + Short Bio */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-900/50 p-5 rounded-2xl border border-white/5">
                <img
                  src={selectedMemberModal.photo}
                  alt={selectedMemberModal.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-xl"
                />
                <div className="space-y-3 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{selectedMemberModal.badge}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {selectedMemberModal.bio}
                  </p>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>Key Responsibilities & Scope</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedMemberModal.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Skills list */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Technologies & Domain Skills</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedMemberModal.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">Direct Contact:</span>
                <a
                  href={`mailto:${selectedMemberModal.socials.email}`}
                  className="text-xs font-mono font-semibold text-cyan-400 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{selectedMemberModal.socials.email}</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedMemberModal(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs text-center transition-colors shadow-lg"
              >
                Initiate Project Discussion
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
