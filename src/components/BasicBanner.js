import React from "react"
import Image from "next/image"
import textline from "../assets/images/text-line.png"
import aboardbanner from "../assets/images/aboard-banner.png"

const BasicBanner = () => {
  return (
    <section className="basic-banner-sec">
      <div className="bg-image">
        <Image
          // Path relative to the public folder
          src={aboardbanner}
          alt="MBBS Abroad"
          className="img-fluid"
          // Specify width
          width={1200}
          // Specify height
          height={500}
        />
      </div>

      <div className="basic-banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  <span>
                    MBBS{" "}
                    <b>
                      Abroad <Image src={textline} alt="" />{" "}
                    </b>
                  </span>
                </h1>
                <p>
                  All Those Medical Aspirants Who Desire To Become Accomplished
                  Doctors From Abroad Can Register With Us.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img-item text-end w-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicBanner
