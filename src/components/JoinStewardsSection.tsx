export default function JoinStewardsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          🕊️ Join the First 100 Stewards
        </h2>

        <div className="space-y-8 mb-12 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            This is not fundraising
          </p>
          <p>
            This is not crypto hype
          </p>
          <p>
            This is a trust infrastructure being built by humans
          </p>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We are gathering system designers, philosophers, caregivers, founders, and early believers
        </p>

        {/* CTA */}
        <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50">
          Apply to Join
        </button>

        {/* Optional brand tagline */}
        <div className="mt-24 pt-16 border-t border-gray-800">
          <p className="text-2xl md:text-3xl font-light text-gray-500 italic max-w-2xl mx-auto">
            The future won't stabilize itself.
          </p>
          <p className="text-2xl md:text-3xl font-light text-love-red mt-4">
            That's why LOVE exists.
          </p>
        </div>
      </div>
    </section>
  )
}

