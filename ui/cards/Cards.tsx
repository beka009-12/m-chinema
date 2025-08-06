"use client";

import { type FC, useState } from "react";
import { useRouter } from "next/navigation";
import scss from "./Cards.module.scss";

interface ICadsInfo {
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  popularity?: number;
  release_date?: string;
  vote_count?: number;
  vote_average?: number;
}

const Cards: FC<ICadsInfo> = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGoToDetail = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/movie/${id}`);
  };

  return (
    <>
      <div className={scss.cardContainer} onClick={handleFlip}>
        <div className={`${scss.card} ${isFlipped ? scss.flipped : ""}`}>
          <div className={scss.cardFront}>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className={scss.poster}
                loading="lazy"
              />
            )}
            <div className={scss.cardOverlay}>
              <div className={scss.cardContent}>
                <p className={scss.year}>{release_date}</p>
              </div>
            </div>
            <p className={scss.rating}>{vote_average?.toFixed(1)}</p>
          </div>

          <div className={scss.cardBack}>
            <div className={scss.cardContent}>
              <h3 className={scss.title}>{title}</h3>
              <p className={scss.year}>{release_date}</p>
              <p className={scss.description}>{overview}</p>
            </div>
            <button className={scss.watchButton} onClick={handleGoToDetail}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
