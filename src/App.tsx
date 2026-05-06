import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  Code2,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const projects = [
  {
    title: 'TripNova AI',
    tag: 'AI Travel Planning',
    description:
      'An AI-first itinerary planner that transforms traveler preferences into adaptive, city-ready plans with a polished product experience.',
    metrics: ['LLM workflow', 'Personalized routes', 'Founder-ready demo'],
    icon: Globe2,
  },
  {
    title: 'Fintech Signal Lab',
    tag: 'ML + Markets',
    description:
      'Concept workspace for experimenting with feature engineering, risk-aware predictions, and responsible AI patterns for financial products.',
    metrics: ['Python', 'Forecasting', 'Risk thinking'],
    icon: BrainCircuit,
  },
  {
    title: 'MAUI.NET Mobile Suite',
    tag: 'Cross-platform Apps',
    description:
      'Mobile app development experience with .NET MAUI, focusing on responsive interfaces, reusable components, and practical delivery.',
    metrics: ['C#', '.NET MAUI', 'Mobile UX'],
    icon: Code2,
  },
]

const experiences = [
  {
    role: 'Public Relations & Event Manager',
    org: 'IET Club',
    detail:
      'Led communications, community engagement, and event execution for AI and technology-focused student initiatives.',
    icon: Users,
  },
  {
    role: 'AI & Technology Event Organizer',
    org: 'Student Tech Community',
    detail:
      'Designed event concepts, coordinated stakeholders, and created spaces for students to explore emerging AI tools and trends.',
    icon: CalendarDays,
  },
  {
    role: 'Mobile App Developer',
    org: 'MAUI.NET Projects',
    detail:
      'Built cross-platform mobile app features using modern .NET tooling, with emphasis on clear interaction flows and reliability.',
    icon: Workflow,
  },
]

const githubUsername = 'your-github-username'

const skills = [
  'Artificial Intelligence',
  'Machine Learning',
  'Product Strategy',
  'Fintech',
  'Startup Thinking',
  'React',
  'TypeScript',
  'Python',
  '.NET MAUI',
  'Event Leadership',
  'Public Relations',
  'UX Systems',
]

const aboutCards: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Singapore-based',
    text: 'Currently studying IT in Singapore and building a global perspective before postgraduate AI study in Australia.',
    icon: MapPin,
  },
  {
    title: 'UNSW AI pathway',
    text: 'Incoming Master of IT (AI) student focused on machine learning, applied systems, and responsible innovation.',
    icon: GraduationCap,
  },
  {
    title: 'Startup mindset',
    text: 'Drawn to fast-moving teams where prototypes, users, and data-driven iteration create momentum.',
    icon: Rocket,
  },
]

const timeline = [
  {
    year: 'Now',
    title: 'IT Student in Singapore',
    detail: 'Building technical foundations while exploring AI products, fintech ideas, and startup ecosystems.',
  },
  {
    year: '2026',
    title: 'Incoming UNSW Master of IT (AI)',
    detail: 'Preparing to specialize in artificial intelligence, machine learning systems, and applied innovation.',
  },
  {
    year: 'Next',
    title: 'Internship + Startup Opportunities',
    detail: 'Seeking teams where product velocity, engineering craft, and responsible AI meet real-world impact.',
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-35" />
      </div>

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  )
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
        <a href="#hero" className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.28em] text-cyan-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/30">
            AI
          </span>
          PORTFOLIO
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {['About', 'Projects', 'Experience', 'Skills', 'Timeline', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-200">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
            <Sparkles size={16} /> Incoming UNSW Master of IT (AI) student
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building intelligent products for the{' '}
            <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent">
              AI-native future.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am an IT student in Singapore, incoming UNSW Master of IT (AI) student, and aspiring AI engineer/startup founder interested in machine learning, fintech, and high-impact product ecosystems.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="glow-button group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} /> View GitHub <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/[0.12]" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Status</p>
                <h2 className="mt-2 text-2xl font-bold">Opportunity-ready</h2>
              </div>
              <div className="rounded-2xl bg-emerald-300/15 p-3 text-emerald-200">
                <ShieldCheck />
              </div>
            </div>
            <div className="space-y-4">
              {['AI product builder', 'Fintech explorer', 'Community event leader'].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, index % 2 ? -6 : 6, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/80" />
                    <span className="font-medium text-slate-100">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {['AI', 'ML', 'SaaS'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                  <p className="font-display text-2xl font-bold text-cyan-100">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">focus</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <p className="font-display text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About me" title="A technical operator blending AI curiosity with product instincts.">
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {aboutCards.map(({ title, text, icon: Icon }) => (
          <motion.article key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-6">
            <Icon className="mb-5 text-cyan-200" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-3 text-slate-300">{text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Animated project cards designed for internship and founder conversations.">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} className="glass-card group relative min-h-[25rem] overflow-hidden p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl transition group-hover:bg-fuchsia-300/25" />
            <project.icon className="relative mb-8 text-cyan-200" size={36} />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200">{project.tag}</p>
            <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-sm text-slate-200">
                  {metric}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 glass-card flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">GitHub integration</p>
          <h3 className="mt-2 text-2xl font-bold">Live coding hub for AI experiments and product prototypes.</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Replace the placeholder username with your GitHub handle to route recruiters and collaborators to repositories, commits, and technical proof-of-work.
          </p>
        </div>
        <a className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-6 py-3 font-semibold text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-200/15" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
          <Github size={18} /> github.com/{githubUsername}
        </a>
      </motion.div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Leadership, delivery, and community-building experience around technology.">
      <div className="mt-10 grid gap-5">
        {experiences.map((item) => (
          <motion.article key={item.role} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card flex flex-col gap-5 p-6 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-200">
              <item.icon />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">{item.org}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.role}</h3>
              <p className="mt-2 text-slate-300">{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A stack built for AI prototypes, polished interfaces, and practical delivery.">
      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.08] px-5 py-3 text-sm font-semibold text-cyan-50 shadow-lg shadow-cyan-950/20 backdrop-blur"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </Section>
  )
}

function Timeline() {
  return (
    <Section id="timeline" eyebrow="Timeline" title="From Singapore IT foundations to postgraduate AI specialization at UNSW.">
      <div className="mt-12 border-l border-cyan-200/20 pl-6">
        {timeline.map((item) => (
          <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.15rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-lg shadow-cyan-300/50" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">{item.year}</p>
            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
            <p className="mt-2 max-w-2xl text-slate-300">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">Let’s build intelligent products together.</h2>
            <p className="mt-5 max-w-2xl text-slate-300">
              Open to AI internships, fintech product conversations, startup opportunities, and networking with builders across Singapore, Sydney, and beyond.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="glow-button inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950" href="mailto:hello@example.com">
              <Mail size={18} /> Email me
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-200/60" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
      <footer className="py-10 text-center text-sm text-slate-500">
        <Bot className="mx-auto mb-3 text-cyan-300" /> Designed with an AI-native, startup-ready aesthetic.
      </footer>
    </section>
  )
}

export default App
