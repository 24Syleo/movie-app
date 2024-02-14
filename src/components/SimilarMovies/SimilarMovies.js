import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import MediaCard from "../media-card/MediaCard";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);

  return (
    <div className={styles.container}>
      <h2>Les films similaires</h2>
      <div className={styles.similar}>
        {results
          .slice(0, 6)
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MediaCard key={movie.id} media={movie} />
          ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
