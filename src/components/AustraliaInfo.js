import React from "react"

const AustraliaInfo = () => {
  return (
    <div className="container my-5">
      <div className="college-inner-info">
        <h2>
          <strong>Australia</strong>
        </h2>
        <p>
          Australia is renowned for its high-quality healthcare system and
          top-ranked medical schools. The country offers a rigorous MBBS program
          with modern facilities and a focus on practical experience.
        </p>
        <div className="info-table p-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Top Universities in Australia</td>
                <td>
                  <ul>
                    <li>University of Sydney</li>
                    <li>University of Melbourne</li>
                    <li>University of Queensland</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Annual Fee</td>
                <td>AUD 50,000 – AUD 70,000 (INR 27L – INR 38L)</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>
                  4-5 years (depending on undergraduate degree completion)
                </td>
              </tr>
              <tr>
                <td>Admission Requirements</td>
                <td>
                  <ul>
                    <li>High school diploma with strong science performance</li>
                    <li>UCAT/GAMSAT: Minimum score 2500</li>
                    <li>IELTS: Minimum 7.0 (overall)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Visa Requirements</td>
                <td>
                  <ul>
                    <li>Student Visa (subclass 500)</li>
                    <li>
                      Admission offer, proof of funds, health insurance required
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Work Permit</td>
                <td>
                  Up to 40 hours per fortnight during term-time - Full-time
                  during breaks
                </td>
              </tr>
              <tr>
                <td>Cost of Living in Australia</td>
                <td>AUD 20,000 – AUD 30,000 per year (INR 11L – INR 16L)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AustraliaInfo
