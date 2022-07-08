import React from "react";
import PropTypes from "prop-types";
import { Result } from "./ResultFilter.styled";
import { Utils } from "../../utils/utils";
import { DropDownComponent as DropDown } from "../DropDown/DropDown.component";

export const ResultComponent = ({ items, optionList, handleSortBy }) => {
  return (
    <Result.Container>
      <Result.Filter>
        <ResultFilter items={items} />
        <ResultSort
          optionList={optionList}
          handleSortBy={handleSortBy}
        ></ResultSort>
      </Result.Filter>
      <Result.Count>
        <ResultCount items={items} />
      </Result.Count>
    </Result.Container>
  );
};

const ResultFilter = ({ items }) => {
  return (
    <Result.FilterContent>
      <Result.LabelFilter active={true}>ALL</Result.LabelFilter>
      {Utils.getMoviesGenres(items).map((item, index) => {
        return <Result.LabelFilter key={index}>{item}</Result.LabelFilter>;
      })}
    </Result.FilterContent>
  );
};

const ResultSort = ({ optionList, handleSortBy }) => {
  return (
    <Result.SortConatiner>
      <Result.LabelSort>SORT BY</Result.LabelSort>
      <DropDown
        selectedText={optionList[0].name}
        optionList={optionList}
        handleSortBy={handleSortBy}
      />
    </Result.SortConatiner>
  );
};

const ResultCount = ({ items }) => {
  return (
    <>
      <Result.LabelCount>{items.length}</Result.LabelCount>
      <span>movies found</span>
    </>
  );
};

ResultComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortBy: PropTypes.func.isRequired,
};

ResultFilter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ResultSort.propTypes = {
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortBy: PropTypes.func.isRequired,
};

ResultCount.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
