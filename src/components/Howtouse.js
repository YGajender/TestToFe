import Image from "next/image"
import banner from "../assets/images/5.png"
import line from "../assets/images/line.png"
import line2 from "../assets/images/line2.png"
import line3 from "../assets/images/line3.png"
import line4 from "../assets/images/line4.png"
import line5 from "../assets/images/line5.png"

const Howtouse = () => {
  return (
    <section className="how-to-use">
      <div className="container">
        <div className="col-12">
          <div className="title">
            <h2>
              How to use the <span>NEET College Predictor</span> 2025?
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />

              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>Visit Education Vibes NEET College Predictor</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line2}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />

              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>
                  Click on "Predict your College button on NEET College
                  Predictor page
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line3}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />

              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>Enter your NEET-UG Score</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 d-none d-xl-block"></div>
          <div className="col-sm-6 col-lg-4 col-xl-3 d-none d-xl-block"></div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line4}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />
              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>Select the State</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line5}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />

              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>Enter the details asked, such as Name & Email</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="line-inner">
              <Image
                src={line}
                alt="line"
                width={485}
                height={350}
                className="img-fluid"
              />

              <div className="round-img">
                <Image
                  src={banner}
                  alt="line"
                  width={485}
                  height={350}
                  className="img-fluid"
                />
              </div>

              <div className="content">
                <h6>Fill your mobile number</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Howtouse
