import { certImage } from '../../../data/certifications';
import { LocaleContent } from '../i18n.types';

export const en: LocaleContent = {
  meta: {
    title: 'Tomás Esquivel — Backend .NET',
    description:
      'Tomás Esquivel Perdomo — Backend developer specializing in .NET, Clean Architecture, and microservices.',
  },
  profile: {
    role: 'Backend Developer · .NET Specialist',
    location: 'Ibagué, Colombia',
    english: 'English B2',
    summary:
      'I design APIs and microservices in the .NET ecosystem with Clean Architecture, SOLID, and a focus on maintainable systems — not just CRUD.',
  },
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    navMain: 'Main',
    langSwitch: 'Language',
    nav: {
      about: 'About',
      certifications: 'Certifications',
      recognitions: 'Recognitions',
      stack: 'Stack',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
    },
    about: {
      label: '01 — About',
      title: 'Backend with architectural intent',
      p1: 'I am a backend developer focused on the .NET ecosystem. I build REST APIs and microservices using Clean Architecture, SOLID, and Clean Code — so every design decision adds long-term flexibility and value.',
      p2: 'Curious and self-taught: I strengthen architecture, API design, and data optimization while exploring cloud (AWS) and emerging technologies. I care about clean, impactful, sustainable software.',
      certsDivider: 'Licenses & credentials',
      loading: 'Loading certifications…',
    },
    stack: {
      label: '03 — Stack',
      title: 'Tools I build with',
      lead: 'From domain to infrastructure: C#, APIs, data, and a professional delivery workflow.',
    },
    projects: {
      label: '04 — Projects',
      title: 'Work that speaks',
      lead: '.NET microservices and a real job platform — architecture, data, and delivery.',
    },
    experience: {
      label: '05 — Career',
      title: 'Work experience',
      lead: 'Grouped by company — role progression within each organization.',
      ariaLabel: 'Experience by company',
      currentBadge: 'Current',
    },
    education: {
      label: '06 — Education',
      title: 'Higher education',
      lead: 'Academic background supporting the backend profile.',
      ariaLabel: 'Academic education',
      currentBadge: 'In progress',
    },
    contact: {
      label: '07 — Contact',
      title: "Let's talk about your next system",
      lead: 'Open to backend roles, .NET projects, and conversations about architecture.',
    },
    certifications: {
      lead: '{{count}} certificates · They scroll on their own. Click to select one.',
      hint: 'Drag to explore · Click for details',
      close: 'Close',
      issued: 'Issued',
      credentialId: 'Credential ID',
      imageFallback: 'Image at',
      certAlt: 'Certificate:',
    },
    recognitions: {
      label: '02 — Recognitions',
      title: 'Milestones worth showing',
      lead: 'Awards and recognitions that reflect applied learning and visible results.',
      previewLabel: 'Preview',
      placeholder: 'Image pending upload',
    },
    footer: {
      tagline: 'Backend · .NET',
    },
  },
  recognitions: [
    {
      id: 'programaton-cun',
      title: 'CUN Programming Contest',
      issuer: 'Unified National Corporation of Higher Education — CUN',
      date: 'Nov 2024',
      kind: 'First place · Intermediate level',
      description:
        'Recognition for achieving first place in the intermediate-level programming contest, showing consistency, logic, and problem-solving under competition conditions.',
    },
    {
      id: 'sena-meaningful-learning',
      title:
        'Recognition of science, technology, and innovation through experiential methodologies to achieve meaningful learning',
      issuer: 'National Learning Service — SENA',
      date: 'Dec 2020',
      kind: 'Academic recognition',
      description:
        'Recognition focused on scientific thinking, innovation, and the practical application of knowledge through experiential learning methodologies.',
      image: '/certificates/sena-meaningful-learning.png',
    },
  ],
  stackGroups: [
    {
      title: 'Backend',
      code: '01',
      items: ['C#', '.NET 8 / ASP.NET Core', 'REST APIs', 'JWT', 'Swagger / OpenAPI'],
    },
    {
      title: 'Architecture',
      code: '02',
      items: ['Clean Architecture', 'Hexagonal', 'SOLID', 'Microservices', 'API Gateway'],
    },
    {
      title: 'Data',
      code: '03',
      items: ['MySQL', 'EF Core', 'Dapper', 'ADO.NET', 'LINQ'],
    },
    {
      title: 'Workflow',
      code: '04',
      items: ['Git / GitHub', 'Git Flow', 'Conventional Commits', 'Docker', 'Linux'],
    },
  ],
  projects: [
    {
      name: 'CunDropShipping',
      kind: 'Microservices ecosystem',
      period: 'Aug 2025 — Present',
      description:
        'Educational e-commerce platform in .NET: decoupled gateway, catalog, and sales services, focused on scalability and clear contracts between services.',
      highlights: [
        'API Gateway as single entry point with JWT validation',
        'Persistence with EF Core, Dapper, and ADO.NET',
        'Docker containerization and Git Flow workflow',
      ],
      stack: ['C#', '.NET', 'MySQL', 'Docker', 'JWT'],
      links: [
        { label: 'Gateway', href: 'https://github.com/TomyEsqper/Gateway-Service' },
        { label: 'Catalog', href: 'https://github.com/TomyEsqper/Catalog-Service' },
        { label: 'Sales', href: 'https://github.com/TomyEsqper/Sales-Service' },
      ],
    },
    {
      name: 'MyJob',
      kind: 'Micro-jobs platform',
      period: 'Jan 2024 — Jun 2025',
      description:
        'Labor marketplace connecting people and employers: listings, applications, roles, and chat. Laravel backend focused on persistence and business logic.',
      highlights: [
        'Differentiated roles (employee, employer, admin)',
        'Search filters and memberships',
        'SENA project with MVP delivery',
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      links: [
        { label: 'Repo', href: 'https://github.com/TomyEsqper/MyJob' },
        { label: 'Site', href: 'https://myjob.solutions' },
      ],
    },
  ],
  experience: [
    {
      id: 'phidias',
      org: 'Phidias S.A.S.',
      totalDuration: '1 yr 2 mos',
      location: 'Cali, Valle del Cauca, Colombia',
      modality: 'Remote',
      roles: [
        {
          id: 'phidias-cs-jr',
          role: 'Customer Success Jr.',
          period: 'Jan 2026 — Present',
          duration: '8 mos',
          contract: 'Full-time',
          current: true,
          points: [
            'Customer support operations',
            'Chat and email management with fast response times',
            'Final review of requested changes before closure',
          ],
        },
        {
          id: 'phidias-aprendiz',
          role: 'Intern',
          period: 'Jul 2025 — Jan 2026',
          duration: '7 mos',
          contract: 'Internship',
          points: [
            'Record organization and technical documentation delivery',
            'Incident replication to identify configuration issues or user errors',
            'Support in customer service operations',
          ],
        },
      ],
    },
    {
      id: 'comfenalco',
      org: 'Comfenalco Tolima',
      totalDuration: '1 yr 3 mos',
      location: 'Ibagué, Tolima, Colombia',
      modality: 'On-site',
      roles: [
        {
          id: 'comfenalco-auxiliar',
          role: 'Administrative assistant',
          period: 'Apr 2022 — Jun 2023',
          duration: '1 yr 3 mos',
          contract: 'Internship',
          points: [
            'Document process optimization and digitization',
            'Support in organizing and controlling administrative information',
            'Assistance and support for internal users in procedures',
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 'cun',
      org: 'Unified National Corporation of Higher Education — CUN',
      programs: [
        {
          id: 'cun-ingenieria',
          title: 'Systems Engineering',
          period: 'Jan 2024 — Dec 2028',
          current: true,
          highlights: [
            'Ongoing training focused on software development and systems engineering',
            'Strengthening in C#, Java, and systems support',
            'Solid foundation in software architecture and application development',
          ],
          skills: [
            'Back-end web development',
            'Technical support',
            'C#',
            'Java',
            'Software architecture',
          ],
        },
      ],
    },
    {
      id: 'sena',
      org: 'National Learning Service — SENA',
      programs: [
        {
          id: 'sena-adso',
          title: 'Technologist in Software Analysis and Development',
          field: 'ADSO · Programming and applications',
          period: 'Dec 2023 — Jan 2026',
          highlights: [
            'Programming, database design, data analysis, and application development',
            'Hands-on experience with Python, C#, Java, and MySQL',
            'SCRUM methodology applied in real projects',
          ],
          skills: [
            'Back-end web development',
            'SQL',
            'Python',
            'C#',
            'Java',
            'MySQL',
            'SCRUM',
          ],
        },
        {
          id: 'sena-tecnico-admin',
          title: 'Technician in Administrative Assistance',
          field: 'Administration and business management',
          period: 'Jan 2022 — Nov 2023',
          highlights: [
            'Resource administration and document management',
            'Customer service and business process organization',
            'Planning, effective communication, and office tools in corporate environments',
          ],
          skills: ['Communication', 'Time management', 'Administration', 'Office software'],
        },
      ],
    },
  ],
  certifications: [
    {
      id: 'ibm',
      org: 'IBM',
      certs: [
        {
          id: 'ibm-genai',
          title: 'Generative AI: Prompt Engineering Essentials',
          issued: 'Jun 2025',
          credentialId: 'KE6BH4CQHP7A',
          image: certImage('ibm-genai'),
          skills: ['Generative AI', 'Prompt engineering', 'Instruction engineering'],
        },
      ],
    },
    {
      id: 'coursera-uci',
      org: 'University of California, Irvine · Coursera',
      certs: [
        {
          id: 'uci-decisions',
          title: 'How to Solve Problems and Make Decisions Effectively',
          issued: 'Jun 2025',
          credentialId: 'V9TOIIB0R0N5',
          image: certImage('uci-decisions'),
          skills: ['Problem solving', 'Decision making', 'Analytical thinking'],
        },
      ],
    },
    {
      id: 'codigo-facilito',
      org: 'Código Facilito',
      certs: [
        {
          id: 'cf-datos',
          title: 'Conference — What nobody told you about data',
          issued: 'Oct 2024',
          credentialId: 'fb971692-c5a9-4ac5-8f40-f79c0c429357',
          image: certImage('cf-datos'),
          skills: ['Data analysis', 'Data science fundamentals', 'Data'],
        },
        {
          id: 'cf-english',
          title: 'EnglishForDevs #1 — Conversational English',
          issued: 'Oct 2024',
          credentialId: 'f39287c2-c7c4-4827-8f54-bad2db5280c6',
          image: certImage('cf-english'),
          skills: ['English communication', 'Technical English', 'Conversation'],
        },
      ],
    },
    {
      id: 'sena-certs',
      org: 'National Learning Service — SENA',
      certs: [
        {
          id: 'sena-prototipos',
          title: 'Prototype design and construction',
          issued: 'Dec 2021',
          credentialId: '9226002279494TI1106634269C',
          image: certImage('sena-prototipos'),
          skills: ['Product design', 'Prototyping', 'Innovation'],
        },
        {
          id: 'sena-circuitos',
          title: 'Electronic circuit design',
          issued: 'Aug 2019',
          credentialId: '9226001851924TI1106634269C',
          image: certImage('sena-circuitos'),
          skills: ['Circuit design', 'Electronics', 'Hardware'],
        },
        {
          id: 'sena-investigacion-app',
          title:
            'Application of methodological tools in research: science, technology, and innovation',
          issued: 'Nov 2018',
          credentialId: '9226001806604TI1106634269C',
          image: certImage('sena-investigacion-app'),
          skills: ['Applied research', 'Innovation management', 'Methodology'],
        },
        {
          id: 'sena-investigacion-base',
          title: 'Methodological tools in applied research: basic conceptualization',
          issued: 'Oct 2018',
          credentialId: '9226001773573TI1106634269C',
          image: certImage('sena-investigacion-base'),
          skills: ['Research methodologies', 'Analytical thinking', 'Science and technology'],
        },
        {
          id: 'sena-modding',
          title: '4th Modding Fair',
          issued: 'Oct 2018',
          credentialId: '922600129446TI1106634269C',
          image: certImage('sena-modding'),
          skills: ['Creativity and innovation', 'Hardware design', 'Electronics'],
        },
        {
          id: 'sena-simulacion',
          title: 'Methodologies to simulate the operation of electronic products',
          issued: 'Aug 2018',
          credentialId: '9226001702294TI1106634269C',
          image: certImage('sena-simulacion'),
          skills: ['System simulation', 'Circuit design', 'Electronics'],
        },
        {
          id: 'sena-robots',
          title: 'Robot programming in computer-integrated manufacturing systems',
          issued: 'May 2018',
          credentialId: '9226001669826TI1106634269C',
          image: certImage('sena-robots'),
          skills: ['Robot programming', 'Industrial automation', 'Manufacturing'],
        },
        {
          id: 'sena-firmware',
          title: 'Firmware programming in electronic devices',
          issued: 'Apr 2018',
          credentialId: '9226001622927TI1106634269C',
          image: certImage('sena-firmware'),
          skills: ['Embedded systems', 'Firmware development', 'Electronics'],
        },
      ],
    },
  ],
};
