import React from "react"
import Image from "next/image"
import logo from "../../../assets/images/logo.png"
import user from "../../../assets/images/user.png"
import { FaAngleDown } from "react-icons/fa"

const Header = ({ toggleMobileMenu }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <Image src={logo} alt="Logo" className="img-fluid" />
            </div>
          </div>

          <div className="col-6">
            <div className="student">
              <div className="dropdown">
                <a
                  className="btn"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image src={user} alt="Logo" className="img-fluid" /> Natalya{" "}
                  <FaAngleDown />
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      3
                    </a>
                  </li>
                </ul>
              </div>
              <div onClick={toggleMobileMenu} className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
