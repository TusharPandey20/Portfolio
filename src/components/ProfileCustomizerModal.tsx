import { useState, useEffect } from 'react';
import { UserProfile, SkillItem, ProjectItem } from '../types/portfolio';
import { PortfolioDataStore } from '../data/portfolioData';
import { getOwnerPin, setOwnerPin } from './OwnerAuthModal';
import {
  X,
  Save,
  RotateCcw,
  Check,
  Linkedin,
  Plus,
  Trash2,
  Code2,
  FolderGit2,
  UserCheck,
  AlertCircle,
  KeyRound,
  Shield,
} from 'lucide-react';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataStore: PortfolioDataStore;
  onSave: (updatedData: PortfolioDataStore) => void;
  onReset: () => void;
}

export default function ProfileCustomizerModal({
  isOpen,
  onClose,
  dataStore,
  onSave,
  onReset,
}: ProfileCustomizerModalProps) {
  const [activeTab, setActiveTab] = useState<'linkedin' | 'projects' | 'skills' | 'profile'>('linkedin');
  const [profile, setProfile] = useState<UserProfile>(dataStore.profile);
  const [projects, setProjects] = useState<ProjectItem[]>(dataStore.projects);
  const [skills, setSkills] = useState<SkillItem[]>(dataStore.skills);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [ownerPinInput, setOwnerPinInput] = useState(getOwnerPin());

  // Quick LinkedIn paste inputs
  const [pastedSkillsText, setPastedSkillsText] = useState('');
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectTagline, setNewProjectTagline] = useState('');
  const [newProjectRole, setNewProjectRole] = useState('Full-Stack Engineer');
  const [newProjectTech, setNewProjectTech] = useState('React, TypeScript, Node.js');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectOutcome, setNewProjectOutcome] = useState('');
  const [newProjectGithub, setNewProjectGithub] = useState('https://github.com/TusharPandey20');

  useEffect(() => {
    setProfile(dataStore.profile);
    setProjects(dataStore.projects);
    setSkills(dataStore.skills);
  }, [dataStore]);

  if (!isOpen) return null;

  // Handle parsing pasted LinkedIn skills
  const handleApplyPastedSkills = () => {
    if (!pastedSkillsText.trim()) return;

    // Split by comma, bullet, or newline
    const rawList = pastedSkillsText
      .split(/[,\n•·\t]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 1);

    if (rawList.length === 0) return;

    const newSkills: SkillItem[] = rawList.map((skillName) => {
      // Auto-categorize based on common tech names
      const lower = skillName.toLowerCase();
      let category: SkillItem['category'] = 'frontend';

      if (
        lower.includes('node') ||
        lower.includes('express') ||
        lower.includes('python') ||
        lower.includes('api') ||
        lower.includes('backend') ||
        lower.includes('java') ||
        lower.includes('c++') ||
        lower.includes('c#') ||
        lower.includes('graphql')
      ) {
        category = 'backend';
      } else if (
        lower.includes('sql') ||
        lower.includes('mongo') ||
        lower.includes('postgres') ||
        lower.includes('redis') ||
        lower.includes('database') ||
        lower.includes('prisma')
      ) {
        category = 'database';
      } else if (
        lower.includes('aws') ||
        lower.includes('cloud') ||
        lower.includes('docker') ||
        lower.includes('devops') ||
        lower.includes('git') ||
        lower.includes('ci/cd') ||
        lower.includes('linux')
      ) {
        category = 'cloud';
      } else if (
        lower.includes('ai') ||
        lower.includes('ml') ||
        lower.includes('algorithm') ||
        lower.includes('test') ||
        lower.includes('data structure')
      ) {
        category = 'ai_tools';
      }

      return {
        name: skillName,
        category,
        level: 90,
        years: 3,
        highlight: 'Verified from LinkedIn profile',
        source: 'linkedin',
      };
    });

    setSkills(newSkills);
    setPastedSkillsText('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  // Add new LinkedIn project
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle.trim()) return;

    const techArray = newProjectTech
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const project: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProjectTitle,
      tagline: newProjectTagline || 'Production software implementation',
      clientType: 'LinkedIn Featured Project',
      role: newProjectRole || 'Full-Stack Developer',
      duration: '4-6 Weeks',
      image: '/src/assets/images/project_cloud_platform_1792655324893.jpg',
      description: newProjectDesc || 'Engineered scalable system with modern web technologies.',
      challenge: 'Client required scalable architecture, low latency, and robust code structure.',
      solution: 'Developed modular full-stack application using modern frameworks and best practices.',
      keyOutcomes: newProjectOutcome
        ? [newProjectOutcome]
        : ['Successfully delivered on schedule with high reliability and zero regressions'],
      techStack: techArray.length > 0 ? techArray : ['React', 'TypeScript', 'Node.js'],
      githubUrl: newProjectGithub || 'https://github.com/TusharPandey20',
      architectureDetails: [
        'Modular architectural design with strict TypeScript types',
        'Optimized data queries and state management pipeline',
        'End-to-end testing and CI/CD deployment configuration',
      ],
      source: 'linkedin',
    };

    setProjects([project, ...projects]);
    setNewProjectTitle('');
    setNewProjectTagline('');
    setNewProjectDesc('');
    setNewProjectOutcome('');
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleRemoveSkill = (name: string) => {
    setSkills(skills.filter((s) => s.name !== name));
  };

  const handleSave = () => {
    if (ownerPinInput.trim()) {
      setOwnerPin(ownerPinInput.trim());
    }
    onSave({
      ...dataStore,
      profile,
      projects,
      skills,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0d121f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">LinkedIn Profile & Portfolio Sync</h2>
              <p className="text-[11px] text-slate-400">
                Easily match the portfolio 100% to your LinkedIn profile projects & skills
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-slate-900/40 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('linkedin')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'linkedin'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>Sync LinkedIn Skills & Projects</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'projects'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Manage Projects ({projects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'skills'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Manage Skills ({skills.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'profile'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile Details</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {savedSuccess && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-lg text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Changes saved and applied immediately!</span>
            </div>
          )}

          {/* TAB 1: LinkedIn Quick Sync */}
          {activeTab === 'linkedin' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <AlertCircle className="w-4 h-4 text-blue-400" />
                  <span>Direct LinkedIn Profile Import</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  LinkedIn restricts third-party scrapers from reading personal projects and skills
                  behind its login wall. You can paste your exact list of skills and projects below to
                  instantly sync them so <strong>only your official LinkedIn items</strong> are
                  displayed!
                </p>
              </div>

              {/* Paste Skills */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                <label className="text-xs font-bold text-white block">
                  Paste Your LinkedIn Technical Skills:
                </label>
                <p className="text-[11px] text-slate-400">
                  Copy the skills from your LinkedIn profile (separated by commas or newlines) and
                  paste here:
                </p>
                <textarea
                  rows={3}
                  value={pastedSkillsText}
                  onChange={(e) => setPastedSkillsText(e.target.value)}
                  placeholder="e.g. JavaScript, React.js, Node.js, TypeScript, Express.js, MongoDB, SQL, Git, Python, HTML5, CSS3, REST APIs, Tailwind CSS"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-[11px] focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleApplyPastedSkills}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Replace Portfolio Skills with These LinkedIn Skills</span>
                </button>
              </div>

              {/* Add LinkedIn Project */}
              <form
                onSubmit={handleAddProject}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-white block">
                    Add Project From Your LinkedIn Profile:
                  </label>
                  <span className="text-[11px] text-blue-400 font-mono">
                    Currently: {projects.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Project Name *</label>
                    <input
                      type="text"
                      required
                      value={newProjectTitle}
                      onChange={(e) => setNewProjectTitle(e.target.value)}
                      placeholder="e.g. Distributed Task Scheduler / Web Application"
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      Role / Contribution
                    </label>
                    <input
                      type="text"
                      value={newProjectRole}
                      onChange={(e) => setNewProjectRole(e.target.value)}
                      placeholder="e.g. Full-Stack Developer"
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    Technologies / Skills Used (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newProjectTech}
                    onChange={(e) => setNewProjectTech(e.target.value)}
                    placeholder="e.g. React, Node.js, Express, MongoDB, Tailwind"
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    Project Description (as written on LinkedIn)
                  </label>
                  <textarea
                    rows={2}
                    value={newProjectDesc}
                    onChange={(e) => setNewProjectDesc(e.target.value)}
                    placeholder="Briefly describe what this project does and your work on it..."
                    className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-[11px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      Key Result / Client Impact
                    </label>
                    <input
                      type="text"
                      value={newProjectOutcome}
                      onChange={(e) => setNewProjectOutcome(e.target.value)}
                      placeholder="e.g. Improved query speeds by 40% / Deployed to 500+ users"
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      GitHub or Demo URL
                    </label>
                    <input
                      type="text"
                      value={newProjectGithub}
                      onChange={(e) => setNewProjectGithub(e.target.value)}
                      placeholder="https://github.com/TusharPandey20"
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add This Project to Portfolio</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: Manage Existing Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Active Portfolio Projects:</span>
                <span className="text-slate-400 text-[11px]">{projects.length} project(s)</span>
              </div>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-white text-xs">{proj.title}</div>
                      <div className="text-[11px] text-slate-400">{proj.description}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {proj.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-800 text-slate-300 font-mono text-[10px] px-1.5 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveProject(proj.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                      title="Remove Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Manage Skills */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Current Technical Skills:</span>
                <span className="text-slate-400 text-[11px]">{skills.length} skills</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200 text-xs"
                  >
                    <span>{skill.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.name)}
                      className="text-slate-500 hover:text-rose-400 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Profile Details */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Headline on Portfolio
                </label>
                <input
                  type="text"
                  value={profile.headline}
                  onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Profile Picture / Avatar
                </label>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                    <img
                      src={profile.avatarUrl}
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setProfile({
                          ...profile,
                          avatarUrl: '/src/assets/images/tushar_portrait_edited.jpg',
                        })
                      }
                      className={`px-2.5 py-1 rounded border text-[11px] cursor-pointer ${
                        profile.avatarUrl === '/src/assets/images/tushar_portrait_edited.jpg'
                          ? 'bg-blue-600 border-blue-500 text-white font-medium'
                          : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      Authentic Edited Portrait (Recommended)
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setProfile({
                          ...profile,
                          avatarUrl: '/src/assets/images/tushar_portrait_pro.png',
                        })
                      }
                      className={`px-2.5 py-1 rounded border text-[11px] cursor-pointer ${
                        profile.avatarUrl === '/src/assets/images/tushar_portrait_pro.png'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      Studio Render
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setProfile({
                          ...profile,
                          avatarUrl: '/src/assets/images/tushar_portrait_1792655323113.jpg',
                        })
                      }
                      className={`px-2.5 py-1 rounded border text-[11px] cursor-pointer ${
                        profile.avatarUrl === '/src/assets/images/tushar_portrait_1792655323113.jpg'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      Original Camera Photo
                    </button>
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.avatarUrl}
                  onChange={(e) => setProfile({ ...profile, avatarUrl: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-[11px] font-mono"
                  placeholder="Avatar image path"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-semibold block mb-1">
                    Hourly / Retainer Rate
                  </label>
                  <input
                    type="text"
                    value={profile.hourlyRate}
                    onChange={(e) => setProfile({ ...profile, hourlyRate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">Summary / Bio</label>
                <textarea
                  rows={3}
                  value={profile.summary}
                  onChange={(e) => setProfile({ ...profile, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>

              {/* Owner Security PIN Setting */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Owner Passcode (Protects Customization Mode)</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Only you can open this customizer. Clients visiting your published portfolio cannot see or access it.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Owner PIN</label>
                    <input
                      type="password"
                      value={ownerPinInput}
                      onChange={(e) => setOwnerPinInput(e.target.value)}
                      placeholder="e.g. 2026"
                      className="w-40 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center tracking-widest text-xs"
                    />
                  </div>
                  <div className="text-[10px] text-slate-500 pt-3">
                    Shortcut to open from anywhere: <code className="text-slate-300">Ctrl + Shift + E</code>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/80 sticky bottom-0">
          <button
            type="button"
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Apply to Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
