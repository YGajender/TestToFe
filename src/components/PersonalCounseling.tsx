import Image from "next/image";
import Link from "next/link";
import asse from "../assets/images/asse.png";
import { FaAngleRight } from "react-icons/fa";

const PersonalCounseling = () => {
  return (
    <section className="personal-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-item">
              <Image
                src={asse}
                alt="Personal Counseling"
                className="img-fluid"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <h3>
                Get a <span>Personal Counseling</span> <br /> by our expert
                advisor
              </h3>

              <p>
                NEET college predictor is a tool to assist medical aspirants in
                predicting top medical colleges based on their NEET UG Score.
                The NEET College predictor 2024 uses historical NEET cutoffs and
                advanced algorithms, considers changes in seats for colleges
                participating in counselling, and analyzes the trends to
                generate an approximate range of ranks within which a candidate
                may secure a seat.
              </p>

              <h4>ANSHUL TIWARI</h4>
              <p>
                Founder & CEO <br /> <span>Visuti Edu and Tech Pvt Ltd.</span>
              </p>

              <div className="link">
                <Link href="#">
                  Appointment <FaAngleRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCounseling;
