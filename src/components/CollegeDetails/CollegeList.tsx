import Image from "next/image";
import { FaStar } from "react-icons/fa";
import locationIcon from "../../assets/images/location.png";
import homeIcon from "../../assets/images/home.png";
import { FaDownload } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaRightLeft } from "react-icons/fa6";

interface College {
  imgSrc: string;
  name: string;
  location: string;
  ownership: string;
  rating: number;
  fees: string;
  downloads: number;
}

const CollegeCard: React.FC<College> = ({
  imgSrc,
  name,
  location,
  ownership,
  rating,
  fees,
  downloads,
}) => {
  return (
    <div className="delhi-le-content d-md-flex">
      <div className="iit-content-wrapper">
        <div className="iit-content d-flex">
          <div className="iit-img">
            <Image src={imgSrc} alt={name} width={60} height={60} />
          </div>
          <div className="content">
            <h3>{name}</h3>
            <ul>
              <li>
                <a href="#">
                  <Image
                    src={locationIcon}
                    alt="Location"
                    width={15}
                    height={15}
                  />
                  {location}
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src={homeIcon}
                    alt="Ownership"
                    width={15}
                    height={15}
                  />
                  {ownership}
                </a>
              </li>
              <li>
                <FaStar className="text-yellow-500" size={20} /> {rating}
              </li>
            </ul>
          </div>
        </div>

        {/* Fees Section */}
        <div className="fees">
          <p>
            Fees: {fees} <span>I</span> M.E / M.Tech.
          </p>
          <p>{downloads}+ Brochures downloaded</p>
        </div>
        <div className="fees">
          <p>
            Admissions<span>I</span>Placements<span>I</span>Courses
          </p>
        </div>
      </div>

      {/* Action Links */}
      <div className="right-links">
        <ul className="links">
          <li>
            <a href="#" className="active">
              <FaDownload size={20} /> Brochure
            </a>
          </li>
          <li>
            <a href="#" className="borders">
              <FaQuestion size={20} /> Enquire
            </a>
          </li>
          <li>
            <a href="#" className="borders">
              <FaRightLeft size={20} /> Compare
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// College List Component
const CollegeList: React.FC = () => {
  const colleges: College[] = [
    {
      imgSrc:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/2.png",
      name: "IIT Delhi - Indian Institute of Technology [IITD]",
      location: "New Delhi, Delhi NCR",
      ownership: "Public/Government",
      rating: 4.1,
      fees: "₹37.93 K - ₹1.08 Lakhs",
      downloads: 600,
    },
    {
      imgSrc:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/2.png",
      name: "IIT Bombay - Indian Institute of Technology [IITB]",
      location: "Mumbai, Maharashtra",
      ownership: "Public/Government",
      rating: 4.5,
      fees: "₹50 K - ₹1.2 Lakhs",
      downloads: 750,
    },
    {
      imgSrc:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/2.png",
      name: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu",
      ownership: "Public/Government",
      rating: 4.3,
      fees: "₹45 K - ₹1.1 Lakhs",
      downloads: 670,
    },
  ];

  return (
    <div>
      {colleges.map((college, index) => (
        <CollegeCard key={index} {...college} />
      ))}
    </div>
  );
};

export default CollegeList;
