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
  const [selectedItem, setSelectedItem] = useState(selectedText);

  const ref = useRef();

  const handleShowList = () => {
    setShowList(!showList);
  };

  const handleSelectedItem = (e) => {
    const itemSelected = optionList.filter((i) => {
      return i.id === e.target.id;
    })[0];
    setSelectedItem(itemSelected.name);
    setShowList(!showList);
    handleSortBy(itemSelected.id);
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
        {selectedItem}
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
                onClick={(e) => handleSelectedItem(e)}
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
