"use client"
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"

const servicesData = [
  {
    id: 1,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-1.png",
    title: "Colleges View"
  },
  {
    id: 2,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-2.png",
    title: "Compare College"
  },
  {
    id: 3,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-3.png",
    title: "NEET Predictor"
  },
  {
    id: 4,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-4.png",
    title: "Documents Builder"
  },
  {
    id: 5,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-5.png",
    title: "Counseling Notification"
  },
  {
    id: 6,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-6.png",
    title: "MBBS Abroad"
  },
  {
    id: 7,
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/s-1.png",
    title: "Counseling Notification"
  } // Same image added again for testing
]

export default function Services() {
  return (
    <section className="services-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <div className="text">
                <h2>
                  Explore our <span>Services</span>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="swiper-controls">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          // Space between slides
          spaceBetween={20}
          // Set 6 slides visible at a time
          slidesPerView={6}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
          }}
          breakpoints={{
            1024: { slidesPerView: 6 }, // 6 slides per view on desktop
            768: { slidesPerView: 4 }, // 4 slides per view on tablet
            576: { slidesPerView: 3 }, // 3 slides per view on small screens
            480: { slidesPerView: 2 } // 2 slides per view on mobile
          }}
        >
          {servicesData.map(service => (
            <SwiperSlide key={service.id}>
              <div className="state-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="img-fluid"
                  width={200}
                  height={200}
                />
                <p>{service.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
