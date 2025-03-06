"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import FaqSection from "@/components/FaqSection";
import bgline from "../../assets/images/bg-line.png";
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import gradientbg from "../../assets/images/gradientbg.png";
import management from "../../assets/images/management.png";
import bgmap from "../../assets/images/bg-map.png";
import timeline from "../../assets/images/time-line.png";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <section className="normal-banner">
        <div className="wrapper">
          <div className="bg">
            <Image
              src={bgline}
              alt="Background Line"
              className="img-fluid"
              width={500}
              height={200}
              priority
            />
          </div>

          <div className="title">
            <div className="container">
              <h2>
                <span>Choose the perfect</span> Plan <span>for</span> Career
                Counseling{" "}
              </h2>
              <p>Flexible plans for every</p>

              <div className="link">
                <a href="#">10% off on Making a Single Payment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <h5>Basic Package</h5>
                  </th>
                  <th>
                    <div className="bgc">
                      <div className="plan-header">
                        <h5>Free</h5>
                      </div>
                      <a href="#" className="btn-custom">
                        Get Started
                      </a>
                    </div>
                  </th>
                  <th>
                    <div className="th-inner">
                      <div className="bgc">
                        <div className="plan-header">
                          Govt College/ Semi Govt College
                        </div>
                        <div className="price">
                          <h5>
                            Rs. 15,000/- <span>+GST</span>
                          </h5>
                          <a href="#" className="btn-custom">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="bgc">
                      <div className="plan-header">
                        All Private College / Govt College / Semi Govt College
                      </div>
                      <div className="price">
                        <h5>
                          Rs. 25,000/- <span>+GST</span>
                        </h5>
                        <a href="#" className="btn-custom">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Government college Health Reports</td>
                  <td>Only Basic</td>
                  <td>Complete Details with analyzation</td>
                  <td>Complete Details with analyzation</td>
                </tr>
                <tr>
                  <td>Private college Health report</td>
                  <td>Only Basic</td>
                  <td>Only Basic</td>
                  <td>Complete details with hidden fees</td>
                </tr>
                <tr>
                  <td>Notification (24x7 Alert for Counselling & Admission)</td>
                  <td>Only alert</td>
                  <td>Complete Notification for GOV. Related Counselling</td>
                  <td>
                    All Notification for GOV and State wise Private College
                  </td>
                </tr>
                <tr>
                  <td>Counselling Tracing</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>Gov college counselling tracking via explanation</td>
                  <td>Gov and Private College State wise Tracking</td>
                </tr>
                <tr>
                  <td>Hidden Fees Details College Wise</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>Complete Gov College Fees Structure</td>
                  <td>Gov and Private College Fees Structure</td>
                </tr>
                <tr>
                  <td>Documents AI Builder</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>Gov and Semi-gov college Documents Builder</td>
                  <td>GOV/Semi-Gov/Private College wise Documents Builder</td>
                </tr>
                <tr>
                  <td>Chat Process</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                </tr>
                <tr>
                  <td>Video & Audio Counselling</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                </tr>
                <tr>
                  <td>NEET College Predictor</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>Predict your College as per your rank</td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>College Compare</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Premium Seminar By Our Expert Counsellor</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>One to One Counsellor</td>
                  <td> </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-with-content">
        <div className="container">
          <div className="wrapper">
            <Image
              src={gradientbg}
              alt="Gradient Background"
              className="img-fluid"
              width={500} // Adjust width
              height={300} // Adjust height
              layout="responsive" // Ensures responsiveness
            />

            <div className="content">
              <h3>Premium Plan</h3>
              <p>
                45000+GST Premium counselling Package (only Gov. /Semi Gov
                College) <br />
                65000+GST (Private College Counselling Package) All state gov
                and private college counselling Package{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table pt-5">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <h5>Basic Package</h5>
                  </th>
                  <th>
                    <div className="bgc">
                      <div className="plan-header">
                        <h5>Free</h5>
                      </div>
                      <a href="#" className="btn-custom">
                        Get Started
                      </a>
                    </div>
                  </th>
                  <th>
                    <div className="th-inner">
                      <div className="bgc">
                        <div className="plan-header">
                          Govt College/ Semi Govt College
                        </div>
                        <div className="price">
                          <h5>
                            Rs. 15,000/- <span>+GST</span>
                          </h5>
                          <a href="#" className="btn-custom">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="bgc">
                      <div className="plan-header">
                        All Private College / Govt College / Semi Govt College
                      </div>
                      <div className="price">
                        <h5>
                          Rs. 25,000/- <span>+GST</span>
                        </h5>
                        <a href="#" className="btn-custom">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Government college Health Reports</td>
                  <td>Only Basic</td>
                  <td>Complete Details with analyzation</td>
                  <td>Complete Details with analyzation</td>
                </tr>
                <tr>
                  <td>Private college Health report</td>
                  <td>Only Basic</td>
                  <td>Only Basic</td>
                  <td>Complete details with hidden fees</td>
                </tr>
                <tr>
                  <td>Notification (24x7 Alert for Counselling & Admission)</td>
                  <td>Only alert</td>
                  <td>Complete Notification for GOV. Related Counselling</td>
                  <td>
                    All Notification for GOV and State wise Private College
                  </td>
                </tr>
                <tr>
                  <td>Counselling Tracing</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>Gov college counselling tracking via explanation</td>
                  <td>Gov and Private College State wise Tracking</td>
                </tr>
                <tr>
                  <td>Hidden Fees Details College Wise</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>Complete Gov College Fees Structure</td>
                  <td>Gov and Private College Fees Structure</td>
                </tr>
                <tr>
                  <td>Documents AI Builder</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>Gov and Semi-gov college Documents Builder</td>
                  <td>GOV/Semi-Gov/Private College wise Documents Builder</td>
                </tr>
                <tr>
                  <td>Chat Process</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                </tr>
                <tr>
                  <td>Video & Audio Counselling</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                </tr>
                <tr>
                  <td>NEET College Predictor</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>Predict your College as per your rank</td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>College Compare</td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>Premium Seminar By Our Expert Counsellor</td>
                  <td>
                    {" "}
                    <FaXmark className="xmark" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
                <tr>
                  <td>One to One Counsellor</td>
                  <td> </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                  <td>
                    <FaCheck className="check" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="management-sec">
        <div className="container">
          <div className="dark-bg">
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <h4>
                    NRI Management <br /> Counselling Package
                  </h4>
                  <p>2 lakh + GST (NRI COUNSELLING PACKAGE )</p>
                  <div className="link">
                    <a href="#">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-item">
                  <Image
                    src={management}
                    alt="Gradient Background"
                    className="img-fluid"
                    width={1024} // Adjust width
                    height={680} // Adjust height
                    layout="responsive" // Ensures responsiveness
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-our-services">
        <div className="bg-map">
          <Image
            src={bgmap}
            alt="Gradient Background"
            className="img-fluid"
            width={500} // Adjust width
            height={300} // Adjust height
            layout="responsive" // Ensures responsiveness
          />
        </div>

        <div className="col-12">
          <div className="title">
            <h2>Flow of our Service</h2>
            <p>Best Advice will gave a best result</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="container">
            <div className="content-item">
              <h6>Submit Your Quarry </h6>
              <p>
                Lorem Ipsum is simply dummy text of printing and industry. Lorem
                Ipsum has been the text.
              </p>
            </div>
            <div className="content-item">
              <h6>Review by our Counseller </h6>
              <p>
                Lorem Ipsum is simply dummy text of printing and industry. Lorem
                Ipsum has been the text.
              </p>
            </div>
            <div className="content-item">
              <h6>One to One Conversation for Counselling </h6>
              <p>
                Lorem Ipsum is simply dummy text of printing and industry. Lorem
                Ipsum has been the text.
              </p>
            </div>
            <div className="content-item">
              <h6>Best Fit College Suggestion and Giving You Advice </h6>
              <p>
                Lorem Ipsum is simply dummy text of printing and industry. Lorem
                Ipsum has been the text.
              </p>
            </div>
            <div className="content-item">
              <h6>Best Fit College Suggestion and Giving You Advice </h6>
              <p>
                Lorem Ipsum is simply dummy text of printing and industry. Lorem
                Ipsum has been the text.
              </p>
            </div>
          </div>

          <div className="time-line">
            <Image
              src={timeline}
              alt="Gradient Background"
              className="img-fluid"
              width={500} // Adjust width
              height={300} // Adjust height
              layout="responsive" // Ensures responsiveness
            />
          </div>
        </div>
      </div>

      <FaqSection />

      <Footer />
    </>
  );
}
