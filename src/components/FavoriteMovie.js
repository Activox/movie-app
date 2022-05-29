import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { isFavorite } from "../atoms/favoriteAtom";

import HeartOurlineIcon from "@heroicons/react/outline/HeartIcon";
import HeartSolidIcon from "@heroicons/react/solid/HeartIcon";

function FavoriteMovie({
  movieId,
  title,
  poster_path,
  overview,
  vote_average,
}) {
  const [favorite, setFovorite] = useRecoilState(isFavorite);
  function handleFavoriteClick() {

    let favoriteMovies = favorite;
    const listOfFavoriteMovies = Object.entries(favorite).map(
      (movie) => movie[1]
    );
    const isMovieFavoriteListed =
      listOfFavoriteMovies.filter((fav) => fav.id === movieId).length > 0;
      
    if (isMovieFavoriteListed) {
      favoriteMovies = listOfFavoriteMovies.filter(
        (movie) => movie.id !== movieId
      );
      setFovorite({
        ...favoriteMovies,
      });
    } else {
      setFovorite({
        ...favoriteMovies,
        [movieId]: {
          id: movieId,
          title,
          poster_path,
          overview,
          vote_average,
        },
      });
    }
  }

  const isFavoriteListEmpty = Object.keys(favorite).length === 0;
  let isMovieFavorite = false;
  if (!isFavoriteListEmpty) {
    let favorite_movie_list = Object.entries(favorite).map((movie) => movie[1]);
    isMovieFavorite =
      favorite_movie_list.filter((fav) => fav.id === movieId).length > 0;
  }

  return (
    <div className="cursor-pointer" onClick={handleFavoriteClick}>
      {isMovieFavorite ? (
        <HeartSolidIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
      ) : (
        <HeartOurlineIcon className="h-6 w-6 text-red-300" aria-hidden="true" />
      )}
    </div>
  );
}

FavoriteMovie.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
};

export default FavoriteMovie;
