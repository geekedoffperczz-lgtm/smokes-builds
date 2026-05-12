import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Layers } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function netlifyImage(url: string, w: number, h: number) {
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${w}&h=${h}&fit=cover&q=85`
}

function Projects() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            <span className="text-slate-100">Project </span>
            <span className="gradient-text">Showcase</span>
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Selected work spanning web applications, design systems, and creative experiments.
            Each project represents a problem worth solving.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {allProjects.map((project) => (
            <div key={project._meta.path} className="glass-card flex flex-col overflow-hidden group">
              {/* Project image or gradient placeholder */}
              <div className="h-48 bg-gradient-to-br from-indigo-900/60 via-violet-900/40 to-slate-900/60 flex items-center justify-center border-b border-indigo-900/40 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={netlifyImage(project.image, 640, 384)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-indigo-400/50">
                    <Layers size={40} />
                    <span className="text-xs tracking-widest uppercase font-mono">{project.title}</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-violet-300 transition-colors"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
