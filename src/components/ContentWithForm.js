"use client"
import React, { useState } from "react"

const ContentWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: ""
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Add form submission logic here
    console.log(formData)
  }

  return (
    <section className="content-with-form">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-md-6">
            <div className="left-content">
              <h2>
                <span>About MBBS Abroad</span>
              </h2>
              <p>
                NEET College Predictor 2024 is designed to assist the candidates
                in predicting their chances of admission to top Medical, dental
                ayush and all other medical courses based on students NEET
                scores. NEET College Predictor 2024 covers the previous years’
                NEET Cut off data. <br />
                To provide the list of the most suitable medical/dental colleges
                in India, Visuticareer NEET College Predictor uses opening and
                closing ranks derived from the seat allotment result of NEET
                counselling. NEET Counselling for 15% AIQ seats is conducted by
                MCC, while for 85% of State Quota Seats, it is conducted by the
                respective state authorities. In 2023, the round 1 closing ranks
                for AIIMS Delhi and VMMC Delhi were 57 and 107 respectively.
              </p>
              <h6>Advantages of NEET College Predictor 2025</h6>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i> Aspirants can use the
                  medical college predictor 2025 to check their chances of
                  getting into top medical colleges in India.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Through Careeres360
                  college predictor, students will get a complete list of
                  colleges to select in the All India Counselling choice-filling
                  process.
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Aspirants will get a
                  personalised report on NEET AIQ counselling, which includes
                  information on the top medical, dental and ayush colleges for
                  All India Level.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6">
            <div className="form-wrapper">
              <h5>Get Free Counselling</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Select Your Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentWithForm
