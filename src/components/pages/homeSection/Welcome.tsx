"use client";
import { type FC, useEffect, useState } from "react";
import scss from "./Welcome.module.scss";
import Cards from "../../../../ui/cards/Cards";
import Stars from "../../../../ui/stars/Stars";
import { useGetUpComingQuery } from "@/api/upComing";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const Welcome: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { data: movie } = useGetUpComingQuery();

  const movies = movie?.results || [];

  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setIsAnimating(false);
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentIndex];

  return (
    <section
      className={scss.Welcome}
      style={{
        backgroundImage: `url(${IMAGE_BASE}${currentMovie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className={scss.overlay}>
        <div className="container">
          {currentMovie && (
            <div
              className={`${scss.contentWrapper} ${
                isAnimating ? scss.fadeOut : scss.fadeIn
              }`}
            >
              <div className={scss.textContent}>
                <div className={scss.text}>
                  <h1 className={scss.title}>{currentMovie.title}</h1>
                </div>
                <p className={scss.tagline}>{currentMovie.overview}</p>
                <div className={scss.star}>
                  <Stars rating={currentMovie.vote_average} />
                </div>
                <button className={scss.ctaButton}>Watch now</button>
              </div>
              <Cards
                id={currentMovie.id}
                poster_path={currentMovie.poster_path}
                title={currentMovie.title}
                vote_average={currentMovie.vote_average}
                overview={currentMovie.overview}
                release_date={currentMovie.release_date}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
