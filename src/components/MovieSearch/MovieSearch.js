"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();

    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={3}
        debounceTimeout={500}
        onChange={(evt) => updateMovieSearch(evt.target.value)}
        placeholder="Rechercher un titre..."
        onBlur={() => setHasFocus(true)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
};

export default MovieSearch;
