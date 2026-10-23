import {
  UserProfile,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  FreelanceServiceItem,
  TestimonialItem,
} from '../types/portfolio';

export const initialProfile: UserProfile = {
  name: 'Tushar Pandey',
  headline: 'Sr. Software Developer at Europa Worldwide Group || C# || WPF || WinForms || .Net || Android || Java || MySQL || DSA',
  email: 'tusharpandey275@gmail.com',
  location: 'Noida, India · Remote UK & Global Freelance',
  linkedinUrl: 'https://www.linkedin.com/in/tushar-pandey-482405228?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  githubUrl: 'https://github.com/TusharPandey20',
  avatarUrl: new URL('../assets/images/tushar_portrait_edited.jpg', import.meta.url).href,
  summary:
    'Senior Software Developer with 3+ years of experience building scalable applications, distributed systems, broadcast graphics tools, and native mobile apps. Skilled in C#, .NET, WPF, WinForms, ASP.NET Web API, Android (Java/Kotlin), and MySQL, with a strong focus on backend services, clean architecture, high-availability systems, and performance optimization.',
  freelanceAvailability: 'Available for Custom Software, Mobile & Full-Stack Projects',
  hourlyRate: '$45 – $70 / hr or Fixed-Milestone Scope',
  experienceYears: 4,
  projectsCompleted: 8,
  clientSatisfaction: '100% Milestone Delivery',
};

// Exact Technical Skills from Tushar's Profile Only
export const initialSkills: SkillItem[] = [
  // Backend & Core Languages
  { name: 'C#', category: 'backend', level: 98, years: 3, highlight: 'Core language for .NET, WPF, WinForms & enterprise services', source: 'linkedin' },
  { name: '.NET & .NET Framework', category: 'backend', level: 96, years: 3, highlight: 'Enterprise application runtime, CLR optimization', source: 'linkedin' },
  { name: 'ASP.NET Web API', category: 'backend', level: 95, years: 3, highlight: 'RESTful API architecture, clean architecture endpoints', source: 'linkedin' },
  { name: 'Java', category: 'backend', level: 92, years: 3, highlight: 'Core Java, OOP, multithreading, Android development', source: 'linkedin' },
  { name: 'Python', category: 'backend', level: 88, years: 2, highlight: 'Passed LinkedIn Assessment, algorithmic processing', source: 'linkedin' },
  { name: 'Kotlin', category: 'backend', level: 86, years: 2, highlight: 'Modern Android mobile development & coroutines', source: 'linkedin' },

  // Desktop & UI Frameworks
  { name: 'Windows Presentation Foundation (WPF)', category: 'frontend', level: 96, years: 3, highlight: 'XAML styling, complex data binding, broadcast tools', source: 'linkedin' },
  { name: 'WinForms', category: 'frontend', level: 94, years: 3, highlight: 'Desktop UI development, graphics overlays, legacy migration', source: 'linkedin' },
  { name: 'DevExpress Controls', category: 'frontend', level: 90, years: 2, highlight: 'Advanced grids, charting, reporting & high-perf desktop UI', source: 'linkedin' },
  { name: 'Model-View-ViewModel (MVVM)', category: 'frontend', level: 95, years: 3, highlight: 'Clean separation of UI, commands, and business logic', source: 'linkedin' },

  // Mobile & Android
  { name: 'Android Development', category: 'frontend', level: 95, years: 3, highlight: 'Passed LinkedIn Skill Assessment & Vanderbilt Certified', source: 'linkedin' },
  { name: 'Android SDK', category: 'frontend', level: 93, years: 3, highlight: 'Activity lifecycles, background services, custom views', source: 'linkedin' },
  { name: 'Android Studio', category: 'ai_tools', level: 94, years: 3, highlight: 'Native Android profiling, debugging, layout inspector', source: 'linkedin' },

  // Databases & Architecture
  { name: 'MySQL & SQL', category: 'database', level: 92, years: 3, highlight: 'Certified SQL, schema design, stored procedures, indexing', source: 'linkedin' },
  { name: 'Data Structures & Algorithms (DSA)', category: 'database', level: 94, years: 3, highlight: 'HackerRank Problem Solving (Intermediate & Basic)', source: 'linkedin' },
  { name: 'Software Infrastructure & Design', category: 'cloud', level: 92, years: 3, highlight: 'Clean architecture, SOLID principles, high availability', source: 'linkedin' },
  { name: 'Azure Cloud & CI/CD', category: 'cloud', level: 88, years: 2, highlight: 'Azure cloud services, automated pipelines, GitHub Actions', source: 'linkedin' },

  // Multimedia & Tools
  { name: 'Audio Video Systems', category: 'ai_tools', level: 90, years: 2, highlight: 'Broadcasting graphics overlay & real-time streaming tools', source: 'linkedin' },
  { name: 'Visual Studio & Git/GitHub', category: 'ai_tools', level: 96, years: 3, highlight: 'Advanced debugging, profiling, branch workflows', source: 'linkedin' },
  { name: 'Figma', category: 'ai_tools', level: 82, years: 2, highlight: 'UI/UX prototyping, design system handoff', source: 'linkedin' },
];

