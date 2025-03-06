import CompareBanner from "@/components/CompareBanner";
// import CompareTables from "@/components/CompareTables";
import CompareTopSection from "@/components/CompareTopSection";
import ContactSection from "@/components/ContactSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import MapSection from "@/components/MapSection";
import NormalBanner from "@/components/NormalBanner";
import TopCollegeFindSection from "@/components/TopCollegeFindSection";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <CompareBanner />

      <CompareTopSection />

      <div className="outer-color-white">
        {/* <CompareTables /> */}
      </div>

      <div className="outer-bg-color">
        <DownloadAppSection />
        <TopCollegeFindSection />
      </div>

      <FaqSection />

      <Footer />
    </>
  );
}
