import { createFileRoute } from '@tanstack/react-router'
import { Download } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const SKILLS = {
  Frontend: ['React 19', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
  Backend: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Drizzle ORM', 'Redis'],
  DevOps: ['Netlify', 'AWS', 'Docker', 'GitHub Actions', 'Vite', 'Turborepo'],
  Design: ['Figma', 'Design Systems', 'Motion Design', 'Accessibility', 'Radix UI'],
}

const TIMELINE = [
  {
    year: '2024 – Present',
    role: 'Senior Frontend Engineer',
    company: 'Initech',
    desc: 'Leading UI architecture for a next-gen SaaS platform serving 50k+ users. Reduced bundle size 40% and improved Core Web Vitals to green across all pages.',
  },
  {
    year: '2022 – 2024',
    role: 'Full-Stack Developer',
    company: 'Freelance',
    desc: 'Delivered 12+ production applications for startups and agencies. Specialized in React + Node.js stacks with a focus on performance and design quality.',
  },
  {
    year: '2021',
    role: 'Graduate — Web Development',
    company: 'Code School',
    desc: 'Intensive 9-month program covering modern full-stack development. Graduated top of cohort.',
  },
]

function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Header */}
        <section className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="space-y-6 flex-1">
            <h1 className="text-5xl font-bold">
              <span className="text-slate-100">About </span>
              <span className="gradient-text">Me</span>
            </h1>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hey — I'm Alex. I've been building things for the web for over five years, and I still get
                the same rush when a design clicks into place or a performance optimization pays off.
              </p>
              <p>
                My work lives at the intersection of engineering rigor and creative craft. I believe
                the best software is invisible — it just feels right. That conviction drives every
                decision I make, from API contracts to hover states.
              </p>
              <p>
                When I'm not shipping code, I'm probably exploring generative art, contributing to open-source,
                or making extremely strong opinions about typography.
              </p>
            </div>
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={16} />
              Download Résumé
            </a>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0 self-center">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-2xl blur-2xl scale-110" />
            <div className="relative w-56 h-64 rounded-2xl overflow-hidden border border-indigo-500/30">
              <img
                src="/.netlify/images?url=/headshot-on-white.jpg&w=448&h=512&fit=cover&q=90"
                alt="Alex Rivera"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Skills */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold gradient-text">Skills & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="glass-card p-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Timeline */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold gradient-text">Experience</h2>
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent" />
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-12 pb-10 last:pb-0">
                {/* Dot */}
                <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-900 shadow-lg shadow-indigo-500/50" />
                <div className="glass-card p-6 space-y-2">
                  <span className="text-xs font-mono text-indigo-400 tracking-wider">{item.year}</span>
                  <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
                  <p className="text-sm font-medium text-violet-400">{item.company}</p>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