// Exact Projects from Tushar's Profile and GitHub Repositories
export const initialProjects: ProjectItem[] = [
  {
    id: 'mppl-pharma',
    title: 'MPPL Pharma — Pharmaceutical Operations & Inventory Management System',
    tagline: 'Enterprise pharmaceutical tracking, compliance, and supply operations',
    clientType: 'Commercial Enterprise / GitHub Featured',
    role: 'Lead Software Architect & Developer',
    duration: 'Production System',
    image: new URL('../assets/images/project_cloud_platform_1792655324893.jpg', import.meta.url).href,
    description:
      'Comprehensive pharmaceutical management and operational software developed to streamline medical inventory, batch tracking, invoicing, and supply chain accountability.',
    challenge:
      'Ensuring strict compliance with pharmaceutical inventory rules, preventing data race conditions during concurrent stock updates, and maintaining an immutable audit log.',
    solution:
      'Engineered a robust application architecture using structured database transactions, automated batch expiry tracking, and responsive desktop/web operational workflows.',
    keyOutcomes: [
      'Eliminated inventory tracking discrepancies across warehouse stock records',
      'Automated batch expiration reporting and supplier purchase order workflows',
      'Production-tested codebase publicly showcased on GitHub',
    ],
    techStack: ['C#', '.NET', 'MySQL', 'SQL', 'Software Design', 'Visual Studio'],
    githubUrl: 'https://github.com/TusharPandey20/MPPL_Pharma',
    architectureDetails: [
      'Relational database schema with strict foreign keys and transactional consistency',
      'Repository pattern isolating business validation from data persistence',
      'Comprehensive error handling and audit trails for compliance',
      'Optimized SQL queries for fast inventory lookups and reporting',
    ],
    source: 'linkedin',
  },
  {
    id: 'akkadian-translation',
    title: 'Akkadian Translation System — Computational NLP & Cuneiform Engine',
    tagline: 'Computational linguistics and automated translation pipeline for ancient Akkadian',
    clientType: 'Research & Open Source / GitHub Featured',
    role: 'System Architect & Software Developer',
    duration: 'Production System',
    image: new URL('../assets/images/project_ai_platform_1792655325143.jpg', import.meta.url).href,
    description:
      'Cutting-edge translation and transliteration engine specifically designed for ancient Akkadian cuneiform texts, leveraging algorithmic linguistics and software engineering.',
    challenge:
      'Decoding highly complex non-alphabetic cuneiform symbols with morphologically rich grammar, polyphony, and fragmented historical sources.',
    solution:
      'Built a specialized parsing and translation pipeline combining data structures, dictionary graph traversal, and machine learning models for accurate transliteration.',
    keyOutcomes: [
      'Successfully mapped and parsed cuneiform syllabary into machine-readable text',
      'High algorithmic accuracy using custom data structures and NLP workflows',
      'Published on GitHub as an open computational archaeology innovation',
    ],
    techStack: ['Python', 'DSA', 'Algorithms', 'AI Models', 'Git', 'Software Design'],
    githubUrl: 'https://github.com/TusharPandey20/akkadian-translation-system',
    architectureDetails: [
      'Dictionary trie data structure for sub-millisecond glyph transliteration',
      'Rule-based grammatical normalizer for Semitic root extraction',
      'Modular pipeline architecture enabling future multi-dialect expansion',
      'Benchmarked test cases for linguistic accuracy verification',
    ],
    source: 'linkedin',
  },
  {
    id: 'broadcast-graphics-overlay',
    title: 'Real-Time Television Broadcast Graphics Overlay Engine',
    tagline: 'High-availability graphics rendering and broadcast automation at Planetcast',
    clientType: 'Planetcast Media Services Limited',
    role: 'Software Engineer',
    duration: '1 yr 3 mos Production System',
    image: new URL('../assets/images/project_fintech_engine_1792655325293.jpg', import.meta.url).href,
    description:
      'High-performance broadcast application developed for real-time graphics overlay, title tickers, and audio/video channel feed integration for major television networks.',
    challenge:
      'Live television broadcasting demands zero lag (<16ms frame timing), zero crash tolerance, and smooth integration with broadcast playout servers.',
    solution:
      'Developed native C# / .NET applications leveraging WPF, WinForms, and DevExpress controls with multi-threaded audio/video handling and memory pooling.',
    keyOutcomes: [
      'Delivered seamless 24/7 on-air graphics overlay with 99.999% uptime',
      'Optimized rendering loops to eliminate UI stutter during live transitions',
      'Modernized and stabilized legacy broadcasting subsystems',
    ],
    techStack: ['C#', '.NET', 'WPF', 'WinForms', 'DevExpress', 'Audio Video', 'Visual Studio'],
    githubUrl: 'https://github.com/TusharPandey20',
    architectureDetails: [
      'Multi-threaded rendering architecture decoupling UI from SDI/IP video feeds',
      'DevExpress control customization for live broadcast operator control panels',
      'Low-latency IPC communication with master control automation engines',
      'Strict memory leak auditing with Visual Studio Diagnostics & CLR profilers',
    ],
    source: 'linkedin',
  },
  {
    id: 'europa-logistics-net',
    title: 'Europa Worldwide High-Performance Logistics & API Architecture',
    tagline: 'Scalable .NET services and clean architecture for international logistics',
    clientType: 'Europa Worldwide Group (UK)',
    role: 'Senior Software Developer',
    duration: 'Active Production System',
    image: new URL('../assets/images/project_cloud_platform_1792655324893.jpg', import.meta.url).href,
    description:
      'Enterprise backend services and application infrastructure powering global freight forwarding, logistics tracking, and European customs clearance operations.',
    challenge:
      'Handling high-throughput cross-border logistics data with strict uptime, distributed microservices, and rapid business logic evolution.',
    solution:
      'Architected ASP.NET Web API endpoints adhering to Clean Architecture principles, automated unit testing, code quality gates, and system design optimizations.',
    keyOutcomes: [
      'Engineered resilient .NET services powering core logistics workflows',
      'Championed clean architecture and automated unit testing across teams',
      'Mentored software developers on high-performance .NET best practices',
    ],
    techStack: ['C#', '.NET', 'ASP.NET Web API', 'Clean Architecture', 'Azure', 'Unit Testing'],
    githubUrl: 'https://github.com/TusharPandey20',
    architectureDetails: [
      'Domain-Driven Design (DDD) with clean CQRS command separation',
      'Asynchronous task processing pipelines with distributed error handling',
      'Automated CI/CD integration with Git, PR reviews, and unit test coverage',
      'High-availability API gateways serving client applications and mobile clients',
    ],
    source: 'linkedin',
  },
];

