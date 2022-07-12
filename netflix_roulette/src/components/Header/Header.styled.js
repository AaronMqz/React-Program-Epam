import styled from "styled-components";
import movies from "../../assets/movies.png";

const Container = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 15px 45px;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${movies});
  filter: blur(2px) brightness(0.4);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  left: 0;
  top: 0;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-self: center;
  flex: 1;
  justify-content: center;
  z-index: 1;
`;

const FormSearch = styled.div`
  display: flex;
`;

export const Header = {
  Container,
  Top,
  Content,
  FormSearch,
  BackgroundImage,
};
