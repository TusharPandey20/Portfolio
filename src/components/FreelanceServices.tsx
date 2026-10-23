import { FreelanceServiceItem, TestimonialItem } from '../types/portfolio';
import { Check, Star, ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';

interface FreelanceServicesProps {
  services: FreelanceServiceItem[];
  testimonials: TestimonialItem[];
  onSelectService: (serviceTitle: string) => void;
}

export default function FreelanceServices({
  services,
  testimonials,
  onSelectService,
}: FreelanceServicesProps) {
  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Scope Blueprint',
      desc: 'We analyze your requirements, define user stories, map database architecture, and agree on fixed milestones.',
    },
    {
      step: '02',
      title: 'Weekly Staging & Sprints',
      desc: 'You receive access to a private GitHub repo and a live staging URL updated weekly with demo recordings.',
    },
    {
      step: '03',
      title: 'QA, Hardening & Security',
      desc: 'Rigorous integration testing, edge-case validation, rate limiting, and performance audits before release.',
    },
    {
      step: '04',
      title: 'Turnkey Handover & Support',
      desc: 'Zero-downtime deployment, infrastructure setup, comprehensive documentation, and 30 days post-launch warranty.',
    },
  ];

  return (
    <section id="services" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Client Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Freelance Services & Engagement Models
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Tailored engagement structures suited for rapid startup MVPs, enterprise microservices,
            or ongoing technical advisory.
          </p>
        </div>

        {/* 4-Step Working Process strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {workflowSteps.map((ws, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 relative group hover:border-slate-700 transition-colors"
            >
              <div className="text-blue-400 font-mono text-sm font-bold mb-2">{ws.step}.</div>
              <h3 className="text-sm font-bold text-white mb-1.5">{ws.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-mono text-blue-400">
                    Typical Duration: {service.timeline}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Fixed Milestone</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-300 mb-5 italic">{service.idealFor}</p>

                {/* Deliverables list */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Footer CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>30-Day Post-Launch Warranty</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Select & Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-1">
              Client Feedback
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              What Founders & Engineering Leaders Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 italic">
                    "{test.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <div className="text-xs font-bold text-white">{test.clientName}</div>
                  <div className="text-[11px] text-slate-400">
                    {test.clientRole} · {test.company}
                  </div>
                  <div className="text-[10px] text-blue-400 font-mono mt-1">
                    Delivered: {test.projectDelivered}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
