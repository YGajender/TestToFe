import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-outer-div popular m-0">
      <h5>Enquiry Form</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Appointment
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
