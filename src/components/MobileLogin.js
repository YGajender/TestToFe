"use client";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import google from "../assets/images/google.png"

import { requestHandler } from "../services";
import {
  handleMobileLoginModal,
  handleSignupModal,
  handleMobileOtpVerifyModal,
} from "../store/services/global";
import { errorMsg, successMsg } from "../toast";
import { fieldValidation, phoneValidation } from "../utils/helper";
import Image from "next/image";

const MobileLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await requestHandler(
        "POST",
        "/auth/student/mobile-login",
        data
      );
      if (response.status) {
        successMsg(response.message);
        localStorage.setItem("mobileNumber", data?.mobileNumber);
        dispatch(handleMobileLoginModal(false));
        dispatch(handleMobileOtpVerifyModal(true));
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  const handleModelSignup = () => {
    dispatch(handleMobileLoginModal(false));
    dispatch(handleSignupModal(true));
  };

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
                // onClick={closeModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h3>Mobile Login</h3>

              <form>
                <div className="inner-item">
                  <label htmlFor="mobile">Mobile Number</label>
                  <div className="d-flex">
                    <select
                      name="countryCode"
                      className="form-control w-25 me-2"
                      {...register('countryCode', fieldValidation)}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+61">+61</option>
                      <option value="+81">+81</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter Your Mobile Number"
                      pattern="[0-9]{7,15}"
                      {...register('mobileNumber', fieldValidation)}
                    />

                  </div>
                  {errors.mobileNumber?.type === "required" && (
                    <div>{errors.mobileNumber.message}</div>
                  )}
                  {errors.mobileNumber?.type === "pattern" && (
                    <div>{errors.mobileNumber.message}</div>
                  )}
                </div>

                <button type="button" className="button" onClick={handleSubmit(onSubmit)}>
                  Send Code
                </button>

                <div className="divider">
                  <p>OR</p>
                </div>

                <div className="login-with">
                  <Image
                    src={google}
                    alt="Google"
                    className="img-fluid"
                    width={18}
                    height={18}
                  />
                  <p>Continue with Google</p>
                </div>
              </form>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default MobileLogin;
