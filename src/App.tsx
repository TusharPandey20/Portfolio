/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  getStoredPortfolioData,
  savePortfolioData,
  resetPortfolioData,
  PortfolioDataStore,
} from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutOverview from './components/AboutOverview';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import FreelanceServices from './components/FreelanceServices';
import ProjectEstimator from './components/ProjectEstimator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintableResumeModal from './components/PrintableResumeModal';
import ProfileCustomizerModal from './components/ProfileCustomizerModal';
import OwnerAuthModal from './components/OwnerAuthModal';
import { Shield, Settings2, LogOut } from 'lucide-react';

export default function App() {
  const [dataStore, setDataStore] = useState<PortfolioDataStore>(getStoredPortfolioData);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCustomizerModalOpen, setIsCustomizerModalOpen] = useState(false);
  const [isOwnerAuthOpen, setIsOwnerAuthOpen] = useState(false);
  const [isOwner, setIsOwner] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('tushar_portfolio_is_owner') === 'true';
  });

  const [contactPrefillMessage, setContactPrefillMessage] = useState<string>('');
  const [selectedServiceToScope, setSelectedServiceToScope] = useState<string>('');

  // Keyboard shortcut (Ctrl+Shift+E or Cmd+Shift+E) and URL trigger (?admin, #admin)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        if (isOwner) {
          setIsCustomizerModalOpen(true);
        } else {
          setIsOwnerAuthOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Check URL parameters for admin activation
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.has('admin') || url.searchParams.has('owner') || window.location.hash === '#admin') {
        if (!isOwner) {
          setIsOwnerAuthOpen(true);
        }
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOwner]);

  const handleSaveCustomData = (updated: PortfolioDataStore) => {
    setDataStore(updated);
    savePortfolioData(updated);
  };

  const handleResetCustomData = () => {
    resetPortfolioData();
    setDataStore(getStoredPortfolioData());
  };

  const handleLogoutOwner = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tushar_portfolio_is_owner');
    }
    setIsOwner(false);
    setIsCustomizerModalOpen(false);
  };

  const scrollToEstimator = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceToScope(serviceTitle);
    }
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendScopeToContact = (scopeText: string) => {
    setContactPrefillMessage(scopeText);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireWithProject = (projectTitle: string) => {
    setContactPrefillMessage(
      `Hello Tushar,\n\nI reviewed your case study for "${projectTitle}" on your portfolio. We are planning a project with similar technical requirements and would like to discuss scoping, architecture, and timeline.\n\nKey requirements:`
    );
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        profile={dataStore.profile}
        isOwner={isOwner}
        onOpenEstimator={() => scrollToEstimator()}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          profile={dataStore.profile}
          onOpenEstimator={() => scrollToEstimator()}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Professional Background & Philosophy */}
        <AboutOverview profile={dataStore.profile} />

        {/* Technical Skills Matrix */}
        <SkillsMatrix
          skills={dataStore.skills}
          isOwner={isOwner}
          onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
        />

        {/* Featured Case Studies & Projects */}
        <ProjectsShowcase
          projects={dataStore.projects}
          isOwner={isOwner}
          onInquireWithProject={handleInquireWithProject}
          onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
        />

        {/* Career & Client Experience */}
        <ExperienceTimeline experiences={dataStore.experiences} />

        {/* Studies & Verified Certifications */}
        <EducationCertifications
          education={dataStore.education}
          certifications={dataStore.certifications}
        />

        {/* Freelance Services & Client Testimonials */}
        <FreelanceServices
          services={dataStore.services}
          testimonials={dataStore.testimonials}
          onSelectService={(serviceTitle) => scrollToEstimator(serviceTitle)}
        />

        {/* Interactive Client Scope & Budget Estimator */}
        <ProjectEstimator
          profile={dataStore.profile}
          initialService={selectedServiceToScope}
          onSendToContact={handleSendScopeToContact}
        />

        {/* Client Inquiry Form & Direct Contacts */}
        <ContactSection
          profile={dataStore.profile}
          initialMessage={contactPrefillMessage}
          onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={dataStore.profile}
        isOwner={isOwner}
        onOpenEstimator={() => scrollToEstimator()}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCustomizer={() => setIsCustomizerModalOpen(true)}
        onOpenOwnerAuth={() => setIsOwnerAuthOpen(true)}
      />

      {/* Floating Owner Mode Toolbar (Visible ONLY to Tushar when authenticated) */}
      {isOwner && (
        <aside
          aria-label="Owner administrative controls"
          className="fixed bottom-5 right-5 z-40 bg-[#0d121f]/95 border border-amber-500/50 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs"
        >
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Owner Mode</span>
          </div>

          <span className="text-slate-700">|</span>

          <button
            onClick={() => setIsCustomizerModalOpen(true)}
            className="text-slate-200 hover:text-white font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Edit Profile</span>
          </button>

          <span className="text-slate-700">|</span>

          <button
            onClick={handleLogoutOwner}
            className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
            title="Exit Owner Mode to view as public client"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock & Exit</span>
          </button>
        </aside>
      )}

      {/* Owner Authentication Modal */}
      <OwnerAuthModal
        isOpen={isOwnerAuthOpen}
        onClose={() => setIsOwnerAuthOpen(false)}
        onSuccess={() => {
          setIsOwner(true);
          setIsCustomizerModalOpen(true);
        }}
      />

      {/* Printable Client Resume Modal */}
      <PrintableResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={dataStore.profile}
        experiences={dataStore.experiences}
        education={dataStore.education}
        certifications={dataStore.certifications}
        skills={dataStore.skills}
        projects={dataStore.projects}
      />

      {/* Live Profile Customizer Modal (Owner Only) */}
      <ProfileCustomizerModal
        isOpen={isCustomizerModalOpen}
        onClose={() => setIsCustomizerModalOpen(false)}
        dataStore={dataStore}
        onSave={handleSaveCustomData}
        onReset={handleResetCustomData}
      />
    </div>
  );
}
