"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import FaqSection from "@/components/FaqSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import TopCollegeFindSection from "@/components/TopCollegeFindSection";
import services from "../../assets/images/services.png";
import ser2025 from "../../assets/images/ser2025.png";
import FeaturesSection from "@/components/services/FeaturesSection";
import IndiaMapSection from "@/components/services/IndiaMapSection";
import CollegeListing from "@/components/CollegeLists/CollegeListing";
import CollegeStateSection from "@/components/services/CollegeStateSection";
import Textline from "../../assets/images/text-line.png";


export default function page() {
  return (
    <>
      <HeaderSecond />

      <section className="basic-banner-sec services-banner">
        <div className="bg-image">
          <Image
            src={services}
            alt="Services Image"
            className="img-fluid"
            width={500}
            height={300}
          />
        </div>

        <div className="basic-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1>
                    NEET   <b> 

                    UG /  MBBS
                    <Image
                      src={Textline}
                      alt="underline"
                      width={200}
                      height={10}
                    />
                  </b> <br />
                    <span>Service</span>
                  </h1>
                  <p>NEET UG , NEET PG, IIT, All Medical Course </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-item"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="predictor-sec mt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-item">
                <Image
                  src={ser2025}
                  alt="Service Image"
                  className="img-fluid"
                  width={550}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content">
                <h3>
                  NEET UG <span>2025</span>
                </h3>
                <p>
                  The National Eligibility cum Entrance Test-Under Graduate
                  (NEET UG 2024), succeeded from All India Pre-Medical Test
                  (AIPMT) is an entrance examination in India for students who
                  wish to study undergraduate Medical courses (MBBS), Dental
                  courses (BDS), AYUSH Courses, Veterinary Courses and B.Sc.
                  Nursing in government or private medical, dental AYUSH,
                  Veterinary and Nursing colleges in India
                </p>

                <p>
                  The undergraduate NEET (UG), for MBBS and BDS courses, is
                  currently conducted by the National Testing Agency (NTA),
                  which provides the results to the Directorate General of
                  Health Services at the Ministry of Health and Family Welfare.
                  Prior to 2019, the test was administered by the Central Board
                  of Secondary Education (CBSE). The official website of the NTA
                  for NEET (UG)-2024 is https://neet.nta.nic.in All the
                  test-related information, as amended from time-to-time (if
                  any), will be available on this website only. Candidates must
                  regularly view this website for the latest updates.{" "}
                </p>

                <p>
                  NEET UG is the single all India entrance examination for
                  admission to the all Medical, Dental & Ayush colleges across
                  the India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-color">
        <section className="neet-services">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="full-content">
                  <h3>
                    NEET PG <span>2025</span>
                  </h3>

                  <p>
                    The National Eligibility cum Entrance Test-Under Graduate
                    (NEET UG 2024), succeeded from All India Pre-Medical Test
                    (AIPMT) is an entrance examination in India for students who
                    wish to study undergraduate Medical courses (MBBS), Dental
                    courses (BDS), AYUSH Courses, Veterinary Courses and B.Sc.
                    Nursing in government or private medical, dental AYUSH,
                    Veterinary and Nursing colleges in India
                  </p>

                  <p>
                    The undergraduate NEET (UG), for MBBS and BDS courses, is
                    currently conducted by the National Testing Agency (NTA),
                    which provides the results to the Directorate General of
                    Health Services at the Ministry of Health and Family
                    Welfare. Prior to 2019, the test was administered by the
                    Central Board of Secondary Education (CBSE). The official
                    website of the NTA for NEET (UG)-2024 is
                    https://neet.nta.nic.in All the test-related information, as
                    amended from time-to-time (if any), will be available on
                    this website only. Candidates must regularly view this
                    website for the latest updates.
                  </p>

                  <p>
                    NEET UG is the single all India entrance examination for
                    admission to the all Medical, Dental & Ayush colleges across
                    the India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
      </div>

      <IndiaMapSection />

      <CollegeStateSection />

      <div className="choose-plan-section">
        <div className="container">
          <div className="col-12">
            <div className="title">
              <h3>
                <span>Choose Plan</span> <br /> That’s Right For You
              </h3>
              <p>
                Choose plan that works best for you, feel free to contact us
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="inner-plan">
                <h3>Free</h3>
                <p>Lorem Ipsum is simply dummy text of </p>

                <h2>
                  <sup>$</sup>0
                </h2>

                <ul>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Pay Per Session
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Expandable up to two hours
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Newborn/ Child Reading
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Online Sessions
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Online Sessions
                  </li>
                  <div className="link btn-border">
                    <a href="#"> Signup for free</a>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="inner-plan">
                <h3>Pro</h3>
                <p>Lorem Ipsum is simply dummy text of </p>

                <h2>
                  <sup>$</sup>8
                </h2>

                <ul>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    4 Users
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Expandable up to two hours
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Unlimited editable exports
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Folders and collaboration
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    All incoming apps
                  </li>
                  <div className="link">
                    <a href="#"> Go to pro</a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="inner-plan">
                <h3>Business</h3>
                <p>Lorem Ipsum is simply dummy text of </p>

                <h2>
                  <sup>$</sup>16
                </h2>

                <ul>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    All the features of pro plan
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Account success Manager
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Single Sign-On (SSO)
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Co-conception pogram
                  </li>
                  <li>
                    {" "}
                    <img
                      src="assets/images/check.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Collaboration-Soon
                  </li>

                  <div className="link btn-border">
                    <a href="#"> Goto Business</a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DownloadAppSection />

      <TopCollegeFindSection />

      <FaqSection />

      <Footer />
    </>
  );
}
