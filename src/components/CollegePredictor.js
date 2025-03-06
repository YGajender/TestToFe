import Image from "next/image" // Use Next.js Image component for optimization

const CollegePredictor = () => {
  return (
    <section className="college-predictor">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="left-content">
              <h2>
                Dream <span>College Predictor</span>
              </h2>
              <p>
                We predict your College admission chances and Ranks based on
                years of historical data and advanced Analytics to help you plan
                in advance.
              </p>

              <Image
                src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/predictor.png"
                alt="College Predictor"
                // Adjust the width as needed
                width={500}
                // Adjust the height as needed
                height={300}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="right-content">
              <div className="inner-item">
                <h4>College Predictor</h4>
                <p>
                  Know your College Admission chances at the course level based
                  on domicile, caste, gender, etc.
                </p>

                <ul>
                  <li>NEET UG college predictors</li>
                  <li>NEET PG college predictor</li>
                  <li>JEE Main college predictor</li>
                </ul>
              </div>
            </div>

            <div className="right-content">
              <div className="inner-item">
                <h4>Predict Your Rank</h4>
                <p>
                  Know your College Admission chances at the course level based
                  on domicile, caste, gender, etc.
                </p>

                <ul>
                  <li>NEET UG college predictors</li>
                  <li>NEET PG college predictor</li>
                  <li>JEE Main college predictor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollegePredictor
