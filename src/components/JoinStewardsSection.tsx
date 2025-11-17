export default function JoinStewardsSection() {
  const roles = [
    'build trust infrastructure',
    'clean emotional channels',
    'eliminate unnecessary suffering',
    'intervene at the moment where the future splits',
    'help LoveOps scale globally'
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          🌍 Join the First 100 Stewards
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Your role if you join:
        </p>

        {/* Roles list */}
        <div className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-love-red mt-2"></div>
              <p className="text-lg text-gray-300 flex-1">
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="px-8 py-4 bg-love-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50">
          Apply to Join the First 100
        </button>
      </div>
    </section>
  )
}
