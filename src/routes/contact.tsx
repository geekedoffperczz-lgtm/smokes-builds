import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@alexrivera-dev',
    href: 'https://github.com',
    color: 'hover:text-slate-100',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Alex Rivera',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@alexrivera',
    href: 'https://twitter.com',
    color: 'hover:text-sky-400',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'alex@example.com',
    href: 'mailto:alex@example.com',
    color: 'hover:text-violet-400',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="glass-card p-12 text-center max-w-md space-y-6">
          <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
          <h2 className="text-2xl font-bold text-slate-100">Message Sent!</h2>
          <p className="text-slate-400">
            Thanks for reaching out. I'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary text-sm"
          >
            Send Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="space-y-4 mb-14">
          <h1 className="text-5xl font-bold">
            <span className="text-slate-100">Get in </span>
            <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello?
            Drop me a message and I'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const formData = new FormData(form)
                  fetch('/contact.html', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(
                      formData as unknown as Record<string, string>,
                    ).toString(),
                  }).then(() => setSubmitted(true))
                }}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-indigo-900/60 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-indigo-900/60 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-indigo-900/60 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-indigo-900/60 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social links */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-7 space-y-6">
              <h2 className="text-lg font-semibold text-slate-200">Find Me Online</h2>
              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 text-slate-500 transition-colors duration-200 group ${link.color}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-indigo-900/50 flex items-center justify-center group-hover:border-indigo-600 transition-colors flex-shrink-0">
                      <link.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{link.label}</p>
                      <p className="text-sm text-slate-300 font-medium">{link.handle}</p>
                    </div>
                    <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-7 space-y-3">
              <h2 className="text-lg font-semibold text-slate-200">Availability</h2>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">Open to new projects</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Currently available for freelance work and interesting full-time opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
