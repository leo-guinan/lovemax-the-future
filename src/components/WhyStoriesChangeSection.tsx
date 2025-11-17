export default function WhyStoriesChangeSection() {
  const bullets = [
    "Because emotional residue is real",
    "Because trauma spreads faster than hope",
    "Because apps amplify mistrust",
    "Because good experiences rarely get the chance to propagate",
    "Because humans need clean channels",
    "Because one good date can repair an entire social network",
    "Because the future is shaped by the moments where someone intervenes",
    "LOVE pays the people who create those moments."
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          💡 Why Our Stories Change Under LOVE
        </h2>

        {/* Bullet points */}
        <div className="space-y-6">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-love-red/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-love-red mt-2"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed flex-1">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

