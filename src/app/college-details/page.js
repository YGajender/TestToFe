"use client";
import Image from "next/image";
import CollegeDetailBanner from "@/components/CollegeDetailBanner";
import HeaderSecond from "@/components/HeaderSecond";
import MultiCategorySection from "@/components/MultiCategorySection";
import Footer from "@/components/Footer";
// import RatingProgress from "@/components/CollegeDetails/RatingProgress";
import IITMadrasInfo from "../../components/CollegeDetails/IITMadrasInfo";
// import IITMadrasInfo from "@/components/CollegeDetails/IITMadrasInfo";
import CollegeInnerInfo from "@/components/CollegeDetails/CollegeInnerInfo";
import CollegeRankSection from "@/components/CollegeDetails/CollegeRankSection";
import RightSidebar from "@/components/CollegeDetails/RightSidebar";
import icon from "../../assets/images/icon1.png";
import doctor2 from "../../assets/images/doctor2.png";
// import "../../styles/scss/component/_college-detail.scss";
import videoplay from "../../assets/images/play-store.png";
import CollegeStateSwiper from "@/components/FeeDetails/CollegeStateSwiper";
import video1 from "../../assets/images/video1.png";
import VideoGallery from "@/components/VideoGallery";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import GalleryImages from "@/components/FeeDetails/GalleryImages";
import PhotoGallery from "@/components/CollegeDetails/PhotoGallery";
import CollegeList from "@/components/CollegeDetails/CollegeList";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <HeaderSecond />

      <CollegeDetailBanner />

      <MultiCategorySection />

      <section className="college-detail-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <IITMadrasInfo />

              <CollegeInnerInfo />

              <CollegeRankSection />

              {/* <!-- IIT Delhi Courses --> */}

              <div className="college-inner-info ">
                <section className="compare-tabs pt-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h5>IIT Delhi Courses</h5>
                        <ul>
                          <li>
                            <a href="#">B.Tech</a>
                          </li>
                          <li>
                            <a href="#">M.Tech</a>
                          </li>
                          <li>
                            <a href="#">MBA</a>
                          </li>
                          <li>
                            <a href="#">B.Tech + M.Tech</a>
                          </li>
                          <li>
                            <a href="#">M.S</a>
                          </li>
                          <li>
                            <a href="#">PH.D</a>
                          </li>
                          <li>
                            <a href="#">M.Des</a>
                          </li>
                          <li>
                            <a href="#">Filter</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="course">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="course-name-fees d-flex  align-items-center justify-content-between w-100 pe-5">
                            <div className="course-name">
                              <h5> B. Tech</h5>
                              <p>15 Courses</p>
                            </div>
                            <div className="corse-fees">
                              <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Course</th>
                                  <th scope="col">Application Date</th>
                                  <th scope="col">Fees</th>
                                  <th scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="link">
                            <a href="#">View More Courses</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="course-name-fees d-flex  align-items-center justify-content-between w-100 pe-5">
                            <div className="course-name">
                              <h5> M. Tech B.Tech</h5>
                              <p>15 Courses</p>
                            </div>
                            <div className="corse-fees">
                              <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Course</th>
                                  <th scope="col">Application Date</th>
                                  <th scope="col">Fees</th>
                                  <th scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="course-name-fees d-flex  align-items-center justify-content-between w-100 pe-5">
                            <div className="course-name">
                              <h5> M. Tech B.Tech</h5>
                              <p>15 Courses</p>
                            </div>
                            <div className="corse-fees">
                              <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Course</th>
                                  <th scope="col">Application Date</th>
                                  <th scope="col">Fees</th>
                                  <th scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <div className="course-name-fees d-flex  align-items-center justify-content-between w-100 pe-5">
                            <div className="course-name">
                              <h5> M. Tech B.Tech</h5>
                              <p>15 Courses</p>
                            </div>
                            <div className="corse-fees">
                              <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Course</th>
                                  <th scope="col">Application Date</th>
                                  <th scope="col">Fees</th>
                                  <th scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      {" "}
                                      <FaStar /> 4.1
                                      (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h4 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsFice"
                          aria-expanded="false"
                          aria-controls="collapsFice"
                        >
                          <div className="course-name-fees d-flex  align-items-center justify-content-between w-100 pe-5">
                            <div className="course-name">
                              <h5> B. Tech</h5>
                              <p>15 Courses</p>
                            </div>
                            <div className="corse-fees">
                              <h6>₹2.29 Lakhs (1st Year Fees)</h6>
                            </div>
                          </div>
                        </button>
                      </h4>
                      <div
                        id="collapsFice"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">Course</th>
                                  <th scope="col">Application Date</th>
                                  <th scope="col">Fees</th>
                                  <th scope="col"> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <Image
                                        src={icon}
                                        alt="Icon"
                                        width={50}
                                        height={50}
                                      />
                                      4.1 (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <Image
                                        src={icon}
                                        alt="Icon"
                                        width={50}
                                        height={50}
                                      />
                                      4.1 (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <Image
                                        src={icon}
                                        alt="Icon"
                                        width={50}
                                        height={50}
                                      />
                                      4.1 (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <Image
                                        src={icon}
                                        alt="Icon"
                                        width={50}
                                        height={50}
                                      />
                                      4.1 (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p>Mathematics And Computing</p>
                                    <div className="review">
                                      <Image
                                        src={icon}
                                        alt="Icon"
                                        width={50}
                                        height={50}
                                      />
                                      4.1 (25 Reviews)
                                    </div>
                                  </td>
                                  <td>27 Apr - 18 Jun 2024</td>
                                  <td>
                                    <p>₹2,28,650</p>
                                    <div className="review">1st Yr Fees</div>
                                  </td>
                                  <td>
                                    <div className="table-link">
                                      <a href=""> Neet Predictor</a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--IIT Delhi Cutoff 2025  --> */}

              <div className="college-inner-info ">
                <section className="compare-tabs pt-0 pb-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-12">
                        <h5>IIT Delhi Courses</h5>
                        <ul>
                          <li>
                            <a href="#">JEE Advanced Cutoff 2024</a>
                          </li>
                          <li>
                            <a href="#">IIT 2024</a>
                          </li>
                          <li>
                            <a href="#">IIT 2023</a>
                          </li>
                          <li>
                            <a href="#"> IIT 2022</a>
                          </li>
                          <li>
                            <a href="#">IIT 2021 </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="ct-off">
                  <h4>IIT Delhi, JEE Advanced Cutoff 2024</h4>
                  <p>
                    IIT Delhi, JEE Advanced Cutoff 2024 for General Category is
                    listed below. The overall cutoff rank for JEE Advanced
                    is 116 - 5930
                  </p>

                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Category</th>
                          <th scope="col">Round 1</th>
                          <th scope="col">Round 2</th>
                          <th scope="col">Round 3</th>
                          <th scope="col">Round 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                        <tr>
                          <th scope="row">Gen</th>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                          <td>116</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* <!-- NEET Predictor --> */}
              <div className="net-predictor">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h4>NEET Predictor</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>

                    <div className="link">
                      {" "}
                      <a className="text-decoration-none" href="">
                        Predictor Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="do-img">
                      <Image
                        src={doctor2}
                        alt="Icon"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CollegeStateSwiper />

              <div className="college-inner-info">
                <div className="ct-off">
                  <h4>Popular Colleges Compared With IIT Delhi</h4>

                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover ">
                      <thead>
                        <tr>
                          <th scope="col">College</th>
                          <th scope="col">Avg Fees/ year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            IIT Bombay - Indian Institute of Technology -
                            [IITB], Mumbai
                          </th>
                          <td>₹218700</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Delhi Technological University - [DTU], New Delhi
                          </th>
                          <td>₹504050</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            IIT Bombay - Indian Institute of Technology -
                            [IITB], Mumbai
                          </th>
                          <td>₹218700</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Delhi Technological University - [DTU], New Delhi
                          </th>
                          <td>₹504050</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            IIT Bombay - Indian Institute of Technology -
                            [IITB], Mumbai{" "}
                          </th>
                          <td>₹218700</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Delhi Technological University - [DTU], New Delhi
                          </th>
                          <td>₹504050</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="college-inner-info">
                <h4>Address Details</h4>

                <div className="address">
                  <div className="icon">
                    <IoLocationOutline />
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
                      Nearest Airport Hostel Facility <br />{" "}
                      <b>Boys & Girls Hostel</b>
                    </p>
                  </div>
                  <div className="address-item">
                    <p>
                      PIN Code <br /> <b>Jaipur</b>
                    </p>
                    <p>
                      Campus Area
                      <br /> <b>Acres</b>
                    </p>
                  </div>
                  <div className="address-item">
                    <p>
                      State <br /> <b>Jaipur</b>
                    </p>
                    <p>
                      Nearest Landmark <br /> <b>Metro</b>
                    </p>
                  </div>
                </div>

                <h4>Transport Details</h4>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover ">
                    <thead>
                      <tr>
                        <th scope="col">Nearest Airport</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Nearest Junction</th>
                        <th scope="col">Distance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jaipur Airport</td>
                        <td>5.6km</td>
                        <td>Jaipur Junction</td>
                        <td>5.6km</td>
                      </tr>

                      <tr>
                        <td>Jaipur Airport</td>
                        <td>5.6km</td>
                        <td>Jaipur Junction</td>
                        <td>5.6km</td>
                      </tr>

                      <tr>
                        <td>Jaipur Airport</td>
                        <td>5.6km</td>
                        <td>Jaipur Junction</td>
                        <td>5.6km</td>
                      </tr>

                      <tr>
                        <td>Jaipur Airport</td>
                        <td>5.6km</td>
                        <td>Jaipur Junction</td>
                        <td>5.6km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="map-cols">
                      <h6>Google Map College Location</h6>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602408006!2d75.62574481854841!3d26.88542139063844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1738574623134!5m2!1sen!2sin"
                        width="100%"
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
                        width="100%"
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

              <div className="college-inner-info bg-color">
                <div className="about-city">
                  <h6>About the City</h6>
                  <p>
                    IIT Delhi, JEE Advanced Cutoff 2024 for General Category is
                    listed below. The overall cutoff rank for JEE Advanced
                    is 116 - 5930 IIT Delhi, JEE Advanced Cutoff 2024
                    for General Category is listed below. The overall cutoff
                    rank for JEE Advanced is 116 - 5930 <br />
                    IIT Delhi, JEE Advanced Cutoff 2024 for General Category is
                    listed below. The overall cutoff rank for JEE Advanced
                    is 116 - 5930 IIT Delhi, JEE Advanced Cutoff 2024
                    for General Category is listed below. The overall cutoff
                    rank for JEE Advanced is 116 - 5930
                  </p>
                </div>
              </div>

              <div className="college-inner-info">
                <div className="reach-college">
                  <h6>How to reach the College</h6>
                  <ul>
                    <li>
                      <h5>Reach Step one</h5>
                      <p>Business representative</p>
                      <p>Business details</p>
                    </li>

                    <li>Reach Step two</li>
                    <li>Reach Step three</li>
                    <li>Reach Step four</li>
                  </ul>
                </div>
              </div>

              <VideoGallery />

              <Reviews />

              <PhotoGallery />

              <CollegeList />
            </div>

            <div className="col-lg-4">
              <RightSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
