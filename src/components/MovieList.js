import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import SortFilter from "./SortFilter";

import { useRecoilValue } from "recoil";
import { isFavorite } from "../atoms/favoriteAtom";

function MovieList({ movies }) {
  const [popularSort, setPopularSort] = React.useState("Raiting");
  const [favoriteSort, setFavoriteSort] = React.useState("Raiting");
  const popular_movie_list = movies.map((movie) => movie);
  const favMovieList = Object.entries(useRecoilValue(isFavorite));
  let favorite_movie_list = null;
  const isFavoriteListEmpty = Object.keys(favMovieList).length === 0;

  const SORT_BY_NAME = {
    Name: "title",
    "Year of Release": "release_date",
    Raiting: "vote_average",
  };

  popular_movie_list.sort((a, b) =>
    SORT_BY_NAME[popularSort] === "title"
      ? (a[SORT_BY_NAME[popularSort]] > b[SORT_BY_NAME[popularSort]] && 1) || -1
      : (a[SORT_BY_NAME[popularSort]] < b[SORT_BY_NAME[popularSort]] && 1) || -1
  );

  if (!isFavoriteListEmpty) {
    favorite_movie_list = favMovieList.map((movie) => movie[1]);
    favorite_movie_list.sort((a, b) =>
      SORT_BY_NAME[favoriteSort] === "title"
        ? (a[SORT_BY_NAME[favoriteSort]] > b[SORT_BY_NAME[favoriteSort]] &&
            1) ||
          -1
        : (a[SORT_BY_NAME[favoriteSort]] < b[SORT_BY_NAME[favoriteSort]] &&
            1) ||
          -1
    );
  }

  function renderList(listName, movieList) {
    return (
      <div>
        <div className=" p-2 m-2 flex justify-between place-items-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
            {listName}
          </p>
          <SortFilter
            onSort={(sortBy) =>
              listName === "Favorite List"
                ? setFavoriteSort(sortBy)
                : setPopularSort(sortBy)
            }
          />
        </div>
        <div className="flex flex-wrap justify-center place-content-center gap-8">
          {movieList.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:text-center ">
      {!isFavoriteListEmpty && renderList("Favorite List", favorite_movie_list)}
      {renderList("Popular List", popular_movie_list)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
