"use client";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { requestHandler } from "../services/index";
import { login } from "../store/services/authSlice";
import {
  handleForgotModal,
  handleLoginModal,
  handleMobileLoginModal,
  handleSignupModal,
} from "../store/services/global";
import { errorMsg, successMsg } from "../toast";
import {
  emailValidation,
  passwordValidationRequired,
} from "../utils/helper";
import Image from "next/image";
// import GoogleLoginButton from "../GoogleLoginAuth";
import phone from "../assets/images/phone.png"
import google from "../assets/images/google.png"
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const { loginModal } = useSelector((state) => state.global);
  const router = useRouter();
  const [isRememberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    let isRemember = localStorage.getItem("isRememberMe");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    if (isRemember == "true") {
      setValue("email", email);
      setValue("password", password);
      setIsRememberMe(true);
    } else {
      setValue("email", "");
      setValue("password", "");
      setIsRememberMe(false);
    }
  }, []);

  const onSubmit = async (data) => {

    // console.log("data>>>>>>>>>>>>>", data);
    // return
    try {
      const response = await requestHandler(
        "POST",
        `/auth/student/email-login`,
        data,
        router
      );
      if (response?.status) {
        dispatch(handleLoginModal(false));
        dispatch(
          login({
            userData: response?.user,
            token: response?.token,
          })
        );
        if (isRememberMe) {
          const [email, password] = watch(["email", "password"]);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("isRememberMe", true);
        } else {
          localStorage.setItem("email", "");
          localStorage.setItem("password", "");
          localStorage.setItem("isRememberMe", false);
        }
        router.push("/dashboard/basic-details");
        successMsg(
          response.message ? response.message : "Student loggedIn successfully"
        );
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  const handleModelSignup = () => {
    // console.log("hiiiiiiiiiiiiiiiiiii");
    dispatch(handleSignupModal(true));
    dispatch(handleLoginModal(false));

  };
  const handleMobileLogin = () => {
    dispatch(handleMobileLoginModal(true));
    dispatch(handleLoginModal(false));
  };
  const forgotModalHandler = () => {
    dispatch(handleForgotModal(true));
    dispatch(handleLoginModal(false));
  };

  const handleSuccess = (response) => {
    const userObject = parseJwt(response.credential);
    if (userObject.email_verified) {
      console.log("userObject>>>>>>>>>>>>>", userObject);
      router.push("/dashboard")
    }
    dispatch(handleLoginModal(false));
    successMsg("Student LoggedIn Successfully");

  };
  const handleError = (error) => {
    console.error("Login failed:", error);
  };

  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };


  return (
    <>
      <Modal show={loginModal} className="modal fade show">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => dispatch(handleLoginModal(false))}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h3>Sign in</h3>
          <p>
            Don’t have an account?{" "}
            <Link href=""
              onClick={() => handleModelSignup()}
            >
              Create now
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inner-item">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
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
            <div className="inner-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="...."
                {...register("password", passwordValidationRequired)}
              />
              {errors.password?.type === "required" && (
                <div>{errors.password.message}</div>
              )}
              {errors.password?.type === "pattern" && (
                <div>{errors.password.message}</div>
              )}
            </div>
            <div className="checkbox-with-forget">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="checked"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={isRememberMe}
                  onChange={() =>
                    setIsRememberMe((prevState) => !prevState)
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <Link href=""
                onClick={() => forgotModalHandler()}
                className="text-primary"
              >
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="button">
              Sign in
            </button>
            <div className="divider">
              <p>OR</p>
            </div>
            <div
              className="login-with"
              // onClick={openMobileModal}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={google}
                alt="Google"
                className="img-fluid"
                width={18}
                height={18}
              />
              <p>Continue with Google</p>
            </div>
            <div
              className="login-with"
              onClick={() => handleMobileLogin()}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={phone}
                alt="Phone"
                className="img-fluid"
                width={14}
                height={14}
              />
              <p>Continue with Mobile Number</p>
            </div>
          </form>
        </div>
      </Modal >
    </>
  );
};

export default SignIn;

