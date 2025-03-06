"use client"
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

const CollegeState = ({ Title, TitleSecond, TitleThird, TitleForth, Type }) => {
  return (
    <section className="college-state">
      <div className="bg-image">
        <Image
          src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/state-bg.png"
          alt="Background Image"
          className="img-fluid"
          width={1920}
          height={1080}
        />
      </div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="title">
                {Type ? (
                  <h2>
                    {Title} <span>{TitleSecond}</span> {TitleThird}{" "}
                    <span>{TitleForth}</span>
                  </h2>
                ) : (
                  <h2>
                    <span>{Title}</span>
                  </h2>
                )}
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={20}  // Space between slides
            slidesPerView={6}  // Number of slides visible at a time
            loop={true}        // Loop through the slides
            breakpoints={{
              1024: {
                slidesPerView: 5,  // 5 slides on screens larger than 1024px
              },
              768: {
                slidesPerView: 4,  // 4 slides on tablets
              },
              480: {
                slidesPerView: 2,  // 2 slides on mobile screens
              },
            }}
          >
            {[
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs1.png",
                name: "Ajmer",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs2.png",
                name: "Jaipur",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs3.png",
                name: "Udaipur",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs4.png",
                name: "Jodhpur",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs5.png",
                name: "Bikaner",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs7.png",
                name: "Kota",
              },
              {
                img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs8.png",
                name: "Jaipur",
              },
            ].map((state, index) => (
              <SwiperSlide key={index}>
                <div className="state-inner">
                  <Image
                    src={state.img}
                    alt={`Image of ${state.name} State`}
                    className="img-fluid"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                  <p>{state.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CollegeState
