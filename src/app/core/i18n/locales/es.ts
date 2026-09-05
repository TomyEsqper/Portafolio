import { certImage } from '../../../data/certifications';
import { LocaleContent } from '../i18n.types';

export const es: LocaleContent = {
  meta: {
    title: 'Tomás Esquivel — Backend .NET',
    description:
      'Tomás Esquivel Perdomo — Desarrollador backend especializado en .NET, Clean Architecture y microservicios.',
  },
  profile: {
    role: 'Backend Developer · .NET Specialist',
    location: 'Ibagué, Colombia',
    english: 'English B2',
    summary:
      'Diseño APIs y microservicios en el ecosistema .NET con Clean Architecture, SOLID y foco en sistemas mantenibles — no solo CRUD.',
  },
  ui: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    navMain: 'Principal',
    langSwitch: 'Idioma',
    nav: {
      about: 'Sobre mí',
      certifications: 'Certificaciones',
      recognitions: 'Reconocimientos',
      stack: 'Stack',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Formación',
      contact: 'Contacto',
    },
    hero: {
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar',
    },
    about: {
      label: '01 — Sobre mí',
      title: 'Backend con criterio de arquitectura',
      p1: 'Soy desarrollador backend enfocado en el ecosistema .NET. Construyo APIs REST y microservicios aplicando Clean Architecture, SOLID y Clean Code, con la idea de que cada decisión de diseño sume flexibilidad y valor a largo plazo.',
      p2: 'Curioso y autodidacta: refuerzo arquitectura, diseño de APIs y optimización de datos, mientras exploro cloud (AWS) y tecnologías emergentes. Me interesa el software limpio, impactante y sostenible.',
      certsDivider: 'Licencias y credenciales',
      loading: 'Cargando certificaciones…',
    },
    stack: {
      label: '03 — Stack',
      title: 'Herramientas con las que construyo',
      lead: 'Del dominio a la infraestructura: C#, APIs, datos y flujo profesional de entrega.',
    },
    projects: {
      label: '04 — Proyectos',
      title: 'Trabajo que cuenta',
      lead: 'Microservicios .NET y una plataforma laboral real — arquitectura, datos y entrega.',
    },
    experience: {
      label: '05 — Trayectoria',
      title: 'Experiencia laboral',
      lead: 'Agrupado por empresa — evolución de roles dentro de cada una.',
      ariaLabel: 'Experiencia por empresa',
      currentBadge: 'Actual',
    },
    education: {
      label: '06 — Formación',
      title: 'Educación superior',
      lead: 'Formación académica que respalda el perfil backend.',
      ariaLabel: 'Formación académica',
      currentBadge: 'En curso',
    },
    contact: {
      label: '07 — Contacto',
      title: 'Hablemos de tu próximo sistema',
      lead: 'Abierto a roles backend, proyectos .NET y conversaciones sobre arquitectura.',
    },
    certifications: {
      lead: '{{count}} certificados · Se desplazan solos. Haz clic para seleccionar uno.',
      hint: 'Arrastra para explorar · Clic para ver detalle',
      close: 'Cerrar',
      issued: 'Expedición',
      credentialId: 'ID credencial',
      imageFallback: 'Imagen en',
      certAlt: 'Certificado:',
    },
    recognitions: {
      label: '02 — Reconocimientos',
      title: 'Logros que marcan el camino',
      lead: 'Premios y reconocimientos que respaldan aprendizaje aplicado y resultados visibles.',
      previewLabel: 'Vista previa',
      placeholder: 'Imagen pendiente de cargar',
    },
    footer: {
      tagline: 'Backend · .NET',
    },
  },
  recognitions: [
    {
      id: 'programaton-cun',
      title: 'Programatón CUN',
      issuer: 'Corporación Unificada Nacional de Educación Superior — CUN',
      date: 'Nov 2024',
      kind: 'Primer puesto · Nivel intermedio',
      description:
        'Reconocimiento por obtener el primer puesto en la Programatón de nivel intermedio, reflejando constancia, lógica y resolución de problemas en competencia.',
    },
    {
      id: 'sena-meaningful-learning',
      title:
        'Reconocimiento de la ciencia, la tecnología y la innovación a partir de metodologías experienciales para alcanzar aprendizajes significativos',
      issuer: 'Servicio Nacional de Aprendizaje — SENA',
      date: 'Dic 2020',
      kind: 'Reconocimiento académico',
      description:
        'Reconocimiento orientado al pensamiento científico, la innovación y la aplicación práctica del conocimiento mediante metodologías experienciales.',
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
      title: 'Arquitectura',
      code: '02',
      items: ['Clean Architecture', 'Hexagonal', 'SOLID', 'Microservicios', 'API Gateway'],
    },
    {
      title: 'Datos',
      code: '03',
      items: ['MySQL', 'EF Core', 'Dapper', 'ADO.NET', 'LINQ'],
    },
    {
      title: 'Flujo',
      code: '04',
      items: ['Git / GitHub', 'Git Flow', 'Conventional Commits', 'Docker', 'Linux'],
    },
  ],
  projects: [
    {
      name: 'CunDropShipping',
      kind: 'Ecosistema de microservicios',
      period: 'Ago 2025 — Actualidad',
      description:
        'Plataforma e-commerce formativa en .NET: gateway, catálogo y ventas desacoplados, orientada a escalabilidad y contratos claros entre servicios.',
      highlights: [
        'API Gateway como entrada única con validación JWT',
        'Persistencia con EF Core, Dapper y ADO.NET',
        'Contenerización con Docker y flujo Git Flow',
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
      kind: 'Plataforma de microempleos',
      period: 'Ene 2024 — Jun 2025',
      description:
        'Conexión laboral entre personas y empleadores: ofertas, postulaciones, roles y chat. Backend en Laravel con foco en persistencia y lógica de negocio.',
      highlights: [
        'Roles diferenciados (empleado, empleador, admin)',
        'Filtros de búsqueda y membresías',
        'Proyecto SENA con entrega MVP',
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      links: [
        { label: 'Repo', href: 'https://github.com/TomyEsqper/MyJob' },
        { label: 'Sitio', href: 'https://myjob.solutions' },
      ],
    },
  ],
  experience: [
    {
      id: 'phidias',
      org: 'Phidias S.A.S.',
      totalDuration: '1 año 2 meses',
      location: 'Cali, Valle del Cauca, Colombia',
      modality: 'En remoto',
      roles: [
        {
          id: 'phidias-cs-jr',
          role: 'Customer Success Jr.',
          period: 'Ene 2026 — Actualidad',
          duration: '8 meses',
          contract: 'Jornada completa',
          current: true,
          points: [
            'Operaciones de atención al cliente',
            'Gestión de chats y correos con respuesta ágil',
            'Revisión final de cambios solicitados antes de cierre',
          ],
        },
        {
          id: 'phidias-aprendiz',
          role: 'Aprendiz en prácticas',
          period: 'Jul 2025 — Ene 2026',
          duration: '7 meses',
          contract: 'Contrato de prácticas',
          points: [
            'Organización de registros y entrega de documentación técnica',
            'Réplica de incidencias para identificar fallos de configuración o error de usuario',
            'Soporte en operaciones de atención al cliente',
          ],
        },
      ],
    },
    {
      id: 'comfenalco',
      org: 'Comfenalco Tolima',
      totalDuration: '1 año 3 meses',
      location: 'Ibagué, Tolima, Colombia',
      modality: 'Presencial',
      roles: [
        {
          id: 'comfenalco-auxiliar',
          role: 'Auxiliar administrativo',
          period: 'Abr 2022 — Jun 2023',
          duration: '1 año 3 meses',
          contract: 'Contrato de prácticas',
          points: [
            'Optimización de procesos documentales y digitalización',
            'Apoyo en organización y control de información administrativa',
            'Atención y soporte a usuarios internos en trámites',
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 'cun',
      org: 'Corporación Unificada Nacional de Educación Superior — CUN',
      programs: [
        {
          id: 'cun-ingenieria',
          title: 'Ingeniería de Sistemas',
          period: 'Ene 2024 — Dic 2028',
          current: true,
          highlights: [
            'Formación en curso con enfoque en desarrollo de software e ingeniería de sistemas',
            'Fortalecimiento en C#, Java y soporte de sistemas',
            'Base sólida en arquitectura de software y desarrollo de aplicaciones',
          ],
          skills: [
            'Desarrollo web back end',
            'Soporte técnico',
            'C#',
            'Java',
            'Arquitectura de software',
          ],
        },
      ],
    },
    {
      id: 'sena',
      org: 'Servicio Nacional de Aprendizaje — SENA',
      programs: [
        {
          id: 'sena-adso',
          title: 'Tecnólogo en Análisis y Desarrollo de Software',
          field: 'ADSO · Programación y aplicaciones',
          period: 'Dic 2023 — Ene 2026',
          highlights: [
            'Programación, diseño de bases de datos, análisis de datos y desarrollo de aplicaciones',
            'Experiencia práctica con Python, C#, Java y MySQL',
            'Metodología SCRUM aplicada en proyectos reales',
          ],
          skills: [
            'Desarrollo web back end',
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
          title: 'Técnico en Asistencia Administrativa',
          field: 'Administración y gestión empresarial',
          period: 'Ene 2022 — Nov 2023',
          highlights: [
            'Administración de recursos y gestión documental',
            'Atención al cliente y organización de procesos empresariales',
            'Planeación, comunicación efectiva y herramientas ofimáticas en entornos corporativos',
          ],
          skills: [
            'Comunicación',
            'Gestión del tiempo',
            'Administración',
            'Ofimática',
          ],
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
          title: 'IA Generativa: Conceptos básicos de ingeniería de instrucciones',
          issued: 'Jun 2025',
          credentialId: 'KE6BH4CQHP7A',
          image: certImage('ibm-genai'),
          skills: ['IA generativa', 'Prompt engineering', 'Ingeniería de instrucciones'],
        },
      ],
    },
    {
      id: 'coursera-uci',
      org: 'University of California, Irvine · Coursera',
      certs: [
        {
          id: 'uci-decisions',
          title: 'Cómo resolver problemas y tomar decisiones con eficacia',
          issued: 'Jun 2025',
          credentialId: 'V9TOIIB0R0N5',
          image: certImage('uci-decisions'),
          skills: ['Resolución de problemas', 'Toma de decisiones', 'Pensamiento analítico'],
        },
      ],
    },
    {
      id: 'codigo-facilito',
      org: 'Código Facilito',
      certs: [
        {
          id: 'cf-datos',
          title: 'Conferencia — Lo que nadie te dijo de los datos',
          issued: 'Oct 2024',
          credentialId: 'fb971692-c5a9-4ac5-8f40-f79c0c429357',
          image: certImage('cf-datos'),
          skills: ['Análisis de datos', 'Fundamentos de data science', 'Datos'],
        },
        {
          id: 'cf-english',
          title: 'EnglishForDevs #1 — Inglés conversacional',
          issued: 'Oct 2024',
          credentialId: 'f39287c2-c7c4-4827-8f54-bad2db5280c6',
          image: certImage('cf-english'),
          skills: ['Comunicación en inglés', 'Inglés técnico', 'Conversación'],
        },
      ],
    },
    {
      id: 'sena-certs',
      org: 'Servicio Nacional de Aprendizaje — SENA',
      certs: [
        {
          id: 'sena-prototipos',
          title: 'Diseño y construcción de prototipos',
          issued: 'Dic 2021',
          credentialId: '9226002279494TI1106634269C',
          image: certImage('sena-prototipos'),
          skills: ['Diseño de producto', 'Prototipado', 'Innovación'],
        },
        {
          id: 'sena-circuitos',
          title: 'Diseño de circuitos electrónicos',
          issued: 'Ago 2019',
          credentialId: '9226001851924TI1106634269C',
          image: certImage('sena-circuitos'),
          skills: ['Diseño de circuitos', 'Electrónica', 'Hardware'],
        },
        {
          id: 'sena-investigacion-app',
          title:
            'Aplicación de herramientas metodológicas en investigación: ciencia, tecnología e innovación',
          issued: 'Nov 2018',
          credentialId: '9226001806604TI1106634269C',
          image: certImage('sena-investigacion-app'),
          skills: ['Investigación aplicada', 'Gestión de innovación', 'Metodología'],
        },
        {
          id: 'sena-investigacion-base',
          title:
            'Herramientas metodológicas en investigación aplicada: conceptualización básica',
          issued: 'Oct 2018',
          credentialId: '9226001773573TI1106634269C',
          image: certImage('sena-investigacion-base'),
          skills: ['Metodologías de investigación', 'Pensamiento analítico', 'Ciencia y tecnología'],
        },
        {
          id: 'sena-modding',
          title: '4.ª Feria de Modding',
          issued: 'Oct 2018',
          credentialId: '922600129446TI1106634269C',
          image: certImage('sena-modding'),
          skills: ['Creatividad e innovación', 'Diseño de hardware', 'Electrónica'],
        },
        {
          id: 'sena-simulacion',
          title:
            'Aplicación de metodologías para simular el funcionamiento de productos electrónicos',
          issued: 'Ago 2018',
          credentialId: '9226001702294TI1106634269C',
          image: certImage('sena-simulacion'),
          skills: ['Simulación de sistemas', 'Diseño de circuitos', 'Electrónica'],
        },
        {
          id: 'sena-robots',
          title: 'Programación de robots en sistemas de manufactura integrada por computador',
          issued: 'May 2018',
          credentialId: '9226001669826TI1106634269C',
          image: certImage('sena-robots'),
          skills: ['Programación de robots', 'Automatización industrial', 'Manufactura'],
        },
        {
          id: 'sena-firmware',
          title: 'Programación de firmware en dispositivos electrónicos',
          issued: 'Abr 2018',
          credentialId: '9226001622927TI1106634269C',
          image: certImage('sena-firmware'),
          skills: ['Sistemas embebidos', 'Desarrollo de firmware', 'Electrónica'],
        },
      ],
    },
  ],
};
