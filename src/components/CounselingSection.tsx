"use client";
import Image from "next/image"; // Use the Next.js image component for optimized image loading
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CounselingSection() {
  return (
    <section className="counseling-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <h2>
                GET YOUR <span>COUNSELING</span>
              </h2>
              <p>Get personalized counseling by our expert advisor</p>

              {/* First Inner Box */}
              <div className="inner-box">
                <div className="user">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg"
                    alt="User Image"
                    className="img-fluid"
                    width={150} // Specify image width
                    height={150} // Specify image height
                  />
                </div>
                <div className="content">
                  <h4>GET personalized counseling</h4>
                  <p>
                    Get your personalized counseling by our expert counselor,
                    one click away! Our counselor is here to help you.
                  </p>

                  <div className="link">
                    <a href="#">
                      Apply Now <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Second Inner Box */}
              <div className="inner-box align-content-end">
                <div className="user">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg"
                    alt="User Image"
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="content">
                  <h4>Call Now</h4>
                  <p>Our expert is only one step away</p>

                  <div className="link-normal">
                    <a href="#">
                      +91 9145879646 <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="right-img">
              <Image
                src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/counseling.png"
                alt="Counseling Image"
                className="img-fluid"
                width={500} // Specify image width
                height={500} // Specify image height
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
