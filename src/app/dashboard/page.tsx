import Link from "next/link";
import Layout from "./Layout";

const Page = () => {
  return (
    <Layout>
      <div className="title">
        <h4>Your profile</h4>
      </div>
      {/* Profile form or content goes here */}

      <div className="wrapper">
        <div className="radio-wrapper">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label className="form-check-label">Basic Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">NEET Details</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Family Details</label>
          </div>
          <div className="form-check">
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
            <h6>Basic Details</h6>
          </div>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Student Name</label>
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
                  <label className="form-label">Dob</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label>State</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label>Nationality</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-wrapper">
                  <label className="form-label">Domicile</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <div className="label-title">Gender</div>
                  </div>

                  <div className="col-md-9">
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label">Male</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="female"
                          id="female"
                          defaultChecked
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label">Transgender</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-7">
                        <p>Are you only girl child of your parents?</p>
                      </div>

                      <div className="col-md-5">
                        <div className="radio-wrapper">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label className="form-check-label">No</label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name=""
                              id=""
                              defaultChecked
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <h6>Category</h6>
                  </div>

                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-wrapper">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Central"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="input-wrapper">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="State"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <p>Are You a Physically Disabled?</p>
                  </div>

                  <div className="col-md-6">
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label">No</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <p>Your Father is army Person? </p>
                  </div>

                  <div className="col-md-6">
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name=" "
                          id=" "
                        />
                        <label className="form-check-label">No</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name=" "
                          id=" "
                          defaultChecked
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="label-with-radio radio-wrapper">
                      <span> Belongs to Minority</span>
                      
                      <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    
                    <label htmlFor=""  className="form-check-label">No</label>
                      </div> 
                      <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="minority"
                        id="minority"
                        defaultChecked
                      />
                    
                    <label htmlFor="" className="form-check-label">Yes</label>
                      </div> 
                     
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="check-input-wrapper pt-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label">
                      By submitting this form, you accept and agree to our <a href="#"> Terms
                      of Use.</a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="button-wrapper type2">
                <Link
                  href="/dashboard/profile"
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
