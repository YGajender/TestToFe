"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderSecond from "@/components/HeaderSecond";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import Textline from "../../assets/images/text-line.png";
import selectpayment from "../../assets/images/select-payment.png";
import PaymentSection from "@/components/PaymentSection";

export default function page() {
  return (
    <>
      <HeaderSecond />
      <section className="banner-secion type2">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="banner-content">
                <h1>
                  NEET 2025
                  <b>
                    Collage
                    <Image
                      src={Textline}
                      alt="underline"
                      width={200}
                      height={10}
                    />
                  </b>
                  <br />
                  <span>Predictor</span>
                </h1>

                <p>
                  Explore 638 Top Through NEET UG 2025 All India Counselling
                  College Predictor
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="img-item">
                <Image
                  src={selectpayment}
                  alt="Select Payment"
                  width={300} // Adjust as needed
                  height={200} // Adjust as needed
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentSection />

      <TestimonialSection />

      <FaqSection />

      <Footer />
    </>
  );
}
