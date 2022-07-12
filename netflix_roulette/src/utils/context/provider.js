import React, { useMemo, useReducer } from "react";
import { MovieContext, MovieContextDispatch } from "./context";
import {
  getMovies,
  setMovieDetail,
  setModalType,
  setSortBy,
  setFilterBy,
} from "./actions";
import { movieReducer, init } from "./reducer";

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(movieReducer, init);

  const providerState = { ...state };
  const providerDispatch = useMemo(
    () => ({
      getMovies: getMovies(dispatch),
      setMovieDetail: setMovieDetail(dispatch),
      setModalType: setModalType(dispatch),
      setSortBy: setSortBy(dispatch),
      setFilterBy: setFilterBy(dispatch),
    }),
    []
  );

  return (
    <MovieContextDispatch.Provider value={providerDispatch}>
      <MovieContext.Provider value={providerState}>
        {props.children}
      </MovieContext.Provider>
    </MovieContextDispatch.Provider>
  );
};