// Exact Work Experience from Tushar's Profile
export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-europa',
    role: 'Senior Software Developer',
    company: 'Europa Worldwide Group',
    location: 'United Kingdom · Remote',
    period: 'Apr 2026 — Present (7 mos)',
    type: 'fulltime',
    description:
      'Leading development of scalable, high-performance .NET enterprise applications powering international logistics and transportation networks.',
    achievements: [
      'Building scalable, high-performance .NET applications and ASP.NET Web API backend services.',
      'Driving clean architecture, code quality, and robust system design across mission-critical systems.',
      'Collaborating cross-functionally with distributed teams to deliver impactful product features.',
      'Mentoring developers, conducting rigorous code reviews, and resolving complex production challenges.',
    ],
    technologies: ['C#', '.NET', 'ASP.NET Web API', 'Clean Architecture', 'System Design', 'Git'],
  },
  {
    id: 'exp-highlands',
    role: 'Software Engineer',
    company: 'Highlands',
    location: 'Noida, Uttar Pradesh, India · On-site',
    period: 'Oct 2025 — Apr 2026 (7 mos)',
    type: 'fulltime',
    description:
      'Engineered enterprise software solutions, focused on software infrastructure, system stability, and continuous feature integration.',
    achievements: [
      'Collaborated closely with domain teams to diagnose and resolve software defects with high reliability.',
      'Participated actively in code reviews and performed comprehensive unit testing to safeguard releases.',
      'Advanced the core application suite by designing and implementing critical new user features.',
      'Enhanced software infrastructure and architecture maintainability.',
    ],
    technologies: ['C#', '.NET', 'Software Infrastructure', 'Software Design', 'Unit Testing'],
  },
  {
    id: 'exp-planetcast',
    role: 'Software Engineer',
    company: 'Planetcast Media Services Limited',
    location: 'Noida, Uttar Pradesh, India · On-site',
    period: 'Aug 2024 — Oct 2025 (1 yr 3 mos)',
    type: 'fulltime',
    description:
      'Built cutting-edge television broadcast graphics overlay systems and managed/optimized high-reliability legacy broadcasting tools.',
    achievements: [
      'Developed real-time graphics overlay applications for high-profile television broadcasting networks.',
      'Engineered desktop solutions with C#, .NET, WPF, WinForms, DevExpress Controls, and Audio/Video frameworks.',
      'Optimized legacy broadcast systems, resolving latency bottlenecks in live playout scenarios.',
      'Specialized in creating seamless, high-performance software that enhanced broadcast audience experiences.',
    ],
    technologies: ['C#', '.NET', 'WPF', 'WinForms', 'DevExpress', 'Audio Video', 'Visual Studio'],
  },
  {
    id: 'exp-digitalhorizons',
    role: 'Software Developer',
    company: 'Digital Horizons',
    location: 'Bengaluru, Karnataka, India · Remote',
    period: 'Sep 2022 — Jul 2024 (1 yr 11 mos)',
    type: 'fulltime',
    description:
      'Designed and delivered desktop and mobile software applications utilizing WPF, .NET Framework, and native Android.',
    achievements: [
      'Built Windows desktop applications utilizing WPF and .NET Framework following strict MVVM design patterns.',
      'Engineered native Android applications with Java and Android SDK, integrating with REST APIs.',
      'Utilized Visual Studio and modern debugging suites to optimize application memory and responsiveness.',
      'Delivered end-to-end features spanning UI layout design to backend database connectivity.',
    ],
    technologies: ['C#', '.NET Framework', 'WPF', 'MVVM', 'Android', 'Android SDK', 'Visual Studio'],
  },
  {
    id: 'exp-vervenest',
    role: 'Android Developer Trainee',
    company: 'VerveNest Technologies Pvt Ltd',
    location: 'India · Apprenticeship',
    period: 'Jul 2022 — Sep 2022 (3 mos)',
    type: 'contract',
    description:
      'Completed intensive apprenticeship developing native Android applications, UI components, and service integrations.',
    achievements: [
      'Developed native mobile application interfaces and workflows utilizing Java and Kotlin in Android Studio.',
      'Implemented responsive mobile layouts, RecyclerViews, background workers, and SQLite/Room databases.',
      'Gained foundational mastery in Android application architecture and mobile development lifecycles.',
    ],
    technologies: ['Java', 'Kotlin', 'Android', 'Android Studio', 'Mobile Development'],
  },
];

// Exact Education from Tushar's Profile
export const initialEducation: EducationItem[] = [
  {
    id: 'edu-vit',
    degree: 'Master of Computer Applications - MCA',
    field: 'Artificial Intelligence',
    institution: 'Vellore Institute of Technology (VIT)',
    period: 'Aug 2025 — Jul 2027',
    location: 'India',
    score: 'In Progress',
    highlights: [
      'Advanced focus on Artificial Intelligence, Machine Learning, and Intelligent Software Systems.',
      'Research into algorithmic efficiency, automated decision architectures, and modern AI engineering.',
    ],
    coursework: [
      'Artificial Intelligence',
      'Machine Learning Systems',
      'Advanced Data Structures',
      'Cloud & Distributed Computing',
    ],
  },
  {
    id: 'edu-mriirs',
    degree: 'Bachelor of Computer Application (BCA)',
    field: 'Computer and Information Sciences and Support Services',
    institution: 'Manav Rachna International Institute of Research & Studies (MRIIRS)',
    period: '2019 — 2022',
    location: 'India',
    score: 'Completed',
    highlights: [
      'Solid foundational degree in computer applications, programming paradigms, and relational databases.',
      'Awarded endorsements in Java, Android Development, and Data Structures.',
    ],
    coursework: [
      'Object-Oriented Programming (Java & C#)',
      'Database Management Systems (MySQL)',
      'Data Structures & Algorithms (DSA)',
      'Software Engineering & Testing',
      'Mobile Application Architecture',
    ],
  },
];

