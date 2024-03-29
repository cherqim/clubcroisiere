import Avis from './sections/Avis/Avis'
import Continents from './sections/Continents/Continents'
import Banner from './sections/Cta/Banner'
import Banner2 from './sections/Cta/Banner2'
import Banner3 from './sections/Cta/Banner3'
import Features from './sections/Features/Features'
import Footer from './sections/Footer/Footer'
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
      <Banner3 />
      <Continents />
      <Avis />
      <Footer />
    </div>
  )
}

export default App
