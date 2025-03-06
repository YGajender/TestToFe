import Image from "next/image";
import EnquiryForm from "./EnquiryForm"; // Ensure you have this component
import VideoSection from "./VideoSection"; // Ensure this component exists
import finder from "../../assets/images/finder.png";
import playstore from "../../assets/images/play-store.png";
import appstore from "../../assets/images/app-store.png";
import po1 from "../../assets/images/po1.png";
import po2 from "../../assets/images/po2.png";
import po3 from "../../assets/images/po3.png";

const RightSidebar = () => {
  return (
    <div className="right-side blog-right-side">
      {/* Enquiry Form */}
      <EnquiryForm />

      {/* Finder Image */}
      <div className="popular videos p-0">
        <a href="#">
          <Image
            src={finder}
            alt="Finder"
            width={500}
            height={300}
            className="img-fluid"
          />
        </a>
      </div>

      {/* Download App Section */}
      <div className="popular download">
        <h5 className="mb-2">
          Download The <span>Visuti Career App</span>
        </h5>
        <p>New features. New appearance. No risk and credit card required.</p>
        <div className="wrapper d-flex gap-3">
          <Image
            src={playstore}
            alt="Play Store"
            width={150}
            height={50}
            className="img-fluid"
          />
          <Image
            src={appstore}
            alt="App Store"
            width={150}
            height={50}
            className="img-fluid"
          />
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />

      {/* Top Rated Colleges */}
      <div className="popular">
        <h5>Top Rated Colleges</h5>
        {[
          {
            img: po1,
            title: "Our 15 favorite websites from August",
            desc: "NEET UG Counselling",
          },
          {
            img: po2,
            title: "The beginners guide to user research",
            desc: "NEET UG Counselling",
          },
          {
            img: po3,
            title: "Web page layout 101: website anatomy every designer",
            desc: "NEET UG Counselling",
          },
        ].map((college, index) => (
          <div className="inner-item" key={index}>
            <Image
              src={college.img}
              alt={college.title}
              width={80}
              height={80}
              className="img-fluid"
            />
            <div className="content">
              <p>{college.desc}</p>
              <h6>{college.title}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Top States */}
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
              <a href="#">{state}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
