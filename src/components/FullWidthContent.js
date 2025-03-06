"use client"

import Image from "next/image"
import mission from "../assets/images/mission.png"
import vision from "../assets/images/vision.png"

const FullWidthContent = () => {
  return (
    <section className="full-width-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h4>
                Dedication + Professional counselor + your effort = 100% success
              </h4>
              <p>
                We are a team of enthusiastic young and professional counselors.
                We are clearly solving our student’s doubts about counseling and
                your dream change into success. We are very much passionate
                about adding value to the education sector and establishing
                world-class career counselling services in the entire world. Our
                team is also working with top colleges, and coaching institutes
                to promote their academic programs across India by conducting
                various career counseling seminars/webinars and workshops. We
                have positively impacted 222000+ students and helped them in
                every aspect from making the right career choice, to choosing
                the right course/institution based on their aptitude, interests,
                and personality.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mission">
              <Image
                src={mission}
                alt=""
                width={60}
                height={60}
                className="img-fluid"
              />
              <div className="content">
                <h5>Our Mission</h5>
                <p>
                  Visuti Career & Technology Private Limited is an ISO-certified
                  Company that has proven to be a milestone for students in
                  Medical Counseling for the last 8+ years.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mission vision">
              <Image
                src={vision}
                alt=""
                width={75}
                height={75}
                className="img-fluid"
              />
              <div className="content">
                <h5>Our Vision</h5>
                <p>
                  Visuti Career & Technology Private Limited is an ISO-certified
                  Company that has proven to be a milestone for students in
                  Medical Counseling for the last 8+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullWidthContent
