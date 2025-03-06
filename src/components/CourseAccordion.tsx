"use client"; // Required if using App Router in Next.js 13+

import React from "react";

const CourseAccordion = () => {
  return (
    <div className="course">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h4 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="course-name-fees d-flex align-items-center justify-content-between w-100 pe-5">
                <div className="course-name">
                  <h5>B. Tech</h5>
                  <p>₹2.29 Lakhs</p>
                </div>
                <div className="corse-fees">
                  <h6>Neet Predictor</h6>
                </div>
              </div>
            </button>
          </h4>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* Fees Table */}
              {[
                "Tuition Fee",
                "Admission Fee",
                "Examination Fee",
                "Library Fee",
                "Laboratory Fee",
                "Hostel Fee",
                "Mess Fee",
                "Miscellaneous Fees",
                "Refundable Deposits",
                "Other Fees",
              ].map((feeType, index) => (
                <div key={index}>
                  <h6>
                    {index + 1}. {feeType}
                  </h6>
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>Fee Cat.</th>
                          <th>Year 1</th>
                          <th>Year 2</th>
                          <th>Year 3</th>
                          <th>Year 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Annual Fee</td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                        </tr>
                        <tr>
                          <td>
                            Semester-wise Fee <small>(if applicable)</small>
                          </td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                          <td>₹122400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Payment Details */}
              <div className="details-box green">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>Account Holder's Name:</strong> Abc
                    </p>
                    <p>
                      <strong>Amount:</strong> 50000/-
                    </p>
                    <p>
                      <strong>Date:</strong> 25 Dec. 2025
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Bank Account Number:</strong> 21554455112552
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> SBIDMKM55
                    </p>
                    <p>
                      <strong>Frequency:</strong> Monthly
                    </p>
                    <p>
                      <strong>MRN:</strong> XYZ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccordion;
