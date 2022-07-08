import styled from "styled-components";

const Normal = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme};
  color: white;
  font-size: 16px;
  padding: 5px;
  width: ${(props) => props.width};
  margin-left: 10px;
`;

const Custom = styled(Normal)`
  background: rgba(255, 255, 255, 0.2);
  color: #f65261;
`;

Normal.defaultProps = {
  width: "150px",
};

export const Button = {
  Normal,
  Custom,
};
