import { Key } from "react";
import { useMovies } from "../MoviesContext";
import { MovieCard } from "./MovieCard";

export function Content() {
  const {selectedGenre, movies, selectedGenreId} = useMovies();

  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map((movie: { imdbID: Key | null | undefined; Title: any; Poster: any; Runtime: any; Ratings: { Value: any; }[]; }) => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}