import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Result } from "./ResultFilter.styled";
import { ThemeColor } from "../../utils/constants";
import { Utils } from "../../utils/utils";

export const ResultComponent = ({ items }) => {
  return (
    <Result.Container>
      <Result.Filter>
        <ResultFilter items={items} />
        <ResultSort></ResultSort>
      </Result.Filter>
      <Result.Count>
        <ResultCount items={items} />
      </Result.Count>
    </Result.Container>
  );
};

const ResultFilter = ({ items }) => {
  return (
    <div>
      <Result.LabelFilter active={true}>ALL</Result.LabelFilter>
      {Utils.getMoviesGenres(items).map((item, index) => {
        return <Result.LabelFilter key={index}>{item}</Result.LabelFilter>;
      })}
    </div>
  );
};

const ResultSort = () => {
  return (
    <div>
      <Result.LabelSort>SORT BY</Result.LabelSort>
      <span style={{ marginRight: 10 }}>RELEASE DATE</span>
      <FontAwesomeIcon icon={faCaretDown} color={ThemeColor.Primary} />
    </div>
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
  items: PropTypes.arrayOf(PropTypes.object),
};
