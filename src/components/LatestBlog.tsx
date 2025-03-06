import React from "react";
import Image from "next/image";
import BlogBanner from "../assets/images/blog-banner.png";
import user2 from "../assets/images/user2.jpg";

const LatestBlog = () => {
  return (
    <section className="blog-secion">
      <div className="container">
        <div className="col-12">
          <div className="title">
            <h3>Latest Blog</h3>
          </div>
        </div>
        <div className="wrapper">
          <div className="left-img">
            <Image
              src={BlogBanner}
              alt="Blog Banner"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>

          <div className="blog-content">
            <span>Technology</span>
            <h4>
              S.M.S. MEDICAL COLLEGE JAIPUR RAJASTHAN COMPLETE DETAILS 2024
            </h4>

            <ul>
              <li>
                <Image
                  src={user2}
                  alt="Author"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                Jason Francisco
              </li>
              <li>Dec. 20, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
