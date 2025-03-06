"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import FaqSection from "@/components/FaqSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import TopCollegeFindSection from "@/components/TopCollegeFindSection";
import webinarbanner from "../../assets/images/webinar-banner.png";
import WebinarSection from "@/components/Webinar/WebinarSection";
import FilterSidebar from "@/components/Webinar/FilterSidebar";
import TabNavigation from "@/components/Webinar/TabNavigation";
import ClassesTabs from "@/components/Webinar/TabsComponent";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <section className="basic-banner-sec ">
        <div className="bg-image">
          <Image src={webinarbanner} alt="underline" width={1024} height={10} />
        </div>

        <div className="basic-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1>
                    Latest <span>Educational Webinars</span> <br />
                    on Admissions and Career Counselling
                  </h1>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-item"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebinarSection />

      <section className="admission-career-sec">
        <div className="container">
          <div className="col-12">
            <div className="title">
              <h2>
                Latest Educational <span>Webinars on Admissions</span> and{" "}
                <span>
                  {" "}
                  <br /> Career Counselling
                </span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <FilterSidebar />
            </div>

            <div className="col-lg-8">
              <ClassesTabs />
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />

      <TopCollegeFindSection />

      <FaqSection />

      <Footer />
    </>
  );
}
