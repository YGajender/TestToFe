import Image from "next/image";
import images1 from "../assets/images/1.png";
import videoplay from "../assets/images/video-play.png";
import images2 from "../assets/images/2.jpg";
import { FaCheck } from "react-icons/fa";

export default function NEETPredictor() {
  return (
    <>
      <section className="predictor-work-sec">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="inner-content">
                  <h3>
                    How Our <span>NEET Predictor</span> Work?
                  </h3>
                  <p>
                    NEET College Predictor 2024 is designed to assist the
                    candidates in predicting their chances of admission to top
                    Medical, dental ayush and all other medical courses based on
                    students NEET scores. NEET College Predictor 2024 covers the
                    previous years’ NEET Cut off data.
                  </p>

                  <p>
                    To provide the list of the most suitable medical/ dental
                    colleges in India, Visuticareer NEET College Predictor uses
                    opening and closing ranks dervied from the seat allotment
                    result of NEET counselling. NEET Counselling for 15% AIQ
                    seats is conducted by MCC, while for 85% of State Quota
                    Seats, it is conducted by the respective state authorities.
                    In 2023, the round 1 closing ranks for AIIMS Delhi and VMMC
                    Delhi were 57 and 107 respectively.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="video-img">
                  <Image
                    src={images1}
                    alt=""
                    width={500}
                    height={300}
                    className="img-fluid"
                  />

                  <div
                    className="video-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                  >
                    <Image
                      src={videoplay}
                      alt=""
                      width={64}
                      height={64}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="videoModal"
            aria-labelledby="videoModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="inner-card">
                <h6>NEET State Counsellings College Predictor 2025</h6>
                <ul>
                  <li>
                    {" "}
                    <i className="fa-solid fa-check"></i> Predict your admission
                    chances in MBBS/BDS seats through state-level counsellings
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Includes 85% State
                    Quota seats in govt. and private colleges through merit &
                    management quota
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-check"></i> Check NEET state-wise
                    cutoffs for 27 states of India
                  </li>
                </ul>

                <div className="link">
                  <a href="#"> Use Now </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-card">
                <h6>NEET All India Counselling College Predictor 2025</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Predict your admission
                    chances in MBBS / BDS / AYUSH seats through All India
                    counselling
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Includes 15% All India
                    quota seats in govt. colleges
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> And Central
                    universities & management quota in private colleges
                  </li>
                </ul>

                <div className="link">
                  <a href="#"> Use Now </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-card">
                <h6>NEET State+AIQ Predictor 2025</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i> Predict your admission
                    chances in MBBS/BDS seats through state-level counsellings
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Includes 85% State
                    Quota seats in govt. and private colleges through merit &
                    management quota
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Check NEET state-wise
                    cutoffs for 27 states of India
                  </li>
                </ul>

                <div className="link">
                  <a href="#"> Use Now </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="predictor-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-item">
                <Image
                  src={images2}
                  alt=""
                  width={500}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h3>NEET UG Predictor 2025</h3>
                <p>
                  NEET college predictor is a tool to assist medical aspirants
                  in predicting top medical colleges based on their NEET UG
                  Score. The NEET College predictor 2024 historical NEET cutoffs
                  and advanced algorithms, changes in seats for colleges
                  participating in counselling and analyses the trend to
                  generate an approximate range of ranks within which a
                  candidate may secure a seat.
                </p>
                <ul>
                  <li>
                    <FaCheck size={20} /> MBBS Abroad
                  </li>
                  <li>
                    <FaCheck size={20} /> MBBS Abroad
                  </li>
                  <li>
                    <FaCheck size={20} /> NEET UG
                  </li>
                  <li>
                    <FaCheck size={20} /> NEET UG
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
