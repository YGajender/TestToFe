"use client"
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const AboardSwiper = () => {
  return (
    <section className="aboardswiper-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="left position-relative">
              <h4>Kickstart Your MBBS Abroad Dream With Visuti Career</h4>
              <div className="swiper-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="right-swiper-wrapper">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
              >
                <SwiperSlide>
                  <div className="inner-item">
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/aboard1.png"
                      alt=""
                      className="img-fluid"
                      width={67}
                      height={67}
                    />
                    <h6>One-On-One Counselling</h6>
                    <p>Get personalized help from the best mentors!</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="inner-item">
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/aboard2.png"
                      alt=""
                      className="img-fluid"
                      width={67}
                      height={67}
                    />
                    <h6>Financial Aid Resources</h6>
                    <p>
                      Resources and help regarding financial aid is provided!
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="inner-item">
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/aboard3.png"
                      alt=""
                      className="img-fluid"
                      width={67}
                      height={67}
                    />
                    <h6>Pre-Departure & Post-Arrival Support</h6>
                    <p>Arrangements for your stay is assisted by us!</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="inner-item">
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/aboard1.png"
                      alt=""
                      className="img-fluid"
                      width={67}
                      height={67}
                    />
                    <h6>Exam Preparation</h6>
                    <p>
                      Access online & offline prep for standard tests like
                      NExT/FMGE!
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboardSwiper
