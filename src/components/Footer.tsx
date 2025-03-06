import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <Image
                src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/logo-white.png"
                alt="Visuti Edu & Tech Logo"
                width={100} // Adjust width
                height={40} // Adjust height
                className="img-fluid"
              />
              <h5>Visuti Edu & Tech Private Limited</h5>
              <p>
                Call : <a href="tel:+919145879646">+91 9145879646</a>
              </p>
              <p>C-28, Vidhyut Nagar C, Vaishali Nagar, Jaipur 302021</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@visuticareer.in">
                  contact@visuticareer.in
                </a>
              </p>

              <ul className="social">
                <li>
                  <a href="#"> <FaFacebookF /> </a>
                  <a href="#"><FaDribbble /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaBehance /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="menu-item">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Course</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div className="menu-item">
              <h5>More To Explore</h5>
              <ul>
                <li>
                  <a href="#">NEET UG Predictor</a>
                </li>
                <li>
                  <a href="#">NEET PG Predictor</a>
                </li>
                <li>
                  <a href="#">MBBS(NEET UG)</a>
                </li>
                <li>
                  <a href="#">NEET PG</a>
                </li>
                <li>
                  <a href="#">NEET PG Predictor</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div className="menu-item">
              <h5>Our Courses</h5>
              <ul>
                <li>
                  <a href="#">NEET UG Predictor</a>
                </li>
                <li>
                  <a href="#">NEET PG Predictor</a>
                </li>
                <li>
                  <a href="#">MBBS(NEET UG)</a>
                </li>
                <li>
                  <a href="#">NEET PG</a>
                </li>
                <li>
                  <a href="#">NEET PG Predictor</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12">
            <div className="bottom">
              <p>© 2024 Visuti Career | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
