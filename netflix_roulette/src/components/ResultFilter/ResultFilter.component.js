import React from "react";
import { Result } from "./ResultFilter.styled";
import { DropDownComponent as DropDown } from "../DropDown/DropDown.component";
import {
  useMovieContext,
  useMovieContextDispatch,
} from "../../utils/context/context";

export const ResultComponent = React.memo(() => {
  return (
    <Result.Container>
      <Result.Filter>
        <ResultFilter />
        <ResultSort />
      </Result.Filter>
      <Result.Count>
        <ResultCount />
      </Result.Count>
    </Result.Container>
  );
});

const ResultFilter = () => {
  const { filter } = useMovieContext();
  const { setFilterBy } = useMovieContextDispatch();

  return (
    <Result.FilterContent>
      <Result.LabelFilter
        active={filter.by === "ALL" ? true : false}
        onClick={(e) => setFilterBy(e.target.textContent)}
      >
        {"ALL"}
      </Result.LabelFilter>
      {filter.options.map((item, index) => {
        return (
          <Result.LabelFilter
            key={index}
            id={item}
            active={filter.by === item ? true : false}
            onClick={(e) => setFilterBy(e.target.id)}
          >
            {item.toUpperCase()}
          </Result.LabelFilter>
        );
      })}
    </Result.FilterContent>
  );
};

const ResultSort = () => {
  const { sort } = useMovieContext();
  const { setSortBy } = useMovieContextDispatch();

  return (
    <Result.SortConatiner>
      <Result.LabelSort>SORT BY</Result.LabelSort>
      <DropDown
        selectedText={sort.name}
        optionList={sort.options}
        handleSortBy={setSortBy}
      />
    </Result.SortConatiner>
  );
};

const ResultCount = () => {
  const { movies } = useMovieContext();
  return (
    <>
      <Result.LabelCount>{movies.length}</Result.LabelCount>
      <span>movies found</span>
    </>
  );
};
