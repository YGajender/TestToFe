import Image from "next/image";

const HardWorkSection = () => {
  return (
    <section className="hard-work-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-wrapper">
              <div className="wrapper">
                <div className="item">
                  <h2>Hard work + &nbsp;</h2>
                  <small>(Student, Parents, Institute)</small>
                </div>
                <div className="item">
                  <h2>Our Dedication = &nbsp;</h2>
                  <small>(Visuti Career Counseling)</small>
                </div>
                <div className="item">
                  <h2>
                    <span>Your Dream College</span>{" "}
                  </h2>
                  <small>(100% Success)</small>
                </div>
              </div>

              <div className="counter-wrapper">
                <div className="row">
                  {[
                    {
                      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/h1.png",
                      number: "22,000+",
                      text: "Positive Impacted Our Company",
                    },
                    {
                      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/h2.png",
                      number: "22,000+",
                      text: "Positive Impacted Our Company",
                    },
                    {
                      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/h3.png",
                      number: "22,000+",
                      text: "Positive Impacted Our Company",
                    },
                    {
                      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/h4.png",
                      number: "22,000+",
                      text: "Positive Impacted Our Company",
                    },
                  ].map((counter, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="counter-inner">
                        <div className="icon">
                          <Image
                            src={counter.img}
                            alt="Counter Icon"
                            className="img-fluid"
                            width={50} // Adjust width and height as per your design
                            height={50}
                          />
                        </div>

                        <div className="content">
                          <h5>{counter.number}</h5>
                          <p>{counter.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="img-wrapper">
              <Image
                src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/doctor.png"
                alt="Doctor Image"
                className="img-fluid"
                width={400} // Adjust width and height as per your design
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardWorkSection;
