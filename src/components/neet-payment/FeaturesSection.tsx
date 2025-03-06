import Image from "next/image";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";
import f5 from "../../assets/images/f5.png";
import f6 from "../../assets/images/f6.png";
import f7 from "../../assets/images/f7.png";
import f8 from "../../assets/images/f8.png";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2>
                <span>NEET Predictor</span> Counseling Powerful Features
              </h2>
            </div>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
              <div className="inner-box">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={50}
                  height={100}
                  className="img-fluid"
                />
                <h6>{feature.title}</h6>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    image: f1,
    title: "Complete Medical App",
    description:
      "Get complete details college wise by Visuti Career medical app",
  },
  {
    image: f2,
    title: "NEET Predictor",
    description: "Predict your college choose NEET predictor",
  },
  {
    image: f3,
    title: "Tracking",
    description: "Track your counselling state wise",
  },
  {
    image: f4,
    title: "Documents",
    description: "Build your documents as your college",
  },
  {
    image: f5,
    title: "Real Time Choice Filling",
    description:
      "Make your choice filling real time by AI choice filling builder",
  },
  {
    image: f6,
    title: "24/7 Chat & Video Support",
    description: "Dedicated counselor help you 24*7 via chat and video call",
  },
  {
    image: f7,
    title: "All Colleges Health Report",
    description:
      "Get all college health report campus hostel and all other details",
  },
  {
    image: f8,
    title: "One to One Counselor",
    description: "One to one counselor allotted for counselling",
  },
];

export default FeaturesSection;
