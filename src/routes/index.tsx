import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Layers, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const FEATURED_SKILLS = ['React', 'TypeScript', 'Node.js', 'TanStack', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'AWS']

function Home() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <section className="flex flex-col lg:flex-row items-center gap-16 py-16 lg:py-24">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              <Sparkles size={14} />
              Available for new projects
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-100">Crafting</span>
                <br />
                <span className="gradient-text">Digital Worlds</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Full-stack developer & creative technologist. I build performant,
                beautiful web applications that people love to use.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                Get in Touch
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {FEATURED_SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl scale-110" />
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-indigo-500/30">
              <img
                src="/.netlify/images?url=/headshot-on-white.jpg&w=576&h=640&fit=cover&q=85"
                alt="Alex Rivera"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* What I Do */}
        <section className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text">What I Do</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From concept to deployment, I handle the full spectrum of modern web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: 'Frontend Engineering',
                desc: 'Pixel-perfect UIs with React, TypeScript, and modern CSS. Performance-obsessed and accessibility-first.',
                color: 'text-indigo-400',
              },
              {
                icon: Layers,
                title: 'Full-Stack Systems',
                desc: 'Robust APIs, database design, and cloud infrastructure that scale gracefully under pressure.',
                color: 'text-violet-400',
              },
              {
                icon: Sparkles,
                title: 'Creative Direction',
                desc: 'Design systems, motion, and interactive experiences that make products feel alive and intentional.',
                color: 'text-cyan-400',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-8 space-y-4">
                <item.icon className={`${item.color} w-8 h-8`} />
                <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="py-16 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-100">
            Ready to build something{' '}
            <span className="gradient-text">extraordinary?</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Let's collaborate on your next project. I'm always open to interesting ideas.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-base">
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </section>

      </div>
    </div>
  )
}
