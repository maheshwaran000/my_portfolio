export const profile = {
  name: 'Mahesh K',
  title: 'Full Stack Developer (MERN) | SaaS Builder',
  impactStatement: 'I build and deploy production-grade web applications end-to-end.',
  heroTags: [
    'Production React interfaces',
    'API-first backend systems',
    'Linux / Nginx / VPS deployments',
  ],
  navLinks: [
    { label: 'Projects', href: '/projects' },
    { label: 'Client Work', href: '/client-work' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ],
  ctas: {
    primary: {
      label: 'Live SaaS Demo',
      href: 'https://tch7.life/',
    },
    secondary: {
      label: 'View Case Study',
      href: '/projects/school-management-saas',
    },
  },
  contacts: {
    email: 'mailto:maheshkadasula2@gmail.com',
    phone: 'tel:+919515521725',
    github: 'https://github.com/maheshwaran000',
  },
};

export const instantProof = {
  stats: [
    '✔ 1 SaaS platform built and deployed',
    '✔ 8+ real-world applications',
    '✔ End-to-end ownership (frontend → backend → deployment)',
  ]
};

export const projects = [
  {
    id: 'school-management-saas',
    featured: true,
    category: 'Flagship Project',
    name: 'School Management SaaS',
    problem: 'Educational institutions struggle with fragmented data across admissions, fees, and attendance, leading to operational bottlenecks and reporting delays.',
    solution: 'Built a centralized SaaS platform that unifies school operations for admins, teachers, and parents with real-time dashboards and automated reporting.',
    features: ['Attendance Tracking', 'Fee Management', 'Role-Based Dashboards', 'Operational Reporting'],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Nginx', 'Linux VPS'],
    architecture: {
      frontend: 'React with modular dashboard architecture and role-aware route protection.',
      backend: 'Node.js/Express REST API with service-oriented logic for multi-role workflows.',
      database: 'PostgreSQL for robust relational data modeling of complex student and financial records.',
      auth: 'JWT-based authentication with granular role-based access control (RBAC).',
      deployment: 'Linux VPS with Nginx reverse proxy, production build optimization, and secure environment isolation.',
    },
    thinking: [
      'Modular structure: Designed reusable component patterns for rapid internal tool expansion.',
      'Scalable CRUD: Implemented standardized data access patterns to handle high-frequency school operations.',
      'Separation of concerns: Decoupled business logic from API controllers to ensure backend maintainability.',
    ],
    demoCredentials: {
      userId: 'CSP360GPSGA000004',
      password: 'Ganesh@123',
    },
    actions: {
      liveUrl: 'https://tch7.life/',
      caseStudyUrl: '/projects/school-management-saas',
    },
    screenshots: [
      { alt: 'Secure Authentication & Login', src: '/screenshots/login.png' },
      { alt: 'Academic Class Management', src: '/screenshots/classes.png' },
      { alt: 'Automated Timetable Generation', src: '/screenshots/timetable.png' },
      { alt: 'Teacher Portal & Management', src: '/screenshots/teachers.png' },
      { alt: 'Administrative Staff Management', src: '/screenshots/staff.png' },
    ],
  },
];

export const technicalDepth = [
  {
    title: 'API Design',
    description: 'Implemented RESTful APIs using Node.js/Express, focusing on predictable resource modeling, consistent error handling, and performance-optimized queries.',
  },
  {
    title: 'Authentication Flow',
    description: 'Designed secure JWT-based lifecycles including token rotation, refresh mechanisms, and role-based access control (RBAC) to protect sensitive institutional data.',
  },
  {
    title: 'Data Modeling',
    description: 'Architectured PostgreSQL schemas to balance rapid development with data integrity, using relational normalization for complex reporting across institutional datasets.',
  },
  {
    title: 'Deployment Workflow',
    description: 'Managed full CI/CD lifecycle: production builds → Linux server hardening → Nginx reverse proxy configuration with SSL termination.',
  },
];

export const clientWork = [
  {
    id: 'kennerkall',
    slug: 'kennerkall',
    name: 'Kennerkall Solutions Pvt Ltd',
    website: 'https://www.kennerkall.com/',
    role: 'Freelance Developer (Team Collaboration)',
    contribution: 'Collaborated on a client project as part of development team.',
    details: [
      'Collaborated with development team on a client project',
      'Contributed to backend and feature implementation',
      'Worked on integrating business requirements into modules'
    ],
    technicalWork: 'Node.js, Backend modules, Team collaboration patterns.',
  },
  {
    id: 'sunx',
    slug: 'sunx',
    name: 'Sunx Technologies',
    website: 'https://www.justdial.com/Hyderabad/Sunx-Technologies-Beside-Mro-Office-Kukatpally/040PXX40-XX40-251018103355-E6K1_BZDET',
    role: 'Independent Full Stack Developer',
    contribution: 'Developed blood donation management system.',
    details: [
      'Developed Blood Donation Camp Management System',
      'Built donor registration and tracking features',
      'Designed backend APIs and database',
      'Delivered complete application to client'
    ],
    technicalWork: 'Full Stack development, REST APIs, Database design.',
    notes: 'Application handed over, not deployed publicly'
  },
  {
    id: 'scale-orange',
    slug: 'scale-orange',
    name: 'Scale Orange',
    website: 'https://scaleorange.com/',
    role: 'Independent Mobile App Developer',
    contribution: 'Built “Civic Sense” mobile app (Play Store).',
    details: [
      'Built “Civic Sense” mobile application',
      'Developed civic issue reporting features',
      'Managed full lifecycle: development → deployment',
      'Published app on Play Store'
    ],
    technicalWork: 'Mobile App Development, Play Store deployment, Lifecycle management.',
  },
  {
    id: 'geohealth',
    slug: 'geohealth',
    name: 'GeoHealth Services Pvt Ltd',
    website: 'https://geohealthservices.in/',
    role: 'Freelance Developer (Team Collaboration)',
    contribution: 'Worked on SOS Doctor & Patient apps (Supabase backend).',
    details: [
      'Worked on SOS Doctor and Patient applications',
      'Handled backend integration using Supabase',
      'Implemented authentication and real-time data features',
      'Collaborated on system integration'
    ],
    technicalWork: 'Supabase integration, Real-time data, Auth flows.',
  }
];

export const experience = {
  role: 'Independent Full Stack Developer',
  context: 'Building SaaS products, business systems, and production-ready applications.',
  bullets: [
    'Built SaaS applications',
    'Delivered systems for schools and businesses',
    'Managed full lifecycle: development → deployment → maintenance',
    'Worked independently and in collaborative environments',
  ],
};
