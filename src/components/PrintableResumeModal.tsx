import { useEffect } from 'react';
import {
  UserProfile,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillItem,
  ProjectItem,
} from '../types/portfolio';
import { X, Printer, Download, Mail, Linkedin, Github, Globe } from 'lucide-react';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
}

export default function PrintableResumeModal({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  certifications,
  skills,
  projects,
}: PrintableResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden my-6 max-h-[95vh] flex flex-col">
        {/* Modal Top Bar (no-print) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Client Pitch Resume & CV Document
            </span>
            <span className="text-xs text-slate-400">· Ready for PDF export / printing</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-slate-800 bg-white">
          {/* Header */}
          <div className="border-b border-slate-300 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
                {profile.name}
              </h1>
              <span className="text-sm font-semibold text-blue-700">
                {profile.headline}
              </span>
            </div>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{profile.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                <span>LinkedIn: /in/tushar-pandey-482405228</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>GitHub: github.com/TusharPandey20</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Google Dev: g.dev/tushar1906</span>
              </span>
              <span>·</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Executive Technical Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Core Technical Competencies (from Profile & Certifications)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <strong className="block text-[11px] text-slate-900 font-semibold mb-1">
                  .NET & Languages
                </strong>
                <p className="text-[11px] text-slate-600">
                  C#, .NET, .NET Framework, ASP.NET Web API, Java, Python, Kotlin
                </p>
              </div>
              <div>
                <strong className="block text-[11px] text-slate-900 font-semibold mb-1">
                  Desktop & UI
                </strong>
                <p className="text-[11px] text-slate-600">
                  WPF, WinForms, DevExpress Controls, MVVM, Audio Video Tools
                </p>
              </div>
              <div>
                <strong className="block text-[11px] text-slate-900 font-semibold mb-1">
                  Mobile & Android
                </strong>
                <p className="text-[11px] text-slate-600">
                  Android SDK, Android Studio, Java for Android, Mobile Architecture
                </p>
              </div>
              <div>
                <strong className="block text-[11px] text-slate-900 font-semibold mb-1">
                  Databases & Architecture
                </strong>
                <p className="text-[11px] text-slate-600">
                  MySQL, SQL, DSA, Software Infrastructure & Design, Git, Azure
                </p>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              Work Experience & Client Engagements
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="font-bold text-slate-950 text-sm">{exp.role}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-1.5">
                    {exp.company} · {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Studies */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Formal Education & Studies
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-950">
                    {edu.degree} in {edu.field}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">{edu.period}</span>
                </div>
                <div className="text-slate-600 text-[11px] mb-1">
                  {edu.institution} · {edu.score}
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong>Coursework:</strong> {edu.coursework.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Industry Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-2 border border-slate-200 rounded text-[11px]">
                  <strong className="text-slate-950 block">{c.title}</strong>
                  <span className="text-slate-500">
                    {c.issuer} · {c.issueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
