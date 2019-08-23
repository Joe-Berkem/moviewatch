import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";

import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";
import { GET_MOVIES } from "../../models/movies/queries";

interface Imovie {
  id: number;
  title: string;
  thumbnail: string;
  director: string;
  runTime: number;
  imdbRating: number;
}

interface ImovieData {
  movies: Imovie[];
}

const Movies: FunctionComponent = () => {
  const handleMovieClick: Function = (movie: Imovie) => {
    console.log(movie);
  };

  const { data, loading } = useQuery<ImovieData, Imovie>(GET_MOVIES);

  if (loading) return <h1>Loading</h1>;

  return (
    <MoviesPage>
      {data &&
        data.movies.map((movie: Imovie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={handleMovieClick}
          />
        ))}
    </MoviesPage>
  );
};

export default Movies;
