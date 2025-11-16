export default function LoveOpsSection() {
  const features = [
    {
      title: 'Zero bad dates',
      description: 'Prevent mismatched connections before they happen'
    },
    {
      title: 'Human-in-the-loop concierges',
      description: 'Personalized care at every step'
    },
    {
      title: 'Pace synchronization',
      description: 'Align relationship timelines naturally'
    },
    {
      title: 'Spark intros',
      description: 'Curated connections that matter'
    }
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          👫 First Application: LoveOps
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Mini-story alignment
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-love-red/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-love-red">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* LOVE minting explanation */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            LOVE minted when relationships improve their timeline
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50">
            Join LoveOps Beta
          </button>
        </div>
      </div>
    </section>
  )
}

