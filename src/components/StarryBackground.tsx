const STARS = Array.from({ length: 160 }, (_, i) => ({
  id: i,
  x: ((i * 7919 + 13) % 10000) / 100,
  y: ((i * 6271 + 37) % 10000) / 100,
  size: (i % 3) === 0 ? 2 : (i % 3) === 1 ? 1.5 : 1,
  duration: 2 + (i % 5),
  delay: (i * 0.37) % 6,
}))

const SHOOTING_STARS = [
  { top: '8%', left: '15%', delay: 1, duration: 7 },
  { top: '22%', left: '55%', delay: 5, duration: 9 },
  { top: '5%', left: '72%', delay: 10, duration: 8 },
  { top: '35%', left: '8%', delay: 15, duration: 11 },
  { top: '18%', left: '88%', delay: 20, duration: 7 },
  { top: '42%', left: '40%', delay: 26, duration: 9 },
]

export function StarryBackground() {
  return (
    <>
      {/* Moon */}
      <div className="moon" aria-hidden="true" />

      {/* Stars */}
      {STARS.map((star) => (
        <div
          key={star.id}
          className="star"
          aria-hidden="true"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Shooting stars */}
      {SHOOTING_STARS.map((s, i) => (
        <div
          key={i}
          className="shooting-star"
          aria-hidden="true"
          style={{
            top: s.top,
            left: s.left,
            '--shoot-duration': `${s.duration}s`,
            '--shoot-delay': `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  )
}
