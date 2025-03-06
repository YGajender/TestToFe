import React from "react"

const VideoWithContent = () => {
  return (
    <section className="video-with-content">
      <div className="container">
        <div className="col-12">
          <div className="title">
            <h2>Average Fees For Study MBBS Abroad - Country-wise</h2>
          </div>
        </div>
        <div className="row">
          {/* Left Section - Table */}
          <div className="col-md-6">
            <div className="left">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Average Tuition Fees (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MBBS in Russia</td>
                      <td>15 - 35 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in China</td>
                      <td>20 - 35 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Kazakhstan</td>
                      <td>18 - 25 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Uzbekistan</td>
                      <td>15 - 20 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Kyrgyzstan</td>
                      <td>15 - 25 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Georgia</td>
                      <td>25 - 40 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Poland</td>
                      <td>40 - 50 Lakhs</td>
                    </tr>
                    <tr>
                      <td>MBBS in Latvia</td>
                      <td>40 - 50 Lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Section - Video */}
          <div className="col-md-6">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SMKPKGW083c?si=0hXKYoa7xABhqKyi"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoWithContent
