import Banner from './sections/Cta/Banner'
import Banner2 from './sections/Cta/Banner2'
import Features from './sections/Features/Features'
import Hero from './sections/Hero/Hero'
import Services from './sections/Services/Services'
import Voyages from './sections/Voyages/Voyages'

function App() {
  return (
    <div className=" z-0 h-screen">
      <Hero />
      <Features />
      <Banner />
      <Banner2 />
      <Voyages />
      <Services />
    </div>
  )
}

export default App
