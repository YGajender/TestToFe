import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <section className="download-app">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="content">
              <h2>
                Download The <span>Visuti Career App </span>
              </h2>

              <p>
                New features. New appearance. No risk and credit card required.
              </p>

              <div className="download-btn">
                <a href="#">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/play-store.png"
                    alt="Google Play Store"
                    width={160} // Adjust based on actual image size
                    height={50} // Adjust based on actual image size
                    className="img-fluid"
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/app-store.png"
                    alt="Apple App Store"
                    width={160} // Adjust based on actual image size
                    height={50} // Adjust based on actual image size
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="app-img">
              <Image
                src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/mobile.png"
                alt="Mobile App Image"
                width={400} // Adjust based on actual image size
                height={500} // Adjust based on actual image size
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
