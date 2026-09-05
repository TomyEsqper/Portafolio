import { CertificationIssuer } from '../../data/certifications';
import {
  CompanyExperience,
  EducationInstitution,
  StackGroup,
} from '../../data/profile';

export type Lang = 'es' | 'en';

export interface LocalizedProject {
  name: string;
  kind: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
}

export interface LocalizedRecognition {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  kind?: string;
}

export interface LocaleProfile {
  role: string;
  location: string;
  english: string;
  summary: string;
}

export interface LocaleUi {
  skip: string;
  menu: string;
  navMain: string;
  langSwitch: string;
  nav: {
    about: string;
    certifications: string;
    recognitions: string;
    stack: string;
    projects: string;
    experience: string;
    education: string;
    architecture: string;
    contact: string;
  };
  hero: {
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    certsDivider: string;
    loading: string;
  };
  stack: {
    label: string;
    title: string;
    lead: string;
  };
  projects: {
    label: string;
    title: string;
    lead: string;
  };
  experience: {
    label: string;
    title: string;
    lead: string;
    ariaLabel: string;
    currentBadge: string;
  };
  education: {
    label: string;
    title: string;
    lead: string;
    ariaLabel: string;
    currentBadge: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
  };
  architecture: {
    label: string;
    title: string;
    lead: string;
    flow: string;
    points: { title: string; body: string }[];
  };
  certifications: {
    lead: string;
    hint: string;
    close: string;
    issued: string;
    credentialId: string;
    imageFallback: string;
    certAlt: string;
  };
  recognitions: {
    label: string;
    title: string;
    lead: string;
    previewLabel: string;
    placeholder: string;
  };
  footer: {
    tagline: string;
  };
}

export interface LocaleContent {
  meta: { title: string; description: string };
  profile: LocaleProfile;
  ui: LocaleUi;
  stackGroups: StackGroup[];
  recognitions: LocalizedRecognition[];
  projects: LocalizedProject[];
  experience: CompanyExperience[];
  education: EducationInstitution[];
  certifications: CertificationIssuer[];
}
