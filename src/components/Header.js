"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../assets/images/logo.png"
import { FaUser } from "react-icons/fa" // Import Font Awesome User icon
import SignIn from "./SignIn"
import { handleLoginModal } from "@/store/services/global"
import { useDispatch } from "react-redux"
import indanFlag01 from "../assets/images/Indianflag.png"

const Header = () => {

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)


  const [isMbbsOpen, setIsMbbsOpen] = useState(false);
  const [isNriOpen, setIsNriOpen] = useState(false);

  const toggleMbbsDropdown = () => {
    setIsMbbsOpen(!isMbbsOpen);
    setIsNriOpen(false); // Close NRI dropdown if MBBS is opened
  };

  const toggleNriDropdown = () => {
    setIsNriOpen(!isNriOpen);
    setIsMbbsOpen(false); // Close MBBS dropdown if NRI is opened
  };

  const closeDropdowns = () => {
    setIsMbbsOpen(false);
    setIsNriOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-6 col-lg-2">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Header Logo"
                    width={150}
                    height={50}
                    className="img-fluid"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="col-6 col-lg-10">
              <div className="wrapper">
                {/* Desktop Navigation */}
                <nav className="menus">
                  <ul>
                    <li>
                      <Link href="/" className="active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">Courses</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li style={{ padding: "8px", position: "relative" }}>
                      <button
                        type="button"
                        onClick={toggleMbbsDropdown}
                        style={{
                          border: "none",
                          background: "none",
                          color: "#565568",
                        }}
                      >
                        MBBS
                      </button>

                      {isMbbsOpen && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "150px",
                            zIndex: 1000,
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <ul
                            role="tablist"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {[...Array(5)].map((_, index) => (
                              <li
                                key={index}
                                style={{
                                  padding: "8px",
                                  borderBottom: "1px solid #eee",
                                }}
                              >
                                <Link href="/">
                                  <Image
                                    src={indanFlag01}
                                    alt="Header Logo"
                                    width={20}
                                    height={14}
                                    className="img-fluid"
                                    priority
                                    onClick={closeDropdowns}
                                  />
                                  &nbsp; INDIA
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* NRI Dropdown */}
                    <li style={{ padding: "8px", position: "relative" }}>
                      <button
                        type="button"
                        onClick={toggleNriDropdown}
                        style={{
                          border: "none",
                          background: "none",
                          color: "#565568",
                        }}
                      >
                        NRI
                      </button>

                      {isNriOpen && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            width: "150px",
                            zIndex: 1000,
                            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <ul
                            role="tablist"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {[
                              "Rajasthan",
                              "GOA",
                              "Punjab",
                              "Haryana",
                              "Jharkhand",
                              "Karnataka",
                            ].map((option, index) => (
                              <li
                                key={index}
                                style={{
                                  padding: "8px",
                                  borderBottom: "1px solid #eee",
                                }}
                              >
                                <a href="/" onClick={closeDropdowns}>
                                  &nbsp; {option}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                    <li>
                      <Link href="#!">Plan</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </nav>

                {/* Buttons Section */}
                <ul className="btn-wrapper">
                  <li>
                    <Link href="#"
                      // onClick={openModal}
                      onClick={() => dispatch(handleLoginModal(true))}
                    >
                      <span>
                        {" "}
                        <FaUser size={12} />
                      </span>{" "}
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link href="/appointment">Appointment</Link>
                  </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div
                  className="menu-toggle"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <ul>
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/plan">Plan</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/appointment">Appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* <SignIn showModal={showModal} closeModal={closeModal} /> */}

      {/* CSS Styles */}
      <style jsx>{`
        .mobile-menu {
          display: ${menuOpen ? "block" : "none"};
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 15px 0;
        }
        .menu-toggle {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Header
