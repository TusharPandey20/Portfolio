import { EducationItem, CertificationItem } from '../types/portfolio';
import { GraduationCap, Award, CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

interface EducationCertificationsProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export default function EducationCertifications({
  education,
  certifications,
}: EducationCertificationsProps) {
  return (
    <section id="education" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studies & Formal Education */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
                Academic Foundations
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Studies & Computer Science Degree
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Strong theoretical underpinning in algorithms, systems programming, and software
                engineering principles.
              </p>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium mb-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>University Degree</span>
                      </div>
                      <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                      <div className="text-sm font-semibold text-slate-300">{edu.field}</div>
                      <div className="text-xs text-slate-400 mt-1">{edu.institution}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-slate-400 block">{edu.period}</span>
                      {edu.score && (
                        <span className="text-xs font-semibold text-emerald-400 block mt-1">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Academic Focus & Projects:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {edu.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Coursework */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-mono text-slate-300 bg-slate-800/60 px-2 py-0.5 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
                Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Professional Certifications & Validations
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Continual mastery in cloud infrastructure, algorithmic problem solving, and modern
                software design frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                      {cert.title}
                    </h3>

                    <div className="text-xs text-slate-400 mb-3">
                      <span>Issued by: </span>
                      <strong className="text-slate-300">{cert.issuer}</strong>
                    </div>

                    {cert.credentialId && (
                      <div className="text-[11px] font-mono text-slate-500 mb-3">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800/60">
                    <div className="text-[11px] text-slate-400 font-medium mb-1.5">
                      Validated Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono text-slate-300 bg-slate-800/70 px-1.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Confidence Callout */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>All certifications and credentials can be verified upon client request.</span>
              <a
                href="https://www.linkedin.com/in/tushar-pandey-482405228"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 shrink-0"
              >
                <span>Verify on LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
