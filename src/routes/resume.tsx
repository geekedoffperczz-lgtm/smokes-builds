import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            <span className="text-slate-100">My </span>
            <span className="gradient-text">Résumé</span>
          </h1>
          <p className="text-slate-400 max-w-xl">Professional experience and education history.</p>
          <div className="section-divider" />
        </div>

        {/* Career Summary */}
        <div className="glass-card p-8">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold text-violet-300">Career Summary</h2>
              <p className="text-slate-400 leading-relaxed">
                A passionate and driven full-stack developer seeking opportunities that leverage
                extensive frontend expertise while providing continuous growth. Goal: contribute
                to innovative projects that challenge and expand the skill set, making meaningful
                impacts through technology.
              </p>
            </div>
            <img
              src="/.netlify/images?url=/headshot-on-white.jpg&w=176&h=208&fit=cover&q=90"
              alt="Professional headshot"
              className="w-40 h-48 rounded-2xl object-cover border border-indigo-500/20 flex-shrink-0"
            />
          </div>
        </div>

        {/* Work Experience */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold gradient-text">Work Experience</h2>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <div key={job.jobTitle} className="glass-card p-7 space-y-5">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-100">{job.jobTitle}</h3>
                    <p className="text-sm font-medium text-violet-400">{job.company} — {job.location}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono text-indigo-300 border border-indigo-800/60 rounded-full bg-indigo-900/30">
                    {job.startDate} – {job.endDate ?? 'Present'}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">{job.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="prose prose-sm prose-invert max-w-none pt-2 text-slate-400"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold gradient-text">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <div key={education.school} className="glass-card p-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-100">{education.school}</h3>
                <p className="text-slate-400 leading-relaxed">{education.summary}</p>
                {education.content && (
                  <div
                    className="prose prose-sm prose-invert max-w-none pt-2 text-slate-400"
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
