"use client";
import Link from "next/link";
import Layout from "../Layout";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("educationDeatils", JSON.stringify(data));
    router.push("/dashboard/account-details");
  };

  useEffect(() => {
    const educationDeatils = JSON.parse(localStorage.getItem("educationDeatils"))
    const {
      boardName10th,
      boardName11th,
      boardName12th,
      obtainedMarksBiology12th,
      obtainedMarksChemistry12th,
      obtainedMarksEnglish12th,
      obtainedMarksPhysics12th,
      passingOfYear10th,
      passingOfYear11th,
      passingOfYear12th,
      passingState10th,
      passingState11th,
      passingState12th,
      pcbTotalMarks12th,
      pcbTotalPercentage12th,
      percentage10th,
      percentage11th,
      percentage12th,
      rollNumber10th,
      rollNumber11th,
      rollNumber12th,
      schoolName10th,
      schoolName11th,
      schoolName12th,
      schoolPincode10th,
      schoolPincode11th,
      schoolPincode12th,
      totalMarksBiology12th,
      totalMarksChemistry12th,
      totalMarksEnglish12th,
      totalMarksPhysics12th,
      totalMaxNumber10th,
      totalMaxNumber11th,
      totalMaxNumber12th,
      totalObtainedNumber10th,
      totalObtainedNumber11th,
      totalObtainedNumber12th,
    } = educationDeatils

    setValue("boardName10th", boardName10th)
    setValue("boardName11th", boardName11th)
    setValue("boardName12th", boardName12th)
    setValue("obtainedMarksBiology12th", obtainedMarksBiology12th)
    setValue("obtainedMarksChemistry12th", obtainedMarksChemistry12th)
    setValue("obtainedMarksEnglish12th", obtainedMarksEnglish12th)
    setValue("obtainedMarksPhysics12th", obtainedMarksPhysics12th)
    setValue("passingOfYear10th", passingOfYear10th)
    setValue("passingOfYear11th", passingOfYear11th)
    setValue("passingOfYear12th", passingOfYear12th)
    setValue("passingState10th", passingState10th)
    setValue("passingState11th", passingState11th)
    setValue("passingState12th", passingState12th)
    setValue("pcbTotalMarks12th", pcbTotalMarks12th)
    setValue("pcbTotalPercentage12th", pcbTotalPercentage12th)
    setValue("percentage10th", percentage10th)
    setValue("percentage11th", percentage11th)
    setValue("percentage12th", percentage12th)
    setValue("rollNumber10th", rollNumber10th)
    setValue("rollNumber11th", rollNumber11th)
    setValue("rollNumber12th", rollNumber12th)
    setValue("schoolName10th", schoolName10th)
    setValue("schoolName11th", schoolName11th)
    setValue("schoolName12th", schoolName12th)
    setValue("schoolPincode10th", schoolPincode10th)
    setValue("schoolPincode11th", schoolPincode11th)
    setValue("schoolPincode12th", schoolPincode12th)
    setValue("totalMarksBiology12th", totalMarksBiology12th)
    setValue("totalMarksChemistry12th", totalMarksChemistry12th)
    setValue("totalMarksEnglish12th", totalMarksEnglish12th)
    setValue("totalMarksPhysics12th", totalMarksPhysics12th)
    setValue("totalMaxNumber10th", totalMaxNumber10th)
    setValue("totalMaxNumber11th", totalMaxNumber11th)
    setValue("totalMaxNumber12th", totalMaxNumber12th)
    setValue("totalObtainedNumber10th", totalObtainedNumber10th)
    setValue("totalObtainedNumber11th", totalObtainedNumber11th)
    setValue("totalObtainedNumber12th", totalObtainedNumber12th)
  }, [localStorage])

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
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
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
            <h6>Education Details </h6>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <p className="green">10th class (secondary )</p>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Name of Board</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Board Hear...."
                    {...register("boardName10th", {
                      required: "Board Name is required",
                    })}
                  />
                  {errors.boardName10th && <span>{errors.boardName10th.message}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">School Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your School Name  Hear...."
                    {...register("schoolName10th", {
                      required: "School Name is required",
                    })}
                  />
                  {errors.schoolName10th && (
                    <span>{errors.schoolName10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">School Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your School Pin Code Hear...."
                    {...register("schoolPincode10th", {
                      required: "Pin Code is required",
                    })}
                  />
                  {errors.schoolPincode10th && (
                    <span>{errors.schoolPincode10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Passing State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Passing State Hear...."
                    {...register("passingState10th", {
                      required: "Passing State is required",
                    })}
                  />
                  {errors.passingState10th && (
                    <span>{errors.passingState10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Year of Passing</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Your Year of Passing Hear...."
                    {...register("passingOfYear10th", {
                      required: "Year of Passing is required",
                    })}
                  />
                  {errors.passingOfYear10th && (
                    <span>{errors.passingOfYear10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber10"
                    className="form-control"
                    placeholder="Your Roll Number Hear...."
                    {...register("rollNumber10th", {
                      required: "Roll Number is required",
                    })}
                  />
                  {errors.rollNumber10th && (
                    <span>{errors.rollNumber10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Total Max Marks</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Total Number Hear...."
                    {...register("totalMaxNumber10th", {
                      required: "Total Max Marks is required",
                    })}
                  />
                  {errors.totalMaxNumber10th && (
                    <span>{errors.totalMaxNumber10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Total Obtain Marks</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Total Obtained Marks Hear...."
                    {...register("totalObtainedNumber10th", {
                      required: "Total Obtained Marks is required",
                    })}
                  />
                  {errors.totalObtainedNumber10th && (
                    <span>{errors.totalObtainedNumber10th.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-wrapper">
                  <label className="form-label">
                    Percentage{" "}
                    <small>
                      (auto calculate percentage obtain and total max marks)
                    </small>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder=" Total Percentage...."
                    {...register("percentage10th", {
                      required: "Percentage is required",
                    })}
                  />
                  {errors.percentage10th && (
                    <span>{errors.percentage10th.message}</span>
                  )}
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="green">
                      {" "}
                      11th Class [compulsory regular biology subject]
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Name of Board</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name of Board Hear...."
                        {...register("boardName11th", {
                          required: "Board Name is required",
                        })}
                      />
                      {errors.boardName11th && (
                        <span>{errors.boardName11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your School Name  Hear...."
                        {...register("schoolName11th", {
                          required: "School Name is required",
                        })}
                      />
                      {errors.schoolName11th && (
                        <span>{errors.schoolName11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Pin Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your School Pin Code Hear...."
                        {...register("schoolPincode11th", {
                          required: "Pin Code is required",
                        })}
                      />
                      {errors.schoolPincode11th && (
                        <span>{errors.schoolPincode11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Passing State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Passing State Hear...."
                        {...register("passingState11th", {
                          required: "Passing State is required",
                        })}
                      />
                      {errors.passingState11th && (
                        <span>{errors.passingState11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Year of Passing</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Year of Passing Hear...."
                        {...register("passingOfYear11th", {
                          required: "Year of Passing is required",
                        })}
                      />
                      {errors.passingOfYear11th && (
                        <span>{errors.passingOfYear11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Roll Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Roll Number Hear...."
                        {...register("rollNumber11th", {
                          required: "Roll Number is required",
                        })}
                      />
                      {errors.rollNumber11th && (
                        <span>{errors.rollNumber11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Total Max Marks</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Total Number Hear...."
                        {...register("totalMaxNumber11th", {
                          required: "Total Max Marks is required",
                        })}
                      />
                      {errors.totalMaxNumber11th && (
                        <span>{errors.totalMaxNumber11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Total Obtain Marks</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Total Obtained Marks Hear...."
                        {...register("totalObtainedNumber11th", {
                          required: "Total Obtained Marks is required",
                        })}
                      />
                      {errors.totalObtainedNumber11th && (
                        <span>{errors.totalObtainedNumber11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-wrapper">
                      <label className="form-label">
                        Percentage{" "}
                        <small>
                          (auto calculate percentage obtain and total max marks)
                        </small>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder=" Total Percentage...."
                        {...register("percentage11th", {
                          required: "Percentage is required",
                        })}
                      />
                      {errors.percentage11th && (
                        <span>{errors.percentage11th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="green mb-3">12th Class Details</div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Name of Board</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name of Board Hear...."
                        {...register("boardName12th", {
                          required: "Board Name is required",
                        })}
                      />
                      {errors.boardName12th && (
                        <span>{errors.boardName12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">School Name</label>
                      <input
                        type="text"
                        id="schoolName10"
                        className="form-control"
                        placeholder="Your School Name  Hear...."
                        {...register("schoolName12th", {
                          required: "School Name is required",
                        })}
                      />
                      {errors.schoolName12th && (
                        <span>{errors.schoolName12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> School Pin Code</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your School Pin Code Hear...."
                        {...register("schoolPincode12th", {
                          required: "Pin Code is required",
                        })}
                      />
                      {errors.schoolPincode12th && (
                        <span>{errors.schoolPincode12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Passing State</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("passingState12th", {
                          required: "Pin Code is required",
                        })}
                      />
                      {errors.passingState12th && (
                        <span>{errors.passingState12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Year of Passing</label>
                      <input
                        type="number"
                        id="Year of Passing"
                        className="form-control"
                        placeholder="Your Year of Passing Hear...."
                        {...register("passingOfYear12th", {
                          required: "Year of Passing is required",
                        })}
                      />
                      {errors.passingOfYear12th && (
                        <span>{errors.passingOfYear12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Roll Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Roll Number Hear...."
                        {...register("rollNumber12th", {
                          required: "Roll Number is required",
                        })}
                      />
                      {errors.rollNumber12th && (
                        <span>{errors.rollNumber10.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="detail-wrapper">
                      <h6>Please enter your details</h6>

                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            id="physicsMarks"
                            className="form-control"
                            placeholder="Physics"
                            disabled
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="physicsObtained"
                            className="form-control"
                            placeholder="Obtained"
                            {...register("obtainedMarksPhysics12th", {
                              required:
                                "Obtained marks for Physics are required",
                            })}
                          />
                          {errors.obtainedMarksPhysics12th && (
                            <span>
                              {errors.obtainedMarksPhysics12th.message}
                            </span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Total"
                            {...register("totalMarksPhysics12th", {
                              required: "Total marks for Physics are required",
                            })}
                          />
                          {errors.totalMarksPhysics12th && (
                            <span>{errors.totalMarksPhysics12th.message}</span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Biology"
                            disabled
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="biologyObtained"
                            className="form-control"
                            placeholder="Obtained"
                            {...register("obtainedMarksBiology12th", {
                              required:
                                "Obtained marks for Biology are required",
                            })}
                          />
                          {errors.obtainedMarksBiology12th && (
                            <span>
                              {errors.obtainedMarksBiology12th.message}
                            </span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="biologyTotal"
                            className="form-control"
                            placeholder="Total"
                            {...register("totalMarksBiology12th", {
                              required: "Total marks for Biology are required",
                            })}
                          />
                          {errors.totalMarksBiology12th && (
                            <span>{errors.totalMarksBiology12th.message}</span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Chemistry"
                            disabled
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="chemistryObtained"
                            className="form-control"
                            placeholder="Obtained"
                            {...register("obtainedMarksChemistry12th", {
                              required:
                                "Obtained marks for Chemistry are required",
                            })}
                          />
                          {errors.obtainedMarksChemistry12th && (
                            <span>
                              {errors.obtainedMarksChemistry12th.message}
                            </span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="chemistryTotal"
                            className="form-control"
                            placeholder="Total"
                            {...register("totalMarksChemistry12th", {
                              required:
                                "Total marks for Chemistry are required",
                            })}
                          />
                          {errors.totalMarksChemistry12th && (
                            <span>
                              {errors.totalMarksChemistry12th.message}
                            </span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="English"
                            disabled
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="englishObtained"
                            className="form-control"
                            placeholder="Obtained"
                            {...register("obtainedMarksEnglish12th", {
                              required:
                                "Obtained marks for English are required",
                            })}
                          />
                          {errors.obtainedMarksEnglish12th && (
                            <span>
                              {errors.obtainedMarksEnglish12th.message}
                            </span>
                          )}
                        </div>
                        <div className="col-md-4 mb-3">
                          <input
                            type="number"
                            id="englishTotal"
                            className="form-control"
                            placeholder="Total"
                            {...register("totalMarksEnglish12th", {
                              required: "Total marks for English are required",
                            })}
                          />
                          {errors.totalMarksEnglish12th && (
                            <span>{errors.totalMarksEnglish12th.message}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Total Max Marks</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Total Number Hear...."
                        {...register("totalMaxNumber12th", {
                          required: "Total Max Marks is required",
                        })}
                      />
                      {errors.totalMaxNumber12th && (
                        <span>{errors.totalMaxNumber12th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Total Obtain Marks</label>
                      <input
                        type="number"
                        id="obtainedMarks10"
                        className="form-control"
                        placeholder="Your Total Obtained Marks Hear...."
                        {...register("totalObtainedNumber12th", {
                          required: "Total Obtained Marks is required",
                        })}
                      />
                      {errors.totalObtainedNumber12th && (
                        <span>{errors.totalObtainedNumber12th.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-wrapper">
                      <label className="form-label">
                        {" "}
                        Percentage{" "}
                        <small>
                          (auto calculate percentage obtain and total max marks)
                        </small>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder=" Total Percentage...."
                        {...register("percentage12th", {
                          required: "Percentage is required",
                        })}
                      />
                      {errors.percentage12th && (
                        <span>{errors.percentage12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Total Marks in PCB</label>
                      <input
                        type="number"
                        id="totalMarksPcb"
                        className="form-control"
                        placeholder="Total Marks in PCB"
                        {...register("pcbTotalMarks12th", {
                          required: "Total marks in PCB are required",
                        })}
                      />
                      {errors.pcbTotalMarks12th && (
                        <span>{errors.pcbTotalMarks12th.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">
                        {" "}
                        Total Percentage in PCB
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Total Percentage in PCB"
                        {...register("pcbTotalPercentage12th", {
                          required: "Total percentage in PCB is required",
                        })}
                      />
                      {errors.pcbTotalPercentage12th && (
                        <span>{errors.pcbTotalPercentage12th.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/contact-details"
                  type="submit"
                  className="btn default"
                >
                  Previous
                </Link>
                {/* <Link
                  href="/dashboard/account-details"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save and Next
                </Link> */}
                <button type="submit"> Save and Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
