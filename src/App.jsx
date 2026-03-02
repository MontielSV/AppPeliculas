import { useState } from "react";

const initialMovies = [
  // Pixar / Disney
  { id: 31, title: "Wall·E", genre: "Animación", synopsis: "Un robot solitario limpia la Tierra y descubre el amor.", favorite: false, pending: false },
  { id: 32, title: "Ratatouille", genre: "Animación", synopsis: "Un ratón sueña con ser chef en París.", favorite: false, pending: false },
  { id: 33, title: "Monsters, Inc.", genre: "Animación", synopsis: "Monstruos generan energía con los sustos de los niños.", favorite: false, pending: false },
  { id: 34, title: "Up", genre: "Animación", synopsis: "Un anciano viaja en su casa con globos acompañado de un niño explorador.", favorite: false, pending: false },
  { id: 35, title: "Toy Story", genre: "Animación", synopsis: "Los juguetes cobran vida cuando los humanos no miran.", favorite: false, pending: false },
  { id: 36, title: "Coco", genre: "Animación", synopsis: "Un niño viaja al mundo de los muertos para descubrir su legado familiar.", favorite: false, pending: false },

  // DreamWorks
  { id: 37, title: "Shrek", genre: "Comedia", synopsis: "Un ogro emprende una misión para rescatar a una princesa.", favorite: false, pending: false },
  { id: 38, title: "Cómo entrenar a tu dragón", genre: "Aventura", synopsis: "Un joven vikingo se hace amigo de un dragón y cambia su destino.", favorite: false, pending: false },
  { id: 39, title: "Kung Fu Panda", genre: "Acción", synopsis: "Un panda torpe se convierte en el legendario Guerrero Dragón.", favorite: false, pending: false },
  { id: 40, title: "El Gato con Botas: El último deseo", genre: "Aventura", synopsis: "El Gato con Botas busca un deseo mágico mientras enfrenta sus últimas vidas.", favorite: false, pending: false },

  // Marvel Studios
  { id: 41, title: "Iron Man", genre: "Acción", synopsis: "Tony Stark crea una armadura para luchar contra el mal.", favorite: false, pending: false },
  { id: 42, title: "The Avengers", genre: "Acción", synopsis: "Los héroes más poderosos de la Tierra se unen contra Loki.", favorite: false, pending: false },
  { id: 43, title: "Avengers: Infinity War", genre: "Acción", synopsis: "Thanos busca las Gemas del Infinito para destruir la mitad del universo.", favorite: false, pending: false },
  { id: 44, title: "Avengers: Endgame", genre: "Acción", synopsis: "Los Vengadores intentan revertir el chasquido de Thanos.", favorite: false, pending: false },
  { id: 45, title: "Spider-Man: No Way Home", genre: "Acción", synopsis: "Peter Parker enfrenta villanos de otros universos tras un hechizo fallido.", favorite: false, pending: false },

  // Jurassic / Universal
  { id: 46, title: "Jurassic Park", genre: "Aventura", synopsis: "Un parque temático con dinosaurios clonados se convierte en un caos.", favorite: false, pending: false },
  { id: 47, title: "Jurassic World", genre: "Acción", synopsis: "Un nuevo parque con dinosaurios se descontrola por un híbrido letal.", favorite: false, pending: false },
  { id: 48, title: "Jurassic World Dominion", genre: "Acción", synopsis: "Humanos y dinosaurios deben coexistir en un mundo compartido.", favorite: false, pending: false },

  // Netflix Originals
  { id: 49, title: "Roma", genre: "Drama", synopsis: "Una empleada doméstica enfrenta cambios en la Ciudad de México de los 70s.", favorite: false, pending: false },
  { id: 50, title: "The Irishman", genre: "Drama", synopsis: "Un asesino a sueldo reflexiona sobre su vida en el crimen organizado.", favorite: false, pending: false },
  { id: 51, title: "Extraction", genre: "Acción", synopsis: "Un mercenario debe rescatar al hijo de un capo internacional.", favorite: false, pending: false },
  { id: 52, title: "Don’t Look Up", genre: "Comedia", synopsis: "Dos astrónomos intentan advertir al mundo sobre un cometa destructor.", favorite: false, pending: false },
  { id: 53, title: "Glass Onion: A Knives Out Mystery", genre: "Misterio", synopsis: "Un detective investiga un asesinato en una isla privada.", favorite: false, pending: false },

  // Disney+ Originals
  { id: 54, title: "Soul", genre: "Animación", synopsis: "Un músico descubre el verdadero significado de la vida.", favorite: false, pending: false },
  { id: 55, title: "Luca", genre: "Animación", synopsis: "Un niño monstruo marino vive un verano inolvidable en Italia.", favorite: false, pending: false },
  { id: 56, title: "Hamilton", genre: "Musical", synopsis: "La historia de Alexander Hamilton contada en un innovador musical.", favorite: false, pending: false },
  { id: 57, title: "Star Wars: The Rise of Skywalker", genre: "Ciencia Ficción", synopsis: "La saga Skywalker llega a su conclusión épica.", favorite: false, pending: false },

  // HBO Max
  { id: 58, title: "Harry Potter y la piedra filosofal", genre: "Fantasía", synopsis: "Un niño descubre que es mago y asiste a Hogwarts.", favorite: false, pending: false },
  { id: 59, title: "El Señor de los Anillos: La Comunidad del Anillo", genre: "Fantasía", synopsis: "Un grupo emprende una misión para destruir el Anillo Único.", favorite: false, pending: false },
  { id: 60, title: "Matrix", genre: "Ciencia Ficción", synopsis: "Un hacker descubre que vive en una simulación controlada por máquinas.", favorite: false, pending: false },
  { id: 61, title: "Dune", genre: "Ciencia Ficción", synopsis: "Un joven debe proteger un planeta desértico clave para el universo.", favorite: false, pending: false },
  { id: 62, title: "Joker", genre: "Drama", synopsis: "La transformación de Arthur Fleck en el icónico villano de Gotham.", favorite: false, pending: false },
  { id: 63, title: "The Batman", genre: "Acción", synopsis: "Bruce Wayne enfrenta a un asesino serial en Gotham.", favorite: false, pending: false },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState("Todos");

  // Favorito
  const toggleFavorite = (id) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  // Pendiente
  const togglePending = (id) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, pending: !movie.pending } : movie
      )
    );
  };

  // ⭐ Calificación
  const setRating = (id, value) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, rating: movie.rating === value ? 0 : value }
          : movie
      )
    );
  };

  const filteredMovies =
    filter === "Todos"
      ? movies
      : movies.filter(movie => movie.genre === filter);

  const styles = {
    app: {
      fontFamily: "Arial, sans-serif",
      padding: "30px",
      background: "linear-gradient(135deg, #141e30, #243b55)",
      minHeight: "100vh",
      color: "white"
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "2.5rem"
    },
    filterBox: {
      textAlign: "center",
      marginBottom: "30px"
    },
    select: {
      padding: "10px",
      borderRadius: "8px",
      fontSize: "14px"
    },
    list: {
      listStyle: "none",
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px"
    },
    card: {
      backgroundColor: "#1f1f1f",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
      transition: "transform 0.3s"
    },
    title: {
      marginBottom: "10px",
      fontSize: "1.3rem"
    },
    synopsis: {
      fontSize: "14px",
      color: "#ccc",
      marginBottom: "15px"
    },
    button: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginRight: "10px",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>🎬 Mi Planificador de Películas</h1>

      <div style={styles.filterBox}>
        <select
          style={styles.select}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Acción">Acción</option>
          <option value="Drama">Drama</option>
          <option value="Comedia">Comedia</option>
          <option value="Animación">Animación</option>
          <option value="Aventura">Aventura</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>
      </div>

      <ul style={styles.list}>
        {filteredMovies.map(movie => (
          <li key={movie.id} style={styles.card}>
            <h2 style={styles.title}>
              {movie.title} <small>({movie.genre})</small>
            </h2>

            <p style={styles.synopsis}>{movie.synopsis}</p>

            <button
              style={{ ...styles.button, background: "#f39c12" }}
              onClick={() => toggleFavorite(movie.id)}
            >
              {movie.favorite ? "★ Favorito" : "☆ Favorito"}
            </button>

            <button
              style={{ ...styles.button, background: "#3498db", color: "white" }}
              onClick={() => togglePending(movie.id)}
            >
              {movie.pending ? "✔ Pendiente" : "➕ Pendiente"}
            </button>

            {/* ⭐ Sistema de estrellas */}
            <div style={{ marginTop: "15px" }}>
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  onClick={() => setRating(movie.id, star)}
                  style={{
                    cursor: "pointer",
                    fontSize: "22px",
                    color: star <= movie.rating ? "#f1c40f" : "#555",
                    transition: "0.2s"
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;