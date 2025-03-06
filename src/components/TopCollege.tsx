"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleRight } from "react-icons/fa";

interface TopCollegeProps {
  Title: string; // Explicitly defining the type
}

const TopCollege: React.FC<TopCollegeProps> = ({ Title }) => {
  return (
    <section className="top-college">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <div className="text">
                <h2>
                  <span>{Title ?? "College Shorting"}</span>
                </h2>
                <p>
                  We Simplified all Medical courses and Colleges for Better
                  Understanding
                </p>
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
          spaceBetween={20} // Space between slides
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}

          breakpoints={{
            0: { slidesPerView: 1 }, // 2 slides per view on mobile
            576: { slidesPerView: 2 }, // 4 slides per view on tablet
            992: { slidesPerView: 3 }, // 6 slides per view on desktop
          }}

          className="collegeSwiper"
        >
          {[1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index}>
              <div className="college-item">
                <div className="img-item">
                  <Image
                    src={`https://bibaanbackend.webspulses.com/visuticareer/assets/images/${
                      index + 1
                    }.png`} // Dynamic path
                    alt={`College ${index}`}
                    width={500}
                    height={300}
                    className="img-fluid"
                  />
                </div>

                <h5>Top Medical Colleges</h5>
                <ul>
                  <li>
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/building.png"
                      alt="Building Icon"
                      width={20}
                      height={20}
                    />
                    <span>50</span>
                  </li>
                  <li>
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/user.png"
                      alt="User Icon"
                      width={20}
                      height={20}
                    />
                    <span>14</span>
                  </li>
                  <li>
                    <Image
                      src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/winer.png"
                      alt="Winner Icon"
                      width={20}
                      height={20}
                    />
                    <span>1st</span>
                  </li>
                </ul>

                <div className="rating">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/rating.png"
                    alt="Rating"
                    width={100}
                    height={20}
                    className="img-fluid"
                  />
                  <span>4</span>
                </div>

                <div className="link">
                  <Link href="#">
                    Start course <FaAngleRight size={20} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Styled JSX for Custom Styles */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 50%;
          padding: 10px;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </section>
  );
};

export default TopCollege;
