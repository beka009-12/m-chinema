namespace DETAILS {
  type GetMovieDetailsRes = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    homepage: string;
    tagline: string;
    genres: Array<{
      id: number;
      name: string;
    }>;
  };

  type GetMovieDetailsReq = {
    movieId: number;
  };
}
