"use client";

import Image from "next/image";
import doctor2 from "../../assets/images/doctor2.png";

const NEETPredictor = () => {
  return (
    <div className="net-predictor">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h4>NEET Predictor</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <div className="link">
            <a className="text-decoration-none" href="#">
              Predictor Now
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="do-img">
            <Image src={doctor2} alt="Doctor" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEETPredictor;
