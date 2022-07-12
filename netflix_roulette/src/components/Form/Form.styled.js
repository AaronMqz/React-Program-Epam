import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:nth-child(2) {
    width: 400px;
    margin-left: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Form = {
  Content,
  Row,
  RowItem,
  Footer,
};
