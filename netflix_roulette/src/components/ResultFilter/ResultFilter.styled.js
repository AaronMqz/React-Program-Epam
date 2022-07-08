import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Container = styled.div`
  margin-top: 10px;
  padding: 15px 45px 0 45px;
  background: ${ThemeColor.Secondary};
  color: white;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 3px ${ThemeColor.TagLine};
  height: 37px;
`;

const FilterContent = styled.div`
  display: flex;
  height: 40px;
`;

const Count = styled.div`
  padding: 15px 0;
`;

const LabelFilter = styled.label`
  margin-right: 15px;
  padding-bottom: 15px;
  ${(props) =>
    props.active ? `border-bottom: solid 3px ${ThemeColor.Primary}` : ""}
`;

const SortConatiner = styled.div`
  padding-bottom: 15px;
  display: flex;
`;

const LabelSort = styled(LabelFilter)`
  color: lightgray;
`;

const LabelCount = styled.label`
  padding-right: 5px;
  font-weight: bold;
`;

export const Result = {
  Container,
  Filter,
  Count,
  LabelFilter,
  LabelCount,
  LabelSort,
  SortConatiner,
  FilterContent,
};
