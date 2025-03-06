import BannerSection from "@/components/BannerSection"
import ClientFeedbacks from "@/components/ClientFeedbacks"
import DownloadAppSection from "@/components/DownloadAppSection"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"
import HeaderSecond from "@/components/HeaderSecond"
import Howtouse from "@/components/Howtouse"
import NEETPredictor from "@/components/NEETPredictor"
import PersonalCounseling from "@/components/PersonalCounseling"
import TestimonialSection from "@/components/TestimonialSection"
import TopCollege from "@/components/TopCollege"
import TopCollegeFindSection from "@/components/TopCollegeFindSection"

export default function Career() {
  return (
    <>
      <div className="career-outer">
        <HeaderSecond />

        <BannerSection />

        <NEETPredictor />

        <TopCollege />

        <Howtouse />

        <PersonalCounseling />

        <DownloadAppSection />

        <TopCollegeFindSection />

        <TestimonialSection />

        <ClientFeedbacks />

        <FaqSection />

        <Footer />
      </div>
    </>
  )
}
