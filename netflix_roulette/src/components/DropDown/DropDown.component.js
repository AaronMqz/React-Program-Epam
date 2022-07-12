import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { ThemeColor } from "../../utils/constants";
import { DropDown } from "./DropDown.styled";

export const DropDownComponent = ({
  selectedText,
  optionList,
  handleSortBy,
}) => {
  const [showList, setShowList] = useState(false);
  const ref = useRef();

  const handleShowList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showList && ref.current && !ref.current.contains(e.target)) {
        handleShowList();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showList]);

  return (
    <DropDown.Container ref={ref} onClick={() => handleShowList()}>
      <DropDown.SelectedText>
        {selectedText}
        <FontAwesomeIcon
          icon={showList ? faCaretUp : faCaretDown}
          color={ThemeColor.Primary}
        />
      </DropDown.SelectedText>

      {showList && (
        <DropDown.List>
          {optionList.map((item) => {
            return (
              <DropDown.Item
                key={item.id}
                id={item.id}
                onClick={(e) => handleSortBy(e.target.id)}
              >
                {item.name}
              </DropDown.Item>
            );
          })}
        </DropDown.List>
      )}
    </DropDown.Container>
  );
};

DropDownComponent.propTypes = {
  selectedText: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortBy: PropTypes.func.isRequired,
};
