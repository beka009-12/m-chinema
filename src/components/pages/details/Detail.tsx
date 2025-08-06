"use client";
import { useParams } from "next/navigation";
import scss from "./Detail.module.scss";
import { useGetMovieDetailsQuery } from "@/api/detail";
import Stars from "../../../../ui/stars/Stars";

const Details = () => {
  const params = useParams();
  const movieId = parseInt(params.id as string);

  const { data: movie, isError } = useGetMovieDetailsQuery(movieId);

  if (isError || !movie) {
    return (
      <section className={scss.Details}>
        <div className="container">
          <div className={scss.error}>Фильм не найден</div>
        </div>
      </section>
    );
  }

  const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <section
        className={scss.Details}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${IMAGE_BASE}${movie.backdrop_path})`,
        }}
      >
        <div className="container">
          <div className={scss.content}>
            <div className={scss.poster}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            </div>

            <div className={scss.info}>
              <h1 className={scss.title}>{movie.title}</h1>

              {movie.tagline && (
                <p className={scss.tagline}>"{movie.tagline}"</p>
              )}

              <div className={scss.meta}>
                <div className={scss.rating}>
                  <Stars rating={movie.vote_average} />
                </div>
                <div className={scss.releaseDate}>
                  <span>{movie.release_date}</span>
                </div>
              </div>

              <nav className={scss.genres}>
                {movie.genres.map((genre) => (
                  <span key={genre.id} className={scss.genre}>
                    {genre.name}
                  </span>
                ))}
              </nav>

              <div className={scss.overview}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>

              <button className={scss.ctaButton}>Watch Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
