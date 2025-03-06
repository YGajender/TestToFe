import Image from "next/image"
import Frame1 from "../assets/images/Frame1.png"
import Frame2 from "../assets/images/Frame2.png"
import Frame3 from "../assets/images/Frame3.png"

const WebinarSection = () => {
  return (
    <section className="our-webinar-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="webinar-item">
              <Image
                src={Frame1}
                alt="Easy Admission Process"
                className="img-fluid"
                // Provide the width of the image
                width={70}
                // Provide the height of the image
                height={70}
              />
              <h5>Easy Admission Process</h5>
              <p>
                Direct admissions with no entrance exam like IELTS/TOEFL
                required.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="webinar-item">
              <Image
                src={Frame2}
                alt="No Donation/Capitation Fee"
                className="img-fluid"
                width={70}
                height={70}
              />
              <h5>No Donation/Capitation Fee</h5>
              <p>No extra charges for MBBS admissions in abroad.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="webinar-item">
              <Image
                src={Frame3}
                alt="Admission Letter Within 7 Days"
                className="img-fluid"
                width={70}
                height={70}
              />
              <h5>Admission Letter Within 7 Days</h5>
              <p>
                Receive an invitation letter from the university within a week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebinarSection
