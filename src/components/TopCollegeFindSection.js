import Image from "next/image"

const TopCollegeFindSection = () => {
  return (
    <section className="top-college-find">
      <div className="container">
        <div className="bg-color">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <h3>
                  Find Top <span>Colleges</span> Of Your Choice At{" "}
                  <span>One Place</span>
                </h3>
                <p>
                  New features. New appearance. No risk and credit card
                  required.
                </p>

                <div className="link">
                  <a href="#">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="people">
                <Image
                  src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/pepole.png"
                  alt="People Image"
                  // Adjust based on actual image size
                  width={500}
                  // Adjust based on actual image size
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopCollegeFindSection
