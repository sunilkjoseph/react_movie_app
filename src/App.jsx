import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// API URL for OMDB API
const OMDB_API_URL = "https://www.omdbapi.com?apikey=1dae8ebc";

// Main App Component
const App = () => {
  // State to hold the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  
  // State to hold the list of movies retrieved from the OMDB API
  const [movies, setMovies] = useState([]);

  // useEffect to trigger an initial search when the component mounts
  useEffect(() => {
    // Initial search for movies with the title "spider"
    searchMovies("spider");
  }, []);

  // Function to fetch movies based on the provided title
  const searchMovies = async (title) => {
    // Fetch movies from OMDB API using the provided title
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    
    // Parse the response data into JSON format
    const data = await response.json();

    // Update the movies state with the search results
    setMovies(data.Search);
  };

  // JSX structure for the App component
  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* Search input and button */}
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Display movies if available, otherwise show a message */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* Map through the list of movies and render MovieCard for each */}
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

// Export the App component as the default export
export default App;
