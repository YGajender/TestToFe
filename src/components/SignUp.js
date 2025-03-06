"use client"
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import type12 from "../assets/images/type12.png"
import type3 from "../assets/images/type3.png"
import type4 from "../assets/images/type4.png";
import type5 from "../assets/images/type5.png";
import type6 from "../assets/images/type6.png";
import logo from "../assets/images/logo.png";

import { requestHandler } from "../services";
import { errorMsg, successMsg } from "../toast";
import {
  emailValidation,
  fieldValidation,
  passwordValidation,
  passwordValidationRequired,
  phoneValidation,
} from "../utils/helper";
import {
  handleLoginModal,
  handleSignupModal,
} from "../store/services/global";
import useRequest from "../hooks/useRequest";
import Link from "next/link";
import Image from "next/image";

const SignUpModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm();

  const dispatch = useDispatch();
  const { signupModel } = useSelector((state) => state.global);


  console.log("signupModel>>>>>>>>>>>>>>", signupModel);


  let initialField = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobileNumber: "",
    course: "",
    state: "",
    password: "",
    password_password: "",
    termOfUse: "",
  };

  const [state, setState] = useState();
  const [course, setCourse] = useState();

  console.log("state", state);
  console.log("course", course);

  const { response: stateRes, request: stateReq } = useRequest();
  const { response: courseRes, request: courseReq } = useRequest();

  useEffect(() => {
    stateReq("GET", "state/list");
    courseReq("GET", "course/list");
    document.title = "SignUp - Visuti Career";
  }, []);

  useEffect(() => {
    if (stateRes) {
      setState(stateRes?.states);
    }
  }, [stateRes]);
  useEffect(() => {
    if (courseRes) {
      setCourse(courseRes?.course);
    }
  }, [courseRes]);


  const stateOptions = state?.map(item => ({
    value: item._id,
    label: item.name,
  }));

  const courseOptions = course?.map(item => ({
    value: item._id,
    label: item.name,
  }));

  const confirmPasswordValidation = {
    ...passwordValidation,
    validate: (value) => {
      if (register("password")) {
        const password = getValues("password");
        if (password !== value) {
          return "Passwords do not match";
        }
      }
      return undefined;
    },
  };

  const onSubmit = async (data) => {

    const { course, state, ...rest } = data;
    const sendData = {
      course: course.value,
      state: state.value,
      ...rest,
    };
    try {
      const response = await requestHandler(
        "POST",
        `/auth/student/create`,
        sendData
      );
      if (response?.status === "Success") {
        successMsg(
          response.message
            ? response.message
            : "Student registration successfully"
        );
        reset(initialField);
        dispatch(handleSignupModal(false));
        dispatch(handleLoginModal(true));
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  const openSignInModel = () => {
    dispatch(handleSignupModal(false));
    dispatch(handleLoginModal(true));
  };

  return (
    <>
      {signupModel && (
        <div
          className="modal fade show"
          id="registerModal"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="registerModal"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={() => { dispatch(handleSignupModal(false)); }}
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
                                <Link href={""}
                                  onClick={() => openSignInModel()}
                                >
                                  Sign in
                                </Link>
                              </p>
                            </div>
                          </div>
                          <form
                          // onSubmit={handleSubmit}
                          >
                            <div className="row">
                              {/* Name Field */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="name">First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("firstName", fieldValidation)}
                                  />
                                  {errors?.firstName && (
                                    <div>{errors.firstName.message}</div>
                                  )}
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="name">Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    {...register("lastName", fieldValidation)}
                                  />
                                  {errors?.lastName && (
                                    <div>{errors.lastName.message}</div>
                                  )}
                                </div>
                              </div>
                              {/* Email Field */}
                              <div className="col-md-6">
                                <div className="form-group">
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
                              </div>

                              {/* Mobile Field */}
                              <div className="col-6">
                                <div className="form-group">
                                  <label htmlFor="mobile">Mobile No.</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="1234567890"
                                    {...register(
                                      "mobileNumber",
                                      phoneValidation
                                    )}
                                  />
                                  {errors.mobileNumber?.type ===
                                    "required" && (
                                      <div>{errors.mobileNumber.message}</div>
                                    )}
                                  {errors.mobileNumber?.type ===
                                    "pattern" && (
                                      <div>{errors.mobileNumber.message}</div>
                                    )}
                                </div>
                              </div>

                              {/* Courses Dropdown */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="courses">Courses</label>
                                  <Controller
                                    className="form-select"
                                    control={control}
                                    name="course"
                                    rules={{
                                      required: "This field is required.",
                                    }}
                                    render={({ field }) => (
                                      <Select
                                        {...field}
                                        options={courseOptions}
                                      />
                                    )}
                                  />
                                  {errors.course?.type === "required" && (
                                    <div className="">
                                      {errors?.["course"].message}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* States Dropdown */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="states">States</label>
                                  <Controller
                                    className="form-select"
                                    control={control}
                                    name="state"
                                    rules={{
                                      required: "This field is required.",
                                    }}
                                    render={({ field }) => (
                                      <Select
                                        {...field}
                                        options={stateOptions}
                                      />
                                    )}
                                  />
                                  {errors.state?.type === "required" && (
                                    <div>{errors?.["state"].message}</div>
                                  )}
                                </div>
                              </div>

                              {/* Password Fields */}
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    {...register(
                                      "password",
                                      passwordValidationRequired
                                    )}
                                  />
                                  {errors.password?.type === "required" && (
                                    <div>{errors.password.message}</div>
                                  )}
                                  {errors.password?.type === "pattern" && (
                                    <div>{errors.password.message}</div>
                                  )}
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
                                    {...register(
                                      "confirm_password",
                                      confirmPasswordValidation
                                    )}
                                  />
                                  {errors?.confirm_password && (
                                    <div>
                                      {errors.confirm_password.message}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Terms Checkbox */}
                              <div className="col-md-12">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="acceptTerms"
                                    {...register("termOfUse", fieldValidation)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="acceptTerms"
                                  >
                                    By submitting this form, you accept and agree
                                    to our <a href="#">Terms of Use</a>.
                                  </label>
                                  {errors?.termOfUse && (
                                    <div>{errors.termOfUse.message}</div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
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
      )}
    </>
  );
};

export default SignUpModal;
