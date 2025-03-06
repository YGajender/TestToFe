import HeaderSecond from "@/components/HeaderSecond";
import Footer from "@/components/Footer";
import BasicBanner from "@/components/BasicBanner";
import WebinarSection from "@/components/WebinarSection";
import ContentWithForm from "@/components/ContentWithForm";
import CollegeState from "@/components/CollegeState";
import AboardMBBSSection from "@/components/AboardMBBSSection";
import VideoWithContent from "@/components/VideoWithContent";
import HealthSection from "@/components/HealthSection";
import CompareTabs from "@/components/CompareTabs";
import AustraliaInfo from "@/components/AustraliaInfo";
import FaqSection from "@/components/FaqSection";
import AboardSwiper from "@/components/AboardSwiper";
import DownloadAppSection from "@/components/DownloadAppSection";
import TopCollegeFindSection from "@/components/TopCollegeFindSection";
import AboardInfo from "@/components/AboardInfo";

export default function Page() {
  return (
    <>
      <HeaderSecond />

      <BasicBanner />

      <WebinarSection />

      <ContentWithForm />

      <CollegeState
        Title="Popular Countries For MBBS Abroad"
        TitleSecond=""
        TitleThird=""
        TitleForth=""
        Type={false}
      />

      <AboardSwiper />

      <AboardMBBSSection />

      <VideoWithContent />

      <HealthSection />

      <CompareTabs />

      <AboardInfo />

      {/* <AustraliaInfo /> */}
    
      <div className="outer-bg-color">
      <DownloadAppSection />
      <TopCollegeFindSection />

      </div>


      <FaqSection />

      <Footer />
    </>
  );
}
