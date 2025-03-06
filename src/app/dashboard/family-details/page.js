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
    localStorage.setItem("familyDeatils", JSON.stringify(data));
    router.push("/dashboard/contact-details");
  };

  useEffect(() => {
    const familyDeatils = JSON.parse(localStorage.getItem("familyDeatils"))
    const {
      familyIncome,
      fatherEducation,
      fatherGuardianName,
      fatherOccupation,
      motherEducation,
      motherGuardianName,
      motherOccupation
    } = familyDeatils

    setValue("familyIncome", familyIncome)
    setValue("fatherEducation", fatherEducation)
    setValue("fatherGuardianName", fatherGuardianName)
    setValue("fatherOccupation", fatherOccupation)
    setValue("motherEducation", motherEducation)
    setValue("motherGuardianName", motherGuardianName)
    setValue("motherOccupation", motherOccupation)

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
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label className="form-check-label">Family Details</label>
          </div>
          <div className="form-check">
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
            <h6>Family Details</h6>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Father/ Guardian Name</label>
                  <input
                    type="text"
                    id="fatherName"
                    className="form-control"
                    placeholder="Father/ Guardian Name Hear...."
                    {...register("fatherGuardianName", {
                      required: "Father/Guardian Name is required",
                    })}
                  />
                  {errors.fatherGuardianName && (
                    <span>{errors.fatherGuardianName.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">
                    Father / Guardian Education
                  </label>

                  <select
                    id="fatherEducation"
                    className="form-control"
                    {...register("fatherEducation", {
                      required: "Father/Guardian Education is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="abc">abc</option>
                    <option value="def">def</option>
                    <option value="sdfgh">sdfgh</option>
                    <option value="dfghj">dfghj</option>
                  </select>
                  {errors.fatherEducation && (
                    <span>{errors.fatherEducation.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-wrapper">
                  <label className="form-label">
                    Father / Guardian Occupation
                  </label>

                  <select
                    id="fatherOccupation"
                    className="form-control"
                    {...register("fatherOccupation", {
                      required: "Father/Guardian Occupation is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="abc">abc</option>
                    <option value="def">def</option>
                    <option value="sdfgh">sdfgh</option>
                    <option value="dfghj">dfghj</option>
                  </select>
                  {errors.fatherOccupation && (
                    <span>{errors.fatherOccupation.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Mother/ Guardian Name</label>

                  <input
                    type="text"
                    id="motherGuardianName"
                    className="form-control"
                    placeholder="Mother/ Guardian Name Hear...."
                    {...register("motherGuardianName", {
                      required: "Mother/Guardian Name is required",
                    })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">
                    Mother/ Guardian Education
                  </label>

                  <select
                    id="motherEducation"
                    className="form-control"
                    {...register("motherEducation", {
                      required: "Mother/Guardian Education is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="abc">abc</option>
                    <option value="def">def</option>
                    <option value="sdfgh">sdfgh</option>
                    <option value="dfghj">dfghj</option>
                  </select>
                  {errors.motherEducation && (
                    <span>{errors.motherEducation.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">
                    Mother / Guardian Occupation
                  </label>

                  <select
                    id="motherOccupation"
                    className="form-control"
                    {...register("motherOccupation", {
                      required: "Mother/Guardian Occupation is required",
                    })}
                  >
                    <option value="">Select</option>
                    <option value="abc">abc</option>
                    <option value="def">def</option>
                    <option value="sdfgh">sdfgh</option>
                    <option value="dfghj">dfghj</option>
                  </select>
                  {errors.motherOccupation && (
                    <span>{errors.motherOccupation.message}</span>
                  )}
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <div className="label-title">Family Income</div>
                  </div>

                  <div className="col-md-9">
                    <div className="radio-wrapper">
                      <select
                        id="familyIncome"
                        className="form-control"
                        {...register("familyIncome", {
                          required: "Family Income is required",
                        })}
                      >
                        <option value="">Select</option>
                        <option value="0to2.5">0 - 2.5 Lakh</option>
                        <option value="2.5lakh">2.5 Lakh</option>
                        <option value="5lakh">5 Lakh</option>
                        <option value="7.5lakh">7.5 Lakh</option>
                        <option value="7.5lakhtoabove">7.5 Lakh - above</option>
                      </select>
                      {errors.familyIncome && (
                        <span>{errors.familyIncome.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/neet-details"
                  type="submit"
                  className="btn default"
                >
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
