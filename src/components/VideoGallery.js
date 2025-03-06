"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import videoplay from "../assets/images/video-play.png";

const VideoGallery = () => {
  const videos = [
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/video1.png",
      title: "Infrastructure & Academic Building",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/video2.png",
      title: "Facilities & Labs",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/video3.png",
      title: "Infrastructure & Academic Building",
    },
    {
      src: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/video3.png",
      title: "Infrastructure & Academic Building",
    },
  ];

  return (
    <div className="college-inner-info">
      <div className="video-gallery">
        <h5>Video Gallery</h5>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="swiper videoGallery"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="gallery-inner">
                <Image
                  src={video.src}
                  alt={video.title}
                  width={300} // Adjust width
                  height={200} // Adjust height
                  className="img-fluid"
                />
                <h6>{video.title}</h6>
                <div className="icon">
                  <Image
                    src={videoplay}
                    alt="Play Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoGallery;
