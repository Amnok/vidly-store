/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';
import { getPaginatedData } from '../utils/paginator';

export default function Paginator({
  items,
  itemsPerPage,
  selectedPage,
  pagesToShow,
  setSelectedPage,
  setMovies,
}) {
  const pages = _.range(1, pagesToShow + 1);
  const getPagiatedMovies = (selectedPage) => {
    setSelectedPage(selectedPage);
  };
  console.log(pages);
  const getPages = () =>
    pages.map((page) => (
      <li
        key={page}
        className={page === selectedPage ? 'page-item active' : 'page-item'}
      >
        <a className="page-link" onClick={() => getPagiatedMovies(page)}>
          {page}
        </a>
      </li>
    ));
  return (
    <nav aria-label="Page navigation example">
      {pagesToShow > 1 ? <ul className="pagination"> {getPages()}</ul> : null}
    </nav>
  );
}
