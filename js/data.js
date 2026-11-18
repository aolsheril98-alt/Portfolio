/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR WHOLE WEBSITE.
   To add something new, copy one { ... }, block inside the right
   list, paste it under the last one (keep the comma), and change
   the text. Save, commit on GitHub, and the site updates.
   Newest items go FIRST in each list.
   ============================================================ */
window.PORTFOLIO = {

  /* ---------- Basic details ---------- */
  name: "Sheril Aol",
  email: "aolsheril98@gmail.com",
  phone: "+254 711 353 372",
  phoneLink: "+254711353372",
  location: "Ruaraka, Nairobi",
  cv: "docs/Sheril_Aol_CV.pdf",   // put your CV file in the docs folder, or "" to hide the button
  linkedin: "",                   // e.g. "https://www.linkedin.com/in/yourname" ("" hides the button)
  github: "",                     // e.g. "https://github.com/yourname"

  /* ---------- About me (add or remove paragraphs) ---------- */
  about: [
    "I’m a recent Bachelor of Science in Information Communication Technology graduate from Jaramogi Oginga Odinga University of Science and Technology (JOOUST), with a strong technical foundation in networking, Linux, virtualization, software development and databases.",
    "I combine an understanding of technology products with a record of dealing courteously with users, keeping accurate records and compiling reports. I’m keen to build a career in SaaS marketing, enterprise technology sales and client solution advisory."
  ],

  /* ---------- Skills ---------- */
  skills: [
    { icon: "👥", title: "Client Engagement & Communication", text: "Customer service, first-line client contact, and explaining technology clearly to non-technical users." },
    { icon: "📈", title: "Business & Digital Commerce", text: "E-business models, entrepreneurship, business processes and management information systems." },
    { icon: "☁️", title: "Cloud, Systems & Networking", text: "Linux/Unix administration, virtualization, cloud concepts, LAN/WAN setup and troubleshooting." },
    { icon: "🛡️", title: "IT Security & Support", text: "Firewalls and network defense, user account and password management, hardware, software and server support." },
    { icon: "</>", title: "Software & Data", text: "HTML/CSS, Python, C#, .NET, Java and database management." },
    { icon: "🤝", title: "Research, Records & Teamwork", text: "Market research, report writing, accurate records, Microsoft Office and ICT project management." }
  ],

  /* ---------- Work experience (newest first) ---------- */
  experience: [
    {
      period: "July 2026 – September 2026",
      role: "ICT Support",
      org: "Standard Group",
      points: [
        "Provided ICT support to staff, resolving network configuration problems and restoring connectivity.",
        "Handled user account issues, including lost usernames and forgotten passwords.",
        "Worked with servers as part of daily support tasks.",
        "Troubleshot hardware, software and network faults to keep users productive."
      ]
    },
    {
      period: "2024 – 2025",
      role: "Attachment",
      org: "Ministry of Education (Sub-County Office)",
      points: [
        "Configured and optimized office networks for stable LAN/WAN connectivity.",
        "Made field visits to schools to repair and maintain Digital Literacy Programme (DLP) equipment, including tablets and projectors.",
        "Compiled statistical records and prepared routine reports.",
        "Sorted, filed and dispatched official correspondence between the office and local schools."
      ]
    },
    {
      period: "2023 – 2025",
      role: "Office Clerk",
      org: "JOOUST",
      points: [
        "First point of contact for visitors and students, directing them to the right office.",
        "Maintained accurate, up-to-date student and staff records.",
        "Supported data entry for several departments and handled office equipment.",
        "Managed incoming and outgoing mail and distributed official memos."
      ]
    }
  ],

  /* ---------- Projects (newest first) ----------
     tools = small tags, link = GitHub/demo link ("" hides it)   */
  projects: [
    {
      icon: "📱",
      title: "AgriLink Masoko System (Mobile App)",
      text: "Designed a mobile application system, applying system analysis and design, user interface design and mobile app development.",
      tools: ["Android", "UI design", "System analysis"],
      link: "",
      linkLabel: "View on GitHub"
    },
    {
      icon: "🐧",
      title: "Linux Project",
      text: "Designed and carried out Linux-based projects, applying command-line administration, user and permission management, and system configuration.",
      tools: ["Linux", "Command line", "Permissions"],
      link: "",
      linkLabel: "View project"
    },
    {
      icon: "🖥️",
      title: "Virtualization Project",
      text: "Designed and set up a virtualized environment with virtual machines, running multiple operating systems on shared hardware.",
      tools: ["Virtual machines", "Operating systems"],
      link: "",
      linkLabel: "View project"
    }
  ],

  /* ---------- Education (newest first) ----------
     documents = files you put in the docs folder, e.g.
     { label: "Transcript", file: "docs/transcript.pdf" }          */
  education: [
    {
      period: "2022 – 2026",
      title: "BSc Information Communication Technology",
      school: "Jaramogi Oginga Odinga University of Science and Technology (JOOUST), School of Informatics and Innovation",
      note: "",
      documents: []
    },
    {
      period: "2018 – 2022",
      title: "Secondary education (KCSE)",
      school: "Missions of Hope Girls High School",
      note: "",                       // e.g. "Mean grade: B+"
      documents: []
    },
    {
      period: "2008 – 2017",
      title: "Primary education",
      school: "Missions of Hope Babadogo",
      note: "",
      documents: []
    }
  ],

  /* ---------- Certifications (leave [] to hide the section) ----------
     { year: "2026", title: "Cisco Networking Basics", issuer: "Cisco Networking Academy", file: "docs/cisco.pdf" }  */
  certifications: [],

  /* ---------- References ---------- */
  showReferencePhones: false,      // true = phone numbers appear on the public website
  references: [
    { name: "Dr. Solomon Ogara", role: "ICT Director, JOOUST", phone: "0704 745 611" },
    { name: "Annastacia Olang’o", role: "Dean of Students", phone: "0725 382 128" },
    { name: "Esther Linda", role: "Civil Engineer", phone: "0769 969 537" }
  ]
};
