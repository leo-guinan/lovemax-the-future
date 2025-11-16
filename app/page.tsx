import HeroSection from '@/components/HeroSection'
import WhatDoesItMeanSection from '@/components/WhatDoesItMeanSection'
import LoveFormulaSection from '@/components/LoveFormulaSection'
import CounterfactualLoopSection from '@/components/CounterfactualLoopSection'
import LoveOpsSection from '@/components/LoveOpsSection'
import WhyThisMattersSection from '@/components/WhyThisMattersSection'
import JoinStewardsSection from '@/components/JoinStewardsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatDoesItMeanSection />
      <LoveFormulaSection />
      <CounterfactualLoopSection />
      <LoveOpsSection />
      <WhyThisMattersSection />
      <JoinStewardsSection />
      <Footer />
    </main>
  )
}

