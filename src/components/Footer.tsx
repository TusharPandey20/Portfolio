import { UserProfile } from '../types/portfolio';
import { ArrowUp, Github, Linkedin, Mail, Lock, Settings2 } from 'lucide-react';

interface FooterProps {
  profile: UserProfile;
  isOwner: boolean;
  onOpenEstimator: () => void;
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
  onOpenOwnerAuth: () => void;
}

export default function Footer({
  profile,
  isOwner,
  onOpenEstimator,
  onOpenResume,
  onOpenCustomizer,
  onOpenOwnerAuth,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#070b12] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-sm font-bold text-white mb-1">{profile.name}</div>
            <p className="text-xs text-slate-400">
              Senior Software Developer · Freelance Technical Consultant
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenEstimator}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Project Estimator
            </button>
            <button
              onClick={onOpenResume}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Client Resume
            </button>

            {isOwner && (
              <button
                onClick={onOpenCustomizer}
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer flex items-center gap-1"
              >
                <Settings2 className="w-3 h-3" />
                <span>Edit Profile (Owner)</span>
              </button>
            )}

            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Contact Tushar
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} {profile.name}. Designed for client technical review and freelance engagement.
            </span>
            {/* Subtle discreet lock icon for owner login */}
            {!isOwner && (
              <button
                onClick={onOpenOwnerAuth}
                className="p-1 text-slate-700 hover:text-slate-400 transition-colors rounded cursor-pointer"
                title="Owner Login (Press Ctrl+Shift+E)"
                aria-label="Owner access"
              >
                <Lock className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://g.dev/tushar1906"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span className="text-[10px] text-emerald-400 font-mono font-bold">G</span>
              <span>Google Dev</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
