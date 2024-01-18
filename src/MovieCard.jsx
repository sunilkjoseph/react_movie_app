import React from 'react';

// Functional component representing a Movie Card
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  // JSX structure for displaying movie information
  return (
    <div className="movie" key={imdbID}>
      {/* Section for displaying the movie's release year */}
      <div>
        <p>{Year}</p>
      </div>

      {/* Section for displaying the movie poster */}
      <div>
        {/* Use the actual poster if available, otherwise use a placeholder */}
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      {/* Section for displaying movie type and title */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

// Export the MovieCard component as the default export
export default MovieCard;
