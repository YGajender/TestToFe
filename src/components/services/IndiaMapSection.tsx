import Image from "next/image";
import indiamap from "../../assets/images/india-map.png";

const IndiaMapSection = () => {
  return (
    <section className="india-map-sec">
      <div className="container">
        <div className="col-12 text-center pb-5 mb-2">
          <h2>
            <span>Medical </span> College Map in <span>India</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="col-left-timline">
              <div className="line"></div>
              <ul>
                <li>Total Medical College India - (706)</li>
                <li>Total AIIMS (19) Seats</li>
                <li>Total Govt. Colleges</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="india-map">
              <Image
                src={indiamap}
                alt="India Medical College Map"
                className="img-fluid"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-right-timline">
              <div className="line"></div>
              <ul>
                <li>Total Pvt. Colleges</li>
                <li>Total Deemed Medical Colleges</li>
                <li>Total Govt. Colleges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
