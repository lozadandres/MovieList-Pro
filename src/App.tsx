import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";


const App: React.FC = () => {
  const [movies] = useState([
    {id: 1, title: "El Juego del Calamar", Duracion: 60,genero: "Drama, Suspense", image: "el-juego-del-calamar.jpg" },
    {id: 2, title: "Dark", Duracion: 60, genero: " Drama, Ciencia ficción, Suspense", image: "dark.jpg"},
    {id: 3, title: "La casa de Papel", Duracion: 45,genero: "Acción, Drama", image: "casa-de-papel.jpg"},
    {id: 4, title: "Breaking Bad", Duracion: 60, genero: "Crimen, Drama", image: "Breaking-Bad.jpg"},
    {id: 5, title: "Stranger Things", Duracion: 50, genero: "Ciencia ficción, Fantasía", image: "Stranger-Things.jpg"},
    {id: 6, title: "La Rueda del Tiempo", Duracion: 60, genero: "Fantasía, Aventura", image: "La-rueda-del-tiempo.jpg"},
    {id: 7, title: "Doc - Una nueva vida", Duracion: 50, genero: "Drama, Médico", image: "Doc-Una-nueva-vida.jpg"},
    {id: 8, title: "Réplicas", Duracion: 107, genero: "Ciencia ficción, Suspense", image: "Replicas.jpg"},
    {id: 9, title: "Deadpool & Wolverine", Duracion: 120, genero: "Acción, Comedia, Aventura", image: "Deadpool-&-Wolverine.jpg"},
  ]);

  return (
    <>
      <div className="app-container">
        <h1>My Favorite Movies</h1>
        <MovieList movies={movies} />
      </div>
      <Footer />
    </>
  );
}

export default App;