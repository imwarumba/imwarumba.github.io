import {
  ArrowLeft,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

const experience = [
  {
    period: "NOV 2025 — PRESENT",
    organisation: "JAMIITOWN",
    role: "IT Manager",
    summary:
      "Lead technology strategy and implementation across software delivery, enterprise systems, infrastructure, websites, security response and operational technology.",
    points: [
      "Architecting and developing a custom Odoo 18 ERP covering procurement, RFs, LPOs, GRNs, inventory, site stock, reporting and construction operations.",
      "Developing and maintaining custom POS modules, including stock governance and M-Pesa integrations.",
      "Administering Linux production systems, deployments, GitLab workflows, Google Workspace and Nextcloud.",
      "Engineering and maintaining web platforms, integrations, analytics, conversion tracking and digital infrastructure.",
      "Producing technical documentation, operational standards and cross-functional systems used by procurement, finance, stores, architecture and marketing.",
    ],
  },
  {
    period: "2022 — 2023",
    organisation: "UNIVERSITY OF GLASGOW / CENSIS",
    role: "Group Chairperson · SH08 · Sound Classification Project",
    summary:
      "Led a student team exploring edge machine learning for environmental sound-event classification on an activity-monitoring platform.",
    points: [
      "Chaired project meetings with CENSIS, the academic coach and assessors, and presented progress throughout the project lifecycle.",
      "Coordinated external dataset sourcing needed to train and evaluate the machine-learning approach.",
      "Worked on a problem spanning audio classification, embedded systems and edge inference for social-housing and independent-living applications.",
      "CENSIS retained ownership of the project IP; public descriptions are limited to the project scope and my contribution.",
    ],
  },
  {
    period: "2020",
    organisation: "M-PESA FOUNDATION ACADEMY",
    role: "Volunteer",
    summary:
      "Supported administration, communications and digital-media work while gaining early exposure to Arduino and electronics.",
    points: [
      "Designed, edited and printed posters and certificates for school events.",
      "Proofread student articles and wrote reports on school activities, events and trips.",
      "Captured photography and video for school activities and communications.",
    ],
  },
];

const education = [
  {
    period: "2021 — DEC 2023",
    institution: "University of Glasgow",
    qualification: "BSc Computer Science",
    result: "Merit",
  },
  {
    period: "2020 — 2021",
    institution: "Glasgow International College",
    qualification: "Foundation Certificate in Science & Engineering",
    result: "Pass · Pathway to Computer Science at the University of Glasgow",
  },
  {
    period: "2016 — 2019",
    institution: "M-Pesa Foundation Academy",
    qualification: "KCSE",
    result: "B-",
  },
  {
    period: "2010 — 2015",
    institution: "Bambakofi Academy",
    qualification: "KCPE",
    result: "400 / 500",
  },
];

const projects = [
  {
    title: "Enhotech Operations ERP",
    text: "Custom construction-operations ERP on Odoo 18 covering requests, procurement demand, LPOs, GRNs, inventory, site stock, material issues, tool workflows and reporting.",
    tags: ["Odoo", "Python", "PostgreSQL", "XML"],
  },
  {
    title: "Jamiitown POS Modernisation",
    text: "Migration and customisation work around POS stock governance, M-Pesa payment flows and management reporting.",
    tags: ["Odoo", "Python", "JavaScript", "Docker"],
  },
  {
    title: "GLEER",
    text: "Interactive product-configuration and commerce platform for customizable glass-and-resin products with structured configuration logic and online ordering.",
    tags: ["React", "Vite", "Supabase", "M-Pesa"],
    link: "https://gleer.ai",
  },
  {
    title: "Sound Classification",
    text: "University of Glasgow / CENSIS team project investigating edge machine learning for environmental sound-event categorisation.",
    tags: ["Machine Learning", "Audio", "Embedded Systems"],
  },
  {
    title: "Stream Rating",
    text: "Django web application built while progressing through the Tango with Django syllabus. It used the Twitch API to surface the twenty most popular games and the leading streamers within each game by viewership.",
    tags: ["Django", "Python", "Twitch API", "MySQL"],
  },
  {
    title: "Video Downloader",
    text: "A lightweight web interface around terminal-based YouTube download commands.",
    tags: ["Web", "CLI"],
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "Java", "C", "C++", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    label: "Web & Application",
    items: ["React", "Vite", "Laravel", "Django", "WordPress", "WooCommerce", "Elementor"],
  },
  {
    label: "Enterprise & Data",
    items: ["Odoo 18", "PostgreSQL", "MySQL", "XML", "ORM", "Supabase"],
  },
  {
    label: "Infrastructure",
    items: ["Linux", "Ubuntu", "Docker", "Git", "GitLab", "SSH", "Hetzner", "Nextcloud", "Google Workspace"],
  },
  {
    label: "Integrations & AI",
    items: ["REST APIs", "M-Pesa", "OpenAI", "Prompt Engineering", "Automation", "AI-assisted media"],
  },
  {
    label: "Marketing Technology",
    items: ["Google Ads", "Meta Ads", "Google Analytics", "GTM", "Search Console", "Conversion Tracking"],
  },
];

const domains = [
  "Enterprise software engineering",
  "ERP architecture & Odoo development",
  "Business process engineering",
  "Linux, Docker & cloud infrastructure",
  "Systems administration",
  "API development & integrations",
  "AI integration & automation",
  "Marketing technology & analytics",
  "Technical documentation",
  "Project leadership",
];

function CVPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f5f5f5]">
      <style>{`
        @media print {
          @page { size: A4; margin: 14mm; }
          html, body { background: white !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .cv-shell { background: white !important; color: #111 !important; max-width: none !important; padding: 0 !important; }
          .cv-shell * { border-color: #d4d4d4 !important; }
          .cv-muted { color: #555 !important; }
          .cv-accent { color: #385f5b !important; }
          .cv-chip { color: #333 !important; border-color: #ccc !important; background: transparent !important; }
          .no-print { display: none !important; }
          .print-break-avoid { break-inside: avoid; }
          a { color: inherit !important; text-decoration: none !important; }
        }
      `}</style>

      <div className="no-print sticky top-0 z-50 border-b border-white/5 bg-[#090909]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center" aria-label="Back to portfolio">
              <img
                src="/logo.png"
                alt="Ismail Mwarumba Mashine"
                className="h-8 w-auto"
              />
            </a>

            <a
              href="/"
              className="font-mono inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-[#b7d6d1]"
            >
              <ArrowLeft size={16} />
              Portfolio
            </a>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="font-mono inline-flex items-center gap-2 rounded-full border border-[#b7d6d1]/25 px-4 py-2 text-sm text-[#b7d6d1] transition hover:bg-[#b7d6d1]/10"
          >
            <Printer size={15} />
            Print / Save PDF
          </button>
        </div>
      </div>

      <article className="cv-shell mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <header className="border-b border-white/10 pb-10">
          <p className="font-mono cv-accent text-sm uppercase tracking-[0.28em] text-[#b7d6d1]">
            Curriculum Vitae
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Ismail Mwarumba Mashine
          </h1>

          <p className="font-mono cv-muted mt-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Systems · Software · Infrastructure · Operations
          </p>

          <div className="cv-muted mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
            <a href="mailto:mwarumba254@outlook.com" className="inline-flex items-center gap-2 hover:text-[#b7d6d1]">
              <Mail size={15} />
              mwarumba254@outlook.com
            </a>
            <a href="tel:+254794795337" className="inline-flex items-center gap-2 hover:text-[#b7d6d1]">
              <Phone size={15} />
              +254 794 795 337
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} />
              Kenya
            </span>
            <a
              href="https://github.com/imwarumba"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#b7d6d1]"
            >
              <ExternalLink size={15} />
              github.com/imwarumba
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-mwarumba-766aa7222/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#b7d6d1]"
            >
              <ExternalLink size={15} />
              linkedin.com/in/ismail-mwarumba-766aa7222
            </a>
          </div>
        </header>

        <section className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
              01 / Profile
            </p>
          </div>
          <div>
            <p className="max-w-4xl text-xl leading-9 text-neutral-300 cv-muted">
              Technology professional working across enterprise software engineering, ERP architecture,
              infrastructure, web platforms, integrations, artificial intelligence and operational systems.
              My work focuses on building technology that survives real-world use: understandable workflows,
              reliable infrastructure, traceable behaviour and interfaces that support the system rather than hide it.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
              02 / Domains
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {domains.map((domain) => (
              <div key={domain} className="font-mono cv-muted text-sm text-neutral-400">
                {domain}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
            03 / Experience
          </p>

          <div className="mt-8 border-t border-white/10">
            {experience.map((item) => (
              <div
                key={`${item.period}-${item.organisation}`}
                className="print-break-avoid grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[190px_1fr]"
              >
                <div>
                  <p className="font-mono cv-accent text-sm text-[#b7d6d1]">{item.period}</p>
                </div>
                <div>
                  <p className="font-mono cv-muted text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {item.organisation}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium">{item.role}</h2>
                  <p className="cv-muted mt-4 max-w-4xl leading-7 text-neutral-400">{item.summary}</p>
                  <ul className="cv-muted mt-5 space-y-2 text-sm leading-6 text-neutral-400">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="cv-accent text-[#b7d6d1]">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
            04 / Education
          </p>

          <div className="mt-8 border-t border-white/10">
            {education.map((item) => (
              <div
                key={`${item.period}-${item.institution}`}
                className="print-break-avoid grid gap-5 border-b border-white/10 py-6 lg:grid-cols-[190px_1fr]"
              >
                <p className="font-mono cv-accent text-sm text-[#b7d6d1]">{item.period}</p>
                <div>
                  <h3 className="text-xl font-medium">{item.institution}</h3>
                  <p className="cv-muted mt-1 text-neutral-400">{item.qualification}</p>
                  <p className="font-mono cv-muted mt-2 text-xs uppercase tracking-[0.14em] text-neutral-600">
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
            05 / Selected Projects
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="print-break-avoid rounded-2xl border border-white/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="no-print cv-accent text-[#b7d6d1]"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>
                <p className="cv-muted mt-3 text-sm leading-6 text-neutral-400">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cv-chip font-mono rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
            06 / Technical Skills
          </p>

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="print-break-avoid">
                <h3 className="font-mono text-sm uppercase tracking-[0.16em]">{group.label}</h3>
                <p className="cv-muted mt-3 leading-7 text-neutral-400">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
              07 / Leadership
            </p>
          </div>
          <div className="cv-muted leading-8 text-neutral-400">
            Strategic planning · Systems thinking · Technical leadership · Stakeholder management · Project
            management · Business analysis · Problem solving · Documentation · Communication · Team leadership
          </div>
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="font-mono cv-accent text-xs uppercase tracking-[0.25em] text-[#b7d6d1]">
              08 / Additional
            </p>
          </div>
          <div className="space-y-5 cv-muted text-neutral-400">
            <p><span className="text-[#f5f5f5]">Languages:</span> English · Kiswahili</p>
            <p><span className="text-[#f5f5f5]">Activities:</span> Glasgow University GUTS hackathons and IT competitions · M-Pesa Foundation Academy Alumni Leadership Conference · Kenya Scouts Association · Duke of Edinburgh / Presidential Award</p>
            <p><span className="text-[#f5f5f5]">Interests:</span> Tennis · Photography · Puzzles · command-line games · networking labs · embedded systems</p>
          </div>
        </section>

        <footer className="cv-muted border-t border-white/10 pt-8 font-mono text-xs text-neutral-600">
          Living professional CV · ismail / systems · software · infrastructure · operations
        </footer>
      </article>
    </main>
  );
}

export default CVPage;
