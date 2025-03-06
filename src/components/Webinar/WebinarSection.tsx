import Image from "next/image";
import checkmark from "../../assets/images/check-mark.png";

const webinarItems = [
  {
    title: "Ace NEET 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imgSrc: checkmark,
  },
  {
    title: "Master MCC and State Quota Counselling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imgSrc: checkmark,
  },
  {
    title: "Choice Filling Tips, Seat Allotment Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imgSrc: checkmark,
  },
];

export default function WebinarSection() {
  return (
    <section className="our-webinar-sec">
      <div className="container">
        <div className="row">
          {/* Title */}
          <div className="col-12 text-center">
            <div className="title">
              <h2>
                Why You Can’t <span>Miss Our Webinar!</span>
              </h2>
              <p>
                Discover the best colleges & counseling approach for your NEET
                score
              </p>
            </div>
          </div>

          {/* Webinar Items */}
          {webinarItems.map((item, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="webinar-item">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={50} // Adjust size as needed
                  height={50} // Adjust size as needed
                  className="img-fluid"
                />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
