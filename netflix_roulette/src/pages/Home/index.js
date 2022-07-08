import React, { useState } from "react";
import ErrorBoundary from "../../components/Error/Error.component";
import { HeaderComponent as Header } from "../../components/Header/Header.component";
import { ResultComponent as Result } from "../../components/ResultFilter/ResultFilter.component";
import { ItemListComponent as ItemList } from "../../components/ItemList/ItemList.component";
import { FooterComponent as Footer } from "../../components/Footer/Footer.component";

import { mockData } from "../../service/mockData";
import useModal from "../../hooks/useModal";
import { FilterList } from "../../utils/constants";
import { ModalComponent as Modal } from "../../components/Modal/Modal.component";
import { ModalWrapper } from "../../components/Modal/ModalWrapper.component";

export const HomePage = () => {
  const { isShowing, modalType, toggle } = useModal();
  const [sortBy, handleSortBy] = useState("release_date");

  const itemsSorted = () => {
    return [...mockData.data].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  };

  return (
    <>
      <ErrorBoundary>
        <Header handleModal={toggle} />
        <Result
          items={mockData.data}
          optionList={FilterList}
          handleSortBy={handleSortBy}
        />
        <ItemList items={itemsSorted()} handleModal={toggle} />
        <Footer />
        <Modal isShowing={isShowing} hide={toggle}>
          <ModalWrapper type={modalType} />
        </Modal>
      </ErrorBoundary>
    </>
  );
};
