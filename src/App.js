import { useEffect, useState } from "react";
import MainLogo from "./components/MainLogo";
import Search from "./components/Search";
import config from "./config";
import { RecoilRoot } from "recoil";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(config.FEATURED_API);
  }, []);

  function getMovies(API) {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      getMovies(`${config.SEARCH_API}${search}`);
      setSearch("");
    }
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <RecoilRoot>
      <div className="bg-gray-300">
        <div className=" p-2 flex justify-between place-items-center">
          <MainLogo />
          <form onSubmit={handleSubmit}>
            <Search onChangeSearch={handleSearch} />
          </form>
        </div>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </RecoilRoot>
  );
}

export default App;
