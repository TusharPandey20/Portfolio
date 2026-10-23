import { useState, useMemo } from 'react';
import { UserProfile } from '../types/portfolio';
import {
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Copy,
  Check,
  Send,
  Sparkles,
} from 'lucide-react';

interface ProjectEstimatorProps {
  profile: UserProfile;
  initialService?: string;
  onSendToContact: (scopeDetails: string) => void;
}

interface FeatureOption {
  id: string;
  name: string;
  description: string;
  baseHours: number;
}

export default function ProjectEstimator({
  profile,
  initialService,
  onSendToContact,
}: ProjectEstimatorProps) {
  const [projectType, setProjectType] = useState<string>(
    initialService || 'Native Android Mobile Application (Java/Kotlin)'
  );

  const [speed, setSpeed] = useState<'standard' | 'accelerated' | 'phased'>('standard');
  const [copiedProposal, setCopiedProposal] = useState(false);
  const [showProposalView, setShowProposalView] = useState(false);

  const featureOptions: FeatureOption[] = [
    {
      id: 'mobile-ui',
      name: 'Native Android UI & Layouts (Java/Kotlin)',
      description: 'Material Design, custom views, responsive phone/tablet layouts',
      baseHours: 25,
    },
    {
      id: 'desktop-wpf',
      name: 'WPF / WinForms Desktop UI & DevExpress Grids',
      description: 'XAML styling, complex data binding, broadcast overlay panels',
      baseHours: 30,
    },
    {
      id: 'dotnet-api',
      name: 'ASP.NET Web API & RESTful Endpoints',
      description: 'High-throughput .NET backend, clean architecture, middleware',
      baseHours: 25,
    },
    {
      id: 'mysql-db',
      name: 'MySQL / SQL Relational Database Architecture',
      description: 'Schema modeling, ACID transactions, stored procedures, indexing',
      baseHours: 20,
    },
    {
      id: 'auth-security',
      name: 'Authentication, RBAC & Cloud Hosting',
      description: 'JWT authorization, role permissions, Azure cloud setup',
      baseHours: 20,
    },
    {
      id: 'media-stream',
      name: 'Audio/Video & Hardware Device Integration',
      description: 'Real-time broadcast graphics, low-latency streaming pipelines',
      baseHours: 35,
    },
    {
      id: 'testing-qa',
      name: 'Automated Unit Testing & Code Review Audit',
      description: 'NUnit, xUnit, regression testing, CI/CD pipeline setup',
      baseHours: 15,
    },
  ];

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'mobile-ui',
    'dotnet-api',
    'mysql-db',
    'auth-security',
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base hours by project type
  const baseTypeHours = useMemo(() => {
    switch (projectType) {
      case 'Native Android Mobile Application (Java/Kotlin)':
        return 55;
      case 'Custom Desktop Application (.NET, C#, WPF, WinForms)':
        return 60;
      case 'Web Application with Full Backend & Hosting (ASP.NET API)':
        return 50;
      case 'Enterprise System Design, Code Review & Optimization':
        return 35;
      default:
        return 45;
    }
  }, [projectType]);

  const totalFeatureHours = useMemo(() => {
    return featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.baseHours, 0);
  }, [selectedFeatures]);

  const totalHours = baseTypeHours + totalFeatureHours;

  const estimatedWeeks = useMemo(() => {
    if (speed === 'accelerated') {
      return Math.max(2, Math.round(totalHours / 35));
    } else if (speed === 'standard') {
      return Math.max(3, Math.round(totalHours / 25));
    } else {
      return Math.max(4, Math.round(totalHours / 18));
    }
  }, [totalHours, speed]);

  const estimatedMinBudget = Math.round((totalHours * 45) / 100) * 100;
  const estimatedMaxBudget = Math.round((totalHours * 65) / 100) * 100;

  // Generate formal proposal markdown/text
  const proposalText = useMemo(() => {
    const featureNames = featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => `• ${f.name} (${f.description})`)
      .join('\n');

    return `PROJECT PROPOSAL & ARCHITECTURE SCOPE
Prepared by: ${profile.name} (${profile.email})
Client Project: ${projectType}
Estimated Timeline: ~${estimatedWeeks} Weeks (${speed} velocity)
Total Estimated Engineering: ~${totalHours} Hours
Indicative Investment Range: $${estimatedMinBudget.toLocaleString()} — $${estimatedMaxBudget.toLocaleString()} USD (or Fixed-Milestone Structure)

1. CORE SCOPE & INCLUDED CAPABILITIES:
${featureNames}

2. MILESTONE BREAKDOWN & PAYMENT GATES:
• Milestone 1 (25%): Architecture Blueprint, Data Schema, and API Contracts
• Milestone 2 (40%): Core Backend Microservices & Functional Frontend Staging
• Milestone 3 (25%): Third-Party Integrations, Payment Webhooks & Testing
• Milestone 4 (10%): Production Cloud Deployment, Documentation & 30-Day Warranty

3. GUARANTEES:
• 100% IP & Source Code Ownership transferred to client upon milestone sign-off.
• Weekly video demonstration & private Git repository staging access.
• Strict sub-100ms P99 latency target and clean TypeScript architecture.`;
  }, [
    profile,
    projectType,
    estimatedWeeks,
    speed,
    totalHours,
    estimatedMinBudget,
    estimatedMaxBudget,
    selectedFeatures,
    featureOptions,
  ]);

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(proposalText);
    setCopiedProposal(true);
    setTimeout(() => setCopiedProposal(false), 2500);
  };

  return (
    <section id="estimator" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Client Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Project Scope, Timeline & Cost Estimator
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Configure your technical requirements to generate an instant estimate of milestones,
            hours, and indicative budget. You can instantly export this as a formal project pitch
            proposal.
          </p>
        </div>

        {/* 2-Column Estimator Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type Selector */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Native Android Mobile Application (Java/Kotlin)',
                  'Custom Desktop Application (.NET, C#, WPF, WinForms)',
                  'Web Application with Full Backend & Hosting (ASP.NET API)',
                  'Enterprise System Design, Code Review & Optimization',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`p-3 text-left rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      projectType === type
                        ? 'bg-blue-950/60 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Key Architecture & Feature Modules */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  2. Architectural Modules & Capabilities
                </label>
                <span className="text-xs font-mono text-slate-500">
                  {selectedFeatures.length} Selected
                </span>
              </div>

              <div className="space-y-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl border flex items-start justify-between gap-3 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-slate-850 bg-slate-900/90 border-blue-500/60'
                          : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'border-slate-700 bg-slate-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{feat.name}</div>
                          <div className="text-[11px] text-slate-400">{feat.description}</div>
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 shrink-0">
                        +{feat.baseHours} hrs
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Speed */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                3. Delivery Velocity & Speed
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard Delivery', note: '~25 hrs/wk' },
                  { id: 'accelerated', label: 'Accelerated Sprint', note: '~35-40 hrs/wk' },
                  { id: 'phased', label: 'Phased Part-Time', note: '~15-20 hrs/wk' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSpeed(s.id as any)}
                    className={`p-3 rounded-xl text-left border transition-colors cursor-pointer ${
                      speed === s.id
                        ? 'bg-blue-950/60 border-blue-500 text-white'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{s.label}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{s.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Estimate Card & Pitch Proposal */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c111e] border border-blue-900/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Live Scope Summary
                </span>
                <span className="text-xs text-emerald-400 font-medium">Ready for Pitch</span>
              </div>

              {/* Big Metrics Display */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estimated Timeline</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    ~{estimatedWeeks} Weeks
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Total ~{totalHours} engineering hrs
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Indicative Range</span>
                  </div>
                  <div className="text-xl font-extrabold text-white font-mono tabular-nums">
                    ${estimatedMinBudget.toLocaleString()} — ${estimatedMaxBudget.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Fixed milestone gates</div>
                </div>
              </div>

              {/* Milestone Phases preview */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phased Milestone Deliverables:
                </div>
                <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="p-2 rounded bg-slate-900/50 border border-slate-800 flex justify-between">
                    <span>M1: Blueprint & Architecture</span>
                    <span className="text-blue-400">Week 1</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/50 border border-slate-800 flex justify-between">
                    <span>M2: Core Backend & UI Staging</span>
                    <span className="text-blue-400">
                      Week 2–{Math.max(2, Math.round(estimatedWeeks * 0.6))}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/50 border border-slate-800 flex justify-between">
                    <span>M3: Integrations & Testing</span>
                    <span className="text-blue-400">Week {Math.max(3, estimatedWeeks - 1)}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/50 border border-slate-800 flex justify-between">
                    <span>M4: Cloud Launch & Handover</span>
                    <span className="text-emerald-400">Final Week</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowProposalView(!showProposalView)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>
                    {showProposalView ? 'Hide Formal Proposal' : 'View Formal Pitch Proposal Text'}
                  </span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleCopyProposal}
                    className="py-2.5 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedProposal ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Proposal</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSendToContact(proposalText)}
                    className="py-2.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire with Scope</span>
                  </button>
                </div>
              </div>

              {/* Expandable Proposal Text View */}
              {showProposalView && (
                <div className="pt-4 border-t border-slate-800 animate-in fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Ready-to-Sign Proposal Draft
                    </span>
                    <button
                      onClick={handleCopyProposal}
                      className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                    {proposalText}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
