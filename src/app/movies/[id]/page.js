import { getMovieByPath } from "@/utils/movieClient";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";

export const dynamic = "force-static";
export const revalidate = 3600;

const Movie = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <Suspense fallback={<p>Chargement...</p>}>
        <MovieDetails movie={movie} />
      </Suspense>
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={params.id} />
      </Suspense>
    </div>
  );
};

export default Movie;
