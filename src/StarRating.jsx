import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label htmlFor=""  key={ratingValue}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              className="star"
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={50}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
