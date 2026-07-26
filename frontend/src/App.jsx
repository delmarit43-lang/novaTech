import React, { useState, useEffect, useCallback } from 'react';
import AuroraCanvas from './components/AuroraCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesBento from './components/ServicesBento.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import TechStack from './components/TechStack.jsx';
import ProcessTimeline from './components/ProcessTimeline.jsx';
import StatsCounter from './components/StatsCounter.jsx';
import PricingSection from './components/PricingSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import TeamSection from './components/TeamSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import StartDigitalProject from './components/StartDigitalProject.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

import CommandPalette from './components/CommandPalette.jsx';
import { ServiceModal, ProjectModal, ArticleModal, QuoteModal } from './components/Modals.jsx';
import Toast from './components/Toast.jsx';
import {
  isAdminRouteHash,
  canAccessAdminShell,
  stripAdminFromUrl,
} from './admin/adminAccess.js';

function resolveViewMode() {
  if (isAdminRouteHash() && canAccessAdminShell()) {
    return 'admin';
  }
  if (isAdminRouteHash()) {
    stripAdminFromUrl();
  }
  return 'website';
}

export default function App() {
  const [viewMode, setViewMode] = useState(resolveViewMode);
  const [commandOpen, setCommandOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toast, setToast] = useState(null);

  const syncAdminRoute = useCallback(() => {
    if (isAdminRouteHash()) {
      if (canAccessAdminShell()) {
        setViewMode('admin');
      } else {
        stripAdminFromUrl();
        setViewMode('website');
      }
    }
  }, []);

  useEffect(() => {
    syncAdminRoute();
    window.addEventListener('hashchange', syncAdminRoute);
    return () => window.removeEventListener('hashchange', syncAdminRoute);
  }, [syncAdminRoute]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const goToWebsite = () => {
    stripAdminFromUrl();
    setViewMode('website');
  };

  const scrollToContact = (focusForm = false) => {
    if (viewMode === 'admin') goToWebsite();
    window.history.replaceState(null, '', `${window.location.pathname}#contact`);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (focusForm) {
        setTimeout(() => {
          document.getElementById('project-build-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          document.getElementById('contact-full-name')?.focus();
        }, 400);
      }
    }, viewMode === 'admin' ? 200 : 50);
  };

  const navigateToSection = (id) => {
    if (viewMode === 'admin') goToWebsite();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (viewMode === 'admin') {
    return (
      <div className="relative min-h-screen bg-[#081226] text-slate-100 font-sans">
        <AdminDashboard onGoToWebsite={goToWebsite} showToast={showToast} />
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#081226] text-slate-100 font-sans overflow-x-hidden">
      <AuroraCanvas />

      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onOpenContact={() => scrollToContact(true)}
        onOpenQuote={() => setQuoteOpen(true)}
      />

      <main className="relative z-10">
        <Hero onOpenContact={() => scrollToContact(true)} onOpenQuote={() => setQuoteOpen(true)} />
        <TrustedCompanies />
        <AboutSection onOpenContact={scrollToContact} />
        <ServicesBento onSelectService={(service) => setSelectedService(service)} />
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        <WhyChooseUs onOpenContact={scrollToContact} />
        <TechStack />
        <ProcessTimeline onOpenContact={scrollToContact} />
        <StatsCounter />
        <PricingSection onOpenQuote={() => setQuoteOpen(true)} onOpenContact={scrollToContact} />
        <Testimonials />
        <TeamSection />
        <BlogSection onSelectArticle={(article) => setSelectedArticle(article)} />
        <FAQSection onOpenContact={scrollToContact} />
        <StartDigitalProject onOpenContact={scrollToContact} />
        <ContactSection showToast={showToast} />
      </main>

      <Footer showToast={showToast} />

      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onNavigate={navigateToSection}
        onOpenContact={scrollToContact}
        onOpenQuote={() => setQuoteOpen(true)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={scrollToContact}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={scrollToContact}
      />

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} showToast={showToast} />

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
