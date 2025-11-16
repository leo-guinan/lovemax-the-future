export default function LoveFormulaSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-400">
          ❤️ LOVE = Counterfactual Coherence
        </h2>

        {/* Formula centered on white space */}
        <div className="my-24 py-16 px-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 font-mono">
            LOVE = (Expected Bad Outcome – Actual Outcome) × Care Factor
          </div>
        </div>

        {/* Caption */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic">
          LOVE mints the value created when humans prevent worse worlds.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Minimalistic, elegant, mathematical.
        </p>
      </div>
    </section>
  )
}

