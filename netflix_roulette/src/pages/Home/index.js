import React, { useEffect } from "react";
import ErrorBoundary from "../../components/Error/Error.component";
import { HeaderComponent as Header } from "../../components/Header/Header.component";
import { ResultComponent as Result } from "../../components/ResultFilter/ResultFilter.component";
import { ItemListComponent as ItemList } from "../../components/ItemList/ItemList.component";
import { FooterComponent as Footer } from "../../components/Footer/Footer.component";
import { DetailComponent as Detail } from "../../components/Detail/Detail.component";
import { ModalComponent as Modal } from "../../components/Modal/Modal.component";
import { ModalWrapper } from "../../components/Modal/ModalWrapper.component";
import {
  useMovieContext,
  useMovieContextDispatch,
} from "../../utils/context/context";

export const HomePage = () => {
  const {
    movie,
    movies,
    allMovies,
    modalType,
    movieDetailShowing,
    modalShowing,
  } = useMovieContext();
  const { getMovies, setMovieDetail } = useMovieContextDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <ErrorBoundary>
        {movieDetailShowing ? (
          <Detail item={movie} handleClick={setMovieDetail} />
        ) : (
          <Header />
        )}
        <Result genreList={allMovies} />
        <ItemList items={movies} />
        {modalShowing && (
          <Modal>
            <ModalWrapper type={modalType} />
          </Modal>
        )}
        <Footer />
      </ErrorBoundary>
    </>
  );
};
