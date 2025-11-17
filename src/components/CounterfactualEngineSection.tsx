export default function CounterfactualEngineSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-300">
          🧱 The Counterfactual Engine
        </h2>

        {/* Formula centered on white space */}
        <div className="my-24 py-16 px-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 font-mono">
            LOVE = (Expected Bad Outcome – Actual Outcome) × Care Factor
          </div>
        </div>

        {/* Simple explanation */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          LOVE isn't about romance.
        </p>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          It's about rewarding the humans who prevent worse futures.
        </p>
      </div>
    </section>
  )
}

