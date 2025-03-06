"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import Layout from "../Layout";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
    control,
    watch,
  } = useForm();
  console.log("errors", errors);
  console.log("watch", watch(""));
  const router = useRouter();

  const onSubmit = (data) => {
    console.log("neetDeatils:", data);
    localStorage.setItem("neetDeatils", JSON.stringify(data));
    router.push("/dashboard/family-details");
  };

  useEffect(() => {
    const neetDeatils = JSON.parse(localStorage.getItem("neetDeatils"))
    const {
      applicationNumber,
      counsellingType,
      course,
      disabilityPercentage,
      disabilityType,
      percentile,
      rank,
      remarks,
      rollNumber,
      score,
      specifiedDisability,
      stateAndQuota,
      totalAttempts,
      typeOfDisability,
      preparationMethods
    } = neetDeatils

    setValue("applicationNumber", applicationNumber)
    setValue("counsellingType", counsellingType)
    setValue("course", course)
    setValue("disabilityPercentage", disabilityPercentage)
    setValue("disabilityType", disabilityType)
    setValue("percentile", percentile)
    setValue("rank", rank)
    setValue("remarks", remarks)
    setValue("rollNumber", rollNumber)
    setValue("score", score)
    setValue("specifiedDisability", specifiedDisability)
    setValue("stateAndQuota", stateAndQuota)
    setValue("totalAttempts", totalAttempts)
    setValue("typeOfDisability", typeOfDisability)
    setValue("preparationMethods", preparationMethods)

  }, [localStorage])

  return (
    <Layout>
      <div className="title">
        <h4>Your profile</h4>
      </div>

      <div className="wrapper">
        <div className="radio-wrapper">
          {[
            "Basic Details",
            "NEET Details",
            "Family Details",
            "Contact Details",
            "Education Details",
            "Account Details",
            "Other Details",
            "Requirement Doc.",
          ].map((label, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={label.toLowerCase().replace(" ", "")}
                defaultChecked={index === 1}
              />
              <label className="form-check-label">{label}</label>
            </div>
          ))}
        </div>

        {/* <!-- basic detail  --> */}

        <div className="basic-detail">
          <div className="inner-title">
            <h6>Neet Details</h6>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Roll Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Your Roll Number Hear...."
                    {...register("rollNumber", {
                      required: "Roll Number is required",
                    })}
                  />
                  {errors.rollNumber && (
                    <span>{errors.rollNumber.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Application Number</label>

                  <input
                    type="text"
                    id="studentName"
                    className="form-control"
                    placeholder="Your Application Number Hear...."
                    {...register("applicationNumber", {
                      required: "Application Number is required",
                    })}
                  />
                  {errors.applicationNumber && (
                    <span>{errors.applicationNumber.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Score</label>
                  <input
                    type="number"
                    className="form-control"
                    id="studentName"
                    placeholder="Your Score Hear...."
                    {...register("score", { required: "Score is required" })}
                  />
                  {errors.score && <span>{errors.score.message}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Rank </label>
                  <input
                    type="number"
                    className="form-control"
                    id="studentName"
                    placeholder="Your Score Hear...."
                    {...register("rank", { required: "Rank is required" })}
                  />
                  {errors.rank && <span>{errors.rank.message}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Percentile</label>
                  <input
                    type="number"
                    className="form-control"
                    id="studentName"
                    placeholder="Your Percentile Hear...."
                    {...register("percentile", {
                      required: "Percentile is required",
                    })}
                  />
                  {errors.percentile && (
                    <span>{errors.percentile.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label htmlFor="studentName">Total Number of Attempt</label>
                  <input
                    type="number"
                    id="studentName"
                    className="form-control"
                    min="1"
                    max="10"
                    step="1"
                    placeholder="Total Number of Attempt Hear...."
                    {...register("totalAttempts", {
                      required: "Total Attempts is required",
                    })}
                  />
                  {errors.totalAttempts && (
                    <span>{errors.totalAttempts.message}</span>
                  )}
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
                          id="onlinePreparation"
                          {...register("preparationMethods")}
                          value="Online Preparation"
                        />
                        <label className="form-check-label" htmlFor="onlinePreparation">
                          Online Preparation
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="selfPreparation"
                          {...register("preparationMethods")}
                          value="Self-Preparation"
                        />
                        <label className="form-check-label" htmlFor="selfPreparation">
                          Self-Preparation
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="foundationSchooling"
                          {...register("preparationMethods")}
                          value="Foundation with Schooling"
                        />
                        <label className="form-check-label" htmlFor="foundationSchooling">
                          Foundation with Schooling
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="institute"
                          {...register("preparationMethods")}
                          value="Institute"
                        />
                        <label className="form-check-label" htmlFor="institute">
                          Institute
                        </label>
                      </div>
                    </div>
                  </div>



                  {/* <div className="col-md-9">
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
                  </div> */}
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <hr />
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="studentName">
                        Select course for Counselling
                      </label>
                      <select
                        id="course"
                        className="form-select"
                        {...register("course", {
                          required: "Please select a course",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="abc">abc</option>
                        <option value="def">def</option>
                        <option value="sdfgh">sdfgh</option>
                        <option value="dfghj">dfghj</option>
                      </select>
                      {errors.course && <span>{errors.course.message}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="studentName">Type of Counselling</label>
                      <select
                        id="Counselling"
                        className="form-select"
                        {...register("counsellingType", {
                          required: "Please select counselling type",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="abc">abc</option>
                        <option value="def">def</option>
                        <option value="sdfgh">sdfgh</option>
                        <option value="dfghj">dfghj</option>
                      </select>
                      {errors.counsellingType && (
                        <span>{errors.counsellingType.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="studentName">
                        Choose State and Quota
                      </label>
                      <select
                        id="State"
                        className="form-select"
                        {...register("stateAndQuota", {
                          required: "Please select state and quota",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="abc">abc</option>
                        <option value="def">def</option>
                        <option value="sdfgh">sdfgh</option>
                        <option value="dfghj">dfghj</option>
                      </select>
                      {errors.stateAndQuota && (
                        <span>{errors.stateAndQuota.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="Disability Type">Disability Type</label>
                  <select
                    id="DiablityType"
                    className="form-control"
                    {...register("disabilityType", {
                      required: "Disability type is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="Physical1">Physical 1</option>
                    <option value="Physical2">Physical 2</option>
                    <option value="Physical3">Physical 3</option>
                    <option value="Physical4">Physical 4</option>
                  </select>
                  {errors.disabilityType && (
                    <span>{errors.disabilityType.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="Type of Disability">Type of Disability</label>
                  <select
                    id="Type of Disability"
                    className="form-control"
                    {...register("typeOfDisability", {
                      required: "Type of disability is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                  {errors.typeOfDisability && (
                    <span>{errors.typeOfDisability.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="Specifyied Disability">
                    Specifyied Disability
                  </label>
                  <select
                    id="Specifyied Disability"
                    className="form-control"
                    {...register("specifiedDisability", {
                      required: "specifiedDisability is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  {errors.specifiedDisability && (
                    <span>{errors.specifiedDisability.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="Disability Percentage">
                    Disability Percentage
                  </label>
                  <select
                    id="Disability Percentage"
                    className="form-control"
                    {...register("disabilityPercentage", {
                      required: "Disability percentage is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="10%">10%</option>
                    <option value="20%">20%</option>
                    <option value="30%">30%</option>
                    <option value="40%">40%</option>
                  </select>
                  {errors.disabilityPercentage && (
                    <span>{errors.disabilityPercentage.message}</span>
                  )}
                </div>

                <div className="check-input-wrapper">
                  <div className="input-wrapper">
                    <label htmlFor="remark">Remark</label>
                    <textarea
                      id="remarks"
                      className="form-control"
                      placeholder="Enter your remarks here..."
                      {...register("remarks")}
                      style={{ width: "100%" }}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/dashboard/basic-details" type="button " className="btn default">
                  Previous
                </Link>
                <button type="submit" className="btn btn-primary">
                  Save and Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
