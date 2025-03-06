"use client"
import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faLocationDot,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"

import useRequest from '../hooks/useRequest';
import Link from "next/link"
import { useForm } from "react-hook-form"
import { emailValidation, fieldValidation, phoneValidation } from "@/utils/helper"
import { toast } from "react-toastify"
// import { errorMsg, successMsg } from "../toast";

const ContactSection = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("error>>>>>>>>>>>>", errors);


  const { request, response } = useRequest();


  const onSubmit = (data) => {
    console.log("data>>>>>>>>>>>>", data);
    request('POST', 'contact-us', data)
  }

  useEffect(() => {
    if (response?.status) {
      toast.success(response?.message)
    } else {
      toast.error(response?.message)
    }
  }, [response])

  return (
    <section className="contact-sec">
      <div className="container">
        <div className="wrapper">
          <div className="row">
            {/* Contact Information Section */}
            <div className="col-lg-5">
              <div className="contact-info">
                <h4>Contact Information</h4>
                <p>We're Always Eager to Hear From You!</p>

                <ul>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faPhone} />
                      9145879646
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                      contact@visuticareer.in
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faLocationDot} /> C-28, Vidhyut
                      Nagar C, Vaishali Nagar, Jaipur 302021
                    </Link>
                  </li>
                </ul>

                <ol>
                  <li>
                    <Link href="#">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faDiscord} />
                      </span>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-7">
              <div className="form-outer">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        {...register('firstName', { required: 'First Name is required' })}
                      />
                      {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        {...register('lastName', { required: 'Last Name is required' })}
                      />
                      {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>

                    <div className="mb-3 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register('email', emailValidation)}
                      />
                      {errors.email?.type === "required" && (
                        <div>{errors.email.message}</div>
                      )}
                      {errors.email?.type === "pattern" && (
                        <div>{errors.email.message}</div>
                      )}
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="+1 012 3456 789"
                        {...register('phoneNumber', phoneValidation)}
                      />
                      {errors.phoneNumber?.type ===
                        "required" && (
                          <div>{errors.phoneNumber.message}</div>
                        )}
                      {errors.phoneNumber?.type ===
                        "pattern" && (
                          <div>{errors.phoneNumber.message}</div>
                        )}
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div className="col-12">
                    <h6>Select Subject?</h6>
                    <div className="radio-wrapper">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id="subject1"
                          value="General Inquiry"
                          {...register("subject", fieldValidation)}
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="subject1">
                          General Inquiry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id="subject2"
                          value="Technical Issue"
                          {...register("subject", fieldValidation)}
                        />
                        <label className="form-check-label" htmlFor="subject2">
                          {/* Support */}
                          Technical Issue
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id="subject3"
                          value="Feedback"
                          {...register("subject", fieldValidation)}
                        />
                        <label className="form-check-label" htmlFor="subject3">
                          Feedback
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id="subject4"
                          value="Other"
                          {...register("subject", fieldValidation)}
                        />
                        <label className="form-check-label" htmlFor="subject4">
                          Other
                        </label>
                      </div>
                      {errors.subject && <span>{errors.subject.message}</span>}
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="col-12 mt-5">
                    <div className="message">
                      <label htmlFor="messageTextarea">Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Write your message..."
                        id="messageTextarea"
                        {...register('message', { required: 'Message is required' })}
                      ></textarea>
                      {errors.message && <span>{errors.message.message}</span>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="submit">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
