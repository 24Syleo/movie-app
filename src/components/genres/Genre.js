import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from './Genre.module.scss';
import Link from "next/link";

const Genre = async () => {
  const genresList = await getMovieByPath("/genre/movie/list");
  return (
    <div>
      <h2>Liste par genre</h2>
      <div className={styles.container}>
       {
        genresList.genres.map((genre) =>(
            <div key={genre.id} className={styles.genre}>
                <Link href={`/movies/genres/${genre.id}`}>
                    <p>{genre.name}</p>
                </Link>
            </div>
        ))
       }
      </div>
    </div>
  );
};

export default Genre;
