import React, { useState } from "react";
import PropTypes from "prop-types";

function Search({ onChangeSearch }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    onChangeSearch(e);
    setSearch(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearch("");
    }
  };
  return (
    <input
      className="border-2 text-sm rounded-md ring-slate-900/5 shadow-xl text-black p-1 focus:outline-0"
      type="search"
      placeholder="Search..."
      onChange={handleSearch}
      value={search}
      onKeyPress={handleKeyPress}
    />
  );
}

Search.propTypes = {
  onChangeSearch: PropTypes.func,
};

export default Search;