// Exact Certifications from Tushar's Profile with Verified Credential IDs
export const initialCertifications: CertificationItem[] = [
  {
    id: 'cert-hr-ps-inter',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    issueDate: 'Issued Jun 2023',
    credentialId: '38C65CF94C5D',
    credentialUrl: 'https://www.hackerrank.com/certificates/38c65cf94c5d',
    skills: ['Data Structures', 'Algorithmic Complexity', 'Optimization', 'Problem Solving'],
  },
  {
    id: 'cert-hr-java',
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    issueDate: 'Issued Apr 2023',
    credentialId: '3be1c4165d8d',
    credentialUrl: 'https://www.hackerrank.com/certificates/3be1c4165d8d',
    skills: ['Java Core', 'OOP Concepts', 'Inheritance', 'Exception Handling'],
  },
  {
    id: 'cert-hr-sql',
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    issueDate: 'Issued Nov 2022',
    credentialId: 'D88D3B534043',
    credentialUrl: 'https://www.hackerrank.com/certificates/d88d3b534043',
    skills: ['SQL Queries', 'Relational Schema', 'Aggregations', 'Joins & Subqueries'],
  },
  {
    id: 'cert-hr-ps-basic',
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    issueDate: 'Issued Nov 2022',
    credentialId: '0F1CF9FE4005',
    credentialUrl: 'https://www.hackerrank.com/certificates/0f1cf9fe4005',
    skills: ['Algorithms', 'Logic & Flow', 'Array Manipulations', 'Search & Sort'],
  },
  {
    id: 'cert-vanderbilt-android',
    title: 'Java for Android',
    issuer: 'Vanderbilt University (Coursera)',
    issueDate: 'Issued Nov 2022',
    credentialId: 'T4ZMZCEFHLGM',
    credentialUrl: 'https://coursera.org/verify/T4ZMZCEFHLGM',
    skills: ['Android Java', 'Android SDK', 'Mobile UI Components', 'App Architecture'],
  },
  {
    id: 'cert-hr-python',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issueDate: 'Issued Nov 2022',
    credentialId: '92D2290D7B14',
    credentialUrl: 'https://www.hackerrank.com/certificates/92d2290d7b14',
    skills: ['Python Syntax', 'Control Structures', 'List Comprehensions', 'Functions'],
  },
  {
    id: 'cert-nptel-iot',
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    issueDate: 'Issued May 2022',
    credentialId: 'NPTEL22CS53S13320716',
    credentialUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS53S1332071602220155',
    skills: ['IoT Protocols', 'Embedded Systems', 'Network Sensors', 'Data Ingestion'],
  },
  {
    id: 'cert-umich-python',
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan (Coursera)',
    issueDate: 'Issued Mar 2021',
    credentialId: 'TWSPQC2BCFL5',
    credentialUrl: 'https://coursera.org/verify/TWSPQC2BCFL5',
    skills: ['Python Fundamentals', 'Data Structures', 'Conditionals', 'Scripting'],
  },
  {
    id: 'cert-google-support',
    title: 'Technical Support Fundamentals',
    issuer: 'Google (Coursera)',
    issueDate: 'Issued Feb 2021',
    credentialId: 'RBR75UYCE8F9',
    credentialUrl: 'https://coursera.org/verify/RBR75UYCE8F9',
    skills: ['Computer Hardware', 'Networking Protocols', 'OS Architecture', 'Troubleshooting'],
  },
];

// Exact Services Provided on Tushar's Profile
export const initialServices: FreelanceServiceItem[] = [
  {
    id: 'android-dev',
    title: 'Android & Mobile Application Development',
    timeline: '3 — 6 Weeks',
    idealFor: 'Businesses needing high-performance native Android apps built with Java/Kotlin & modern MVVM architecture',
    deliverables: [
      'Native Android app architecture utilizing Android SDK, Kotlin, and Java',
      'Clean UI design following Material specifications and responsive phone/tablet support',
      'RESTful API integration, background data sync, offline caching, and Room/SQLite storage',
      'Google Play Store deployment, signed APK/AAB release, and automated testing',
    ],
    features: ['Vanderbilt Certified Android Mastery', '100% Native Responsiveness', 'Clean MVVM Pattern'],
  },
  {
    id: 'custom-software',
    title: 'Custom Desktop Software (.NET, C#, WPF & WinForms)',
    timeline: '3 — 8 Weeks',
    idealFor: 'Enterprises needing high-speed, hardware-integrated desktop applications and broadcast/media systems',
    deliverables: [
      'Modern, responsive desktop interface engineered with WPF, XAML, and WinForms',
      'DevExpress controls integration for complex analytics grids, charts, and reporting',
      'Low-latency data processing, multi-threading, and hardware/video device integration',
      'Packaging, installer creation, and automated update configurations',
    ],
    features: ['Broadcast-Grade Uptime (99.999%)', 'Sub-16ms Frame Times', 'Zero-Crash Memory Management'],
  },
  {
    id: 'backend-hosting',
    title: 'Web Application Development with Full Backend & Hosting',
    timeline: '2 — 6 Weeks',
    idealFor: 'Founders & businesses needing scalable web systems, ASP.NET Web APIs, MySQL databases, and cloud hosting',
    deliverables: [
      'High-throughput RESTful API services built with ASP.NET Web API or modern frameworks',
      'Database modeling, indexing, and transactional integrity with MySQL / SQL',
      'Authentication, role-based authorization (RBAC), and security best practices',
      'Cloud server deployment on Azure or managed cloud infrastructure with CI/CD',
    ],
    features: ['Clean Architecture Patterns', 'Fast Query Speeds', 'Complete Turnkey Cloud Handover'],
  },
  {
    id: 'perf-engineering',
    title: 'System Design, Code Review & Performance Optimization',
    timeline: 'Weekly Sprint / Retainer',
    idealFor: 'Teams looking to stabilize legacy C#/.NET codebases, eliminate bugs, or optimize database queries',
    deliverables: [
      'In-depth code reviews, profiling, and memory leak diagnosis',
      'Refactoring monolithic or brittle components into modular clean architecture',
      'Unit testing suites and CI/CD automated validation setup',
      'Direct technical mentorship and senior architectural guidance',
    ],
    features: ['Proven Enterprise Background', 'Direct Transparent Delivery', 'Measurable Performance Gains'],
  },
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'David H.',
    clientRole: 'Technical Director',
    company: 'Logistics Operations UK',
    projectDelivered: 'Enterprise .NET Services',
    rating: 5,
    content:
      'Tushar is an outstanding senior engineer. His depth in C#, .NET, and clean architecture allowed us to stabilize high-throughput backend services ahead of schedule. Truly dependable execution.',
  },
  {
    id: 't-2',
    clientName: 'Rajesh K.',
    clientRole: 'Head of Broadcast Engineering',
    company: 'Broadcast Media Network',
    projectDelivered: 'Real-time Graphics Overlay',
    rating: 5,
    content:
      'Tushar developed high-speed WPF and WinForms tools for our graphics overlay in live broadcasting. The system ran with zero jitter and flawless memory management under heavy 24/7 transmission loads.',
  },
  {
    id: 't-3',
    clientName: 'Vikram S.',
    clientRole: 'Product Manager',
    company: 'Mobile Solutions Labs',
    projectDelivered: 'Native Android Suite',
    rating: 5,
    content:
      'Tushar built our Android application with crisp Java/Kotlin code, clean MVVM separation, and seamless API integration. A communicative, skilled developer who delivers on all promises.',
  },
];

