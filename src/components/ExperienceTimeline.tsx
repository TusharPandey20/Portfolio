import { ExperienceItem } from '../types/portfolio';
import { Briefcase, CheckCircle2, MapPin, Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Career Trajectory & Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Professional Work Experience & Client Delivery
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            A proven record of designing, building, and deploying mission-critical software systems
            across independent freelance consulting and engineering roles.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="capitalize">{exp.type} Engagement</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-300">
                    {exp.company}
                  </div>
                </div>

                {/* Metadata strip (clean unboxed text) */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Technical Deliverables & Impact:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack list */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-medium mr-1">Stack:</span>
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono text-slate-300 bg-slate-800/50 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
