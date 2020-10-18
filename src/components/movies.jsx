import React, { useState } from 'react';
import moviez from '../assets/mock.json';

function Movies() {
  const [movies, setMovies] = useState(moviez);
  const removeMovie = (title) => setMovies(movies.filter(movie => movie.title !== title));
  const getTableData = () => {
    return movies.map((movie, index) => {
      return (
        <tr key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.genre}</td>
          <td>{movie.stock}</td>
          <td>{movie.rate}</td>
          <td>
            <button type="button" className="btn btn-danger" onClick={() => removeMovie(movie.title)}>
              Danger
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{getTableData()}</tbody>
      </table>
    </div>
  );
}

export default Movies;
