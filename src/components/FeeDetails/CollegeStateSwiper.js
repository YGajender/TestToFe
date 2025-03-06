"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import cs1 from "../../assets/images/cs1.png";
import cs2 from "../../assets/images/cs2.png";
import cs3 from "../../assets/images/cs3.png";
import cs4 from "../../assets/images/cs4.png";

const states = [
  { name: "ANDHRA PRADESH", img: cs1 },
  { name: "ASSAM", img: cs2 },
  { name: "Bihar", img: cs3 },
  { name: "CHANDIGARH", img: cs4 },
  { name: "Bihar", img: cs3 },
];

const CollegeStateSwiper = () => {
  return (
    <section className="college-state m-0 p-0">
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="title">
                <h4>Find Collage listing by States </h4>
              </div>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper spaceBetween={10} slidesPerView={4} loop={true}>
              {states.map((state, index) => (
                <SwiperSlide key={index}>
                  <div className="state-inner">
                    <Image
                      src={state.img}
                      alt={state.name}
                      width={100}
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
      </div>
    </section>
  );
};

export default CollegeStateSwiper;
