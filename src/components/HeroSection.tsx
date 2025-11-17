export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900" />
      
      {/* Diverging Timelines Visual */}
      <div className="relative mb-12 z-10 w-full max-w-4xl">
        <div className="relative w-full h-96 md:h-[500px]">
          {/* Glowing red heart at center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg
              className="w-24 h-24 md:w-32 md:h-32 heart-glow"
              viewBox="0 0 24 24"
              fill="#FF1744"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Default Future Timeline (left, dark/red) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2/5">
            <div className="h-1 bg-gradient-to-r from-red-900/50 to-red-600/30 rounded-full mb-4"></div>
            <div className="text-xs md:text-sm text-red-400/70 font-medium">Default Future</div>
            <div className="absolute -top-8 left-0 w-full h-32 bg-gradient-to-r from-red-950/20 to-transparent blur-xl"></div>
          </div>

          {/* LOVE-Maxed Future Timeline (right, bright/green) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5">
            <div className="h-1 bg-gradient-to-l from-green-400/50 to-green-300/30 rounded-full mb-4"></div>
            <div className="text-xs md:text-sm text-green-300/70 font-medium text-right">LOVE-Maxed Future</div>
            <div className="absolute -top-8 right-0 w-full h-32 bg-gradient-to-l from-green-950/20 to-transparent blur-xl"></div>
          </div>

          {/* Diverging lines from heart */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
            <path
              d="M 400 200 L 100 200"
              stroke="rgba(239, 68, 68, 0.4)"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <path
              d="M 400 200 L 700 200"
              stroke="rgba(74, 222, 128, 0.4)"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          </svg>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 z-10 text-balance max-w-4xl">
        The Future Won't Fix Itself.
      </h1>

      {/* Sub-headline */}
      <p className="text-xl md:text-2xl text-gray-300 text-center mb-4 max-w-3xl z-10 text-balance">
        LOVE rewards humans for creating better futures.
      </p>
      <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl z-10 text-balance">
        The first protocol that cleans emotional channels and repairs trust where technology breaks it.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50">
          Join the First 100 Stewards
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg transition-all duration-300">
          Read the 10-Slide Deck
        </button>
      </div>
    </section>
  )
}
