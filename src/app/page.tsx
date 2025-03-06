import AllCoursesSection from "@/components/AllCoursesSection";
import CollegePredictor from "@/components/CollegePredictor";
import CollegeState from "@/components/CollegeState";
import CounselingSection from "@/components/CounselingSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";
import HardWorkSection from "@/components/HardWorkSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import SignIn from "@/components/SignIn";
import TopCollege from "@/components/TopCollege";
import TopCollegeFindSection from "@/components/TopCollegeFindSection";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <LatestNews />

      <Services />

      <CounselingSection />

      <AllCoursesSection />

      <CollegePredictor />

      <TopCollege />

      <CollegeState
        Title="Find"
        TitleSecond="Collage"
        TitleThird="listing"
        TitleForth="by States"
        Type={true}
      />

      <OurStory />

      <HardWorkSection />

      <DownloadAppSection />

      <TopCollegeFindSection />

      <Footer />
    </>
  );
}
