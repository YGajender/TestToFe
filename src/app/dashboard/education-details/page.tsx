import Link from "next/link";
import Layout from "../Layout";

const Page = () => {
  return (
    <Layout>
      <div className="title">
        <h4>Your profile</h4>
      </div>

      <div className="wrapper">
        <div className="radio-wrapper">
          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">Basic Details</label>
          </div>

          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">NEET Details</label>
          </div>
          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Family Details</label>
          </div>
          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Contact Details</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label className="form-check-label">Education Details</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Account Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Other Details</label>
          </div>
          <div className="form-check  ">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
             />
            <label className="form-check-label">Requirement Doc.</label>
          </div>
        </div>

        {/* <!-- basic detail  --> */}

        <div className="basic-detail">
          <div className="inner-title">
            <h6>Education Details </h6>
          </div>

          <form>
            <div className="row">
              <p className="green">10th class (secondary )</p>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Name of Board</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">School Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">School Pin Code</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=" 54555"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Passing State</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Year of Passing</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Roll Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Total Max Marks</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Total Obtain Marks</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Father Contact No</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Any Alternate No.</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="1234590"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="input-wrapper">
                  <label className="form-label">
                    Percentage{" "}
                    <small>
                      (auto calculate percentage obtain and total max marks)
                    </small>
                  </label>
                  <input
                    type="email"
                    className="form-control bg-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="92%"
                  />
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="green">
                      {" "}
                      11th Class [compulsory regular biology subject]
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Name of Board</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Pin Code</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Passing State</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Year of Passing</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Roll Number</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Total Max Marks</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="ABC"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Total Obtain Marks</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="1252"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-wrapper">
                      <label className="form-label">
                        Percentage{" "}
                        <small>
                          (auto calculate percentage obtain and total max marks)
                        </small>
                      </label>
                      <input
                        type="email"
                        className="form-control bg-input"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="35%"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="green mb-3">12th Class Details</div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Name of Board</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="District"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> School Pin Code</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="22623"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Passing State</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Year of Passing</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Roll Number</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="detail-wrapper">
                      <h6>Please enter your details</h6>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Physics"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Obtained"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Biology"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Obtained"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Chemistry"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Obtained"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="English"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Obtained"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Total Max Marks</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Total Obtain Marks</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-wrapper">
                      <label className="form-label">
                        {" "}
                        Percentage{" "}
                        <small>
                          (auto calculate percentage obtain and total max marks)
                        </small>
                      </label>
                      <input
                        type="email"
                        className="form-control bg-input"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="90%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/verify"
                  type="submit"
                  className="btn default"
                >
                  Previous
                </Link>
                <Link
                  href="/dashboard/account-details"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save and Next
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
