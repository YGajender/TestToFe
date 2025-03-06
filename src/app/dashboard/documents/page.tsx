import Link from "next/link";
import Layout from "../Layout";
import { FaUpload } from "react-icons/fa"; // Import Font Awesome upload icon

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
          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Education Details</label>
          </div>
          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Account Details</label>
          </div>
          <div className="form-check active">
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
              defaultChecked
            />
            <label className="form-check-label">Requirement Doc.</label>
          </div>
        </div>

        {/* <!-- basic detail  --> */}

        <div className="basic-detail">
          <div className="inner-title">
            <h6>Requirement Documents and Details</h6>
          </div>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Category Certificate State </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>

                  <div className="error">
                    Certificate only valid after 31st March of Current Year
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Category Certificate State </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>

                  <div className="error">
                    Certificate only valid after 31st March of Current Year
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Category Certificate State </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Category Certificate center </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Domicile Certificate  </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> 10th Mark sheet </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> 11th mark sheet </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> 12th mark sheet </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> NEET Score Cared </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> NEET Score Cared </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label>
                    {" "}
                    Student Photo{" "}
                    <small>(same as NEET Application Form Photo)</small>{" "}
                  </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Aadhar Card </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Other ID proof </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Cancel Cheque </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Candidate Signature </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Transfer Certificate (T.C) </label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Migration Certificate</label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="upload-wrapper">
                  <label> Character Certificate</label>
                  <div className="upload-item">
                    <input type="file" className="form-control" />
                    <div className="upload-form">
                      {" "}
                      <FaUpload /> Upload Files
                    </div>
                    <button>Sample Files</button>
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
                    By submitting this form, you accept and agree to our{" "}
                    <span>Terms of Use.</span>
                  </label>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/other-details"
                  type="submit"
                  className="btn default"
                >
                  Previous
                </Link>
                <Link
                  href="/dashboard/basic-details"
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
