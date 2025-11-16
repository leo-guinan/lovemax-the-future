export default function WhyThisMattersSection() {
  const points = [
    'The world rewards extraction',
    'We reward prevention',
    'Care has no economic model — until now',
    'Trust is the scarcest resource of the AI era',
    'LOVE is backed by better futures'
  ]

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          🧱 Why This Matters
        </h2>

        {/* Soft-gray box grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

