"use client"; // Required for Swiper.js in Next.js App Router

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const states = [
  {
    name: "ANDHRA PRADESH",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs1.png",
  },
  {
    name: "ASSAM",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs2.png",
  },
  {
    name: "Bihar",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs3.png",
  },
  {
    name: "CHANDIGARH",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs4.png",
  },
  {
    name: "Bihar",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/cs3.png",
  },
];

const CollegeStateSlider = () => {
  return (
    <section className="college-state m-0 p-0">
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="title">
                <h4>Find College Listings by State</h4>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
             pagination={{ clickable: true }}

            breakpoints={{
              0: { slidesPerView: 2 }, // 2 slides per view on mobile
              576: { slidesPerView: 3 }, // 3 slides per view on small screens
              768: { slidesPerView: 4 }, // 4 slides per view on tablet
              992: { slidesPerView: 6 }, // 4 slides per view on tablet
            }}
            className="stateSwiper2"
          >
            {states.map((state, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="state-inner">
                  <Image
                    src={state.image}
                    alt={state.name}
                    width={150}
                    height={100}
                    className="img-fluid"
                  />
                  <p>{state.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CollegeStateSlider;
