import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  Clock, 
  User, 
  Sparkles,
  Globe,
  Building2,
  Landmark,
  GraduationCap,
  Stethoscope,
  Palette,
  Database,
  Calendar
} from 'lucide-react';

export default function BlogSection({ onSelectArticle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'Software Development',
    'UI/UX Design',
    'Enterprise Systems',
    'Education Solutions',
    'Healthcare Solutions',
    'Government Solutions',
    'Cloud Solutions',
    'Database Management',
    'IT Consulting',
    'Company News'
  ];

  const articles = [
    {
      id: 'modern-business-websites',
      title: 'Building Modern Business Websites That Drive Growth',
      category: 'Web Development',
      readTime: '4 min read',
      date: 'July 2026',
      author: 'Nova Tech Team',
      authorRole: 'Web Engineering Team',
      gradient: 'from-blue-900 via-indigo-900 to-slate-950',
      icon: Globe,
      excerpt: 'Learn the key principles behind designing fast, responsive, and SEO-optimized business websites that improve customer engagement and online visibility.',
      content: `### Executive Summary
Designing a modern business website requires a strategic balance between aesthetic elegance, lightning-fast performance, and user-centered conversion architecture.

### Key Principles for Modern Web Success:
1. **Responsive & Mobile-First Architecture**: Ensuring seamless performance across smartphones, tablets, and 4K displays.
2. **SEO Optimization**: Clean HTML5 semantics, structured schema data, and lightning-fast Core Web Vitals to rank higher on search engines.
3. **Conversion Design**: Clear call-to-action buttons, intuitive navigation, and high-trust glassmorphism aesthetics.`
    },
    {
      id: 'choosing-right-mgmt-system',
      title: 'Choosing the Right Management System for Your Organization',
      category: 'Enterprise Systems',
      readTime: '5 min read',
      date: 'July 2026',
      author: 'Nova Tech Team',
      authorRole: 'Enterprise Solutions Team',
      gradient: 'from-emerald-950 via-slate-950 to-slate-900',
      icon: Building2,
      excerpt: 'Understand how ERP, CRM, HRM, and custom management systems can improve productivity and streamline business operations.',
      content: `### Enterprise Workflow Automation
Fragmented spreadsheets and manual record-keeping cost organizations hundreds of hours in lost productivity each month.

### How Enterprise Systems Transform Operations:
1. **Centralized Data Core**: Unify finance, human resources, inventory, and customer relations under a single secure database.
2. **Real-Time Reporting**: Instant dashboards providing executive insight into revenue, stock levels, and staff performance.
3. **Scalable Security**: Role-based access controls and audit logging to ensure complete data integrity.`
    },
    {
      id: 'digital-transformation-government',
      title: 'Digital Transformation for Government Institutions',
      category: 'Government Solutions',
      readTime: '6 min read',
      date: 'June 2026',
      author: 'Nova Tech Team',
      authorRole: 'GovTech Practice',
      gradient: 'from-cyan-950 via-slate-900 to-blue-950',
      icon: Landmark,
      excerpt: 'Discover how secure government websites and digital service platforms improve transparency, accessibility, and public engagement.',
      content: `### Modernizing Public Sector Infrastructure
Citizens expect seamless, digital-first access to official information, e-services, and public announcements.

### Pillar Recommendations:
1. **Multilingual Accessibility**: Supporting native languages (Somali, Arabic, English) with fluid RTL/LTR support.
2. **High Security Standards**: Encrypted SSL, multi-layer firewall defense, and zero-trust cloud hosting.
3. **Citizen Portals**: Digital document submission and transparent public communication channels.`
    },
    {
      id: 'modern-tech-in-education',
      title: 'Modern Technology in Education',
      category: 'Education Solutions',
      readTime: '5 min read',
      date: 'June 2026',
      author: 'Nova Tech Team',
      authorRole: 'EdTech Division',
      gradient: 'from-purple-950 via-slate-950 to-indigo-950',
      icon: GraduationCap,
      excerpt: 'Explore how School Management Systems, University Management Systems, and Learning Management Systems (LMS) enhance teaching, administration, and student success.',
      content: `### Transforming Academic Management
Educational institutions from primary schools to universities require modern software to manage enrollment, grading, and parent communications.

### Core Features of Barbaariye+ and University Portals:
1. **Automated Admissions & Grading**: Streamlining registration and calculating transcripts automatically.
2. **Parent & Student Portals**: Providing instant access to attendance, fee balances, and academic reports.
3. **LMS Integration**: Digital assignment submission, online examination systems, and course materials.`
    },
    {
      id: 'hospital-mgmt-systems-healthcare',
      title: 'How Hospital Management Systems Improve Healthcare',
      category: 'Healthcare Solutions',
      readTime: '6 min read',
      date: 'May 2026',
      author: 'Nova Tech Team',
      authorRole: 'HealthTech Engineering',
      gradient: 'from-rose-950 via-slate-950 to-blue-950',
      icon: Stethoscope,
      excerpt: 'Learn how digital healthcare platforms simplify patient management, appointments, billing, pharmacy operations, and medical records.',
      content: `### Streamlining Patient Care Workflows
Hospital management systems eliminate paperwork delays and reduce administrative workload for doctors, nurses, and pharmacists.

### Key Benefits:
1. **Electronic Medical Records (EMR)**: Secure, centralized patient histories accessible across departments.
2. **Pharmacy & Inventory Integration**: Tracking medication stock and auto-generating prescription billings.
3. **Instant Appointment Scheduling**: Reducing waiting times and improving patient satisfaction.`
    },
    {
      id: 'ui-ux-best-practices',
      title: 'UI/UX Best Practices for Modern Web Applications',
      category: 'UI/UX Design',
      readTime: '4 min read',
      date: 'May 2026',
      author: 'Nova Tech Team',
      authorRole: 'Design Systems Team',
      gradient: 'from-indigo-950 via-purple-950 to-slate-950',
      icon: Palette,
      excerpt: 'Discover how user-centered design improves usability, accessibility, customer satisfaction, and product success.',
      content: `### The Power of Intuitive Interfaces
A product's success is defined by how effortlessly users can achieve their goals.

### Design Principles:
1. **Glassmorphic Spatial Depth**: Subtle blur backdrops and clean contrast ratios.
2. **Micro-Interactions**: Hover elevation, subtle state transitions, and tactile feedback.
3. **Consistent Typography**: Hierarchy-driven typography that reduces cognitive overload.`
    },
    {
      id: 'database-design-best-practices',
      title: 'Database Design Best Practices',
      category: 'Database Management',
      readTime: '5 min read',
      date: 'May 2026',
      author: 'Nova Tech Team',
      authorRole: 'Database Engineering Team',
      gradient: 'from-amber-950 via-slate-950 to-indigo-950',
      icon: Database,
      excerpt: 'Learn how scalable database architecture improves application performance, security, and long-term maintainability.',
      content: `### Architecting High-Performance Databases
Whether using PostgreSQL, MySQL, or cloud database clusters, relational schema design is the foundation of high-concurrency applications.

### Best Practices:
1. **Normalized Schemas & Indexing**: Indexing high-frequency query columns for sub-10ms response times.
2. **Automated Backups & Recovery**: Implementing zero-data-loss point-in-time recovery.
3. **ORM & Query Optimization**: Using Prisma ORM with strict connection pooling.`
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>KNOWLEDGE HUB & ARTICLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Nova Tech Insights & <br />
              <span className="text-gradient-blue">Resources.</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore the latest insights, development guides, project case studies, and technology trends from the Nova Tech team. We share practical knowledge to help businesses, educational institutions, healthcare providers, and government organizations embrace digital transformation.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search articles, guides, or resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 12 Categories Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white bg-slate-900/80 border border-white/10 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const IconComp = article.icon;

            return (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group relative rounded-3xl glass-panel border border-white/15 overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-[#081226]/90 shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Banner Thumbnail */}
                <div className={`h-48 w-full bg-gradient-to-br ${article.gradient} p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-700`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-cyan-300 bg-black/40 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      {article.category}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-slate-300">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{article.readTime}</span>
                    <span className="mx-1">•</span>
                    <Calendar className="w-3 h-3 text-blue-400" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 font-sans">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300 font-mono">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-semibold">{article.author}</span>
                    </div>

                    <button className="text-xs font-bold text-blue-400 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
