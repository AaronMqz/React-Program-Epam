import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Container = styled.div`
  padding: 30px 45px 0 45px;
  background: ${ThemeColor.Secondary};
  color: white;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 3px ${ThemeColor.TagLine};
  padding-bottom: 15px;
`;

const Count = styled.div`
  padding: 15px 0;
`;

const LabelFilter = styled.label`
  margin-right: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  ${(props) =>
    props.active ? `border-bottom: solid 3px ${ThemeColor.Primary}` : ""}
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
};
