import { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, CheckCircle } from 'lucide-react';

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
  isOwner?: boolean;
  onInquireWithProject: (projectTitle: string) => void;
  onOpenCustomizer?: () => void;
}

export default function ProjectsShowcase({
  projects,
  isOwner = false,
  onInquireWithProject,
  onOpenCustomizer,
}: ProjectsShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
              Featured Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Production Work & Architecture Case Studies
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">Click any project for deep-dive technical specs</span>
            <a
              href="https://github.com/TusharPandey20"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>github.com/TusharPandey20</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* LinkedIn Profile Projects Sync Banner (Owner Only) */}
        {isOwner && (
          <div className="mb-8 p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <span className="font-bold text-xs">in</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-white">
                  Owner Tool: Sync & Edit Profile Projects
                </div>
                <div className="text-[11px] text-slate-400">
                  Visible to you only. Update, add, or remove projects anytime.
                </div>
              </div>
            </div>

            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Sync / Edit Projects
              </button>
            )}
          </div>
        )}

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Hero Project (Span 12 or 7) */}
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div className={isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8' : 'p-6 sm:p-7'}>
                  {/* Image Container */}
                  <div
                    className={`aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 relative ${
                      isFeatured ? 'lg:col-span-7' : 'w-full mb-6'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs font-semibold text-white flex items-center gap-1">
                        <span>Click to inspect architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`flex flex-col justify-between ${isFeatured ? 'lg:col-span-5' : ''}`}>
                    <div>
                      {/* Unboxed Metadata (NO pills) */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <span>{project.clientType}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-blue-400 font-medium">{project.role}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Primary Outcome Highlight */}
                      {project.keyOutcomes && project.keyOutcomes.length > 0 && (
                        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 mb-4">
                          <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Client Impact</span>
                          </div>
                          <p className="text-xs text-slate-200">{project.keyOutcomes[0]}</p>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack list (clean unboxed text) */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="font-mono text-slate-300 bg-slate-800/60 px-2 py-0.5 rounded text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireWithProject}
      />
    </section>
  );
}
