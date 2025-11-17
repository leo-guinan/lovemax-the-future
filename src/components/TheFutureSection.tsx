export default function TheFutureSection() {
  const stories = [
    {
      title: "The Clear Channel",
      loveMaxedVersion: "Before meeting Alex, a LOVE concierge sets the pacing and prepares the spark prompt.",
      details: "The date is aligned: soft lighting, good seating, the right environment. Maya's nervous system doesn't have to guess — it feels safe.",
      outcome: "Maya meets Alex, not the residue of Aaron."
    },
    {
      title: "The Reset",
      loveMaxedVersion: "Tom enters the date without carrying Kristen's residue.",
      details: "A pre-date grounding exercise from LoveOps clears defensive assumptions for both. They each arrive as themselves instead of as reactions.",
      outcome: "They discover real chemistry — the kind that was impossible under the default system."
    },
    {
      title: "The Repair Spiral",
      loveMaxedVersion: "Jenna has a genuinely good date with Alex.",
      details: "This positive experience doesn't just help her — it repairs Sara's worldview too. The fear loop reverses.",
      outcome: "Hope becomes contagious."
    }
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          ❤️ The Future (The LOVE-Maxed Version)
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Same humans. Same stories. Different outcome. Because the emotional channel is clean.
        </p>

        {/* Grid of 3 stories with light, open, hopeful colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-br from-green-950/20 to-green-900/10 border border-green-500/30 rounded-lg overflow-hidden group hover:border-green-400/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⭐</span>
                  <h3 className="text-xl font-bold text-green-300">{story.title}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-green-400/70 mb-2 font-medium">LOVE-Maxed Version:</p>
                  <p className="text-gray-200 leading-relaxed">{story.loveMaxedVersion}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{story.details}</p>
                </div>

                <div className="pt-4 border-t border-green-500/30">
                  <p className="text-sm text-green-300 font-semibold">
                    {story.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section tagline */}
        <p className="text-xl md:text-2xl text-center text-gray-200 max-w-4xl mx-auto leading-relaxed">
          LOVE intervenes at the exact moment where the future fractures — and moves it toward trust instead of fear.
        </p>
      </div>
    </section>
  )
}

