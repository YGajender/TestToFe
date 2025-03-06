import React from "react";

const CollegeInfoForCollegeDetails = () => {
  return (
    <div className="college-inner-info">
      <h4>Address Details</h4>

      <div className="address">
        <div className="icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="text">
          <span>Address</span>
          <p>C-28, Vidhyut Nagar C, Vaishali Nagar, Jaipur 302021</p>
        </div>
      </div>

      <hr />

      <div className="address-wraper-content">
        <div className="address-item">
          <p>
            State <br /> <b>Jaipur</b>
          </p>
          <p>
            Nearest Airport Hostel Facility <br />
            <b>Boys & Girls Hostel</b>
          </p>
        </div>
        <div className="address-item">
          <p>
            PIN Code <br /> <b>Jaipur</b>
          </p>
          <p>
            Campus Area <br />
            <b>Acres</b>
          </p>
        </div>
        <div className="address-item">
          <p>
            State <br /> <b>Jaipur</b>
          </p>
          <p>
            Nearest Landmark <br />
            <b>Metro</b>
          </p>
        </div>
      </div>

      <h4>Transport Details</h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Nearest Airport</th>
              <th scope="col">Distance</th>
              <th scope="col">Nearest Junction</th>
              <th scope="col">Distance</th>
            </tr>
          </thead>
          <tbody>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <tr key={index}>
                  <td>Jaipur Airport</td>
                  <td>5.6km</td>
                  <td>Jaipur Junction</td>
                  <td>5.6km</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="map-cols">
            <h6>Google Map College Location</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602408006!2d75.62574481854841!3d26.88542139063844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1738574623134!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map-cols">
            <h6>Google Map College Location</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208472.8522460003!2d75.62574481854841!3d26.88542139063844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1738574647650!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfoForCollegeDetails;
