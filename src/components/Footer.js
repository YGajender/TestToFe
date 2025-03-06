import Image from "next/image"
import Link from "next/link"

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
                // Adjust width
                width={100}
                // Adjust height
                height={40}
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
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  {/* 
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                  <a href="#">YouTube</a> */}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="menu-item">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="#">Course</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
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
              <p>© 2025 Visuti Career | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
