import Image from "next/image";
import banner from "../assets/images/banner.png";
import textline from "../assets/images/text-line.png";

const BannerSection = () => {
  return (
    <section className="banner-secion">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="banner-content">
              <h1>
                Find Top <span> <b>Colleges  <Image src={textline} alt="" /> </b></span> Of Your Choice At
                <span> One Place</span>
              </h1>

              <p>NEET UG , NEET PG, IIT, All Medical Course </p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="img-item">
              <Image
                src={banner}
                alt="Banner"
                width={485}
                height={350}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
