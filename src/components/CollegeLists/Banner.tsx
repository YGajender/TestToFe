import Image from "next/image";
import CollegeList from "../../assets/images/college-list.png";

const Banner = () => {
  return (
    <section className="basic-banner-sec">
      {/* Background Image */}
      <div className="bg-image">
        <Image
          src={CollegeList}
          alt="Top IIT Colleges"
          width={1280}
          height={500}
          className="img-fluid"
        />
      </div>

      {/* Banner Content */}
      <div className="basic-banner-content">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-md-6">
              <div className="banner-content">
                <h1>
                  Top <span>IIT Colleges</span> in <span>India 2025</span>
                </h1>
                <p>
                  India has 1211 top engineering colleges, of which 942 colleges
                  are private and 269 colleges are government.
                </p>
              </div>
            </div>

            {/* Right Side Placeholder */}
            <div className="col-md-6">
              <div className="img-item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
