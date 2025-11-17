export default function ThePastSection() {
  const stories = [
    {
      title: "The Projection Loop",
      defaultVersion: "Maya has one bad date with Aaron, and suddenly every man who messages her looks like a threat.",
      problem: "Her nervous system isn't reacting to Alex — but to Aaron's residue. Technology routes new strangers into contaminated emotional channels.",
      outcome: "One bad experience infects dozens of unrelated interactions."
    },
    {
      title: "The Network Contamination",
      defaultVersion: "Tom's last date was dismissive.",
      problem: "He moves slower, colder, more cautious — causing Jenna to misread him. They're both reacting to past hurt instead of present reality.",
      outcome: "People date the ghosts of their last interactions, not each other."
    },
    {
      title: "The Borrowed Trauma",
      defaultVersion: "Sara tells Jenna a terrifying story about her date.",
      problem: "The next night, Jenna shields herself from Alex — a man who did nothing wrong. The system spreads fear faster than connection.",
      outcome: "We inherit other people's fear as our forecast."
    }
  ]

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          🧨 The Past (The Default Future)
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          The world as it is — fragmented, exhausting, mistrust-amplifying.
        </p>

        {/* Grid of 3 stories with dark, glitchy aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-900/50 border border-red-900/30 rounded-lg overflow-hidden group hover:border-red-700/50 transition-all duration-300"
            >
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500/30 animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-red-400">{story.title}</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Default Version:</p>
                  <p className="text-gray-300 leading-relaxed">{story.defaultVersion}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-red-400/70 mb-2 font-medium">Problem:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{story.problem}</p>
                </div>

                <div className="pt-4 border-t border-red-900/30">
                  <p className="text-xs text-red-500/80 font-semibold uppercase tracking-wide">
                    {story.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section tagline */}
        <p className="text-xl md:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Technology wasted our time, fragmented our attention, and made us blame each other instead of the systems that failed us.
        </p>
      </div>
    </section>
  )
}

