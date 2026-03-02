import React, { useState, useRef } from "react";

export default function App() {
  const initialMovies = [
    { id: 1, title: "Wall·E", genre: "Animación", synopsis: "Un robot solitario limpia la Tierra y descubre el amor.", favorite: false, pending: false },
    { id: 2, title: "Ratatouille", genre: "Animación", synopsis: "Un ratón sueña con ser chef en París.", favorite: false, pending: false },
    { id: 3, title: "Iron Man", genre: "Acción", synopsis: "Tony Stark crea una armadura para luchar contra el mal.", favorite: false, pending: false },
    { id: 4, title: "Interstellar", genre: "Ciencia Ficción", synopsis: "Viaje espacial para salvar la humanidad.", favorite: false, pending: false },
    { id: 5, title: "Joker", genre: "Drama", synopsis: "La transformación de Arthur Fleck.", favorite: false, pending: false },
  ];

  const [movies, setMovies] = useState(
    initialMovies.map((m) => ({ ...m, rating: 0 }))
  );

  const [selectedGenre, setSelectedGenre] = useState("Todas");
  const [search, setSearch] = useState("");

  const listRef = useRef(null);

  const genres = ["Todas", ...new Set(initialMovies.map((m) => m.genre))];

  const filteredMovies = movies.filter((movie) => {
    const matchGenre =
      selectedGenre === "Todas" || movie.genre === selectedGenre;

    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchGenre && matchSearch;
  });

  const toggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, favorite: !m.favorite } : m
      )
    );
  };

  const togglePending = (id) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, pending: !m.pending } : m
      )
    );
  };

  const setRating = (id, rating) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, rating } : m
      )
    );
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #121212;
        }

        .container {
          padding: 20px;
          color: white;
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .searchInput {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          margin-bottom: 10px;
          background-color: #1e1e1e;
          color: white;
        }

        .counter {
          text-align: center;
          margin-bottom: 15px;
          background-color: #1e1e1e;
          padding: 6px;
          border-radius: 8px;
        }

        .genrePanel {
          display: flex;
          overflow-x: auto;
          margin-bottom: 20px;
        }

        .genreButton {
          min-width: 120px;
          padding: 12px;
          border-radius: 25px;
          border: none;
          background-color: #333;
          color: #ccc;
          margin-right: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        .genreButton.active {
          background-color: #e50914;
          color: white;
        }

        .movieList {
          max-height: 500px;
          overflow-y: auto;
        }

        .card {
          background-color: #1e1e1e;
          padding: 15px;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .genre {
          color: #bbb;
        }

        .stars {
          margin: 10px 0;
        }

        .star {
          font-size: 22px;
          margin-right: 5px;
          cursor: pointer;
          color: #555;
        }

        .star.selected {
          color: gold;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
        }

        .btn {
          padding: 8px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          background-color: #333;
          color: white;
        }

        .favorite {
          background-color: orange;
        }

        .pending {
          background-color: green;
        }

        .emptyText {
          text-align: center;
          margin-top: 30px;
          color: #888;
        }

        .scrollTop {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #e50914;
          border: none;
          padding: 14px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
        }
      `}</style>

      <div className="container">
        <h1 className="header">🎬 Películas</h1>

        <input
          type="text"
          placeholder="Buscar película..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />

        <p className="counter">
          Mostrando {filteredMovies.length} películas
        </p>

        <div className="genrePanel">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`genreButton ${
                selectedGenre === genre ? "active" : ""
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="movieList" ref={listRef}>
          {filteredMovies.length === 0 && (
            <p className="emptyText">No se encontraron películas 😢</p>
          )}

          {filteredMovies.map((movie) => (
            <div key={movie.id} className="card">
              <h2>{movie.title}</h2>
              <p className="genre">{movie.genre}</p>
              <p>{movie.synopsis}</p>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${
                      movie.rating >= star ? "selected" : ""
                    }`}
                    onClick={() => setRating(movie.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="buttons">
                <button
                  className={`btn ${movie.favorite ? "favorite" : ""}`}
                  onClick={() => toggleFavorite(movie.id)}
                >
                  {movie.favorite ? "★ Favorita" : "☆ Favorita"}
                </button>

                <button
                  className={`btn ${movie.pending ? "pending" : ""}`}
                  onClick={() => togglePending(movie.id)}
                >
                  {movie.pending ? "✓ Pendiente" : "+ Pendiente"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="scrollTop"
          onClick={() =>
            listRef.current.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          ⬆
        </button>
      </div>
    </>
  );
}