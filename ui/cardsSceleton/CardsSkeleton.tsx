import React, { FC } from "react";
import scss from "./CardsSkeleton.module.scss";

const CardsSkeleton: FC = () => {
  return (
    <div className={scss.cardContainer}>
      <div className={`${scss.card} ${scss.skeleton}`}>
        {/* Front side skeleton */}
        <div className={scss.cardFront}>
          <div className={scss.posterSkeleton} />
          <div className={scss.cardOverlay}>
            <div className={scss.cardContent}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSkeleton;
