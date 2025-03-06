"use client"; // Needed if using Next.js App Router (13+)

import React from "react";
import Image from "next/image"; // Optimized image loading
import Link from "next/link";

const RightSidebarFee = () => {
  return (
    <div className="right-side blog-right-side">
      {/* Enquiry Form */}
      <div className="form-outer-div popular mt-4 m-lg-0">
        <h5>Enquiry Form</h5>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Message"
              id="floatingTextarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Appointment
          </button>
        </form>
      </div>

      {/* Finder Image */}
      <div className="popular videos p-0">
        <Link href="#">
          <Image
            src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/finder.png"
            alt="Finder"
            width={300}
            height={200}
            className="img-fluid"
          />
        </Link>
      </div>

      {/* App Download Section */}
      <div className="popular download">
        <h5 className="mb-2">
          Download The <span>Visuti Career App</span>
        </h5>
        <p>New features. New appearance. No risk and credit card required.</p>
        <div className="wrapper d-flex gap-3">
          <Image
            src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/play-store.png"
            alt="Play Store"
            width={150}
            height={50}
            className="img-fluid"
          />
          <Image
            src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/app-store.png"
            alt="App Store"
            width={150}
            height={50}
            className="img-fluid"
          />
        </div>
      </div>

      {/* Videos Section */}
      <div className="popular videos">
        <h5>Videos</h5>
        <iframe
          width="100%"
          height="280"
          src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="280"
          src="https://www.youtube.com/embed/E9CkoQUjiFc?si=7krtS9ynKev1VtKL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="link">
          <Link href="#">View All Videos</Link>
        </div>
      </div>

      {/* Top Rated Colleges */}
      <div className="popular">
        <h5>Top Rated Colleges</h5>
        {[
          {
            img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po1.png",
            title: "Our 15 favorite websites from August",
          },
          {
            img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po2.png",
            title: "The beginners guide to user research",
          },
          {
            img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po3.png",
            title: "Web page layout 101: website anatomy every designer",
          },
        ].map((college, index) => (
          <div className="inner-item" key={index}>
            <Image
              src={college.img}
              alt=""
              width={100}
              height={100}
              className="img-fluid"
            />
            <div className="content">
              <p>NEET UG Counselling</p>
              <h6>{college.title}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Top States Section */}
      <div className="popular states">
        <h5>Top States</h5>
        <ul>
          {[
            "Manipur",
            "Andhra Pradesh",
            "Sikkim",
            "Kerala",
            "Punjab",
            "Rajasthan",
            "Uttar Pradesh",
            "Gujarat",
            "Nagaland",
            "West Bengal",
            "Mizoram",
          ].map((state, index) => (
            <li key={index}>
              <Link href="#">{state}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebarFee;
