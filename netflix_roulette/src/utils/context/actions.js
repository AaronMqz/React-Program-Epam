import { ACTIONS } from "../constants";
import { mockData } from "../../service/mockData";

export const getMovies = (dispatch) => () => {
  dispatch({
    type: ACTIONS.MOVIE.FETCH,
    payload: {
      movies: mockData.data,
    },
  });
  return getMovies();
};

export const setMovieDetail = (dispatch) => (movieId) => {
  dispatch({ type: ACTIONS.MOVIE.DETAIL, payload: { movieId } });
  window.scrollTo(0, 0);
  return setMovieDetail();
};

export const setModalType = (dispatch) => (type) => {
  dispatch({
    type: ACTIONS.MODAL,
    payload: type,
  });

  type !== "close"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return setModalType();
};

export const setSortBy = (dispatch) => (sortBy) => {
  dispatch({
    type: ACTIONS.MOVIE.SORTBY,
    payload: { id: sortBy },
  });

  return setSortBy();
};

export const setFilterBy = (dispatch) => (filterBy) => {
  dispatch({
    type: ACTIONS.MOVIE.FILTERBY,
    payload: { name: filterBy },
  });

  return setFilterBy();
};
