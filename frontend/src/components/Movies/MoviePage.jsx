import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/Movie_api/getAllmovie";
import "./MoviePage.css";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getAllMovies();
        console.log("Fetched movies:", movies);
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-page">
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie._id}`} key={movie._id} className="movie-card-link">
            <div className="movie-card">
              <div className="movie-card-header">
                <img src={movie.image} alt={movie.title} className="movie-image" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;