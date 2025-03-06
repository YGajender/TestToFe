"use client";
import { useState } from "react";
import phone from "../assets/images/phone.png";
import google from "../assets/images/google.png";
import Image from "next/image";
import SignUp from "./SignUp";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const SignIn: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  const [signupshowModal, setSignupShowModal] = useState(false);
  const opensignupModal = () => setSignupShowModal(true);
  const closesignupModal = () => setSignupShowModal(false);

  return (
    <>
      <div
        className="modal fade show"
        id="exampleModalCenter"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              <h3>Sign in</h3>
              <p>
                Don’t have an account?{" "}
                <a href="#" onClick={opensignupModal}>
                  Create now
                </a>
              </p>

              <form action="">
                <div className="inner-item">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="inner-item">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="...."
                  />
                </div>

                <div className="checkbox-with-forget">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>

                  <a href="#">Forgot Password?</a>
                </div>

                <a className="button" href="otp.html">
                  Sign in
                </a>
                <div className="divider">
                  <p>OR</p>
                </div>

                <div className="login-with">
                  <Image
                    src={google} // The image source, imported
                    alt="Google"
                    className="img-fluid" // Optional class for styling
                    width={18} // Width of the image in pixels
                    height={18} // Height of the image in pixels
                  />
                  <p>Continue with Google</p>
                </div>

                <div className="login-with">
                  <Image
                    src={phone} // The image source, imported
                    alt="Phone"
                    className="img-fluid" // Optional class for styling
                    width={14} // Width of the image in pixels
                    height={14} // Height of the image in pixels
                  />
                  <p>Continue with Mobile Number</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SignUp showModal={signupshowModal} closeModal={closesignupModal} />
    </>
  );
};

export default SignIn;
