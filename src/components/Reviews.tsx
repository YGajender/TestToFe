"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviewsData = {
  averageRating: 4.8,
  totalReviews: 614,
  ratingDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 40 },
    { stars: 3, percentage: 25 },
    { stars: 2, percentage: 15 },
    { stars: 1, percentage: 10 },
  ],
  categoryRatings: [
    {
      category: "Academic",
      rating: 4.3,
      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/re1.png",
    },
    {
      category: "Faculty",
      rating: 4.3,
      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/re2.png",
    },
    {
      category: "Infrastructure",
      rating: 4.3,
      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/re3.png",
    },
    {
      category: "Social Life",
      rating: 4.3,
      img: "https://bibaanbackend.webspulses.com/visuticareer/assets/images/re1.png",
    },
  ],
  userReviews: [
    {
      user: "Nicolas Cage",
      date: "3 Days ago",
      rating: 5,
      avatar:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg",
      title: "College Infrastructure",
      review:
        "The infrastructure of IIT Madras is excellent. High-quality computers and smart boards in every class...",
    },
    {
      user: "Emma Watson",
      date: "5 Days ago",
      rating: 4,
      avatar:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg",
      title: "Academics",
      review:
        "IIT Madras offers a structured curriculum with experienced faculty members...",
    },
  ],
};

const Reviews = () => {
  return (
    <div className="college-inner-info">
      <div className="review-andrating">
        <h5>Reviews & Rating</h5>

        {/* Overall Rating Box */}
        <div className="rating-box">
          <div className="wrapper row">
            <div className="col-md-5">
              <div className="left">
                <h2>{reviewsData.averageRating}</h2>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="fa-star"
                    />
                  ))}
                </div>
                <p>
                  <img
                    src="https://bibaanbackend.webspulses.com/visuticareer/assets/images/success.png"
                    alt="Verified"
                    className="img-fluid"
                  />
                  ({reviewsData.totalReviews} Verified Reviews)
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="right">
                {reviewsData.ratingDistribution.map((rating, index) => (
                  <div className="inner" key={index}>
                    <div className="text">
                      {rating.stars}
                      <FontAwesomeIcon icon={faStar} className="fa-star" />
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <div className="pre">{rating.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Ratings */}
        <div className="bottom-tabs">
          <ul>
            {reviewsData.categoryRatings.map((category, index) => (
              <li key={index}>
                <img
                  src={category.img}
                  alt={category.category}
                  className="img-fluid"
                />
                <div className="text">
                  <p>{category.category}</p>
                  <FontAwesomeIcon icon={faStar} className="fa-star" />
                  <span>{category.rating}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* User Reviews */}
        {reviewsData.userReviews.map((review, index) => (
          <div className="review-full-content" key={index}>
            <div className="user">
              <img
                src={review.avatar}
                alt={review.user}
                className="img-fluid"
              />
            </div>
            <div className="content">
              <h6>
                {review.user} <small>{review.date}</small>
              </h6>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="fa-star" />
                ))}
              </div>
              <h5>{review.title}</h5>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
