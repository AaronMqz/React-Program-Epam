import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 30px;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Delete = {
  Container,
  Content,
  Footer,
};
