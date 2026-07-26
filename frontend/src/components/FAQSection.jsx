import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  X,
  Code2,
  Layers,
  ShieldCheck,
  Zap,
  Briefcase,
  ThumbsUp,
  Headphones
} from 'lucide-react';

export default function FAQSection({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [helpfulFeedback, setHelpfulFeedback] = useState({});

  const categories = [
    'All',
    'Services',
    'Development',
    'Projects',
    'Support',
    'Consultation'
  ];

  const categoryIcons = {
    Services: Layers,
    Development: Code2,
    Projects: Briefcase,
    Support: Headphones,
    Consultation: Zap
  };

  const faqs = [
    {
      id: 1,
      category: 'Services',
      question: 'What services does Nova Tech provide?',
      answer: 'Nova Tech specializes in Enterprise Web Development, Scalable Web Applications, Mobile Applications, UI/UX Design & Branding, Enterprise Systems (ERP/CRM), School & Hospital Management Systems, Government Portals, Cloud Infrastructure, Database Architecture, IT Consulting, and 24/7 Technical Support.'
    },
    {
      id: 2,
      category: 'Development',
      question: 'Which technologies does Nova Tech use?',
      answer: 'Our engineering team leverages high-performance modern tech stacks including Next.js, React, Node.js, Express.js, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS, Docker, and AWS cloud solutions to ensure ultimate scalability, speed, and security.'
    },
    {
      id: 3,
      category: 'Projects',
      question: 'Can Nova Tech build custom software for my organization?',
      answer: 'Absolutely. Every business and institution has tailored operational requirements. We architect, design, and engineer fully customized software solutions precisely configured to match your unique workflows and organizational goals.'
    },
    {
      id: 4,
      category: 'Projects',
      question: 'Which industries does Nova Tech work with?',
      answer: 'We build digital solutions across diverse sectors including Enterprise Businesses, Government Agencies, Higher Education Institutions, Hospitals & Healthcare Networks, NGOs, E-commerce, Financial Tech, and Tech Startups.'
    },
    {
      id: 5,
      category: 'Development',
      question: 'How long does a project usually take to complete?',
      answer: 'Timeline varies by project scope and complexity. Standard corporate websites typically deploy within 2-3 weeks, while enterprise management systems and complex software platforms take between 4-10 weeks under our agile development methodology.'
    },
    {
      id: 6,
      category: 'Support',
      question: 'Do you provide maintenance and support after project delivery?',
      answer: 'Yes! Nova Tech offers dedicated post-launch SLA agreements, continuous software updates, security monitoring, database performance tuning, and on-demand technical support.'
    },
    {
      id: 7,
      category: 'Consultation',
      question: 'Can I request a free consultation before starting my project?',
      answer: 'Yes, 100% free. We offer complimentary strategy sessions to analyze your project requirements, outline technical architecture recommendations, and provide a clear project roadmap with transparent pricing.'
    },
    {
      id: 8,
      category: 'Services',
      question: 'Can you redesign or upgrade an existing legacy system?',
      answer: 'Yes. We specialize in legacy system modernization, UI/UX redesigns, API integrations, and code optimizations to enhance speed, security, and mobile responsiveness.'
    },
    {
      id: 9,
      category: 'Projects',
      question: 'Do you develop both web applications and management systems?',
      answer: 'Yes. We engineer corporate portals, SaaS web apps, e-commerce systems, as well as comprehensive management platforms such as School Management Systems (SMS), Hospital Management Systems (HMS), Car Rental Systems, Hotel Systems, and ERPs.'
    }
  ];

  const handleFeedback = (faqId) => {
    setHelpfulFeedback(prev => ({ ...prev, [faqId]: true }));
  };

  const filteredFaqs = faqs.filter(f => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getCategoryCount = (cat) => {
    if (cat === 'All') return faqs.length;
    return faqs.filter(f => f.category === cat).length;
  };

  return (
    <section id="faq" className="py-28 relative overflow-hidden bg-[#050B17] text-slate-100 border-t border-white/10">
      
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-cyan-400 backdrop-blur-md shadow-lg">
            <HelpCircle className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Questions.</span>
          </h2>

          <div className="inline-block px-4 py-1 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-300 font-bold text-sm sm:text-base">
            Everything You Need to Know Before Working With Nova Tech
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Clear answers to common questions regarding our custom software development, technology stack, project delivery timelines, and long-term tech support.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl mb-10 shadow-2xl space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30 scale-105' 
                      : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/30 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-950/80 border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-all font-mono shadow-inner"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center bg-slate-900/60 rounded-3xl border border-white/10 text-slate-400 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-500 mx-auto animate-bounce" />
              <p className="text-base font-semibold text-slate-300">No matching questions found for "{searchTerm}"</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="text-xs font-mono text-cyan-400 hover:underline"
              >
                Reset search & filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const CategoryIcon = categoryIcons[faq.category] || HelpCircle;

              return (
                <div 
                  key={faq.id}
                  className={`rounded-2xl backdrop-blur-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-cyan-500/40 bg-slate-900/95 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-900/80'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Number / Category Icon Indicator */}
                      <div className={`p-2.5 rounded-xl transition-all ${
                        isOpen ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-white/5 text-slate-400 group-hover:text-white'
                      }`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>

                      <div>
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400 bg-cyan-500/20 border border-cyan-500/30' : 'text-slate-400 bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 animate-fadeIn">
                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed font-light">
                          {faq.answer}
                        </p>

                        {/* Interactive Feedback & Action Bar inside FAQ item */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            {helpfulFeedback[faq.id] ? (
                              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Thanks for your feedback!
                              </span>
                            ) : (
                              <button
                                onClick={() => handleFeedback(faq.id)}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 border border-white/10 transition-all"
                              >
                                <ThumbsUp className="w-3.5 h-3.5" />
                                <span>Was this helpful?</span>
                              </button>
                            )}
                          </div>

                          {onOpenContact && (
                            <button
                              onClick={onOpenContact}
                              className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-semibold"
                            >
                              <span>Have a specific project question?</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Final Call To Action Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-cyan-950/80 border border-cyan-500/30 backdrop-blur-xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 max-w-2xl mx-auto z-10 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO START YOUR DIGITAL PROJECT?</span>
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Still Have Questions or Ready to Begin?
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Have questions about your next website, enterprise application, or custom management system? Our technical leadership team is ready to provide a free consultation and project scope.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 z-10 relative">
            {onOpenContact && (
              <>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/15 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Contact Nova Tech Team</span>
                </button>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
