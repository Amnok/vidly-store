import React, { useState } from 'react';
import Like from './common/like';
import Paginator from './common/Paginator';
import { getPaginatedData } from './utils/paginator';

function Movies({ movies, setMovies }) {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [selectedPage, setSelectedPage] = useState(1);
  const pagesToShow = Math.ceil(movies.length / itemsPerPage);
  const removeMovie = (title) =>
    setMovies(movies.filter((movie) => movie.title !== title));
  const handleLike = (movie) => {
    const moviess = [...movies];
    const index = moviess.indexOf(movie);
    moviess[index] = { ...movies[index] };
    moviess[index].liked = !moviess[index].liked;
    setMovies(moviess);
    // setMovies(movies.map(movie => movie.title === tempMovie.title ? {...movie, liked : !liked}: movie);
  };

  const paginatedMovies = getPaginatedData({
    movies,
    selectedPage,
    itemsPerPage,
  });
  const getTableData = () => {
    return paginatedMovies.map((movie, index) => {
      return (
        <tr key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.genre}</td>
          <td>{movie.stock}</td>
          <td>{movie.rate}</td>
          <td>
            <Like liked={movie.liked} onClick={() => handleLike(movie)} />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeMovie(movie.title)}
            >
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
            <th>Like</th>
          </tr>
        </thead>
        <tbody>{getTableData()}</tbody>
      </table>
      <Paginator
        items={movies}
        itemsPerPage={itemsPerPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        pagesToShow={pagesToShow}
        setMovies={setMovies}
      />
    </div>
  );
}

export default Movies;
