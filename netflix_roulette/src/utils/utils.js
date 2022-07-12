export const getMoviesGenres = (data) => {
  const genres = data.reduce((prev, acc) => {
    return prev.concat(acc.genres);
  }, []);

  return [...new Set(genres.sort())];
};

export const getYear = (date) => {
  try {
    return new Date(date).getFullYear();
  } catch (e) {
    console.log(e.message);
  }
};
