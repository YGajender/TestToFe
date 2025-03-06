import Image from "next/image";
import Link from "next/link";
import exquirebanner from "../assets/images/exquire-banner.jpg";
import student from "../assets/images/student.png";

const CollegeComparisons = () => {
  return (
    <section className="college-rank-sec">
      <div className="bg-img">
        <Image
          src={exquirebanner}
          alt="Comparison Banner"
          className="img-fluid"
          width={1200}
          height={400}
        />
      </div>

      <div className="content">
        <div className="row">
          <div className="col-7">
            <div className="inner-content">
              <h2>Get Comparison on college ranks, fees, placements, etc.</h2>
              <div className="link">
                <Link href="#">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="student">
              <Image
                src={student}
                alt="Student"
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

export default CollegeComparisons;
