import React from "react";



const RatingProgress = ({
  rating = 5,
  percentage = 90,
}) => {
  return (
    <div className="inner">
      {/* Rating with Star Icon */}
      <div className="text">
        {rating}
        <i className="fa-solid fa-star ms-1"></i>
      </div>

      {/* Bootstrap Progress Bar */}
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>

      {/* Percentage Display */}
      <div className="pre">{percentage}%</div>
    </div>
  );
};

export default RatingProgress;
