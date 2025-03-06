"use client";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { requestHandler } from "../services";
import { errorMsg, successMsg } from "../toast";
import { emailValidation } from "../utils/helper";
import {
  handleForgotModal,
  handleLoginModal,
  handleEmailLoginOtpModal,
} from "../store/services/global";
import Link from "next/link";


const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { forgotPasswordModal } = useSelector((state) => state.global);

  const loginModalHandler = () => {
    dispatch(handleLoginModal(true));
    dispatch(handleForgotModal(false));
  };

  const onSubmit = async (data) => {
    // console.log("data>>>>>>>>>>>>>>", data);
    // return
    try {
      const response = await requestHandler(
        "POST",
        `/auth/student/forgot-password`,
        data
      );
      console.log("hiiiiiiiiiiiiiii", response);
      if (response.status == true) {
        successMsg(response.message);
        reset({ email: "" });
        dispatch(handleEmailLoginOtpModal(true));
        dispatch(handleForgotModal(false));
        localStorage.setItem("email", data.email);
      } else {
        errorMsg(response.message);
        console.log("hiiiiiiiiiiiiiii");

      }
    } catch (err) {
      // const error = err.response ? err.response.message : err.message;
      // errorMsg(error);
      console.log("Error adding data:", err);
    }
  };

  return (
    <>
      <Modal show={forgotPasswordModal} className="modal fade show">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => dispatch(handleForgotModal(false))}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h3>Forgot Password</h3>
          <p>
            Please Enter the Email address you'd like your password reset
            information sent to
          </p>
          <form onSubmit={handleSubmit}>
            <div className="inner-item">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                {...register("email", emailValidation)}
              />
              {errors.email?.type === "required" && (
                <div>{errors.email.message}</div>
              )}
              {errors.email?.type === "pattern" && (
                <div>{errors.email.message}</div>
              )}
            </div>
            <button type="button" className="button"
              onClick={handleSubmit(onSubmit)}
            >
              Send Code
            </button>
            <div className="divider">
              <p>OR</p>
            </div>
            <div className="login-with">
              <p onClick={loginModalHandler}><Link href="">Back To Login </Link></p>
            </div>
          </form>
        </div>
      </Modal >

    </>
  );
};

export default Forgot;
