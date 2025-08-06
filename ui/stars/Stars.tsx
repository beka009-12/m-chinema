import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import scss from "./Stars.module.scss";

interface StarsProps {
  rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  return <div className={scss.stars}>{rating.toFixed(1)}</div>;
};

export default Stars;
