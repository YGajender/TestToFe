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
            <h6>Contact Details</h6>
          </div>

          <form>
            <div className="row">
              <div className="col-12">
                <div className="mobile-no-verify">
                  <div className="input-wrapper">
                    <label className="form-label">Mobile</label>
                    <div className="verify">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <span
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Verify OTP
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email ID"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Alternate Email id</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email ID"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Student Contact Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="1234567890"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label">Same as WhatsApp</label>
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

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="label-title">
                      <h6>Address Permanent</h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Premises Name</label>
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
                      <label className="form-label">City</label>
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
                      <label className="form-label">Locality</label>
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
                      <label className="form-label">District</label>
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
                      <label className="form-label"> PIN Code</label>
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
                      <label className="form-label"> Country</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="India"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="check-input-wrapper">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">
                    By submitting this form, you accept and agree to our Terms
                    of Use.
                  </label>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/contact-details"
                  type="submit"
                  className="btn default"
                >
                  Previous
                </Link>
                <Link
                  href="/dashboard/education-details"
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
