export interface StackGroup {
  title: string;
  code: string;
  items: string[];
}

export interface CompanyRole {
  id: string;
  role: string;
  period: string;
  duration: string;
  contract: string;
  current?: boolean;
  points: string[];
}

export interface CompanyExperience {
  id: string;
  org: string;
  totalDuration: string;
  location: string;
  modality: string;
  roles: CompanyRole[];
}

export interface EducationProgram {
  id: string;
  title: string;
  field?: string;
  period: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
}

export interface EducationInstitution {
  id: string;
  org: string;
  programs: EducationProgram[];
}

/** Static contact info — not locale-dependent */
export const profile = {
  name: 'Tomás Esquivel',
  fullName: 'Tomás Esquivel Perdomo',
  email: 'tomyesqper@gmail.com',
  phone: '+57 319 250 2531',
  github: 'https://github.com/TomyEsqper',
  linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-esquivel-perdomo-46047b300/',
};
