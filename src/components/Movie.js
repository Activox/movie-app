import React, { useState } from "react";
import PropTypes from "prop-types";

import OverviewMovieDetail from "./OverviewMovieDetail";

import Raiting from "./Raiting";
import FavoriteMovie from "./FavoriteMovie";
import MovieImage from "./MovieImage";

function Movie({
  id: movieId,
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleImageClick() {
    setModalOpen(true);
  }

  return (
    <div className="bg-white hover:bg-blue-100 transition-colors flex flex-col rounded px-2 py-2 m-3 ring-1 ring-slate-900/5 shadow-xl w-80 overflow-hidden relative">
      {isModalOpen && (
        <OverviewMovieDetail
          isModalOpen={isModalOpen}
          {...{
            movieId,
            title,
            poster_path,
            overview,
            vote_average,
            release_date,
          }}
          onModalClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <MovieImage
        handleImageClick={handleImageClick}
        {...{ title, poster_path }}
      />
      <div className="text-slate flex items-center p-1 justify-between">
        <h3 className="m-0 font-bold ">{title}</h3>
        <div className="flex items-center space-between">
          <Raiting key={`raiting-${movieId}`} vote_average={vote_average} />
          <FavoriteMovie
            key={`favorite-${movieId}`}
            {...{
              movieId,
              title,
              poster_path,
              overview,
              vote_average,
              release_date,
            }}
          />
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};

export default Movie;
