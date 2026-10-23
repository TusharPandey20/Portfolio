import { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d121f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{project.clientType}</span>
            <span aria-hidden="true">·</span>
            <span>{project.duration}</span>
            <span aria-hidden="true">·</span>
            <span className="text-blue-400">{project.role}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Hero Banner / Project Image */}
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 font-medium">{project.tagline}</p>
          </div>

          {/* Tech Stack (unboxed text with subtle separator) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 py-3 border-y border-slate-800/80">
            <span className="font-semibold text-slate-400">Technologies Used:</span>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-white font-mono bg-slate-800/80 px-2 py-0.5 rounded text-xs">
                  {tech}
                </span>
                {idx < project.techStack.length - 1 && (
                  <span className="text-slate-600">/</span>
                )}
              </span>
            ))}
          </div>

          {/* 2-Column: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-rose-400">
                The Client Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-emerald-400">
                Architectural Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-4">
              Measurable Business & Technical Outcomes
            </h3>
            <ul className="space-y-2.5">
              {project.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture Breakdown */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3">
              Deep-Dive System Architecture Breakdown
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-900/30 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
                >
                  <span className="text-blue-400 font-mono font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-slate-800 bg-slate-900/60 sticky bottom-0">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            <span>Need a Similar Architecture? Request Pitch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
