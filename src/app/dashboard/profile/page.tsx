import Link from "next/link";
import Layout from "../Layout";
import TagsInput from "../components/TagsInput";

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
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">Basic Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked

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
            <h6>Neet Details</h6>
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
                  <label className="form-label">Student Name</label>
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
                    <div className="label-title">Type of preparation</div>
                  </div>

                  <div className="col-md-9">
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label">
                          Online Preparation
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label">
                          Self-Preparation
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label">
                          Foundation with schooling
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label">Institute</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <h6>Counselling Details</h6>
                  </div>

                  <div className="col-md-12">
                    <TagsInput Title="Select course for Counselling" />
                  </div>

                  <div className="col-md-12">
                    <TagsInput Title="Type of Counselling" />
                  </div>
                  <div className="col-md-12">
                    <TagsInput Title="Choose State and Quota" />
                  </div>
                </div>
              </div>

              <div className="check-input-wrapper">
                <div className="input-wrapper">
                  <label className="">Remark</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    placeholder="Type here..."
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/dashboard" type="submit" className="btn default">
                  Previous
                </Link>
                <Link
                  href="/dashboard/profile-family-details"
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
