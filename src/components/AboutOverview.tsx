import { UserProfile } from '../types/portfolio';
import { CheckCircle2, Layers, Cpu, Compass, GitMerge } from 'lucide-react';

interface AboutOverviewProps {
  profile: UserProfile;
}

export default function AboutOverview({ profile }: AboutOverviewProps) {
  const pillars = [
    {
      title: 'Architecture Before Code',
      icon: Compass,
      description:
        'I map data flows, edge cases, schema relationships, and API contracts before writing code, preventing costly technical rewrites downstream.',
    },
    {
      title: 'Cross-Platform & Full-Stack Mastery',
      icon: Layers,
      description:
        'Equally adept at architecting high-performance C# / .NET enterprise services and desktop tools (WPF, WinForms, DevExpress) as well as native mobile Android applications (Java, Kotlin).',
    },
    {
      title: 'Performance & Security by Default',
      icon: Cpu,
      description:
        'Every client endpoint adheres to strict rate limiting, schema validation (Zod), indexed queries, sub-100ms response targets, and OWASP security standards.',
    },
    {
      title: 'Client Transparency & Predictability',
      icon: GitMerge,
      description:
        'Weekly video sprint reviews, live staging environments, clear Git PRs, and async Slack/email updates ensure you are never in the dark about progress.',
    },
  ];

  return (
    <section id="background" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Natural Editorial Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Professional Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            A software engineer built for clients who value reliability, speed, and clean code.
          </h2>
          <p className="text-slate-300 leading-relaxed text-base">
            {profile.summary}
          </p>
        </div>

        {/* 2-Column Split: The Client Pitch narrative & The 4 Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Background & Freelancing Narrative */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <span>The Freelance Advantage for Your Project</span>
              </h3>
              <p className="mb-4">
                When you hire an agency, your budget gets diluted into account managers, overhead, and
                junior developers who are learning on your dime. When you work with me:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Direct Senior Execution:</strong> The engineer who
                    architects your system is the one writing the code and testing every corner case.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Clean Architecture & Zero Tech Debt:</strong> Modular, strictly
                    typed C#/.NET, Java, and modern web code adhering to SOLID principles and unit testing for seamless long-term maintenance.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Complete IP & Deployment Ownership:</strong> You
                    receive full repository access, Docker configurations, infrastructure-as-code, and
                    turnkey documentation upon completion.
                  </span>
                </li>
              </ul>
            </div>

            {/* Client Guarantee Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-blue-950/30 border border-blue-900/40">
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-1">
                Client Milestone Guarantee
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">
                100% Alignment Before Payment Release
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All fixed-scope client engagements are structured in transparent milestones (e.g. 30%
                kickoff, 40% functional MVP staging, 30% production deployment & handover). Milestone
                funds are tied to verifiable feature acceptance criteria agreed in advance.
              </p>
            </div>
          </div>

          {/* Right: The 4 Engineering Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
