'use client'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900" />
      
      {/* LOVE Heart Visual */}
      <div className="relative mb-12 z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Futuristic arc */}
          <svg 
            className="absolute inset-0 w-full h-full arc-rotate"
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 160 160 m -120 0 a 120 120 0 1 1 240 0"
              fill="none"
              stroke="rgba(255, 23, 68, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <path
              d="M 160 160 m -100 0 a 100 100 0 1 1 200 0"
              fill="none"
              stroke="rgba(255, 23, 68, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
            />
          </svg>
          
          {/* Glowing red heart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 heart-glow"
              viewBox="0 0 24 24"
              fill="#FF1744"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 z-10 text-balance">
        Love Max the Future
      </h1>

      {/* Sub-headline */}
      <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 max-w-2xl z-10 text-balance">
        The first asset that rewards humans for creating better futures.
      </p>

      {/* Optional micro-text */}
      <p className="text-sm md:text-base text-gray-500 mb-12 z-10">
        The Counterfactual Trust Protocol
      </p>

      {/* Button */}
      <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 z-10 shadow-lg shadow-red-500/50">
        Join the First 100 Stewards
      </button>
    </section>
  )
}

