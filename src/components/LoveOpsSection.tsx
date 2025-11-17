export default function LoveOpsSection() {
  const features = [
    'Spark intros',
    'Pace alignment',
    'Environment design',
    'Date choreography',
    'Nervous system grounding',
    'Post-date verification',
    'LOVE minting based on improved outcomes'
  ]

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          🎯 First Application: LoveOps
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Zero bad dates.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">
            Clean emotional channels.
          </p>
          <p className="text-xl md:text-2xl text-gray-400">
            Human-enabled coherence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-love-red/50 transition-all duration-300"
            >
              <p className="text-gray-300 text-lg">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50">
            Join the LoveOps Beta
          </button>
        </div>
      </div>
    </section>
  )
}
