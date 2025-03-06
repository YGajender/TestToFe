"use client";
import Link from "next/link";
import Layout from "../Layout";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("documentUplod", JSON.stringify(data));
    router.push("/dashboard/preview");
  };

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
            <div className="form-check active" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="profileSection"
                id={`radioOption${index}`}
                defaultChecked={label === "Requirement Doc."}
              />
              <label
                className="form-check-label"
                htmlFor={`radioOption${index}`}
              >
                {label}
              </label>
            </div>
          ))}
        </div>

        <div className="basic-detail">
          <div className="inner-title">
            <h6>Requirement Documents and Details</h6>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {[
              { name: "imgStudent", label: "Student Photo" },
              { name: "imgNeetApplication", label: "NEET Application" },
              { name: "imgNeetAdmitCard", label: "NEET Admit Card" },
              { name: "imgNeetScoreCard", label: "NEET Score Card" },
              { name: "imgMarkSheet10th", label: "10th Mark Sheet" },
              { name: "imgMarkSheet11th", label: "11th Mark Sheet" },
              { name: "imgMarkSheet12th", label: "12th Mark Sheet" },
              { name: "imgAadharCard", label: "Aadhar Card" },
              { name: "imgDomicileCertificate", label: "Domicile Certificate" },
              { name: "imgCancelCheque", label: "Cancel Cheque" },
              {
                name: "imgTransferCertificate",
                label: "Transfer Certificate (T.C)",
              },
              {
                name: "imgMigrationCertificate",
                label: "Migration Certificate",
              },
              {
                name: "imgCharacterCertificate",
                label: "Character Certificate",
              },
            ].map((file, index) => (
              <div className="UplodDocumentRequiredMain" key={index}>
                <div className="form-row d-flex align-items-center gap-3">
                  <div className="form-group col-md-3">
                    <h6 className="mb-0">{file.label}</h6>
                  </div>

                  <div className="form-group col-md-4 upload-item">
                    <input
                      type="file"
                      name={file.name}
                      className="form-control"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      {...register(file.name, {
                        required: "Please upload a document",
                      })}
                    />
                    {errors[file.name] && (
                      <p className="text-danger small mt-1">
                        {errors[file.name].message}
                      </p>
                    )}
                  </div>

                  <div className="col-md-5 d-flex gap-3">
                    <button type="submit" className="btn btn-primary">
                      Upload
                    </button>
                    <button type="button" className="btn btn-secondary">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="form-row">
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

            <hr />
            <div className="form-row">
              <label>
                <input
                  type="checkbox"
                  name="tnc"
                  {...register("tnc", { required: "Please accept the terms" })}
                />{" "}
                By submitting this form, you accept our{" "}
                <a href="#" className="TCuserDashbord">
                  Terms of Use
                </a>
                .
              </label>
              {errors.tnc && <p className="error">{errors.tnc.message}</p>}
            </div>

            <hr />

            <div className="button-wrapper">
              <div className="Previous">
                <Link href="/dashboard/other-details" className="btn default">
                  {" "}
                  Previous{" "}
                </Link>
              </div>
              <button type="submit">Final Save</button>
            </div>
          </form>
        </div>
      </div>
    </Layout >
  );
};

export default Page;
