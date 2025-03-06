"use client";

import CollegeDetailBanner from "@/components/CollegeDetailBanner";
import ReviewsAndRatings from "@/components/FeeDetails/ReviewsAndRatings";
// import FeesDetails from "@/components/FeesDetails";
import HeaderSecond from "@/components/HeaderSecond";
import MultiCategorySection from "@/components/MultiCategorySection";
import CollegeStateSwiper from "@/components/FeeDetails/CollegeStateSwiper";
import NEETPredictor from "@/components/FeeDetails/NEETPredictor";
import CourseAccordionItem from "@/components/FeeDetails/CourseAccordionItem";
import CollegeComparison from "@/components/FeeDetails/CollegeComparison";
import VideoGallery from "@/components/VideoGallery";
import GalleryImages from "@/components/FeeDetails/GalleryImages";
import playstore from "../../assets/images/play-store.png";
import finder from "../../assets/images/finder.png";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <CollegeDetailBanner />
      <MultiCategorySection />

      <section className="college-detail-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-side">
                {/* <FeesDetails /> */}
                <CourseAccordionItem />
                <NEETPredictor />
              </div>

              <CollegeStateSwiper />

              <CollegeComparison />

              <VideoGallery />

              <ReviewsAndRatings />

              <GalleryImages />
            </div>

            <div className="col-lg-4">
              <div className="right-side blog-right-side">
                <div className="form-outer-div popular mt-4 m-lg-0">
                  <h5>Enquiry Form</h5>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id=" "
                        aria-describedby=""
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id=" "
                        aria-describedby=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id=" "
                        aria-describedby=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="floatingTextarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Appointment
                    </button>
                  </form>
                </div>

                <div className="popular videos p-0  ">
                  <a href="#">
                    <Image
                      src={finder}
                      alt="Video Thumbnail"
                      width={300}
                      height={200}
                      className="img-fluid"
                    />
                  </a>
                </div>

                <div className="popular download ">
                  <h5 className="mb-2">
                    Download The <span>Visuti Career App</span>{" "}
                  </h5>
                  <p>
                    New features. New appearance. No risk and credit card
                    required.
                  </p>

                  <div className="wrapper d-flex gap-3">
                    <img
                      src="assets/images/play-store.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/app-store.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="popular videos ">
                  <h5>Videos</h5>
                  <iframe
                    width="100%"
                    height="280"
                    src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>

                  <iframe
                    width="100%"
                    height="280"
                    src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>

                  <div className="link">
                    <a href="#">View All Videos</a>
                  </div>
                </div>

                <div className="popular">
                  <h5>Top Rated Colleges</h5>

                  <div className="inner-item">
                    <img
                      src="assets/images/po1.png"
                      alt=""
                      className="img-fluid"
                    />

                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>Our 15 favorite websites from August </h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <img
                      src="assets/images/po2.png"
                      alt=""
                      className="img-fluid"
                    />

                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>The beginners guide to user research </h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <img
                      src="assets/images/po3.png"
                      alt=""
                      className="img-fluid"
                    />

                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>
                        Web page layout 101: website anatomy every designer{" "}
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="popular states">
                  <h5>Top State </h5>

                  <ul>
                    <li>
                      <a href="#">Manipur</a>
                    </li>
                    <li>
                      <a href="#">Andhra Pradesh</a>
                    </li>
                    <li>
                      <a href="#">Sikkim</a>
                    </li>
                    <li>
                      <a href="#">Kerala</a>
                    </li>
                    <li>
                      <a href="#">Punjab</a>
                    </li>
                    <li>
                      <a href="#">Rajasthan</a>
                    </li>
                    <li>
                      <a href="#">Uttar Pradesh</a>
                    </li>
                    <li>
                      <a href="#">Gujarat</a>
                    </li>
                    <li>
                      <a href="#">Nagaland</a>
                    </li>
                    <li>
                      <a href="#">West Bengal</a>
                    </li>
                    <li>
                      <a href="#">Mizoram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
