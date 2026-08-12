import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import ServicesBento from './components/ServicesBento.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ProcessTimeline from './components/ProcessTimeline.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import StatsCounter from './components/StatsCounter.jsx';
import TeamSection from './components/TeamSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQSection from './components/FAQSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import { ServiceModal, ProjectModal, QuoteModal } from './components/Modals.jsx';
import Toast from './components/Toast.jsx';
import {
  isAdminRouteHash,
  canAccessAdminShell,
  stripAdminFromUrl,
} from './admin/adminAccess.js';

function resolveViewMode() {
  if (isAdminRouteHash() && canAccessAdminShell()) return 'admin';
  if (isAdminRouteHash()) stripAdminFromUrl();
  return 'website';
}

export default function App() {
  const [viewMode, setViewMode] = useState(resolveViewMode);
  const [commandOpen, setCommandOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  const syncAdminRoute = useCallback(() => {
    if (isAdminRouteHash()) {
      if (canAccessAdminShell()) setViewMode('admin');
      else {
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

  const showToast = (message, type = 'success') => setToast({ message, type });

  const goToWebsite = () => {
    stripAdminFromUrl();
    setViewMode('website');
  };

  const scrollToContact = (focusForm = false) => {
    if (viewMode === 'admin') goToWebsite();
    window.history.replaceState(null, '', `${window.location.pathname}#contact`);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (focusForm) {
        setTimeout(() => {
          document.getElementById('project-build-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          document.getElementById('contact-full-name')?.focus();
        }, 350);
      }
    }, viewMode === 'admin' ? 200 : 40);
  };

  const navigateToSection = (id) => {
    if (viewMode === 'admin') goToWebsite();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  if (viewMode === 'admin') {
    return (
      <div className="relative min-h-screen bg-[#081226] text-slate-100 admin-shell">
        <AdminDashboard onGoToWebsite={goToWebsite} showToast={showToast} />
        <Toast toast={toast} onClose={() => setToast(null)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#081226] overflow-x-hidden">
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onOpenContact={() => scrollToContact(true)}
      />

      <main>
        <Hero onOpenContact={() => scrollToContact(true)} onOpenQuote={() => setQuoteOpen(true)} />
        <TrustedCompanies />
        <ServicesBento
          onSelectService={setSelectedService}
          onOpenContact={() => scrollToContact(true)}
        />
        <WhyChooseUs />
        <ProcessTimeline />
        <FeaturedProjects onSelectProject={setSelectedProject} />
        <StatsCounter />
        <TeamSection />
        <Testimonials />
        <FAQSection onOpenContact={() => scrollToContact(true)} />
        <ContactSection showToast={showToast} />
      </main>

      <Footer showToast={showToast} />

      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onNavigate={navigateToSection}
        onOpenContact={() => scrollToContact(true)}
        onOpenQuote={() => setQuoteOpen(true)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => scrollToContact(true)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => scrollToContact(true)}
      />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} showToast={showToast} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
