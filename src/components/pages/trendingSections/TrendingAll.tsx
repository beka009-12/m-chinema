"use client";
import { useState, type FC } from "react";
import scss from "./TrendingAll.module.scss";
import { useGetAllTrendingMovies } from "@/api/trendingAll";
import Cards from "../../../../ui/cards/Cards";
import CardsSkeleton from "../../../../ui/cardsSceleton/CardsSkeleton";

const TrendingAll: FC = () => {
  const [state, setState] = useState<"day" | "week">("day");
  const [sortType, setSortType] = useState<"high" | "low">("high");

  const { data: trendingAll, isLoading } = useGetAllTrendingMovies(state);

  const sortedTrending = trendingAll?.results
    ?.slice()
    .sort((a, b) =>
      sortType === "high"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );

  return (
    <section className={scss.TrendingAll}>
      <div className="container">
        <div className={scss.header}>
          <h2 className={scss.title}>Trending All Movies</h2>

          <div className={scss.filterSortBlock}>
            <div className={scss.filters}>
              <button
                onClick={() => setState("day")}
                className={state === "day" ? scss.active : ""}
              >
                Today
              </button>
              <button
                onClick={() => setState("week")}
                className={state === "week" ? scss.active : ""}
              >
                This Week
              </button>
            </div>

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
        </div>

        <div className={scss.content}>
          {isLoading
            ? [...Array(8)].map((_, i) => <CardsSkeleton key={i} />)
            : sortedTrending?.map((item, index) => (
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
      </div>
    </section>
  );
};

export default TrendingAll;
