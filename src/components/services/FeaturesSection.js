import Image from "next/image";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s6 from "../../assets/images/s6.png";
import s7 from "../../assets/images/s7.png";
import s8 from "../../assets/images/s8.png";

const FeaturesSection = () => {
  const services = [
    {
      src: s1,
      title: "MBBS",
      desc: "Get complete details college wise by Visuti Career medical app",
    },
    {
      src: s2,
      title: "BDS",
      desc: "Predict your college choose NEET predictor",
    },
    {
      src: s3,
      title: "BSC Nursing",
      desc: "Track your counselling state wise",
    },
    {
      src: s4,
      title: "AYUSH",
      desc: "Build your documents as your college",
    },
    {
      src: s5,
      title: "Bv.Sc",
      desc: "Make your choice filling real time by AI choice filling builder",
    },
    {
      src: s6,
      title: "MBBS Abroad",
      desc: "Dedicated counselor help you 24*7 via chat and video call",
    },
    {
      src: s7,
      title: "MBBS NRI Admission",
      desc: "Get all college health report, campus hostel and all other details",
    },
    {
      src: s8,
      title: "BSC Nursing",
      desc: "One-to-one counselor allotted for counselling",
    },
  ];

  return (
    <section className="features-section type2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2>
                <span>NEET PG/UG </span> Service
              </h2>
            </div>
          </div>

          {services.map((service, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="inner-box">
                <Image
                  src={service.src}
                  alt={service.title}
                  className="img-fluid"
                  width={50}
                  height={50}
                />
                <h6>{service.title}</h6>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
