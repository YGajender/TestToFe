"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import SignIn from "./SignIn";

const HeaderSecond = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <header className="header type2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-lg-1">
              <div className="logo">
                <Image
                  src={logo}
                  alt="header logo"
                  width={150}
                  height={50}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-8 col-lg-11">
              <div className="wrapper d-flex justify-content-between align-items-center">
                <nav
                  className={`menus ${
                    menuOpen ? "d-block" : "d-none d-lg-block"
                  }`}
                >
                  <ul className="list-unstyled d-flex gap-2 m-0">
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
                      <Link href="#">NRI</Link>
                    </li>
                    <li>
                      <Link href="#">MBBS</Link>
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
                  </ul>
                </nav>

                <ul className="btn-wrapper list-unstyled d-flex gap-3 m-0">
                  <li>
                    <Link href="#" onClick={openModal}>
                     <span> <FaUser size={12} /> </span> Sign in
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Appointment</Link>
                  </li>
                </ul>

                <div
                  className="menu-toggle "
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
                <Link href="/services">NRI</Link>
              </li>
              <li>
                <Link href="/services">MBBS</Link>
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

      <SignIn showModal={showModal} closeModal={closeModal} />
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
  );
};

export default HeaderSecond;
