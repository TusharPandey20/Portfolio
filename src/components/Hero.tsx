import { UserProfile } from '../types/portfolio';
import { Mail, Github, Linkedin, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface HeroProps {
  profile: UserProfile;
  onOpenEstimator: () => void;
  onOpenResume: () => void;
}

export default function Hero({ profile, onOpenEstimator, onOpenResume }: HeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4">
              <span>Sr. Software Developer</span>
              <span aria-hidden="true">·</span>
              <span>Europa Worldwide Group</span>
              <span aria-hidden="true">·</span>
              <span>Freelance Technical Consultant</span>
            </div>

            {/* Headline with balanced text wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance mb-6">
              Building scalable .NET systems, high-performance desktop apps & native Android solutions.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{profile.name}</strong>. Senior
              Software Developer with 4+ years of experience building scalable applications,
              distributed systems, and broadcast tools. Skilled in <strong className="text-white">C#, .NET, WPF, WinForms, ASP.NET Web API</strong>, and <strong className="text-white">Android (Java/Kotlin)</strong> with clean architecture and performance optimization.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md hover:shadow-blue-500/25 transition-all duration-150 flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Calculate Project Scope & Cost</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                View Profile Projects
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors underline underline-offset-4 whitespace-nowrap cursor-pointer"
              >
                Client Pitch Resume
              </button>
            </div>

            {/* Verified Profile Links & Contact Quick Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="font-medium text-slate-400">Verified Profiles:</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                title="View GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub (TusharPandey20)</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href="https://g.dev/tushar1906"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                title="View Google Developer Profile"
              >
                <span className="text-emerald-400 font-bold font-mono">G.DEV</span>
                <span>g.dev/tushar1906</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container with Studio Portrait & Unboxed Metadata */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 mb-5 border border-slate-700/50">
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name} - Senior Software Developer`}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Clean unboxed metadata (strictly zero pills) */}
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Current Status</span>
                  <span className="text-emerald-400 font-medium">Accepting New Client Projects</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Engagement</span>
                  <span className="text-slate-200 font-medium">Fixed Milestone or Sprint Retainer</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Timezone</span>
                  <span className="text-slate-200 font-medium">IST (UTC +5:30) · 4+ Hrs Overlap with US/EU</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Core Specialty</span>
                  <span className="text-slate-200 font-medium">C# · .NET · WPF · WinForms · Android · MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip below hero split (Mandatory Spatial Math rule) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Production Experience</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {profile.experienceYears}+ Years
            </div>
            <p className="text-xs text-slate-400 mt-1">Full-stack & distributed systems</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Projects Shipped</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {profile.projectsCompleted}+ Deployed
            </div>
            <p className="text-xs text-slate-400 mt-1">Enterprise apps, MVPs & APIs</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Client Delivery Rate</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100%
            </div>
            <p className="text-xs text-slate-400 mt-1">On-time milestone delivery</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Performance Target</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              &lt; 100ms
            </div>
            <p className="text-xs text-slate-400 mt-1">API latency & Core Web Vitals 95+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
