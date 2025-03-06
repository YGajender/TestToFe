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
    if (typeof window !== "undefined") {
      console.log("otherDetails:-", data);
      localStorage.setItem("otherDetails", JSON.stringify(data));
      router.push("/dashboard/document-details");
    }
  };

  useEffect(() => {
    const otherDetails = JSON.parse(localStorage.getItem("otherDetails"))
    const {
      diplomaProgrameAfter12th,
      lastAttemptCourseName,
      courseComplete,
      yearPassing,
      collegeInstituteName,
      otherRemark,
    } = otherDetails

    // diplomaProgrameAfter12th,
    //   courseComplete,
    //   lastAttemptCourseName,
    //   collegeInstituteName,
    //   currentSemester,
    //   yearPassing,
    //   otherRemark,

    setValue("diplomaProgrameAfter12th", diplomaProgrameAfter12th)
    setValue("lastAttemptCourseName", lastAttemptCourseName)
    setValue("courseComplete", courseComplete)
    setValue("yearPassing", yearPassing)
    setValue("collegeInstituteName", collegeInstituteName)
    setValue("otherRemark", otherRemark)
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
              defaultChecked
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
            <h6>Other Details</h6>
            <small>
              *This details only ask when student have gap after 12th passing
              year and current year more than 1 year
            </small>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inner-wrapper">
              <div className="row">
                <div className="col-md-8">
                  <p>
                    Are you join any Degree and diploma Program after 12th?{" "}
                  </p>
                </div>

                <div className="col-md-4">
                  <div className="radio-wrapper">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        defaultChecked
                        value="no"
                        {...register("diplomaProgrameAfter12th", {
                          required: "Please select an option",
                        })}
                      />
                      <label className="form-check-label">No</label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name=""
                        id=""
                        value="yes"
                        {...register("diplomaProgrameAfter12th", {
                          required: "Please select an option",
                        })}
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="input-wrapper">
                  <label className="form-label">Last attempt course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    {...register("lastAttemptCourseName", {
                      required: "Please select an option",
                    })}
                  />
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-8">
                    <p>Did you complete your course? </p>
                  </div>

                  <div className="col-md-4">
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                          value="no"
                          {...register("courseComplete", {
                            required: "Please select an option",
                          })}
                        />

                        <label className="form-check-label">No</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="yes"
                          {...register("courseComplete", {
                            required: "Please select an option",
                          })}
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      {errors.courseComplete && (
                        <span>{errors.courseComplete.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Year of Passing</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Year of Passing here...."
                    {...register("yearPassing", {
                      required: "Year of Passing is required",
                    })}
                  />
                  {errors.yearPassing && (
                    <span>{errors.yearPassing.message}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">College / Institute Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('collegeInstituteName', { required: 'This field is required' })}
                  />
                  {errors.collegeInstituteName && <span>{errors.collegeInstituteName.message}</span>}
                </div>
              </div>

              <div className="check-input-wrapper">
                <div className="input-wrapper">
                  <label className="pb-2">Remark</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    placeholder="Enter your remarks here..."
                    {...register("otherRemark", {
                      required: "Remarks are required",
                    })}
                  ></textarea>
                </div>
              </div>

              <div className="button-wrapper">
                <Link href="/dashboard/account-details" className="btn default">
                  Previous
                </Link>
                {/* <Link
                  href="/dashboard/documents"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save and Next
                </Link> */}
                <button type="submit">Save and Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
