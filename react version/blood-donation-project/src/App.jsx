import Header from './components/Header'
import HeroSections from './components/HeroSections'
import StatisticsOverview from './components/StatisticsOverview'
import ActionButtons from './components/ActionButtons'
import RecentRequests from './components/RecentRequests'
import HowItWorks from './components/HowItWorks'
import WhyDonate from './components/WhyDonate'
import PartnerHospitals from './components/PartnerHospitals'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <HeroSections />
        <StatisticsOverview />
        <ActionButtons />
        <RecentRequests />
        <HowItWorks />
        <WhyDonate />
        <PartnerHospitals />
      </main>
      <Footer />
    </div>
  )
}

