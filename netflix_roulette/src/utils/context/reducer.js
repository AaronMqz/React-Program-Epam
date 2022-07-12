import { ACTIONS, SortedList } from "../constants";
import { getMoviesGenres } from "../utils";

export const init = {
  allMovies: [],
  movies: [],
  movie: {
    id: 0,
    title: "",
    poster_path: "",
    vote_average: 0,
    genres: [],
    release_date: "",
    runtime: 0,
    overview: "",
  },
  movieDetailShowing: false,
  modalShowing: false,
  sort: {
    name: SortedList[0].name,
    id: SortedList[0].id,
    options: SortedList,
  },
  filter: {
    by: "ALL",
    options: [],
  },
};

export const movieReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ACTIONS.MOVIE.FETCH:
      return {
        ...state,
        movies: payload.movies,
        allMovies: payload.movies,
        filter: {
          ...state.filter,
          options: getMoviesGenres(payload.movies),
        },
      };

    case ACTIONS.MOVIE.DETAIL:
      const movieSelected = state.movies.filter((movie) => {
        return movie.id === payload.movieId;
      })[0];

      return {
        ...state,
        movie: movieSelected,
        movieDetailShowing: movieSelected ? true : false,
      };

    case ACTIONS.MODAL:
      return {
        ...state,
        modalType: payload,
        modalShowing: !state.modalShowing,
      };

    case ACTIONS.MOVIE.SORTBY:
      const itemSelected = state.sort.options.filter((i) => {
        return i.id === payload.id;
      })[0];

      const moviesSorted = [...state.movies].sort((a, b) =>
        a[itemSelected.id] > b[itemSelected.id] ? 1 : -1
      );

      return {
        ...state,
        sort: {
          ...state.sort,
          name: itemSelected.name,
          id: itemSelected.id,
        },
        movies: moviesSorted,
      };

    case ACTIONS.MOVIE.FILTERBY:
      let moviesFiltered = [];
      let itemSelectedId = state.sort.id;

      if (payload.name.toUpperCase() === "ALL") {
        moviesFiltered = state.allMovies;
      } else {
        moviesFiltered = [...state.allMovies].filter((i) => {
          return i.genres.indexOf(payload.name) >= 0;
        });
      }

      // keep current sort
      moviesFiltered.sort((a, b) =>
        a[itemSelectedId] > b[itemSelectedId] ? 1 : -1
      );

      return {
        ...state,
        filter: {
          ...state.filter,
          by: payload.name,
        },
        movies: moviesFiltered,
      };

    case ACTIONS.MOVIE.SEARCH:
      return {};

    default:
      return state;
  }
};
