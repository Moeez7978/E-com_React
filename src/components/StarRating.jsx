import React from "react";

const StarRating = ({ stars = 0 }) => {
  const maxStars = 5;
  const filledStars = Math.round(stars); // round to nearest whole number

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < filledStars ? "fill-yellow-500" : "fill-gray-300"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;