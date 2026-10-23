import { useState } from 'react';
import { SkillItem } from '../types/portfolio';
import { Code2, Server, Cloud, Database, Sparkles } from 'lucide-react';

interface SkillsMatrixProps {
  skills: SkillItem[];
  isOwner?: boolean;
  onOpenCustomizer?: () => void;
}

export default function SkillsMatrix({
  skills,
  isOwner = false,
  onOpenCustomizer,
}: SkillsMatrixProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Databases & Cache', icon: Database },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'ai_tools', label: 'AI & Engineering Tools', icon: Sparkles },
  ];

  const filteredSkills =
    activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Key Technical Skills & Tooling Matrix
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Production-tested stack honed across 4+ years of building resilient client architectures,
            real-time backends, and responsive user interfaces.
          </p>
        </div>

        {/* Interactive Segmented Filter Control & LinkedIn Sync Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl max-w-fit overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {isOwner && onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:text-white bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/60 rounded-lg transition-colors whitespace-nowrap cursor-pointer self-start sm:self-auto"
            >
              <span className="text-amber-400 font-bold">in</span>
              <span>Sync Skills (Owner)</span>
            </button>
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono tabular-nums text-slate-400">
                    {skill.years} {skill.years === 1 ? 'yr' : 'yrs'}
                  </span>
                </div>

                {skill.highlight && (
                  <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                    {skill.highlight}
                  </p>
                )}
              </div>

              {/* Minimalist Proficiency Bar */}
              <div className="space-y-1 pt-2 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Proficiency</span>
                  <span className="font-mono tabular-nums text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client-facing Architecture note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/30 border border-slate-800/70 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Have a specific tech stack requirement?</span>
            <span className="text-slate-400">
              I adapt rapidly to existing client codebases, design systems, and cloud providers.
            </span>
          </div>
          <a
            href="https://github.com/TusharPandey20"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium whitespace-nowrap"
          >
            Explore GitHub Repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
