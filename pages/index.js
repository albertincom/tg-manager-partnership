import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PartnerChannels from '../components/PartnerChannels'
import Categories from '../components/Categories'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PartnerChannels />
      <Categories />
      <CTASection />
      <Footer />
    </div>
  )
}
