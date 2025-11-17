import HeroSection from './components/HeroSection'
import ThePastSection from './components/ThePastSection'
import TheFutureSection from './components/TheFutureSection'
import LoveLoopSection from './components/LoveLoopSection'
import WhyStoriesChangeSection from './components/WhyStoriesChangeSection'
import LoveOpsSection from './components/LoveOpsSection'
import CounterfactualEngineSection from './components/CounterfactualEngineSection'
import JoinStewardsSection from './components/JoinStewardsSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ThePastSection />
      <TheFutureSection />
      <LoveLoopSection />
      <WhyStoriesChangeSection />
      <LoveOpsSection />
      <CounterfactualEngineSection />
      <JoinStewardsSection />
      <Footer />
    </main>
  )
}

export default App

