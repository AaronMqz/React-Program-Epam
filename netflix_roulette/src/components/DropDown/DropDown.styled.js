import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  align-items: center;
`;

const SelectedText = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-around;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: absolute;
  top: 22px;
  left: 0px;
  z-index: 10;
  background-color: ${ThemeColor.Secondary};
`;

const Item = styled.div`
  display: flex;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background: ${ThemeColor.Primary};
  }
`;

export const DropDown = {
  Container,
  SelectedText,
  List,
  Item,
};
