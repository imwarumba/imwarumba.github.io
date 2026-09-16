import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Folder,
  FileText,
  Phone,
  Server,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

import { motion } from "framer-motion";

const featuredProject = {
  title: "GLEER",
  eyebrow: "Live Product",
  description:
    "An interactive product configuration and commerce platform for customizable glass and resin products, built around structured product logic, configuration flows and online ordering.",
  tags: ["React", "Vite", "Supabase", "M-Pesa"],
  link: "https://gleer.ai",
};

const privateProjects = [
  {
    title: "Jamiitown Operations ERP",
    description:
      "Odoo-based operations system covering requisitions, procurement demand, LPOs, GRNs, site stock, material issues and tool workflows.",
    tags: ["Odoo", "Python", "PostgreSQL", "XML"],
    type: "Private System",
  },
  {
    title: "Jamiitown POS Migration",
    description:
      "Migration and modernization of POS modules including M-Pesa payments, stock controls and management reporting.",
    tags: ["Odoo", "JavaScript", "Python", "Docker"],
    type: "Private System",
  },
  {
    title: "Bambakofi Academy",
    description:
      "School platform built around Laravel, Filament and PostgreSQL with structured administration and content management.",
    tags: ["Laravel", "Filament", "PostgreSQL"],
    type: "Private Project",
  },
  {
    title: "Stream Rating",
    description:
      "A Django web application built while progressing through the Tango with Django syllabus, using the Twitch API to surface the most popular games and the leading streamers within each game by viewership.",
    tags: ["Django", "Python", "Twitch API", "MySQL"],
    type: "Personal Project",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Laravel",
  "Python",
  "Odoo",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "Linux",
  "Git",
  "GitLab",
  "Nextcloud",
  "Google Workspace",
  "M-Pesa Integrations",
];

const systemAreas = [
  {
    icon: TerminalSquare,
    title: "Software",
    text: "Web apps, APIs, integrations and internal tools.",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    text: "ERP, POS, workflows, reporting and data.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    text: "Linux, Docker, deployment, backups and services.",
  },
  {
    icon: ShieldCheck,
    title: "IT Operations",
    text: "Security response, administration and reliability.",
  },
];

const experience = [
  {
    period: "NOV 2025 — PRESENT",
    title: "Production systems & technology",
    organisation: "Jamiitown",
    role: "IT Manager",
    description:
      "Leading software delivery and operational technology across ERP, POS, infrastructure, websites, integrations, administration, security response and the systems the business relies on day to day.",
    tags: ["Software", "Infrastructure", "ERP", "Operations"],
  },
  {
    period: "2022 — 2023",
    title: "Sound classification",
    organisation: "University of Glasgow / CENSIS",
    role: "Group Chairperson · SH08",
    description:
      "Led a student team exploring edge machine learning for environmental sound-event classification on an activity-monitoring platform, coordinating project meetings, progress presentations and external dataset sourcing. CENSIS retained the project IP.",
    tags: ["Machine Learning", "Embedded Systems", "Audio", "Leadership"],
  },
  {
    period: "2021 — DEC 2023",
    title: "Computer Science",
    organisation: "University of Glasgow",
    role: "BSc Computer Science · Merit",
    description:
      "Developed a foundation across software engineering, algorithms, data, machine learning and systems, graduating in December 2023.",
    tags: ["Computer Science", "Software Engineering", "Systems"],
  },
  {
    period: "2020 — 2021",
    title: "Science & Engineering pathway",
    organisation: "Glasgow International College",
    role: "Foundation Certificate in Science & Engineering",
    description:
      "Completed the science and engineering pathway used to qualify for progression into Computer Science at the University of Glasgow.",
    tags: ["Science", "Engineering", "University Pathway"],
  },
  {
    period: "2020",
    title: "Digital media & early electronics",
    organisation: "M-Pesa Foundation Academy",
    role: "Volunteer",
    description:
      "Supported communications and digital media work while gaining early exposure to Arduino and electronics — an interest that continues through embedded-system experimentation today.",
    tags: ["Arduino", "Digital Media", "Communication"],
  },
];

const principles = [
  {
    number: "01",
    title: "Function before polish",
    text: "If the underlying system is wrong, a beautiful interface only hides the problem.",
  },
  {
    number: "02",
    title: "Traceability over magic",
    text: "I prefer systems where actions, state changes and failures can be understood and followed.",
  },
  {
    number: "03",
    title: "Simple systems survive",
    text: "Complexity needs to earn its place. The best system is often the smallest one that solves the problem well.",
  },
  {
    number: "04",
    title: "Production is the real test",
    text: "Software is not finished when it runs locally. The real test is whether people can rely on it every day.",
  },
];

const rabbitHoles = [
  {
    name: "bashcrawl/",
    title: "Bashcrawl",
    description:
      "A terminal dungeon for learning Bash by navigating directories, inspecting files and solving command-line puzzles instead of reading a conventional tutorial.",
    command: "$ cd bashcrawl && ls",
    output: "cellar/  armoury/  scrolls/  treasure/",
  },
  {
    name: "tryhackme/",
    title: "TryHackMe",
    description:
      "Hands-on cybersecurity labs covering Linux, enumeration, networking, web security and defensive and offensive security fundamentals.",
    command: "$ nmap -sV target",
    output: "enumerate  understand  test  learn",
  },
  {
    name: "networking_labs/",
    title: "Networking Labs",
    description:
      "Routing, switching, subnetting, DNS, DHCP, firewall rules and packet flow — building networks to understand what is actually happening between endpoints.",
    command: "$ traceroute target && tcpdump",
    output: "routes  vlans  dns  packets  firewalls",
  },
  {
    name: "wokwi/",
    title: "Wokwi",
    description:
      "Arduino, ESP32 and embedded-system experiments in a browser-based electronics simulator — continuing an interest in hardware that started before university.",
    command: "$ build && simulate",
    output: "arduino  esp32  sensors  circuits",
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.65,
    ease: "easeOut" as const,
  },
};

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-mono mb-3 text-sm uppercase tracking-[0.25em] text-[#b7d6d1]">
      {children}
    </p>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-[#f5f5f5]">
      {/* GLOBAL GRID */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] grid-background" />

      {/* SUBTLE ACCENT GLOW */}
      <div className="pointer-events-none fixed left-1/2 top-[-350px] z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#b7d6d1]/5 blur-[160px]" />

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#090909]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="Back to top">
            <img
              src="/logo.png"
              alt="Ismail Mwarumba Mashine"
              className="h-9 w-auto"
            />
          </a>

          <div className="font-mono hidden gap-8 text-sm text-neutral-500 md:flex">
            <a href="#work" className="transition hover:text-[#b7d6d1]">
              Work
            </a>

            <a
              href="#experience"
              className="transition hover:text-[#b7d6d1]"
            >
              Experience
            </a>

            <a href="#about" className="transition hover:text-[#b7d6d1]">
              About
            </a>

            <a href="#stack" className="transition hover:text-[#b7d6d1]">
              Stack
            </a>

            <a
              href="#rabbit-holes"
              className="transition hover:text-[#b7d6d1]"
            >
              Rabbit Holes
            </a>

            <a href="#contact" className="transition hover:text-[#b7d6d1]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-mono mb-4 text-xl font-bold uppercase tracking-[0.16em] text-[#b7d6d1] sm:text-2xl lg:text-3xl"
          >
            Ismail Mwarumba Mashine
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="font-mono mb-8 text-xs uppercase tracking-[0.25em] text-neutral-600 sm:text-sm"
          >
            SYSTEMS · SOFTWARE · INFRASTRUCTURE · OPERATIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            I build systems
            <span className="block text-neutral-500">
              that actually run.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl"
          >
            Working across software, enterprise systems, infrastructure,
            integrations and operational technology — from architecture and
            implementation to deployment and everyday use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#b7d6d1] px-5 py-3 text-sm font-medium text-[#090909] transition hover:bg-[#c7e0dc]"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-300 transition hover:border-[#b7d6d1]/50 hover:text-[#b7d6d1]"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="font-mono mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/5 pt-5 text-xs uppercase tracking-[0.18em] text-neutral-600"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7d6d1]" />
              Status / Building
            </span>

            <span>Location / Kenya</span>
            <span>Focus / Systems + Software</span>
          </motion.div>
        </motion.div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="mb-14">
            <SectionLabel>01 / Selected work</SectionLabel>

            <h2 className="text-4xl font-semibold sm:text-5xl">
              Built for real use.
            </h2>
          </div>

          {/* FEATURED PROJECT */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2rem] border border-[#b7d6d1]/20 bg-white/[0.025] p-8 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-80 w-80 rounded-full bg-[#b7d6d1]/5 blur-[90px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="font-mono mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">
                  <span className="flex items-center gap-2 text-[#b7d6d1]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b7d6d1]" />
                    Live
                  </span>

                  <span className="text-neutral-600">
                    / Featured project
                  </span>
                </div>

                <h3 className="text-4xl font-semibold sm:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                  {featuredProject.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded-full border border-[#b7d6d1]/15 px-3 py-1 text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono mt-10 inline-flex items-center gap-2 rounded-full bg-[#b7d6d1] px-5 py-3 text-sm font-medium text-[#090909] transition hover:bg-[#c7e0dc]"
                >
                  View live product
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                    Project focus
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-sm text-neutral-600">
                        Product configuration
                      </p>
                      <p className="mt-1 text-neutral-300">
                        Structured options and product logic.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-600">
                        Commerce
                      </p>
                      <p className="mt-1 text-neutral-300">
                        Cart, checkout and order flows.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-600">
                        Integrations
                      </p>
                      <p className="mt-1 text-neutral-300">
                        Supabase data flows and M-Pesa payments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="font-mono mt-10 text-xs uppercase tracking-[0.18em] text-[#b7d6d1]">
                  Public / Interactive
                </div>
              </div>
            </div>
          </motion.article>

          {/* PRIVATE / INTERNAL WORK */}
          <div className="mt-12">
            <p className="font-mono mb-5 text-xs uppercase tracking-[0.22em] text-neutral-600">
              Other systems / Internal &amp; personal work
            </p>

            <div className="grid gap-5 lg:grid-cols-3">
              {privateProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -4 }}
                  className="group flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#b7d6d1]/20"
                >
                  <div className="mb-10 flex items-start justify-between gap-4">
                    <Code2 className="shrink-0 text-neutral-600 transition group-hover:text-[#b7d6d1]" />

                    <span className="font-mono text-right text-[11px] uppercase tracking-[0.15em] text-neutral-700">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono mt-auto pt-8 text-xs uppercase tracking-[0.15em] text-neutral-700">
                    {project.type === "Personal Project"
                      ? "Personal / Archived project"
                      : "Internal / Source private"}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="mb-16">
            <SectionLabel>02 / Experience</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-semibold sm:text-5xl">
              Built through software,
              <span className="text-neutral-500">
                {" "}
                systems and operations.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.organisation}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[170px_1fr]"
              >
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-700">
                    0{index + 1}
                  </div>

                  <div className="font-mono mt-3 text-sm text-[#b7d6d1]">
                    {item.period}
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-2xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-neutral-400">
                      {item.organisation}
                    </p>

                    <p className="font-mono mt-1 text-xs uppercase tracking-[0.15em] text-neutral-600">
                      {item.role}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-2xl leading-7 text-neutral-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-neutral-600"
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10"
        >
          <div>
            <SectionLabel>03 / About</SectionLabel>

            <h2 className="text-4xl font-semibold sm:text-5xl">
              Somewhere between software engineer and systems operator.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-neutral-400">
            <p>
              My work sits at the intersection of software development,
              infrastructure and business operations. I design systems, deploy
              them, troubleshoot them and keep them useful after launch.
            </p>

            <p>
              That means I might spend one day working on ERP procurement
              workflows, another deploying Linux services, and another building
              a customer-facing React application.
            </p>

            <p>
              I enjoy understanding how the whole system fits together rather
              than limiting myself to one layer of the stack.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative z-10 border-t border-white/5">
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="relative overflow-hidden border-y border-white/10 py-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] grid-background" />

            <div className="relative">
              <p className="font-mono mb-8 text-xs uppercase tracking-[0.3em] text-[#b7d6d1]">
                // Design principle
              </p>

              <h2 className="max-w-5xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
                I build from the
                <span className="text-neutral-500"> inside out.</span>
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
                Architecture, workflow and reliability come first. A system
                should solve the problem before it tries to look impressive.
                Once the foundations work, the interface earns the attention.
              </p>

              <div className="font-mono mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-neutral-600">
                <span>01 / Function</span>
                <span>02 / Reliability</span>
                <span>03 / Usability</span>
                <span className="text-[#b7d6d1]">
                  04 / Polish
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW I WORK */}
      <section className="relative z-10 border-t border-white/5">
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="mb-14">
            <SectionLabel>04 / How I work</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-semibold sm:text-5xl">
              Principles that survive contact with production.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {principles.map((principle) => (
              <motion.div
                key={principle.number}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="bg-[#090909] p-8 sm:p-10"
              >
                <div className="font-mono text-sm text-[#b7d6d1]">
                  {principle.number}
                </div>

                <h3 className="mt-12 text-2xl font-medium">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-neutral-500">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STACK */}
      <section
        id="stack"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>05 / Toolkit</SectionLabel>

              <h2 className="text-4xl font-semibold sm:text-5xl">
                Technologies I work with.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-neutral-300 transition hover:border-[#b7d6d1]/30 hover:text-[#b7d6d1]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {systemAreas.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-white/10 p-6 transition-colors hover:border-[#b7d6d1]/25"
              >
                <Icon className="mb-10 text-neutral-600 transition group-hover:text-[#b7d6d1]" />

                <h3 className="text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RABBIT HOLES */}
      <section
        id="rabbit-holes"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="mb-14">
            <SectionLabel>06 / Rabbit holes</SectionLabel>

            <h2 className="max-w-4xl text-4xl font-semibold sm:text-5xl">
              Curiosity has terrible
              <span className="text-neutral-500"> time management.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-neutral-500">
              Things I disappear into because the question became more
              interesting than whatever I was supposed to be doing.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070707]">
            {/* TERMINAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="font-mono flex items-center gap-3 text-xs text-neutral-600">
                <TerminalSquare size={15} />
                ismail@localhost:~/rabbit_holes
              </div>

              <div className="font-mono text-xs text-[#b7d6d1]">
                bash
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              {rabbitHoles.map((hole, index) => (
                <motion.div
                  key={hole.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  className="group border-b border-white/10 p-7 last:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r-0 lg:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="font-mono flex items-center gap-3 text-sm text-[#b7d6d1]">
                    <Folder size={16} />
                    {hole.name}
                  </div>

                  <h3 className="mt-8 text-2xl font-medium">
                    {hole.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-neutral-500">
                    {hole.description}
                  </p>

                  <div className="font-mono mt-8 rounded-xl border border-white/5 bg-black/40 p-4 text-xs">
                    <div className="text-[#b7d6d1]">
                      {hole.command}
                    </div>

                    <div className="mt-2 text-neutral-600">
                      {hole.output}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="font-mono border-t border-white/10 px-6 py-5 text-xs text-neutral-600">
              <span className="text-[#b7d6d1]">&gt;</span>{" "}
              curiosity has terrible time management.
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="ml-1 text-[#b7d6d1]"
              >
                _
              </motion.span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="relative z-10 border-t border-white/5">
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#b7d6d1]/5 blur-[80px]" />

            <SectionLabel>07 / Currently building</SectionLabel>

            <h2 className="relative max-w-4xl text-3xl font-semibold sm:text-5xl">
              Modernizing business systems while building new digital products.
            </h2>

            <p className="relative mt-6 max-w-2xl leading-7 text-neutral-400">
              Current work spans ERP lifecycle improvements, POS modernization,
              web applications, infrastructure and new customer-facing
              platforms.
            </p>

            <div className="font-mono relative mt-8 flex items-center gap-3 text-sm text-neutral-500">
              <motion.span
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#b7d6d1]"
              />

              STATUS: ACTIVE
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/5"
      >
        <motion.div
          {...reveal}
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
        >
          <SectionLabel>08 / Contact</SectionLabel>

          <h2 className="max-w-4xl text-4xl font-semibold sm:text-6xl">
            Want to build something useful?
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:mwarumba254@outlook.com"
              className="rounded-full bg-[#b7d6d1] px-5 py-3 text-sm font-medium text-[#090909] transition hover:bg-[#c7e0dc]"
            >
              Email me
            </a>

            <a
              href="https://github.com/imwarumba"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-300 transition hover:border-[#b7d6d1]/40 hover:text-[#b7d6d1]"
            >
              <ExternalLink size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ismail-mwarumba-766aa7222/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-300 transition hover:border-[#b7d6d1]/40 hover:text-[#b7d6d1]"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>

            <a
              href="tel:+254794795337"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-300 transition hover:border-[#b7d6d1]/40 hover:text-[#b7d6d1]"
            >
              <Phone size={16} />
              +254 794 795 337
            </a>

            <a
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-[#b7d6d1]/25 px-5 py-3 text-sm text-[#b7d6d1] transition hover:bg-[#b7d6d1]/10"
            >
              <FileText size={16} />
              View CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="font-mono mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-neutral-600 sm:flex-row sm:justify-between lg:px-10">
          <span>© 2026 Ismail Mwarumba Mashine</span>

          <span>
            React · Vite · TypeScript
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;