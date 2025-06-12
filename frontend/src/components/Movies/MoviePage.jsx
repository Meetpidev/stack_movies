// import { useState, useEffect } from "react";
// import { getAllMovies } from "../../api/Movie_api/getAllmovie";
// import "./MoviePage.css";
// import { Link } from "react-router-dom";

// const MoviePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const movies = await getAllMovies();
//         console.log("Fetched movies:", movies);
//         setMovies(movies);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="movie-page">
//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <Link to={`/movie/${movie._id}`} key={movie._id} className="movie-card-link">
//             <div className="movie-card">
//               <div className="movie-card-header">
//                 <img src={movie.image} alt={movie.title} className="movie-image" />
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoviePage;

import React from "react";
import "./MoviePage.css";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const navigate = useNavigate();

  const handleRecommendationClick = () => {
    // Redirect to external URL, e.g., your Gradio app
    window.location.href = "https://saiyaduvesh99-movie-recommender.hf.space/?__theme=system&deep_link=Sqr7SGxSo1g";
    
    // If you want to redirect to an internal React route, use:
    // navigate("/your-internal-route");
  };

  return (
    <div className="movie-page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <button 
        onClick={handleRecommendationClick} 
        style={{
          padding: "15px 30px",
          fontSize: "1.25rem",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      >
        Movie Recommendation
      </button>
    </div>
  );
};

export default MoviePage;
