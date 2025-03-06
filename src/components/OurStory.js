"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css" // Swiper styles
import "swiper/css/navigation" // Optional navigation styles
import "swiper/css/pagination" // Pagination styles (if you're using pagination)
import { Navigation, Pagination } from "swiper/modules" // Import necessary Swiper modules
import { FaArrowRight } from "react-icons/fa"

const OurStory = () => {
  return (
    <section className="our-story-sec">
      <div className="left-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Our Counseling Tailored Says <span>Our Story</span>
              </h2>
              <p>
                Our result says we are the best. We are serving for 9+ years and
                thousands of students get our dream college.
              </p>

              <div className="link">
                <a href="#">More Story</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          // Enable navigation buttons
          navigation={true}
          // Enable pagination
          pagination={{ clickable: true }}
          // Enable Navigation and Pagination modules
          modules={[Navigation, Pagination]}
          className="storeSwiper"
        >
          {[1, 2, 3].map(index => (
            <SwiperSlide key={index}>
              <div className="inner-slide">
                <div className="image">
                  <Image
                    src={`https://bibaanbackend.webspulses.com/visuticareer/assets/images/store${index}.jpg`}
                    alt={`Store Image ${index}`}
                    className="img-fluid"
                    width={150}
                    height={100}
                  />
                </div>

                <div className="content">
                  <div className="name">
                    <h5>Dr. Peorawat</h5>
                    <p>(GMC) Jaipur</p>
                  </div>

                  <div className="arrow">
                    <FaArrowRight size={20} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default OurStory
