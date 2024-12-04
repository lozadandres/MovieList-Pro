import React from 'react';
import Swal from 'sweetalert2';
import {Movies} from '../types/Movie';

interface MovieCardProps {
  movies: Movies;
}

const MovieCard: React.FC<MovieCardProps> = ({movies}) => {
    const imageSrc = new URL(`../assets/img/${movies.image}`, import.meta.url).href;
    const Details = () => {
        Swal.fire({
            title: movies.title,
            text: `Genero ${movies.genero} |\n\nDuración: ${movies.Duracion} minutos`,
            imageUrl: imageSrc,
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonText: 'Regresar',
            confirmButtonColor: '#1a1a1a'
        });
    };

    return (
        <div className="movie-card" onClick={Details}>
            <img src={imageSrc} alt={movies.title} />
            <h3>{movies.title}</h3>
            <p>{movies.genero}</p>
            <p><strong>ID:</strong> {movies.id}</p>
            <p><strong>Duración:</strong> {movies.Duracion} minutos</p>
            <button onClick={Details}>Detalles</button>
        </div>
    );
};

export default MovieCard;