import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Include any other necessary imports here

const CourseAccordionItem = () => {
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
              <h6>1. Tuition Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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

              <h6>2. Admission Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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

              <h6>3. Examination Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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

              <h6>4. Library Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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

              <h6>5. Laboratory Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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
              <h6>6. Hostel Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
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
                        <span>Room Type-wise Fee</span>
                        Single
                      </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>Shared</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>AC </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>
                        <span>Hostel Deposit </span>
                        Refundable{" "}
                      </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>Non-refundable </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>7. Mess Fee</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monthly Mess Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>Annual Mess Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>
                        <span>Food Type</span>
                        Vegetarian
                      </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>Non-Vegetarian</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>8. Miscellaneous Fees</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sports Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>Cultural Activity Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>Development Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>Alumni Association Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>

                    <tr>
                      <td>Insurance Fee</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>9. Refundable Deposits</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Caution Money Deposit</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>Security Deposit (Hostel, Library, etc.) </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>10. Other Fees</h6>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Fee Cat.</th>
                      <th scope="col">Year 1</th>
                      <th scope="col">Year 2</th>
                      <th scope="col">Year 3</th>
                      <th scope="col">Year 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Transport Fee (if applicable)</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                    <tr>
                      <td>
                        Clinical Rotation Fee <br />
                        <small>(for internships or hospital training)</small>
                      </td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                      <td>₹122400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

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

        <div className="accordion-item">
          <h4 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div className="course-name-fees d-flex align-items-center justify-content-between w-100 pe-5">
                <div className="course-name">
                  <h5>M. Tech B.Tech</h5>
                  <p>15 Courses</p>
                </div>
                <div className="corse-fees">
                  <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                </div>
              </div>
            </button>
          </h4>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Course</th>
                      <th scope="col">Application Date</th>
                      <th scope="col">Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>Mathematics And Computing</p>
                        <div className="review">
                          <i className="fa-solid fa-star"></i> 4.1 (25 Reviews)
                        </div>
                      </td>
                      <td>27 Apr - 18 Jun 2024</td>
                      <td>
                        <p>₹2,28,650</p>
                        <div className="review">1st Yr Fees</div>
                      </td>
                      <td>
                        <div className="table-link">
                          <a href=""> Neet Predictor</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Mathematics And Computing</p>
                        <div className="review">
                          <i className="fa-solid fa-star"></i> 4.1 (25 Reviews)
                        </div>
                      </td>
                      <td>27 Apr - 18 Jun 2024</td>
                      <td>
                        <p>₹2,28,650</p>
                        <div className="review">1st Yr Fees</div>
                      </td>
                      <td>
                        <div className="table-link">
                          <a href=""> Neet Predictor</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Mathematics And Computing</p>
                        <div className="review">
                          <i className="fa-solid fa-star"></i> 4.1 (25 Reviews)
                        </div>
                      </td>
                      <td>27 Apr - 18 Jun 2024</td>
                      <td>
                        <p>₹2,28,650</p>
                        <div className="review">1st Yr Fees</div>
                      </td>
                      <td>
                        <div className="table-link">
                          <a href=""> Neet Predictor</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Mathematics And Computing</p>
                        <div className="review">
                          <i className="fa-solid fa-star"></i> 4.1 (25 Reviews)
                        </div>
                      </td>
                      <td>27 Apr - 18 Jun 2024</td>
                      <td>
                        <p>₹2,28,650</p>
                        <div className="review">1st Yr Fees</div>
                      </td>
                      <td>
                        <div className="table-link">
                          <a href=""> Neet Predictor</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Mathematics And Computing</p>
                        <div className="review">
                          <i className="fa-solid fa-star"></i> 4.1 (25 Reviews)
                        </div>
                      </td>
                      <td>27 Apr - 18 Jun 2024</td>
                      <td>
                        <p>₹2,28,650</p>
                        <div className="review">1st Yr Fees</div>
                      </td>
                      <td>
                        <div className="table-link">
                          <a href=""> Neet Predictor</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* You can add more accordion items in a similar manner */}
      </div>
    </div>
  );
};

export default CourseAccordionItem;
