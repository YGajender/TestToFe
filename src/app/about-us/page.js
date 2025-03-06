import ClientFeedbacks from "@/components/ClientFeedbacks"
import Footer from "@/components/Footer"
import FullWidthContent from "@/components/FullWidthContent"
import HeaderSecond from "@/components/HeaderSecond"
import NormalBanner from "@/components/NormalBanner"
import PersonalSection from "@/components/PersonalSection"
import PredictorSection from "@/components/PredictorSection"

export default function AboutUs() {
  return (
    <main>
      <HeaderSecond />

      <NormalBanner title="About Us" />

      <PredictorSection />

      <FullWidthContent />

      <PersonalSection />

      <ClientFeedbacks />
      <Footer />
    </main>
  )
}
