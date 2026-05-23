import PageWrapper from '@/components/PageWrapper'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBanner from '@/components/StatsBanner'
import TrustStatement from '@/components/TrustStatement'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import ServiceAreas from '@/components/ServiceAreas'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PageWrapper>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <StatsBanner />
      <TrustStatement />
      <Services />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <Footer />
    </PageWrapper>
  )
}
