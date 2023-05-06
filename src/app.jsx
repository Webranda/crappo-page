import Header from './components/Header'
import Hero from './components/Hero'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import Subscription from './components/Subscription'
import Footer from './components/Footer'
import './app.css'

export function App() { 

  return (
  <div className='app'>
    <Header />
    <Hero />
    <FirstSection/>
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <Subscription />
    <Footer />
  </div>
  )
}
