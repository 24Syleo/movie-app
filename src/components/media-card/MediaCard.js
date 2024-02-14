import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

export default async function MediaCard(props) {
  const genresList = await getMovieByPath("/genre/movie/list");
  const { media } = props;
  const arrayGenre = [];
  media.genre_ids.forEach((id) => {
    genresList.genres.forEach((genre) => {
      if (id === genre.id) {
        arrayGenre.push(genre.name);
      }
    });
  });

  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.original_title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
          {arrayGenre.map((genre, k) => (
            <div key={k} className={styles.genre}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
