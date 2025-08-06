"use client";
import { useRef, useState, type FC } from "react";
import scss from "./Popular.module.scss";
import { useGetPopularQuery } from "@/api/popular";
import Cards from "../../../../ui/cards/Cards";
import CardsSkeleton from "../../../../ui/cardsSceleton/CardsSkeleton";

const Popular: FC = () => {
  const { data: populaMovies, isLoading } = useGetPopularQuery();
  const [sortType, setSortType] = useState<"high" | "low">("high");

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right", offset: number = 600) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  const sortedMovies = populaMovies?.results
    .slice()
    .sort((a, b) =>
      sortType === "high"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );

  return (
    <section className={scss.Popular}>
      <div className="container">
        <div className={scss.header}>
          <h2 className={scss.title}>Popular Now</h2>
          <div className={scss.sortButtons}>
            <button
              className={`${scss.sortBtn} ${
                sortType === "high" ? scss.active : ""
              }`}
              onClick={() => setSortType("high")}
            >
              Max Rating
            </button>
            <button
              className={`${scss.sortBtn} ${
                sortType === "low" ? scss.active : ""
              }`}
              onClick={() => setSortType("low")}
            >
              Min Rating
            </button>
          </div>
        </div>

        <div className={scss.scrollControls}>
          <button
            onClick={() => scroll("left")}
            className={`${scss.scrollBtn} ${scss.left}`}
          >
            L
          </button>

          <div className={scss.scrollWrapper} ref={scrollRef}>
            {isLoading
              ? [...Array(6)].map((_, i) => <CardsSkeleton key={i} />)
              : sortedMovies?.map((item, index) => (
                  <Cards
                    key={index}
                    title={item.title}
                    id={item.id}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    release_date={item.release_date}
                    overview={item.overview}
                  />
                ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={`${scss.scrollBtn} ${scss.right}`}
          >
            R
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
