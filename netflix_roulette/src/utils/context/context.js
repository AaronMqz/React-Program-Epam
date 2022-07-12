import React, { useContext } from "react";

export const MovieContext = React.createContext(null);
export const MovieContextDispatch = React.createContext(null);

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const useMovieContextDispatch = () => {
  return useContext(MovieContextDispatch);
};
