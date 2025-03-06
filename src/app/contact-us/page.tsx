import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import MapSection from "@/components/MapSection";
import NormalBanner from "@/components/NormalBanner";

export default function page() {
  return (
    <main>
      <HeaderSecond />

      <NormalBanner title="Contact Us" />

      <ContactSection />

      <MapSection />
      <Footer />
    </main>
  );
}
