"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import logo from "../assets/images/logo.png"
import { FaUser } from "react-icons/fa"
import SignIn from "./SignIn"
import indanFlag01 from "../assets/images/Indianflag.png"
import { useDispatch } from "react-redux"
import { handleLoginModal } from "@/store/services/global"

const HeaderSecond = () => {

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
      <header className="header type2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-2">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="header logo"
                    width={150}
                    height={50}
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>

            <div className="col-6 col-lg-10">
              <div className="wrapper d-flex justify-content-between align-items-center">
                <nav
                  className={`menus ${menuOpen ? "d-block" : "d-none d-lg-block"
                    }`}
                >
                  <ul className="list-unstyled d-flex gap-3 m-0">
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
                            {[...Array(7)].map((_, index) => (
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

                <ul className="btn-wrapper list-unstyled d-flex gap-3 m-0">
                  <li>
                    <Link href="#" onClick={() => dispatch(handleLoginModal(true))}>
                      <span>
                        {" "}
                        <FaUser size={12} />{" "}
                      </span>{" "}
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Appointment</Link>
                  </li>
                </ul>

                <div
                  className="menu-toggle d-lg-none"
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

      <SignIn showModal={showModal} closeModal={closeModal} />
    </>
  )
}

export default HeaderSecond
