export default function CounterfactualLoopSection() {
  const steps = [
    'Predict',
    'Intervene',
    'Verify',
    'Mint LOVE',
    'Fund more care',
    'Improve coherence'
  ]

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          🚀 The Counterfactual Loop
        </h2>

        {/* Circular diagram */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#FF1744" opacity="0.5" />
              </marker>
            </defs>
            
            {/* Outer circle path with arrows */}
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="rgba(255, 23, 68, 0.3)"
              strokeWidth="2"
              strokeDasharray="8,4"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Step positions around the circle */}
            {steps.map((step, index) => {
              const angle = (index * 360) / steps.length - 90 // Start from top
              const radian = (angle * Math.PI) / 180
              const radius = 150
              const x = 200 + radius * Math.cos(radian)
              const y = 200 + radius * Math.sin(radian)
              
              return (
                <g key={index}>
                  {/* Connection line */}
                  <line
                    x1={200}
                    y1={200}
                    x2={x}
                    y2={y}
                    stroke="rgba(255, 23, 68, 0.2)"
                    strokeWidth="1"
                  />
                  
                  {/* Step circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="35"
                    fill="rgba(255, 23, 68, 0.15)"
                    stroke="#FF1744"
                    strokeWidth="2"
                  />
                  
                  {/* Step text */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {step.split(' ').map((word, i) => (
                      <tspan key={i} x={x} dy={i === 0 ? -6 : 12}>
                        {word}
                      </tspan>
                    ))}
                  </text>
                </g>
              )
            })}
            
            {/* Center circle */}
            <circle
              cx="200"
              cy="200"
              r="45"
              fill="rgba(255, 23, 68, 0.25)"
              stroke="#FF1744"
              strokeWidth="3"
            />
            <text
              x="200"
              y="200"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              LOOP
            </text>
          </svg>
        </div>

        {/* Caption */}
        <p className="text-center text-xl md:text-2xl text-gray-300 mt-16 max-w-2xl mx-auto">
          A regenerative, positive-sum system for human futures.
        </p>
      </div>
    </section>
  )
}

