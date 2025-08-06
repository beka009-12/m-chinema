"use client";
import { useRef, useState, type FC } from "react";
import scss from "./Trending.module.scss";
import { useGetTrendingQuery } from "@/api/trending";
import Cards from "../../../../ui/cards/Cards";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardsSkeleton from "../../../../ui/cardsSceleton/CardsSkeleton";

const Trending: FC = () => {
  const [state, setState] = useState<"day" | "week">("day");
  const [sortType, setSortType] = useState<"high" | "low">("high");
  const { data: trending, isLoading } = useGetTrendingQuery(state);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right", offset: number = 600) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  const sortedTrending = trending?.results
    .slice()
    .sort((a, b) =>
      sortType === "high"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );

  return (
    <section className={scss.Trending}>
      <div className="container">
        <div className={scss.header}>
          <h2 className={scss.title}>Trending Now</h2>

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

        <div className={scss.scrollControls}>
          <button
            onClick={() => scroll("left")}
            className={`${scss.scrollBtn} ${scss.left}`}
          >
            <FaChevronLeft />
          </button>

          <div className={scss.scrollWrapper} ref={scrollRef}>
            {isLoading
              ? [...Array(6)].map((_, i) => <CardsSkeleton key={i} />)
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

          <button
            onClick={() => scroll("right")}
            className={`${scss.scrollBtn} ${scss.right}`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
