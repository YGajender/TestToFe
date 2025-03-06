import React from "react";

const CompareTables = () => {
  return (
    <>
      <section className="compare-tabs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                {[
                  "Course Comparison",
                  "Placement Comparison",
                  "Reviews Comparison",
                  "Fees Comparison",
                  "Campus & Hostel",
                  "Facilities Comparison",
                ].map((tab, index) => (
                  <li key={index}>
                    <a href="#">{tab}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {["Course Comparison", "Placement Comparison", "Reviews Comparison"].map(
        (heading, index) => (
          <section className="compare-table" key={index}>
            <div className="container">
              <div className="col-12">
                <h5>{heading}</h5>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Course Details</th>
                          <th>Baddi University</th>
                          <th>FI Pharmacy College</th>
                          <th>Baddi University</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ranking</td>
                          <td>4.5</td>
                          <td>4.2</td>
                          <td>3.9</td>
                        </tr>
                        <tr>
                          <td>Cost To Study</td>
                          {Array(3).fill(
                            <td>
                              <div className="text-center">
                                <strong>First Year Fees:</strong> ₹99,934
                                <br />
                                <strong>Hostel Fees:</strong> ₹37,620
                                <br />
                                <hr />
                                <strong>Total Fees:</strong> ₹3,99,736 (4 Years)
                                <br />
                                <a href="#" className="btn btn-sm mt-2">
                                  Check Detailed Fees
                                </a>
                              </div>
                            </td>
                          )}
                        </tr>
                        <tr>
                          <td>Eligibility</td>
                          <td>10+2</td>
                          <td>Pass in 10+2 + UPSEE</td>
                          <td>Pass in 10+2 + UPSEE</td>
                        </tr>
                        <tr>
                          <td>College Course Details</td>
                          <td>
                            Total Courses - 82
                            <br />
                            B.Sc (Nursing): 3
                          </td>
                          <td>
                            Total Courses - 2<br />
                            B.Pharm - 1
                          </td>
                          <td>
                            Total Courses - 2<br />
                            BBA/BMS: 2
                          </td>
                        </tr>
                        <tr>
                          <td>Proprietor Name</td>
                          {Array(3).fill(
                            <td>
                              <div className="text-center">
                                <p>
                                  Duration - <b>4 Years</b>
                                </p>
                                <p>
                                  Course Offered - <b>Full Time</b>
                                </p>
                                <p>
                                  Total Seats - <b>40</b>
                                </p>
                                <p>
                                  Mode - <b>Full Time</b>
                                </p>
                                <p>
                                  Degree Type - <b>On Campus</b>
                                </p>
                                <p>
                                  Course Level - <b>Graduation</b>
                                </p>
                                <p>
                                  Course Credential - <b>Degree</b>
                                </p>
                                <a
                                  href="#"
                                  className="btn btn-success btn-sm mt-2"
                                >
                                  Check Detailed Fees
                                </a>
                              </div>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default CompareTables;
