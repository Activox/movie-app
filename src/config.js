const dev = {
  FEATURED_API:
    "https://api.themoviedb.org/3/discover/movie?api_key=3d3c24206e33fbe63d33583f34a96c3d&sort_by=popularity.desc&page=1",
  IMAGES_API: "https://image.tmdb.org/t/p/w1280",
  SEARCH_API:
    "https://api.themoviedb.org/3/search/movie?api_key=3d3c24206e33fbe63d33583f34a96c3d&query=",
};

const prod = {};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default config;
