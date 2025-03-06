"use client"

import Image from "next/image"
import founder from "../assets/images/founder.png"

const PersonalSection = () => {
  return (
    <section className="personal-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-item">
              <Image
                src={founder}
                alt="Founder"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <h3>
                <span>Founder Desk</span>
              </h3>
              <p>
                MR. ANSHUL TIWARI is the founder & CEO of Visuti Career &
                Technology Pvt. Ltd. As a career counselor, he has 8+ glorious
                years of excellence. He collects inputs and imparts them to
                aspirants, focusing on providing the best guidance.
              </p>
              <p>
                I am very happy to add my presence in the education industry and
                to establish world-class career counselling services across
                India. Our team is also working with top schools, colleges, and
                institutes to promote their academic programs nationwide by
                conducting seminars and workshops.
              </p>
              <p>
                I strongly believe that a nation can be great when each and
                every citizen is well-educated because education improves
                people's way of thinking and living standards. I am also
                conducting various social activities, including free career
                seminars and workshops.
              </p>
              <h4>ANSHUL TIWARI</h4>
              <p>
                Founder & CEO <br /> <span>Visuti Edu and Tech Pvt. Ltd.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalSection
