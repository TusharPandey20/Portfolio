export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'ai_tools';
  level: number; // 1-100
  years: number;
  highlight?: string;
  icon?: string;
  source?: 'linkedin' | 'custom';
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  clientType: string;
  role: string;
  duration: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails: string[];
  source?: 'linkedin' | 'custom';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'freelance' | 'fulltime' | 'contract';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  score?: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface FreelanceServiceItem {
  id: string;
  title: string;
  timeline: string;
  idealFor: string;
  deliverables: string[];
  features: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  content: string;
  projectDelivered: string;
  rating: number;
}

export interface UserProfile {
  name: string;
  headline: string;
  email: string;
  phone?: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  avatarUrl: string;
  summary: string;
  freelanceAvailability: string;
  hourlyRate: string;
  experienceYears: number;
  projectsCompleted: number;
  clientSatisfaction: string;
}
