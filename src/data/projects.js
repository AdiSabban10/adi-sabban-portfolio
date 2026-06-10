export const projectCategories = {
  featured: 'Featured',
  professional: 'Capstone',
  learning: 'Bootcamp project',
}

export const projectTypes = {
  freelance: 'Freelance',
  team: 'Team project',
  pair: 'Pair project',
  solo: 'Solo project',
}

export const projects = [
  {
    id: 'playspace',
    slug: 'playspace',
    category: 'featured',
    type: 'freelance',
    title: 'Playspace',
    subtitle: 'Gamified corporate team-activity platform',
    summary:
      'A production platform where teams join group games, complete timed or staged tasks, and admins run interactive corporate events. I joined an existing React + .NET codebase to ship new gameplay features, a UI redesign from Figma, and targeted backend work.',
    role: 'Freelance developer — primarily frontend, with full-stack contributions on player answers and admin tooling.',
    highlights: [
      'Built an interactive game map with multi-stage and time-based flows, including task expiration and progress restoration.',
      'Delivered player answer persistence end-to-end — database, REST API, and frontend revisit flows.',
      'Redesigned key screens for mobile and improved production stability (background workers, CORS hardening).',
    ],
    stack: ['React', 'Redux', 'SCSS', 'ASP.NET Core', 'C#', 'SQL Server', 'REST API'],
    links: { github: null, live: null, confidential: true },
    note: 'Private client work — source code and demo are unavailable.',
  },
  {
    id: 'abnb',
    slug: 'abnb',
    category: 'professional',
    type: 'team',
    title: 'Abnb',
    subtitle: 'Airbnb clone · team project',
    summary:
      'A full-stack vacation rental marketplace built by a three-person team — search, maps, user accounts, booking, and real-time updates.',
    role: 'Full-stack contributor, focused on the order and booking flow.',
    highlights: [
      'Implemented booking logic in React/Redux, connected to Express and MongoDB APIs.',
      'Built user-scoping rules so hosts and guests only see their own orders and trips.',
      'Aligned frontend services with the backend and helped prepare the app for production deployment.',
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    links: {
      githubRepos: [
        { label: 'Frontend', url: 'https://github.com/avivdb/Abnb-frontend' },
        { label: 'Backend', url: 'https://github.com/AdiSabban10/Abnb-backend' },
      ],
      live: 'https://abnb-b2o9.onrender.com/',
    },
  },
  {
    id: 'keepmailread',
    slug: 'keepmailread',
    category: 'learning',
    type: 'pair',
    title: 'Gmail & Google Keep',
    subtitle: 'Dual-app React sprint',
    summary:
      'A browser-based clone of Gmail and Google Keep. I owned the Gmail module end-to-end in a pair sprint.',
    role: 'Frontend developer — Gmail module (routing, UI, service layer).',
    highlights: [
      'Folder-based mail browsing with nested routes, search, filter, and sort.',
      'Full compose/send lifecycle and two-stage trash flow, persisted in localStorage.',
    ],
    stack: ['React', 'React Router', 'JavaScript', 'localStorage', 'CSS'],
    links: {
      github: 'https://github.com/AdiSabban10/Sprint3-Gmail-GoogleKeep',
      live: 'https://adisabban10.github.io/Sprint3-Gmail-GoogleKeep/#/mail/inbox',
    },
  },
  {
    id: 'meme-generator',
    slug: 'meme-generator',
    category: 'learning',
    type: 'solo',
    title: 'Meme Generator',
    subtitle: 'Canvas-based image editor',
    summary:
      'A client-side meme editor — pick a template, style multiple text lines on a canvas, then save or share.',
    role: 'Solo developer.',
    highlights: [
      'Multi-line canvas editor with drag positioning, styling, and PNG export.',
      'Structured vanilla JS architecture (services + controllers) without a framework.',
    ],
    stack: ['JavaScript', 'HTML Canvas', 'CSS', 'localStorage'],
    links: {
      github: 'https://github.com/AdiSabban10/Meme-Generator',
      live: 'https://adisabban10.github.io/Meme-Generator/',
    },
  },
  {
    id: 'minesweeper',
    slug: 'minesweeper-game',
    category: 'learning',
    type: 'solo',
    title: 'Minesweeper',
    subtitle: 'Browser game',
    summary:
      'A feature-rich Minesweeper game with multiple board sizes, power-ups, undo, and dark mode.',
    role: 'Solo developer.',
    highlights: [
      'Core game logic — mine placement, flood-fill reveal, and win/loss detection.',
      'Extended gameplay with hints, undo via board snapshots, lives, and timer.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Web Audio API'],
    links: {
      github: 'https://github.com/AdiSabban10/Minesweeper-game',
      live: 'https://adisabban10.github.io/Minesweeper-game/',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.category !== 'learning')
export const learningProjects = projects.filter((p) => p.category === 'learning')
