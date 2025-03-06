import Image from "next/image";
import vs from "../assets/images/vs.png"
import compare from "../assets/images/compare.png";

const CompareTopSection = () => {
  return (
    <section className="compare-top-section">
      <div className="container">
        <div className="row">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="inner-comp">
                <div className="vs">
                  <Image
                    src={vs}
                    alt=""
                    width={50}
                    height={50}
                    className="img-fluid"
                  />
                </div>
                <Image
                  src={compare}
                  alt=""
                  width={150}
                  height={150}
                  className="img-fluid"
                />
                <h6>Baddi University</h6>
                <p>B.Sc Nursing</p>
                <div className="link">
                  <a href="#">Edit</a>
                </div>
                <div className="wrapper">
                  <div className="edit-content">
                    <div className="close">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <h6>Add More College</h6>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search College"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Course"
                    />
                    <div className="link">
                      <a href="#">Compare</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareTopSection;
