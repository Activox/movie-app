import React from "react";
import PropTypes from "prop-types";

function Raiting({ vote_average }) {
  const setVoteClass = () => {
    return vote_average >= 8
      ? "text-green-500"
      : vote_average >= 6
      ? "text-orange-500"
      : "text-red-500";
  };

  return (
    <div className={` bg-gray-200 rounded-md p-1 font-bold ${setVoteClass()}`}>
      {vote_average}
    </div>
  );
}

Raiting.propTypes = {
  vote_average: PropTypes.number,
};

export default Raiting;
