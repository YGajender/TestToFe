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
      console.log("Form Data:", data);
      localStorage.setItem("accountDetails", JSON.stringify(data));
      router.push("/dashboard/other-details");
    }
  };

  useEffect(() => {
    const accountDetails = JSON.parse(localStorage.getItem("accountDetails"))
    const {
      acHolderName,
      acNumber,
      bankName,
      branchName,
      ifscCode,
      upiId,
    } = accountDetails

    setValue("acHolderName", acHolderName)
    setValue("acNumber", acNumber)
    setValue("bankName", bankName)
    setValue("branchName", branchName)
    setValue("ifscCode", ifscCode)
    setValue("upiId", upiId)
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
              id="radioBasicDetails"
            />
            <label className="form-check-label">Basic Details</label>
          </div>

          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioNeetDetails"
            />
            <label className="form-check-label">NEET Details</label>
          </div>

          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioFamilyDetails"
            />
            <label className="form-check-label">Family Details</label>
          </div>

          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioContactDetails"
            />
            <label className="form-check-label">Contact Details</label>
          </div>

          <div className="form-check active">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioEducationDetails"
            />
            <label className="form-check-label">Education Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioAccountDetails"
              defaultChecked
            />
            <label className="form-check-label">Account Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioOtherDetails"
            />
            <label className="form-check-label">Other Details</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="radioRequirementDocs"
            />
            <label className="form-check-label">Requirement Doc.</label>
          </div>
        </div>

        {/* Account Details Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="basic-detail">
            <div className="inner-title">
              <h6>Account Details</h6>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="bankName">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    className="form-control"
                    placeholder="Bank Name here...."
                    {...register("bankName", {
                      required: "Bank Name is required",
                    })}
                  />
                  {errors.bankName && <span>{errors.bankName.message}</span>}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="acNumber">
                    A/C Number
                  </label>
                  <input
                    type="number"
                    id="acNumber"
                    className="form-control"
                    placeholder="A/C Number here...."
                    {...register("acNumber", {
                      required: "A/C Number is required",
                    })}
                  />
                  {errors.acNumber && <span>{errors.acNumber.message}</span>}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="acHolderName">
                    Ac Holder Name
                  </label>
                  <input
                    type="text"
                    id="acHolderName"
                    className="form-control"
                    placeholder="Ac Holder Name here...."
                    {...register("acHolderName", {
                      required: "A/C Holder Name is required",
                    })}
                  />
                  {errors.acHolderName && (
                    <span>{errors.acHolderName.message}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="ifscCode">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    id="ifscCode"
                    className="form-control"
                    placeholder="IFSC Code here...."
                    {...register("ifscCode", {
                      required: "IFSC Code is required",
                    })}
                  />
                  {errors.ifscCode && <span>{errors.ifscCode.message}</span>}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="branchName">
                    Branch Name
                  </label>
                  <input
                    type="text"
                    id="branchName"
                    className="form-control"
                    placeholder="Branch Name here...."
                    {...register("branchName", {
                      required: "Branch Name is required",
                    })}
                  />
                  {errors.branchName && (
                    <span>{errors.branchName.message}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label" htmlFor="upiId">
                    Enter Your UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    className="form-control"
                    placeholder="Enter your UPI ID here..."
                    {...register("upiId", { required: "UPI ID is required" })}
                  />
                  {errors.upiId && <span>{errors.upiId.message}</span>}
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/education-details"
                  className="btn default"
                >
                  Previous
                </Link>
                <button type="submit" className="btn btn-primary">
                  Save and Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Page;
