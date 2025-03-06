import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function PaymentSection() {
  return (
    <section className="payment-sec">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="left-content">
              <h4>Counseling Name</h4>
              <ol>
                <li>
                  <FaCheck /> MBBS Abroad
                </li>
                <li>
                  <FaCheck /> MBBS Abroad
                </li>
                <li>
                  <FaCheck /> NEET UG
                </li>
                <li>
                  <FaCheck /> NEET UG
                </li>
              </ol>

              <h5>What's in for you?</h5>
              <p>
                Make an informed career decision with your personalized report
                on the best college to opt for medical, Dental & AYUSH.
              </p>

              <h6>NEET UG All India Quota Counseling College Predictor</h6>
              <ul>
                <li>
                  It will analyze your NEET performance using advanced
                  algorithms and historical counseling data.
                </li>
                <li>
                  It will analyze your NEET performance using advanced
                  algorithms and historical counseling data.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <div className="plan-wrapper">
              <div className="select-plan">
                <h4>Please Select Plan</h4>

                {/* Plan Items */}
                {[1, 2, 3].map((_, index) => (
                  <div className="inner-item" key={index}>
                    <div className="content">
                      <h6>
                        NEET UG 2024 All India Counseling College Predictor
                      </h6>
                      <span>
                        RS. 499/- <del>RS. 799/-</del>
                      </span>
                    </div>
                    <div className="arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Summary */}
              <div className="total">
                Subtotal <span>RS. 499</span>
              </div>
              <div className="gst">
                GST <span>RS. 91.00</span>
              </div>

              <div className="amount-with-btn">
                <h2>RS. 590 /-</h2>
                <button>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
