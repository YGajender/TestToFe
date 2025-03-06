"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const newsData = [
  {
    id: 1,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/news.jpg",
  },
  {
    id: 2,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/news.jpg",
  },
  {
    id: 3,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/news.jpg",
  },
  {
    id: 4,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/news.jpg",
  },
  {
    id: 5,
    title: "Google Ads Training 2021: Profit with Pay",
    description: "Lorem Ipsum is simply dummy text of the printing",
    date: "15 Dec. 2024",
    image:
      "https://bibaanbackend.webspulses.com/visuticareer/assets/images/news.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="latest-sec">
      <div className="container">
        <div className="bg-color">
          <div className="col-12">
            <div className="title">
              <h4>Latest News and Notifications</h4>
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <div className="news-inner">
                  <div className="image-wrap">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={500}
                      height={300}
                      className="img-fluid"
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

      {/* Scoped Styles */}
      <style jsx>{`
        .latest-sec {
          padding: 60px 0;
        }
        .news-inner {
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .image-wrap img {
          border-radius: 8px;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
      `}</style>
    </section>
  );
}
