"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import news from "../../assets/images/news.jpg";

const newsData = [
  {
    id: 1,
    image: news,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
  },
  {
    id: 2,
    image: news,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
  },
  {
    id: 3,
    image: news,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
  },
  {
    id: 4,
    image: news,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
  },
  {
    id: 5,
    image: news,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
  },
];

const LatestNews: React.FC = () => {
  return (
    <section className="latest-sec type2">
      <div className="container">
        <div className="bg-color">
          <div className="col-12">
            <div className="title">
              <h6>IIT Madras Latest Updates and News</h6>
            </div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="news-inner">
                  <div className="image-wrap">
                    <Image
                      src={news.image}
                      alt="News Image"
                      className="img-fluid"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="content">
                    <h6>{news.title}</h6>
                    <p>{news.description}</p>
                    <span>{news.date}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
