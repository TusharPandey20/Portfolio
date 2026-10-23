import { useState, useEffect } from 'react';
import { UserProfile } from '../types/portfolio';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  profile: UserProfile;
  initialMessage?: string;
  onOpenCustomizer: () => void;
  onOpenResume: () => void;
}

export default function ContactSection({
  profile,
  initialMessage,
  onOpenCustomizer,
  onOpenResume,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [company, setCompany] = useState('');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  const [budget, setBudget] = useState('$3,000 — $7,500');
  const [message, setMessage] = useState(initialMessage || '');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Freelance Project Inquiry from ${name || 'Prospective Client'} (${company || 'Company'})`
    );
    const body = encodeURIComponent(
      `Hello Tushar,\n\n` +
        `Name: ${name}\n` +
        `Email: ${clientEmail}\n` +
        `Company: ${company}\n` +
        `Target Timeline: ${timeline}\n` +
        `Estimated Budget: ${budget}\n\n` +
        `Project Scope & Details:\n${message}\n\n` +
        `Sent via your portfolio client pitch inquiry.`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Client Pitch & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
                Initiate Project
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Let's Discuss Your Project & Deliver Results
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have a finalized specification ready for sprint execution or need advice
                on software architecture and tech stack choices, I'm ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white">{profile.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Connect on LinkedIn
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white">View →</span>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Repositories</div>
                    <div className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                      github.com/TusharPandey20
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white">View →</span>
              </a>

              <a
                href="https://g.dev/tushar1906"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 font-bold font-mono text-xs">
                    G
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Google Developer Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      g.dev/tushar1906
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white">View →</span>
              </a>
            </div>

            {/* Response time guarantee */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400">
              <strong className="text-slate-200">Guaranteed Response Time:</strong> Within 12 hours
              on all business days. Video calls available over Google Meet / Zoom.
            </div>
          </div>

          {/* Right Column: Interactive Client Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">Send Client Project Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to automatically open your preferred email client with a
                formatted project brief.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Thank you! Your email client was triggered. If it didn't open automatically, you
                    can email me directly at <strong>{profile.email}</strong>.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Name / Representative *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Labs"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Urgent (1-2 weeks)">Urgent (1–2 weeks)</option>
                      <option value="Within 2-4 weeks">Within 2–4 weeks</option>
                      <option value="1-2 months">1–2 months</option>
                      <option value="Flexible / Retainer">Flexible / Ongoing Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Under $3,000">Under $3,000</option>
                      <option value="$3,000 — $7,500">$3,000 — $7,500</option>
                      <option value="$7,500 — $15,000">$7,500 — $15,000</option>
                      <option value="$15,000+">$15,000+ / Dedicated Team</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Project Overview & Technical Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe what you're building, desired deliverables, existing tech stack, and goals..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-[12px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Project Inquiry to Tushar Pandey</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
