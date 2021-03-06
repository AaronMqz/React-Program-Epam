const getMoviesGenres = (data) => {
  const genres = data.reduce((prev, acc) => {
    return prev.concat(acc.genres);
  }, []);
  return [...new Set(genres)];
};

export const Utils = {
  getMoviesGenres,
};
