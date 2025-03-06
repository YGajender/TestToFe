import Image from "next/image";
import {
  Download,
  Star,
  CalendarDays,
  Home,
  MapPin,
  ArrowLeftRight,
  Film,
  HelpCircle,
} from "lucide-react";
import comparebanner from "../assets/images/compare-banner.png";
import { FaStar } from "react-icons/fa";
import cs1 from "../assets/images/cs1.png";

const CollegeDetailBanner = () => {
  return (
    <section className="basic-banner-sec college-detail-banner">
      <div className="bg-image">
        <Image
          src={comparebanner}
          alt="Compare Banner"
          width={1920} // Set appropriate width
          height={1080} // Set appropriate height
          className="img-fluid"
        />
      </div>

      <div className="basic-banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="banner-content">
                <div className="inner-wrapper">
                  <div className="image">
                    <Image
                      src={cs1}
                      alt="College Logo"
                      width={100} // Adjust width as needed
                      height={100} // Adjust height as needed
                      className="img-fluid"
                    />
                  </div>

                  <div className="content">
                    <h2>IIT Delhi: Admission 2025</h2>

                    <ul>
                      <li>
                        <MapPin size={16} /> New Delhi, Delhi NCR
                      </li>
                      <li>
                        <Home size={16} /> Public/Government
                      </li>
                      <li>
                        <CalendarDays size={16} /> Estd 1961
                      </li>
                    </ul>

                    <div className="rating">
                      <FaStar className="text-yellow-500" size={20} /> 4.1{" "}
                      <span>student rating </span>{" "}
                      <FaStar className="text-yellow-500" size={20} /> 4.1
                    </div>
                  </div>

                  <div className="bottom-buttons">
                    <a href="#">
                      <Download size={16} /> neet predictor
                    </a>
                    <a href="#">
                      <ArrowLeftRight size={16} /> Compare
                    </a>
                    <a href="#">
                      <Film size={16} /> neet predictor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img-item text-end w-100">
                <div className="link">
                  <a href="#">
                    <Download size={16} /> Brochure
                  </a>

                  <a href="#">
                    <ArrowLeftRight size={16} /> V-Connect
                  </a>
                  <a href="#">
                    <HelpCircle size={16} /> Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetailBanner;
