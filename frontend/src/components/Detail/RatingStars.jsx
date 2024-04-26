import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const stars = [];
  const maxRating = 10;

  
  const fullStars = Math.floor(rating / 2);
  const emptyStars = Math.floor((maxRating - rating) / 2);

  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={fullStars + i} />);
  }

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
