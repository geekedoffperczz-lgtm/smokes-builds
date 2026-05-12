import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const GALLERY_ITEMS = [
  {
    id: 10,
    title: 'Mountain Landscape',
    category: 'Nature',
    width: 800,
    height: 600,
  },
  {
    id: 20,
    title: 'Urban Architecture',
    category: 'Architecture',
    width: 800,
    height: 600,
  },
  {
    id: 48,
    title: 'Ocean Horizon',
    category: 'Nature',
    width: 800,
    height: 600,
  },
  {
    id: 60,
    title: 'Forest Trail',
    category: 'Nature',
    width: 800,
    height: 600,
  },
  {
    id: 119,
    title: 'Desert Dunes',
    category: 'Landscape',
    width: 800,
    height: 600,
  },
  {
    id: 160,
    title: 'City Skyline',
    category: 'Architecture',
    width: 800,
    height: 600,
  },
  {
    id: 180,
    title: 'Autumn Leaves',
    category: 'Nature',
    width: 800,
    height: 600,
  },
  {
    id: 200,
    title: 'Abstract Geometry',
    category: 'Art',
    width: 800,
    height: 600,
  },
  {
    id: 250,
    title: 'Coastal Cliffs',
    category: 'Landscape',
    width: 800,
    height: 600,
  },
]

const CATEGORIES = ['All', 'Nature', 'Architecture', 'Landscape', 'Art']

function netlifyImage(picsumId: number, w: number, h: number, q = 80) {
  const src = encodeURIComponent(`https://picsum.photos/id/${picsumId}/${w * 2}/${h * 2}`)
  return `/.netlify/images?url=${src}&w=${w}&h=${h}&fit=cover&q=${q}`
}

function Gallery() {
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            <span className="text-slate-100">Image </span>
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A visual collection of inspiring places and creative works. Images are optimized
            on-the-fly via Netlify Image CDN for blazing-fast delivery.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'border-indigo-900/60 text-slate-400 hover:border-indigo-600 hover:text-violet-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-item group relative aspect-[4/3] cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                src={netlifyImage(item.id, 600, 450)}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.category}</p>
                </div>
                <ZoomIn className="absolute top-4 right-4 text-white w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-600">
          Photos from Picsum Photos, served optimized via Netlify Image CDN
        </p>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-4xl w-full space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={netlifyImage(selected.id, 1200, 800, 90)}
              alt={selected.title}
              className="w-full rounded-2xl border border-indigo-500/20"
            />
            <div className="text-center">
              <p className="text-white font-semibold text-lg">{selected.title}</p>
              <p className="text-slate-400 text-sm">{selected.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
