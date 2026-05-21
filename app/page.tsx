import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import StatsBanner from '@/components/StatsBanner'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Reviews from '@/components/Reviews'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsBanner />
      <Services />
      <WhyUs />
      <Reviews />
      <QuoteForm />
      <Footer />
    </main>
  )
}
