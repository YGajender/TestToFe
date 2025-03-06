"use client";

import Image from "next/image";
import about from "../assets/images/about.png";
import { FaAngleRight } from "react-icons/fa6";

const PredictorSection = () => {
  return (
    <section className="predictor-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-item">
              <Image
                src={about}
                alt=""
                width={500}
                height={500}
                className="img-fluid"
              />


          <div className="content">
              <h4>MBBS Counselling 2025</h4>
              <p>2024-2025 Session Start Book You Counselling Seat</p>

              <div className="link">
                <a href="#">Appointment now <FaAngleRight /> </a>
              </div>
          </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h3>Learn & Grow  <span> Your Skills From</span></h3>
              <p>
                Visuti Career & Technology Private Limited is ISO certified
                Company that has proven to be a milestone for students in
                Medical Counseling for the last 8+ years. So far, thousands of
                students have taken advantage of counseling through us, so that
                students can convert their hard work into success. Our team of
                expert counselors not only helps in choosing the best college
                for the student from their experience but also helps you in
                choosing which college and where to get it by doing prediction
                analysis based on NEET rank and number.
              </p>
              <p>
                Our counseling team helps you to get the best private college in
                the least budget based on your rank and budget. By which you can
                avoid the hidden and other charges of the college.
              </p>
              <p>
                So far 4200+ students have taken seats in their favorite college
                from our counseling service in the last 8+ years for government
                college and 300+ students for private college every year based
                on their budget in minimum budget from our expert counseling
                Studying in the best college. Our efforts are always in the
                interest of the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictorSection;
