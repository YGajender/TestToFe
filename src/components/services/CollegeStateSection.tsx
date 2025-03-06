import Image from "next/image";
import cs1 from "../../assets/images/cs1.png"
import cs2 from "../../assets/images/cs2.png";
import cs3 from "../../assets/images/cs3.png";
import cs4 from "../../assets/images/cs4.png";
import cs5 from "../../assets/images/cs5.png";
import cs6 from "../../assets/images/cs6.png";
import cs7 from "../../assets/images/cs7.png";
import cs8 from "../../assets/images/cs8.png";
import cs9 from "../../assets/images/cs9.png";
import cs10 from "../../assets/images/cs10.png";
import cs11 from "../../assets/images/cs11.png";
import cs12 from "../../assets/images/cs12.png";


const CollegeStateSection = () => {
  const states = [
    { name: "Ajmer", img: cs1 },
    { name: "Jaipur", img: cs2 },
    { name: "Udaipur", img: cs3 },
    { name: "Jodhpur", img: cs4 },
    { name: "Bikaner", img: cs5 },
    { name: "Kota", img: cs6 },
    { name: "Alwar", img: cs7 },
    { name: "Bhilwara", img: cs8 },
    { name: "Sikar", img: cs9 },
    { name: "Chittorgarh", img: cs10 },
    { name: "Jaisalmer", img: cs11 },
    { name: "Barmer", img: cs12 },
  ];

  return (
    <section className="college-state type2">
      <div className="bg-image">
        <Image
          src="/assets/images/state-bg.png"
          alt="State Background"
          className="img-fluid"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="title">
                <h2>
                  Find <span>College</span> listing by <span>States</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
            {states.map((state, index) => (
              <div className="col" key={index}>
                <div className="state-inner">
                  <Image
                    src={state.img}
                    alt={state.name}
                    className="img-fluid"
                    width={100}
                    height={100}
                    priority
                  />
                  <p>{state.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeStateSection;
