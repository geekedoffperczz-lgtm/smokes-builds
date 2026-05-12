import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-12 text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-100">Post not found</h1>
          <Link to="/" className="text-indigo-400 hover:text-violet-300 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-300 transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <article className="glass-card p-10 space-y-8">
          <header className="space-y-5">
            <h1 className="text-4xl font-bold text-slate-100 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <Calendar size={14} />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="section-divider" />

          <div
            className="prose prose-invert prose-sm max-w-none prose-p:text-slate-400 prose-headings:text-slate-100 prose-a:text-indigo-400 prose-code:text-violet-300 prose-strong:text-slate-200"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
