"use client";
import dynamic from "next/dynamic";
import Layout from "../Layout";
import { Controller, useForm } from "react-hook-form";
import { fieldValidation } from "@/app/dashboard/helper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

const Select = dynamic(() => import("react-select"), { ssr: false });

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm();

  const router = useRouter();
  const onSubmit = (data) => {
    console.log("basicDeatils:", data);
    localStorage.setItem("basicDeatils", JSON.stringify(data));
    router.push("/dashboard/neet-details");
  };

  useEffect(() => {
    const basicDeatils = JSON.parse(localStorage?.getItem("basicDeatils"))
    console.log("basicDeatils>>>>>>>>>>", basicDeatils);
    if (basicDeatils) {
      const {
        firstName,
        lastName,
        gender,
        state,
        stateCategory,
        nationality,
        belongToMinority,
        category,
        centralCategory,
        dob,
        fatherArmy,
        physicallyDisabled,
        terms
      } = basicDeatils

      setValue("firstName", firstName)
      setValue("lastName", lastName)
      setValue("gender", gender)
      setValue("state", state)
      setValue("stateCategory", stateCategory)
      setValue("nationality", nationality)
      setValue("belongToMinority", belongToMinority)
      setValue("category", category)
      setValue("centralCategory", centralCategory)
      setValue("dob", dob)
      setValue("fatherArmy", fatherArmy)
      setValue("physicallyDisabled", physicallyDisabled)
      setValue("terms", terms)
    }

  }, [localStorage])

  return (
    <Layout>
      <div className="title">
        <h4>Your profile</h4>
      </div>

      <div className="wrapper">
        {/* Radio Buttons for Sections */}
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
                defaultChecked={index === 0}
              />
              <label className="form-check-label">{label}</label>
            </div>
          ))}
        </div>

        {/* Form Starts */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="basic-detail">
            <div className="inner-title">
              <h6>Basic Details</h6>
            </div>

            <div className="row">
              {/* First Name */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    {...register("firstName", fieldValidation)}
                  />
                  {errors.firstName && <div>{errors.firstName.message}</div>}
                </div>
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    {...register("lastName", fieldValidation)}
                  />
                  {errors.lastName && <div>{errors.lastName.message}</div>}
                </div>
              </div>

              {/* Date of Birth */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="form-label">Dob</label>
                  <input
                    type="date"
                    className="form-control"
                    // defaultValue="2024-11-26"
                    {...register("dob", fieldValidation)}
                  />
                  {errors.dob && <div>{errors.dob.message}</div>}
                </div>
              </div>

              {/* Domicile State */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label>Domicile State</label>
                  <Controller
                    control={control}
                    name="state"
                    rules={{ required: "This field is required." }}
                    className="form-control"
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: "hr", label: "Haryana" },
                          { value: "rj", label: "Rajasthan" },
                          { value: "up", label: "Uttar Pradesh" },
                        ]}
                      />
                    )}
                  />
                  {errors.state && <div>{errors.state.message}</div>}
                </div>
              </div>

              {/* Nationality */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label>Nationality</label>
                  <Controller
                    control={control}
                    name="nationality"
                    className="form-select"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "Indian", value: "Indian" },
                          { label: "American", value: "American" },
                          { label: "Mexican", value: "Mexican" },
                        ]}
                      />
                    )}
                  />
                  {errors.nationality && (
                    <div>{errors.nationality.message}</div>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label>Category</label>
                  <Controller
                    control={control}
                    name="category"
                    className="form-select"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { label: "OBC", value: "OBC" },
                          { label: "SC", value: "SC" },
                          { label: "ST", value: "ST" },
                          { label: "General", value: "General" },
                        ]}
                      />
                    )}
                  />
                  {errors.category && <div>{errors.category.message}</div>}
                </div>
              </div>

              {/* Gender Selection */}
              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <div className="label-title">Gender</div>
                  </div>
                  <div className="col-md-9">
                    <Controller
                      control={control}
                      name="gender"
                      rules={{ required: "Please select a gender." }}
                      render={({ field }) => (
                        <div className="radio-wrapper">
                          {["Male", "Female", "Transgender"].map((gender) => (
                            <div className="form-check" key={gender}>
                              <input
                                className="form-check-input"
                                type="radio"
                                {...field}
                                value={gender}
                                checked={field.value === gender}
                              />
                              <label className="form-check-label">
                                {gender}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                    {errors.gender && <div>{errors.gender.message}</div>}
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <h6>Category</h6>
                  </div>

                  <div className="col-md-9">
                    <div className="row">
                      {/* Central Category Input */}
                      <div className="col-md-6">
                        <div className="input-wrapper">
                          <input
                            type="text" // Changed from email to text (assuming it's a category field)
                            className="form-control"
                            id="centralCategory"
                            placeholder="Central"
                            {...register("centralCategory", {
                              required: "This field is required.",
                            })}
                          />
                          {errors.centralCategory && (
                            <div>{errors.centralCategory.message}</div>
                          )}
                        </div>
                      </div>

                      {/* State Category Input */}
                      <div className="col-md-6">
                        <div className="input-wrapper">
                          <input
                            type="text" // Changed from email to text
                            className="form-control"
                            id="stateCategory"
                            placeholder="State"
                            {...register("stateCategory", {
                              required: "This field is required.",
                            })}
                          />
                          {errors.stateCategory && (
                            <div>{errors.stateCategory.message}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <p>Are You a Physically Disabled?</p>
                  </div>

                  <div className="col-md-6">
                    <Controller
                      control={control}
                      name="physicallyDisabled"
                      rules={{ required: "This field is required." }}
                      render={({ field }) => (
                        <div className="radio-wrapper">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              {...field}
                              value="No"
                              checked={field.value === "No"}
                            />
                            <label className="form-check-label">No</label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              {...field}
                              value="Yes"
                              checked={field.value === "Yes"}
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                        </div>
                      )}
                    />
                    {errors.physicallyDisabled && (
                      <div>{errors.physicallyDisabled.message}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <p>Your Father is army Person?</p>
                  </div>

                  <div className="col-md-6">
                    <Controller
                      control={control}
                      name="fatherArmy"
                      rules={{ required: "This field is required." }}
                      render={({ field }) => (
                        <div className="radio-wrapper">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              {...field}
                              value="No"
                              checked={field.value === "No"}
                            />
                            <label className="form-check-label">No</label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              {...field}
                              value="Yes"
                              checked={field.value === "Yes"}
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                        </div>
                      )}
                    />
                    {errors.fatherArmy && (
                      <div>{errors.fatherArmy.message}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="label-with-radio radio-wrapper">
                      <span> Belongs to Minority</span>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultChecked
                          value="no"  {...register('belongToMinority', { required: 'Please select an option.' })}
                        />

                        <label htmlFor="" className="form-check-label">
                          No
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="yes"  {...register('belongToMinority', { required: 'Please select an option.' })}
                        />

                        <label htmlFor="" className="form-check-label">
                          Yes
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="col-12">
                <div className="check-input-wrapper pt-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("terms", {
                        required: "You must accept the terms.",
                      })}
                    />
                    <label className="form-check-label">
                      By submitting this form, you accept our{" "}
                      <Link href="#">Terms of Use</Link>.
                    </label>
                  </div>
                  {errors.terms && <div style={{ color: "#c22b8b" }}>{errors.terms.message}</div>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="button-wrapper type2">
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
