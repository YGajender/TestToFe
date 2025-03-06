import Image from "next/image";
import comparebanner from "../assets/images/compare-banner.png";
import textline from "../assets/images/text-line.png";
import comparevector from "../assets/images/compare-vector.png";

const CompareBanner = () => {
  return (
    <section className="basic-banner-sec college-compare">
      <div className="bg-image">
        <Image
          src={comparebanner}
          alt="compare banner"
          className="img-fluid"
          width={1200} // Specify width
          height={550} // Specify height
        />
      </div>

      <div className="basic-banner-content py-5 py-md-2 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  <span>
                    College{" "}
                    <b>
                      Compare{" "}
                      <Image src={textline} alt="" width={100} height={10} />
                    </b>
                  </span>
                </h1>
                <p>
                  Compare up to 4 colleges based on your preferred course and
                  get comparison on their ranks, fees, placements, seats,
                  infrastructure and various other details.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-item text-end w-100">
                <Image
                  src={comparevector}
                  alt=""
                  width={500}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareBanner;
