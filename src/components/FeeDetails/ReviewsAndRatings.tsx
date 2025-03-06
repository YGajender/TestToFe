import Image from "next/image";
import success from "../../assets/images/success.png";
import { FaStar } from "react-icons/fa";
import re1 from "../../assets/images/re1.png";
import re2 from "../../assets/images/re2.png";
import re3 from "../../assets/images/re3.png";
import user2 from "../../assets/images/user2.jpg";

const categories = [
  { name: "Academic", img: re1 },
  { name: "Faculty", img: re2 },
  { name: "Infrastructure", img: re3 },
  { name: "Social Life", img: re1 },
  { name: "Academic", img: re2 },
];

const ReviewsAndRatings = () => {
  return (
    <div className="college-inner-info">
      <div className="review-andrating">
        <h5>Reviews & Rating</h5>

        <div className="rating-box">
          <div className="wrapper row">
            <div className="col-md-5">
              <div className="left">
                <h2>4.8</h2>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                  ))}
                </div>
                <p>
                  <Image src={success} alt="success" width={20} height={20} />
                  (614 Verified Reviews)
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="right">
                {[90, 40, 25, 15, 10].map((percentage, index) => (
                  <div key={index} className="inner">
                    <div className="text">
                      {5 - index}
                      <FaStar key={index} className="text-yellow-500 text-xl" />
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="pre">{percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-tabs">
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={25}
                  height={25}
                />
                <div className="text">
                  <p>{category.name}</p>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 text-xl" />
                    <span> 4.3</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="review-full-content">
            <div className="user">
              <Image src={user2} alt="User" width={50} height={50} />
            </div>
            <div className="content">
              <h6>
                Nicolas Cage <small>3 Days ago</small>
              </h6>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={index} className="text-yellow-500 text-xl" />
                ))}
              </div>
              <h5>College Infrastructure</h5>
              <p>
                The infrastructure of IIT Madras is too good. High-quality
                computers, smart boards, a big auditorium, and various labs are
                available for practice and practical examinations.
              </p>
              <h5>Academics</h5>
              <p>
                The academic setup includes high-quality computers, smart
                boards, and well-equipped labs for practical examinations.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
