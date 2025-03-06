import Image from "next/image";
import student from "../../assets/images/student.png";
import exquirebanner from "../../assets/images/exquire-banner.jpg";

const CollegeRankSection = () => {
  return (
    <section className="college-rank-sec">
      <div className="bg-img">
        <Image
          src={exquirebanner}
          alt="College Rank Banner"
          className="img-fluid"
          layout="responsive"
          width={1200}
          height={400}
        />
      </div>

      <div className="content">
        <div className="row">
          <div className="col-7">
            <div className="inner-content">
              <h2>Get Comparison on college ranks, fees, placements etc</h2>
              <div className="link">
                <a href="#">Explore Now</a>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="student">
              <Image
                src={student}
                alt="Student Illustration"
                className="img-fluid"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeRankSection;
