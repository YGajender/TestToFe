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
      localStorage.setItem("contactDetails", JSON.stringify(data));
      router.push("/dashboard/education-details");
    }
  };




  useEffect(() => {
    const contactDetails = JSON.parse(localStorage.getItem("contactDetails"))
    const {
      alternateContactNo,
      alternateEmailID,
      city,
      country,
      district,
      emailID,
      fatherContactNo,
      locality,
      mobileNumber,
      pinCode,
      premisesName,
      sameAsWhatsApp,
      studentContactNumber,
      sameAsPresentAddress
    } = contactDetails

    setValue("alternateContactNo", alternateContactNo)
    setValue("alternateEmailID", alternateEmailID)
    setValue("city", city)
    setValue("country", country)
    setValue("district", district)
    setValue("emailID", emailID)
    setValue("fatherContactNo", fatherContactNo)
    setValue("locality", locality)
    setValue("mobileNumber", mobileNumber)
    setValue("pinCode", pinCode)
    setValue("premisesName", premisesName)
    setValue("sameAsWhatsApp", sameAsWhatsApp)
    setValue("studentContactNumber", studentContactNumber)
    setValue("sameAsPresentAddress", sameAsPresentAddress)
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
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
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
            <h6>Contact Details</h6>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="mobile-no-verify">
                  <div className="input-wrapper">
                    <label className="form-label">Mobile</label>

                    <div className="verify">
                      <input
                        type="tel"
                        id="Mobile Number"
                        className="form-control"
                        placeholder="This Mobile number is used for Your NEET Predection."
                        {...register("mobileNumber", {
                          required: "Mobile number is required",
                        })}
                      />
                      <span>Verify OTP</span>
                      {errors.mobileNumber && (
                        <span>{errors.mobileNumber.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    id="Email ID"
                    className="form-control"
                    placeholder="Your Email ID Hear...."
                    {...register("emailID", {
                      required: "Email ID is required",
                    })}
                  />
                  {errors.emailID && <span>{errors.emailID.message}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Alternate Email id</label>
                  <input
                    type="email"
                    id="Alternate Email ID"
                    className="form-control"
                    placeholder="Your Alternate Email ID Hear...."
                    {...register("alternateEmailID")}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Student Contact Number</label>
                  <input
                    type="tel"
                    id="studentContactNumber"
                    className="form-control"
                    placeholder="Your Contact Number here...."
                    {...register("studentContactNumber", {
                      required: "Student contact number is required",
                    })}
                  />
                  {errors.studentContactNumber && (
                    <span>{errors.studentContactNumber.message}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="sameAsWhatsApp"
                    className="form-check-input"
                    {...register("sameAsWhatsApp")}
                  />
                  <label className="form-check-label">Same as WhatsApp</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Father Contact No</label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    id="fatherContactNo"
                    className="form-control"
                    placeholder="Your Father Contact No. here...."
                    title="Please enter a 10-digit phone number"
                    {...register("fatherContactNo", {
                      required: "Father contact number is required",
                    })}
                  />
                  {errors.fatherContactNo && (
                    <span>{errors.fatherContactNo.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Any Alternate No.</label>
                  <input
                    type="tel-number"
                    id="alternateContactNo"
                    className="form-control"
                    placeholder="Your Father Alternate No. here...."
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number"
                    {...register("alternateContactNo")}
                  />
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="label-title">
                      <h6>Address Permanent</h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Premises Name</label>
                      <input
                        type="text"
                        id="PremisesName"
                        className="form-control"
                        placeholder="Premises Name here...."
                        {...register("premisesName", {
                          required: "Premises Name is required",
                        })}
                      />
                      {errors.premisesName && (
                        <span>{errors.premisesName.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        id="City"
                        className="form-control"
                        placeholder="City here...."
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && <span>{errors.city.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">Locality</label>
                      <input
                        type="text"
                        id="Locality"
                        className="form-control"
                        placeholder="Locality here...."
                        {...register("locality", {
                          required: "Locality is required",
                        })}
                      />
                      {errors.locality && (
                        <span>{errors.locality.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label">District</label>
                      <input
                        type="text"
                        id="District"
                        className="form-control"
                        placeholder="District here...."
                        {...register("district", {
                          required: "District is required",
                        })}
                      />
                      {errors.district && (
                        <span>{errors.district.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> PIN Code</label>
                      <input
                        type="number"
                        id="PinCode"
                        className="form-control"
                        placeholder="Pin Code here...."
                        pattern="[0-9]{6}"
                        maxLength={6}
                        title="Please enter a 6-digit Pin Code"
                        {...register("pinCode", {
                          required: "Pin Code is required",
                        })}
                      />
                      {errors.pinCode && <span>{errors.pinCode.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <label className="form-label"> Country</label>
                      <input
                        type="text"
                        id="Country"
                        className="form-control"
                        placeholder="Country here...."
                        {...register("country", {
                          required: "Country is required",
                        })}
                      />
                      {errors.country && <span>{errors.country.message}</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="check-input-wrapper">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    {...register("sameAsPresentAddress", {
                      required: "Country is required",
                    })}
                  />
                  <label className="form-check-label">
                    This address is same as Present Address
                  </label>
                </div>
              </div>

              <div className="button-wrapper">
                <Link
                  href="/dashboard/family-details"
                  type="submit"
                  className="btn default"
                >
                  Previous
                </Link>
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
