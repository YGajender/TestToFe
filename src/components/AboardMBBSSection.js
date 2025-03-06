import React from "react"
import Image from "next/image"
import gracolor from "../assets/images/gradientcolor.jpg"

const AboardMBBSSection = () => {
  return (
    <section className="aboardmbbs-section">
      <div className="container">
        <div className="col-12">
          <div className="title">
            <h2>
              <span>MBBS</span> in <span>Abroad</span> vs{" "}
              <span>MBBS in India</span>
            </h2>
            <p>
              There are several reasons why Indian students would prefer doing
              their medical studies outside India, especially getting an MBBS
              Abroad.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="left">
              <Image
                // Path relative to the public folder
                src={gracolor}
                alt="MBBS Abroad"
                className="img-fluid"
                // Specify width
                width={1200}
                // Specify height
                height={500}
              />

              <h4>MBBS in Abroad</h4>
              <ul>
                <li>
                  NEET is mandatory for all medical students if you want to come
                  back and practice in India.
                </li>
                <li>
                  The course duration can stretch up to 6 years (including
                  1-year internship).
                </li>
                <li>High medical exposure and international practice.</li>
                <li>NMC-recognized universities.</li>
                <li>Better student-teacher ratio.</li>
                <li>
                  The expense of the full MBBS course is very pocket-friendly
                  (15-30 lakhs).
                </li>
                <li>Faculty from all across the world.</li>
                <li>
                  After graduating, students must qualify for the FMGE/NEXT exam
                  to practice in India.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <div className="right">
              <h4>MBBS in India</h4>
              <ul>
                <li>
                  NEET is mandatory for all medical students if you want to come
                  back and practice in India.
                </li>
                <li>
                  The course duration can stretch up to 6 years (including
                  1-year internship).
                </li>
                <li>High medical exposure and international practice.</li>
                <li>NMC-recognized universities.</li>
                <li>Better student-teacher ratio.</li>
                <li>
                  The expense of the full MBBS course is very pocket-friendly
                  (15-30 lakhs).
                </li>
                <li>Faculty from all across the world.</li>
                <li>
                  After graduating, students must qualify for the FMGE/NEXT exam
                  to practice in India.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboardMBBSSection
