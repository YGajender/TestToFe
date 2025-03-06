import React from "react"

const HealthSection = () => {
  return (
    <section className="healf-section">
      <div className="container">
        <div className="row">
          {/* Left Section - Eligibility Criteria */}
          <div className="col-md-6">
            <div className="left">
              <h6>Eligibility Criteria</h6>
              <p>
                Most universities have no entrance examinations for MBBS study
                abroad. To secure admission in MBBS abroad 2025, students must:
              </p>
              <ul>
                <li>
                  Score at least 50% marks in 10+2 with Biology, Chemistry,
                  Physics, and English as subjects.
                </li>
                <li>
                  Complete HSC or equivalent education from a recognized board
                  or university, preferably from a top university.
                </li>
                <li>
                  Have attained the age of 17 years or above as on 31st December
                  2025.
                </li>
                <li>
                  Appear for the NEET examination if students wish to practice
                  in India after finishing MBBS outside India.
                </li>
                <li>Possess a valid Passport.</li>
                <li>Have proof of Covid Vaccination.</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Required Documents */}
          <div className="col-md-6">
            <div className="right">
              <h6>Required Documents</h6>
              <ul>
                <li className="required">Class X Marksheet</li>
                <li className="required">Class XII Marksheet</li>
                <li className="required">Birth Certificate</li>
                <li className="required">Admission Letter</li>
                <li className="not-required">IELTS/TOEFL Scorecard</li>
                <li className="required">NEET Scorecard</li>
                <li className="required">Valid Passport</li>
                <li className="required">Caste Certificate (if applicable)</li>
                <li className="required">Transfer Certificate</li>
                <li className="required">Migration Certificate</li>
                <li className="required">Identity Proof</li>
                <li className="required">Covid Test Results</li>
                <li className="required">Vaccination Proof</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthSection
