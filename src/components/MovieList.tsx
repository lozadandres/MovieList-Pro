import React from 'react';
import {Movies} from '../types/Movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movies[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    );
};

export default MovieList;