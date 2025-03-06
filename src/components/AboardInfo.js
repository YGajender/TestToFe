import topcimg from "../assets/images/2.png"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"

export default function AboardInfo() {
  return (
    <div className="aboard-outer">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {["Australia", "United Kingdom", "Canada"].map((country, index) => (
              <div className="college-inner-info" key={index}>
                <h4>{country}</h4>
                <p>
                  Australia is renowned for its high-quality healthcare system
                  and top-ranked medical schools. The country offers a rigorous
                  MBBS program with modern facilities and a focus on practical
                  experience.
                </p>
                <div className="info-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Aspect</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Top Universities in Australia</td>
                        <td>
                          <ul>
                            <li>- University of Sydney</li>
                            <li>- University of Melbourne</li>
                            <li>- University of Queensland</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Annual Fee</td>
                        <td>AUD 50,000 – AUD 70,000 (INR 27L – INR 38L)</td>
                      </tr>
                      <tr>
                        <td>Duration</td>
                        <td>
                          4-5 years (depending on undergraduate degree
                          completion)
                        </td>
                      </tr>
                      <tr>
                        <td>Admission Requirements</td>
                        <td>
                          <ul>
                            <li>
                              High school diploma with strong science
                              performance
                            </li>
                            <li>UCAT/GAMSAT: Minimum score 2500</li>
                            <li>IELTS: Minimum 7.0 (overall)</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Visa Requirements</td>
                        <td>
                          <ul>
                            <li>Student Visa (subclass 500)</li>
                            <li>
                              Admission offer, proof of funds, health insurance
                              required
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Work Permit</td>
                        <td>
                          Up to 40 hours per fortnight during term-time -
                          Full-time during breaks
                        </td>
                      </tr>
                      <tr>
                        <td>Cost of Living in Australia</td>
                        <td>
                          AUD 20,000 – AUD 30,000 per year (INR 11L – INR 16L)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="right-side blog-right-side">
              <div className="popular">
                <h5>Top Rated Colleges</h5>
                <div className="inner-item">
                  <Image
                    src={topcimg}
                    alt="Post Image"
                    width={70}
                    height={50}
                    className="img-fluid"
                  />
                  <div className="content">
                    <h6>IIT Delhi - Indian Institute of Technology [IITD]</h6>
                    <p>
                      {" "}
                      <FaLocationDot /> New Delhi, Delhi NCR
                    </p>
                  </div>
                </div>
                <div className="inner-item">
                  <Image
                    src={topcimg}
                    alt="Post Image"
                    width={70}
                    height={50}
                    className="img-fluid"
                  />
                  <div className="content">
                    <h6>IIT Delhi - Indian Institute of Technology [IITD]</h6>
                    <p>
                      {" "}
                      <FaLocationDot /> New Delhi, Delhi NCR
                    </p>
                  </div>
                </div>
                <div className="inner-item">
                  <Image
                    src={topcimg}
                    alt="Post Image"
                    width={70}
                    height={50}
                    className="img-fluid"
                  />
                  <div className="content">
                    <h6>IIT Delhi - Indian Institute of Technology [IITD]</h6>
                    <p>
                      {" "}
                      <FaLocationDot /> New Delhi, Delhi NCR
                    </p>
                  </div>
                </div>
                <div className="link">
                  <a href="#">View All Videos</a>
                </div>
              </div>

              <div className="popular videos p-0">
                <a href="#">
                  <Image
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/finder.png"
                    alt="Finder"
                    width={500}
                    height={300}
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="popular videos">
                <h5>Videos</h5>
                {[1, 2].map((video, idx) => (
                  <iframe
                    key={idx}
                    width="100%"
                    height="280"
                    src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ))}

                <div className="link">
                  <a href="#">View All Videos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
