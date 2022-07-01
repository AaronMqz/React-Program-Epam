import ErrorBoundary from "../../components/Error/Error.component";
import { HeaderComponent as Header } from "../../components/Header/Header.component";
import { ResultComponent as Result } from "../../components/ResultFilter/ResultFilter.component";
import { ItemListComponent as ItemList } from "../../components/ItemList/ItemList.component";
import { FooterComponent as Footer } from "../../components/Footer/Footer.component";

import { mockData } from "../../service/mockData";

export const HomePage = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Result items={mockData.data} />
        <ItemList items={mockData.data} />
        <Footer />
      </ErrorBoundary>
    </>
  );
};
