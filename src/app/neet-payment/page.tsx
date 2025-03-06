"use client";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import VideoModal from "@/components/neet-payment/VideoModal";
import Image from "next/image";
import basicbanner from "../../assets/images/basic-banner.png";
import TextLine from "../../assets/images/text-line.png";
import BannerLogo from "../../assets/images/banner-logo.png";
import video from "../../assets/images/video.png";
import videoplay from "../../assets/images/video-play.png";
import { useState } from "react";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import TopCollege from "@/components/TopCollege";
import FeaturesSection from "@/components/neet-payment/FeaturesSection";

export default function Career() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeaderSecond />
      <section className="basic-banner-sec neet-payment">
        <div className="bg-image">
          <Image
            src={basicbanner}
            alt="Banner"
            width={1268}
            height={400}
            className="img-fluid"
          />
        </div>

        <div className="basic-banner-content ">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1>
                    <span>NEET</span> All <span>India</span>
                    <b>
                      Counselling
                      <Image
                        src={TextLine}
                        alt="Text Line"
                        width={400}
                        height={50}
                        className="img-fluid"
                      />
                    </b>
                    College Predictor <span>2025</span>
                  </h1>

                  <p>NEET UG , NEET PG, IIT, All Medical Course </p>

                  <Image
                    src={BannerLogo}
                    alt="Banner Logo"
                    width={68}
                    height={68}
                    className="img-fluid logo-banner"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-item">
                  <Image
                    src={video}
                    alt="Video Thumbnail"
                    width={500}
                    height={300}
                    className="img-fluid"
                  />

                  <div className="video-icon">
                    <Image
                      src={videoplay}
                      alt="Play Video"
                      width={75}
                      height={75}
                      className="img-fluid"
                      onClick={() => setShowModal(true)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <VideoModal showModal={showModal} setShowModal={setShowModal} />

      <section className="content-with-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <h2>
                  <span>NEET UG 2025</span> All India Counselling{" "}
                  <span>College Predictor</span>
                </h2>
                <p>
                  NEET College Predictor 2024 is designed to assist the
                  candidates in predicting their chances of admission to top
                  Medical, dental ayush and all other medical courses based on
                  students NEET scores. NEET College Predictor 2024 covers the
                  previous years’ NEET Cut off data.
                  <br />
                  To provide the list of the most suitable medical/
                  dental colleges in India, Visuticareer NEET College Predictor
                  uses opening and closing ranks dervied from the seat allotment
                  result of NEET counselling. NEET Counselling for 15% AIQ seats
                  is conducted by MCC, while for 85% of State Quota Seats, it is
                  conducted by the respective state authorities. In 2023, the
                  round 1 closing ranks for AIIMS Delhi and VMMC Delhi
                  were 57 and 107 respectively. 
                </p>

                <h6>Advantages of NEET College Predictor 2025</h6>

                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Aspirants can use the
                    medical college predictor 2025 to check their chances of
                    getting into top medical colleges in India.  
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Through Careeres360
                    college predictor, students will get a complete list of
                    colleges to select in the All India Counselling
                    choice-filling process. 
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Aspirants will get a
                    personalised report on NEET AIQ counselling, which includes
                    information on the top medical, dental and ayush colleges
                    for All India Level 
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-wrapper">
                <h5>NEET Exam Details</h5>

                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      NEET All India Overall Rank *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Seat Type in NEET All India Counselling *
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Predict My College
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <TopCollege Title="Top Colleges" />

      <TestimonialSection />

      <section className="client-feedbacks">
        <div className="container">
          <div className="bg-color">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="inner-item">
                  <img
                    src="assets/images/icon1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <h5>22,000+</h5>
                  <p>Positive Impacted Our Company</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="inner-item">
                  <img
                    src="assets/images/icon2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <h5>4200+</h5>
                  <p>MBBS Gov College Counselling</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="inner-item">
                  <img
                    src="assets/images/icon3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <h5>2800+</h5>
                  <p>Student Get admission in private college </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="inner-item">
                  <img
                    src="assets/images/icon4.png"
                    alt=""
                    className="img-fluid"
                  />
                  <h5>300+</h5>
                  <p>Student Every Year counseled for Abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </>
  );
}
