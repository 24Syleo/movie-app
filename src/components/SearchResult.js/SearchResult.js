import React from 'react';
import styles from "./SearchResult.module.scss";
import { getMovieByPath } from '@/utils/movieClient';
import MediaCard from '../media-card/MediaCard';

const SearchResult = async ({ searchParams, genreId }) => {

    const { results } = await getMovieByPath("/discover/movie", [
        { key: "sort_by", value: searchParams.sort_by},
        { key: "release_date.gte", value: searchParams["release_date.gte"]},
        { key: "release_date.lte", value: searchParams["release_date.lte"]},
        { key: "with_genres", value: genreId},
    ])

    return (
        <div className={styles.resultat}>
            {results
            .filter((movie) => movie.poster_path )
            .map((movie) => (
                <MediaCard key={movie.id} media={movie} />
            ))}
        </div>
    );
};

export default SearchResult;