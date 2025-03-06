"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
  {
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
    name: "Serhiy Hipskyy",
    role: "Student",
    photo:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/photo1.png",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonal-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <p>Testimonial</p>
              <h2>What Our Happy Student Says</h2>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20} // Space between slides
          loop={true}
          className="swiper testimonalSwiper"
          breakpoints={{
            0: { slidesPerView: 1 }, // 2 slides per view on mobile
            576: { slidesPerView: 2 }, // 3 slides per view on small screens
            992: { slidesPerView: 3 }, // 6 slides per view on desktop
          }}
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="inner-item">
                  <div className="quotes">
                    <span>“</span>
                  </div>

                  <div className="star">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="fa-solid fa-star" />
                    ))}
                  </div>

                  <p>{testimonial.quote}</p>

                  <div className="client">
                    <div className="photo">
                      <Image
                        src={testimonial.photo}
                        alt="Client photo"
                        className="img-fluid"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="name">
                      <h6>{testimonial.name}</h6>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
