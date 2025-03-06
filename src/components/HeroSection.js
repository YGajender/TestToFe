"use client"
import Image from "next/image"
import bgcolor from "../assets/images/bg-color.png"
import star from "../assets/images/star.png"
import heroimg from "../assets/images/hero-img.png"
import videoicon from "../assets/images/video-icon.png"
import banner_line from "../assets/images/banner-line.png"
import textline from "../assets/images/text-line.png"
import { FaSearch } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="bg-color">
        <Image
          src={bgcolor}
          alt="Background"
          className="img-fluid"
          width={1920}
          height={1080}
          priority
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <div className="banner-content">
              <div className="star-img">
                <Image
                  src={star}
                  alt="Star"
                  className="img-fluid"
                  width={50}
                  height={50}
                />
              </div>
              <h4>START TO SUCCESS</h4>
              <h1>
                <span>
                  India’s 1st{" "}
                  <b>
                    Rank AI
                    <Image
                      src={textline}
                      alt="Hero Image"
                      className="img-fluid"
                      width={500}
                      height={500}
                      priority
                    />{" "}
                  </b>
                </span>{" "}
                <br />
                Counseling APP
              </h1>

              <p>NEET UG, NEET PG, IIT, All Medical Courses</p>

              {/* Search Box */}
              <div className="form-item">
                <input
                  type="text"
                  placeholder="Search for college counseling..."
                  className="form-control"
                />
                <FaSearch size={20} className="text-gray-500 mr-2" />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image & Video Icon */}
          <div className="col-md-6">
            <div className="img-item">
              <Image
                src={banner_line}
                alt="line-img"
                className="img-fluid banner-line"
              />

              <Image
                src={heroimg}
                alt="Hero Image"
                className="img-fluid"
                width={500}
                height={500}
                priority
              />

              <div className="video">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <Image
                    src={videoicon}
                    alt="Video Icon"
                    className="img-fluid"
                    width={60}
                    height={60}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal video fade"
        id="videoModal"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  id="videoFrame"
                  src="https://www.youtube.com/embed/0jt5KMQw378?si=PA7oVcLVVUA32PHP"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX for Custom Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          padding: 60px 0;
        }
        .bg-color {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .form-item {
          position: relative;
          display: flex;
          align-items: center;
        }
        .form-item input {
          padding-right: 40px;
        }
        .form-item i {
          position: absolute;
          right: 15px;
          color: gray;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
