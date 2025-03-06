"use client";
import { useState } from "react";
import type12 from "../assets/images/type12.png";
import type3 from "../assets/images/type3.png";
import type4 from "../assets/images/type4.png";
import type5 from "../assets/images/type5.png";
import type6 from "../assets/images/type6.png";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import SignIn from "./SignIn";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const SignUp: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  const [showSignInModal, setShowSignInModal] = useState(false);
  const openSignInModal = () => setShowSignInModal(true);
  const closeSignInModal = () => setShowSignInModal(false);

  return (
    <>
      <div
        className="modal fade show"
        id="registerModal"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registerModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={closeModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="create-account">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="lef-account">
                        <h4>
                          How <span>Visuti Career</span> helps you in Admission
                        </h4>

                        <div className="row">
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type12} // Update path based on your public directory
                                alt="One-to-one counseling"
                                width={100} // Adjust width as per design
                                height={100} // Adjust height as per design
                                className="img-fluid"
                              />
                              <p>one-to-one counseling</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type12}
                                alt="24*7 Availability"
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                              <p>24*7 Availability</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type3}
                                alt="Live Notification"
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                              <p>Live Notification</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type4}
                                alt="Documents Builder"
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                              <p>Documents Builder</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type5}
                                alt="NEET Predictor"
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                              <p>NEET Predictor</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="inner-box">
                              <Image
                                src={type6}
                                alt="College Compare"
                                width={100}
                                height={100}
                                className="img-fluid"
                              />
                              <p>College Compare</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="right">
                        <div className="logo-with-content">
                          <Image
                            src={logo}
                            alt="Visuti Career Logo"
                            width={150} // Adjust logo size
                            height={50} // Adjust logo size
                            className="img-fluid"
                          />

                          <div className="content">
                            <h3>Register Now</h3>
                            <p>
                              Already have an account?{" "}
                              <Link href="#" onClick={openSignInModal}>
                                Sign in
                              </Link>
                            </p>
                          </div>
                        </div>

                        <form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Example"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="mobile">Mobile No.</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="mobile"
                                  placeholder="1234567890"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="courses">Courses</label>
                                <select
                                  className="form-select"
                                  id="courses"
                                  aria-label="Default select example"
                                >
                                  <option selected>MBA</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="states">States</label>
                                <select
                                  className="form-select"
                                  id="states"
                                  aria-label="Default select example"
                                >
                                  <option selected>India</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder=""
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="confirmPassword">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="confirmPassword"
                                  placeholder=""
                                />
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="acceptTerms"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="acceptTerms"
                                >
                                  By submitting this form, you accept and agree
                                  to our <a href="#">Terms of Use</a>.
                                </label>
                              </div>
                            </div>
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Create Account
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignIn showModal={showSignInModal} closeModal={closeSignInModal} />
    </>
  );
};

export default SignUp;
