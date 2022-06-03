import React from "react";
import PropTypes from "prop-types";
import config from "../config";
import DefaultImage from "../assets/image-default.jpg";

function MovieImage({ title, poster_path, handleImageClick }) {
  return (
    <img
      className="w-full grid place-items-center h-[100%] object-cover	cursor-pointer"
      onClick={handleImageClick}
      src={poster_path ? config.IMAGES_API + poster_path : DefaultImage}
      alt={title}
    />
  );
}

MovieImage.propTypes = {
  poster_path: PropTypes.string,
  handleImageClick: PropTypes.func,
};

export default MovieImage;
