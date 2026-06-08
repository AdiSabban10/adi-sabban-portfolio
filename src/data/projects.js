export const projects = [
  {
    "id": "abnb",
    "slug": "abnb",
    "title": "Abnb",
    "subtitle": "Airbnb Clone",
    "shortPitch": "A full-stack vacation rental marketplace built by a 3-person team, featuring search, booking, maps, and user accounts.",
    "mainTechnologies": [
      "React",
      "JavaScript (JSX)",
      "Redux",
      "React Router",
      "Vite",
      "SCSS/Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Axios",
      "Google Maps API",
      "Google OAuth",
      "Chart.js"
    ],
    "coreStack": {
      "frontend": "React 18 + Vite, Redux, React Router v6, SCSS, Axios",
      "backend": "Node.js, Express, MongoDB (native driver), Socket.io, bcrypt, cookie-based auth",
      "tools": "ESLint, Nodemon, Vite production build deployed via Abnb-backend/public"
    },
    "keyFeatures": [
      "Order & booking flow — checkout, order management, and persistence across Redux, services, and MongoDB",
      "User-scoped data access — logic ensuring hosts see their received orders and guests see their trips",
      "Frontend–backend integration — aligned service contracts with Express APIs and production data setup"
    ],
    "architecturePattern": "Component-based React SPA with Redux modules; backend Routes → Controllers → Services; dual local/remote service layer (VITE_LOCAL toggle); production SPA served by Express",
    "dataPersistence": "MongoDB (stays, users, orders via REST API); localStorage in local dev mode; encrypted auth token in cookies",
    "elevatorPitch": "Contributed as a full-stack developer on a 3-person Airbnb clone, with a focus on application logic and data flow. Worked on the order/booking feature — implementing Redux state management, service-layer rules, and backend query logic — and helped integrate frontend services with the Express/MongoDB backend.",
    "technicalChallenges": [
      "Order flow logic — implemented Redux actions/reducers, service methods, and save/query/update behavior for the booking feature, including validation and data normalization",
      "User-scoped data rules — built consistent guestId / hostId filtering on both frontend services and backend query criteria so users only access their relevant orders and trips"
    ],
    "skillTags": [
      "React",
      "Redux",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "State Management",
      "Data Modeling",
      "Full-Stack Integration",
      "Team Collaboration"
    ],
    "myRole": "Full-stack contributor on a 3-person team, focused on logic, data flow, and backend integration. Main area of contribution: the order/booking feature — Redux module, service layer, business rules, and related backend API work. Also contributed to Stay Details functionality and production deployment setup.",
    "keyStrengths": [
      "Application logic — translating booking requirements into working code: state management, service methods, validation, and data shaping",
      "Full-stack thinking — connecting frontend actions to backend endpoints and keeping data rules consistent across both sides",
      "Collaborative delivery — building the functional layer of features within a shared codebase, alongside teammates working on UI, search, maps, and real-time functionality"
    ],
    "resumeBullets": [
      "Implemented order/booking logic in React/Redux — actions, reducers, and local/remote services connected to Express/MongoDB APIs",
      "Built user-scoping rules for orders and trips across frontend services and backend query criteria",
      "Contributed to frontend–backend integration, aligning service contracts and preparing data for production deployment",
      "Worked on Stay Details and order-related components as part of the team's shared booking experience"
    ],
    "myContributions": [
      "Order Redux module — order.action.js, order.reducer.js, and order store integration",
      "Order service layer — order.service.local.js, order.service.remote.js, and services/order/index.js",
      "Order UI logic — OrderDetails, OrderGuestsModal, OrderDateModal, and OrderCheckout flow",
      "Order status updates — approve/reject logic and status persistence",
      "User-scoped orders & trips — UserOrders and UserTrips filtering by guest/host",
      "Backend order API — query criteria, controller integration, and user-scoping on the server",
      "Backend setup — repo initialization, stay/order service alignment with frontend, and Render deployment config",
      "Stay Details — early functional work on amenities, ratings, and stay-to-order connection",
      "Data layer — seeding and maintaining stay_fixed.json, order.json, and user.json",
      "Socket.io groundwork — initial socket service setup for order-related updates",
      "Code maintenance — backend–frontend contract matching, debugging, and cleanup of unused modules"
    ],
    "collaboration": "Team project — 3-person group",
    "links": {
      "github": null,
      "live": "https://abnb-b2o9.onrender.com/"
    }
  },
  {
    "id": "keepmailread",
    "slug": "keepmailread",
    "title": "KeepMailRead",
    "subtitle": "DARRADI APPS — Gmail + Google Keep clone",
    "shortPitch": "A browser-based dual-app suite that clones Gmail inbox workflows and Google Keep notes, built as a pair sprint with no backend.",
    "mainTechnologies": [
      "React (CDN)",
      "React Router DOM (HashRouter)",
      "JavaScript (JSX)",
      "ES Modules",
      "in-browser Babel",
      "HTML5",
      "CSS3",
      "localStorage",
      "Font Awesome",
      "SVG assets"
    ],
    "coreStack": {
      "frontend": "React components + service layer (mail.service.js) + shared async-storage.service.js (localStorage with simulated delay); no server, no TypeScript, no bundler (Vite/Webpack)",
      "backend": "None",
      "tools": "VS Code"
    },
    "keyFeatures": [
      "Gmail-style folder system — Inbox, Sent, Trash, and Starred with route-driven status (/mail/:status) and live unread inbox badge",
      "Search, filter, and sort — Text search (regex on subject/body), read/unread filter, sort by date or title; filter text synced to URL via useSearchParams",
      "Full mail lifecycle — List/detail nested routes, compose via ?compose=new, soft-delete trash (removedAt) with permanent delete on second trash action, star/read toggles, auto-mark-read when opening a message"
    ],
    "architecturePattern": "Component-based React with a service layer for data/CRUD; nested routes (MailIndex → MailList / MailDetails) and Outlet context to share list actions without prop drilling; HashRouter for client-side navigation",
    "dataPersistence": "localStorage through async-storage.service.js (mailDB key); seed data generated on first load; no REST API (Axios is loaded globally but not used in the mail module)",
    "elevatorPitch": "Co-developed KeepMailRead, a React single-page app mimicking Gmail and Google Keep. I owned the entire Gmail module end-to-end: routing, UI, service logic, and styling. The mail app supports multi-folder browsing, advanced filtering, compose/send, and a two-stage trash flow, with all state persisted in localStorage via a reusable async storage abstraction.",
    "technicalChallenges": [
      "Unified filtering pipeline — Combined route-based folder (status), component state (filterBy, sortBy), and mailService.query() rules (inbox vs sent vs trash vs starred, regex search, read filter, dynamic sort) so one useEffect in MailIndex keeps the list, badge count, and URL in sync.",
      "Nested-route state sharing — Used React Router Outlet context to pass mails, removeMail, and toggle handlers from MailIndex to MailList and MailDetails, including auto-mark-read on open without breaking list updates."
    ],
    "skillTags": [
      "React",
      "React Router",
      "JavaScript",
      "JSX",
      "SPA Architecture",
      "Service Layer Pattern",
      "localStorage",
      "Client-Side Routing",
      "CSS Component Styling",
      "Pair Programming"
    ],
    "myRole": "Frontend developer — Gmail module owner in a pair sprint; responsible for apps/mail/ (9 JSX components, mail.service.js, 8 CSS files) plus mail routes wired in the shared RootCmp.jsx. Partner built the notes app; shared shell includes header, storage utilities, and global styles.",
    "keyStrengths": [
      "Separation of concerns — UI components vs mail.service.js for query/filter/persistence logic",
      "React patterns — useState, useEffect, controlled forms, event stopPropagation on actions inside Link rows",
      "Routing literacy — Nested routes, dynamic params (:status, :mailId), query-string-driven compose modal",
      "Product-minded UX — Unread styling, relative timestamps in preview, folder selection state, empty-folder messaging",
      "Junior-to-mid trajectory — Solid feature delivery with some commented/WIP integration hooks (e.g. note→mail compose via search params)"
    ],
    "collaboration": "Pair project — Gmail module (Adi Sabban)",
    "links": {
      "github": "https://github.com/DarrOr24/Sprint3-GoogleKeep-Gmail",
      "live": null
    }
  },
  {
    "id": "meme-generator",
    "slug": "meme-generator",
    "title": "Meme Generator",
    "shortPitch": "A client-side meme editor where users pick images, add and style multiple text lines on a canvas, then save, download, or share creations.",
    "mainTechnologies": [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "HTML Canvas API",
      "localStorage",
      "XMLHttpRequest (FormData)",
      "Font Awesome (CDN)"
    ],
    "coreStack": {
      "frontend": "Semantic HTML, modular CSS (@import for base, components, media queries), vanilla JS split into services and controllers; no build tool, npm, or framework.",
      "backend": "None",
      "tools": "VS Code"
    },
    "keyFeatures": [
      "Canvas meme editor: image background, multi-line text with stroke/fill, font family, size, colors, and left/center/right alignment",
      "Interactive text: click/touch to select lines, drag to reposition, switch/add/delete lines, selection frame synced to editor controls",
      "Persistence and export: save memes to localStorage, gallery of stock images, PNG download via toDataURL, Facebook share via third-party image upload (ca-upload.com)"
    ],
    "architecturePattern": "Service–controller separation with global state (gMeme, gImgs): meme.service.js / gallery.service.js / storage.service.js hold data and logic; meme.controller.js / gallery.controller.js handle DOM, canvas rendering, and events; main.js handles multi-page SPA-style toggling via CSS classes.",
    "dataPersistence": "localStorage (key: savedMemes, JSON via storage.service.js); static in-memory image catalog in gallery.service.js; one-off external POST for share upload (not a custom backend).",
    "elevatorPitch": "Built a single-page Meme Generator using vanilla JavaScript and the Canvas API. Users browse a template gallery, edit multi-line captions with styling and drag positioning, and persist work in the browser. The app supports responsive layout, touch input, PNG export, and social sharing through an upload API integration.",
    "technicalChallenges": [
      "Hit detection and dragging on canvas text using measureText, per-line bounding boxes, and unified mouse/touch coordinates (getEvPos)",
      "Clean export/share rendering by toggling UI-only overlays (selection frame) off before toDataURL, then uploading via FormData + XMLHttpRequest for Facebook sharing"
    ],
    "skillTags": [
      "Vanilla JavaScript",
      "HTML Canvas",
      "DOM Manipulation",
      "localStorage",
      "Responsive CSS",
      "Touch Events",
      "REST-style HTTP (XHR)",
      "Single-Page UI (no framework)"
    ],
    "myRole": "Sole front-end developer on a sprint-style vanilla JS project — implemented architecture split (services/controllers), canvas editor, storage, and share/download flows end to end.",
    "keyStrengths": [
      "Clear separation of concerns without frameworks; practical Canvas API usage (draw, resize, export); stateful editing (multi-line model, selection index); mobile-aware UX (media queries, hamburger nav, touch listeners).",
      "Traits align with a strong junior front-end developer: structured code and feature completeness, with room to grow on listener lifecycle, async image loading (onload), and reducing global/DOM coupling."
    ],
    "collaboration": "Solo project",
    "links": {
      "github": "https://github.com/AdiSabban10/Meme-Generator",
      "live": "https://adisabban10.github.io/Meme-Generator/"
    }
  },
  {
    "id": "minesweeper",
    "slug": "minesweeper-game",
    "title": "Minesweeper Game",
    "shortPitch": "A browser-based Minesweeper game with multiple difficulty levels, power-ups, undo, and dark mode, built with vanilla HTML, CSS, and JavaScript.",
    "mainTechnologies": [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript (ES6)",
      "Web Audio API",
      "DOM APIs"
    ],
    "coreStack": {
      "frontend": "HTML, CSS, JavaScript (no frameworks)",
      "backend": "None",
      "tools": "VS Code"
    },
    "keyFeatures": [
      "Full Minesweeper gameplay with three difficulty levels (4×4, 8×8, 12×12), lives, timer, mine counting, and recursive flood-fill for empty cells",
      "Power-up system: standard hints, mega hint (two-click rectangular area reveal), safe-click highlighting, and move undo with board state snapshots",
      "UI/UX extras: dark mode toggle, victory/game-over states, emoji-based cell rendering, and sound effects on mine hit and victory"
    ],
    "architecturePattern": "Procedural JavaScript with global state (gGame, gLevel, gBoard); utility helpers in utils.js and game logic in game.js; DOM built via HTML string templates and updated with querySelector; inline event handlers in HTML (onclick, oncontextmenu).",
    "dataPersistence": "None (in-memory only; no localStorage, API, or backend)",
    "elevatorPitch": "Built a feature-rich Minesweeper game in vanilla JavaScript as a solo front-end project. Implemented core game logic including mine placement, neighbor counting, flood-fill expansion, and win/loss detection across three board sizes. Extended the base game with hints, mega hint, safe-click, undo via deep-copied board state, lives, timer, dark mode, and audio feedback.",
    "technicalChallenges": [
      "Move undo with state snapshots: Each move saves a deep copy of the board (deepCopyMatrix) and a shallow copy of game metadata (modifyShallowCopy), then restores the previous state on undo while syncing the DOM.",
      "Mega hint area selection: Two-click selection of a rectangular board region with coordinate validation, temporary cell reveal, and cleanup via setTimeout, integrated with the existing hint and marking logic."
    ],
    "skillTags": [
      "Vanilla JavaScript",
      "DOM Manipulation",
      "Game Development",
      "2D Array Logic",
      "State Management",
      "Event Handling",
      "CSS Styling",
      "Recursive Algorithms",
      "Web Audio API"
    ],
    "myRole": "Sole developer of a client-side Minesweeper application (Sprint 1 coursework project, footer credits Adi Sabban).",
    "keyStrengths": [
      "Junior strengths: Solid grasp of game logic (mine placement, neighbor counts, flood-fill, victory conditions); separation of utilities vs. game logic; use of ES6 (spread, arrow functions, map); feature scope beyond a minimal Minesweeper (hints, undo, lives, dark mode).",
      "Growth areas visible in code: Global state and inline handlers instead of modular/event-delegation patterns; instructor code-review notes (@ CR) on naming, duplication, and structure; sound assets referenced but not present in the repo; some logic duplicated across hint/mega-hint flows."
    ],
    "collaboration": "Solo project",
    "links": {
      "github": "https://github.com/AdiSabban10/Minesweeper-game",
      "live": "https://adisabban10.github.io/Minesweeper-game/",
    }
  }
]
