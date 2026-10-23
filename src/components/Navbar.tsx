import { useState, useEffect } from 'react';
import { UserProfile } from '../types/portfolio';
import { Menu, X, ArrowUpRight, FileText, Settings2 } from 'lucide-react';

interface NavbarProps {
  profile: UserProfile;
  isOwner: boolean;
  onOpenEstimator: () => void;
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
}

export default function Navbar({
  profile,
  isOwner,
  onOpenEstimator,
  onOpenResume,
  onOpenCustomizer,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>{profile.name}</span>
          <span className="text-xs text-slate-400 font-normal hidden sm:inline">
            / Full-Stack Consultant
          </span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Skills Matrix
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Case Studies
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#education"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Studies & Certifications
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Freelance Services
          </a>
        </nav>

        {/* Zone 3: 1 primary action + helper utilities */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-700/60 rounded-md transition-colors whitespace-nowrap shrink-0"
            title="View & Print Client Pitch Resume"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Client Resume</span>
          </button>

          {isOwner && (
            <button
              onClick={onOpenCustomizer}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:text-white bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/60 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Edit Details / Profile Settings (Owner Only)"
            >
              <Settings2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Edit (Owner)</span>
            </button>
          )}

          <button
            onClick={onOpenEstimator}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Project Scope Calculator</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white border-b border-slate-800/50"
            >
              Technical Skills Matrix
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white border-b border-slate-800/50"
            >
              Featured Case Studies
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white border-b border-slate-800/50"
            >
              Work Experience
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white border-b border-slate-800/50"
            >
              Studies & Certifications
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white border-b border-slate-800/50"
            >
              Freelance Services & Retainers
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Direct Client Inquiry
            </a>
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-medium text-center text-slate-300 bg-slate-800/80 rounded-md"
            >
              Client Resume
            </button>
            {isOwner && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="flex-1 py-2 text-xs font-semibold text-center text-amber-300 bg-amber-950/60 border border-amber-800/60 rounded-md"
              >
                Edit (Owner)
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
