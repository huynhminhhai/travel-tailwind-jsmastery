import CampSection from '@/components/Camp'
import FeaturesSection from '@/components/Features'
import GetAppSection from '@/components/GetApp'
import GuideSection from '@/components/Guide'
import HeroSection from '@/components/Hero'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeaturesSection />
      <GetAppSection />
    </>
  )
}