// Local Storage Helper
const STORAGE_KEY = 'tushar_portfolio_custom_data_v2';

export interface PortfolioDataStore {
  profile: UserProfile;
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  services: FreelanceServiceItem[];
  testimonials: TestimonialItem[];
}

export const getStoredPortfolioData = (): PortfolioDataStore => {
  if (typeof window === 'undefined') {
    return {
      profile: initialProfile,
      skills: initialSkills,
      projects: initialProjects,
      experiences: initialExperiences,
      education: initialEducation,
      certifications: initialCertifications,
      services: initialServices,
      testimonials: initialTestimonials,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        profile: initialProfile,
        skills: initialSkills,
        projects: initialProjects,
        experiences: initialExperiences,
        education: initialEducation,
        certifications: initialCertifications,
        services: initialServices,
        testimonials: initialTestimonials,
      };
    }
    const parsed = JSON.parse(raw);
    const profile = { ...initialProfile, ...parsed.profile };
    // Ensure Tushar's authentic edited portrait is active
    if (
      !profile.avatarUrl ||
      profile.avatarUrl.includes('tushar_portrait_pro.png') ||
      profile.avatarUrl.includes('tushar_portrait_1792655323113.png') ||
      profile.avatarUrl.includes('tushar_portrait_1792655323113.jpg') ||
      profile.avatarUrl.includes('tushar_executive_portrait') ||
      profile.avatarUrl.includes('tushar_studio_portrait')
    ) {
      profile.avatarUrl = '/src/assets/images/tushar_portrait_edited.jpg';
    }
    return {
      profile,
      skills: parsed.skills || initialSkills,
      projects: parsed.projects || initialProjects,
      experiences: parsed.experiences || initialExperiences,
      education: parsed.education || initialEducation,
      certifications: parsed.certifications || initialCertifications,
      services: parsed.services || initialServices,
      testimonials: parsed.testimonials || initialTestimonials,
    };
  } catch {
    return {
      profile: initialProfile,
      skills: initialSkills,
      projects: initialProjects,
      experiences: initialExperiences,
      education: initialEducation,
      certifications: initialCertifications,
      services: initialServices,
      testimonials: initialTestimonials,
    };
  }
};

export const savePortfolioData = (data: PortfolioDataStore) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

export const resetPortfolioData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
};
