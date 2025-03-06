"use client";
import Image from "next/image";
import secend from "../../assets/images/2.png";
import location from "../../assets/images/location.png";
import home from "../../assets/images/home.png";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaRightLeft } from "react-icons/fa6";

const iitData = [
  {
    id: 1,
    name: "IIT Delhi - Indian Institute of Technology [IITD]",
    location: "New Delhi, Delhi NCR",
    ownership: "Public/Government",
    rating: 4.1,
    fees: "₹37.93 K - ₹1.08 Lakhs",
    course: "M.E / M.Tech.",
    brochuresDownloaded: 600,
    imgSrc: secend,
  },
  {
    id: 2,
    name: "IIT Bombay - Indian Institute of Technology [IITB]",
    location: "Mumbai, Maharashtra",
    ownership: "Public/Government",
    rating: 4.5,
    fees: "₹50K - ₹1.2 Lakhs",
    course: "B.Tech / M.Tech.",
    brochuresDownloaded: 800,
    imgSrc: secend,
  },
  {
    id: 3,
    name: "IIT Madras - Indian Institute of Technology [IITM]",
    location: "Chennai, Tamil Nadu",
    ownership: "Public/Government",
    rating: 4.3,
    fees: "₹40K - ₹1.1 Lakhs",
    course: "B.Tech / M.Tech.",
    brochuresDownloaded: 700,
    imgSrc: secend,
  },
];

const IITList = () => {
  return (
    <div>
      {iitData.map((iit) => (
        <div key={iit.id} className="delhi-le-content d-md-flex">
          <div className="iit-content-wrapper">
            <div className="iit-content d-flex">
              <div className="iit-img">
                {/* // Inside the component */}
                <Image
                  src={iit.imgSrc}
                  alt={iit.name}
                  width={150}
                  height={150}
                  className="img-fluid"
                />
              </div>
              <div className="content">
                <h3>{iit.name}</h3>
                <ul>
                  <li>
                    <a href="#">
                      <Image
                        src={location}
                        alt="Location Icon"
                        width={15}
                        height={15}
                      />

                      {iit.location}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        src={home}
                        alt="home Icon"
                        width={15}
                        height={15}
                      />
                      Ownership: {iit.ownership}
                    </a>
                  </li>
                  <li>
                    <FaStar className="text-yellow-500" />
                    {iit.rating}
                  </li>
                </ul>
              </div>
            </div>

            {/* Fees Section */}
            <div className="fees">
              <p>
                Fees: {iit.fees} <span>I</span> {iit.course}
              </p>
              <p>{iit.brochuresDownloaded}+ Brochures downloaded</p>
            </div>
            <div className="fees">
              <p>
                Admissions <span>I</span> Placements <span>I</span> Courses
              </p>
            </div>
          </div>

          {/* Right Side Links */}
          <div className="right-links">
            <ul className="links">
              <li>
                <a href="#" className="active">
                  <FaDownload className="fs-6" /> Brochure
                </a>
              </li>
              <li>
                <a href="#" className="borders">
                  <FaQuestion className="text-gray-600" />
                  Enquire
                </a>
              </li>
              <li>
                <a href="#" className="borders">
                  <FaRightLeft /> Compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IITList;
