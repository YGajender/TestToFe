import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import LatestBlog from "@/components/LatestBlog";

export default function BlogList() {
  return (
    <main>
      <HeaderSecond />
      <LatestBlog />
      <BlogSection />
      <Footer />
    </main>
  );
}
