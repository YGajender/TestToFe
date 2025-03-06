"use client";

import Image from "next/image";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

const ClientFeedbacks = () => {
  return (
    <section className="client-feedbacks">
      <div className="container">
        <div className="bg-color">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="inner-item">
                <Image
                  src={icon1}
                  alt=""
                  width={100}
                  height={100}
                  className="img-fluid"
                />
                <h5>22,000+</h5>
                <p>Positive Impacted Our Company</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="inner-item">
                <Image
                  src={icon2}
                  alt=""
                  width={100}
                  height={100}
                  className="img-fluid"
                />
                <h5>4200+</h5>
                <p>MBBS Gov College Counselling</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="inner-item">
                <Image
                  src={icon3}
                  alt=""
                  width={100}
                  height={100}
                  className="img-fluid"
                />
                
                <h5>2800+</h5>
                <p>Students Get Admission in Private College</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="inner-item">
                <Image
                  src={icon4}
                  alt=""
                  width={100}
                  height={100}
                  className="img-fluid"
                />
                <h5>300+</h5>
                <p>Students Every Year Counseled for Abroad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbacks;
