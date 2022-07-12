import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Normal = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ThemeColor.Primary};
  color: white;
  font-size: 16px;
  padding: 10px;
  width: ${(props) => props.width};
  margin-left: 10px;
`;

const Custom = styled(Normal)`
  background: rgba(255, 255, 255, 0.2);
  color: ${ThemeColor.Primary};
`;

const Secondary = styled(Normal)`
  background: ${ThemeColor.Secondary};
  border: solid 1px ${ThemeColor.Primary};
  color: ${ThemeColor.Primary};
`;

const Icon = styled(Normal)`
  background: none;
  color: ${ThemeColor.Primary};
  font-size: 21px;
  padding-top: 0px;
`;

export const Button = {
  Normal,
  Custom,
  Secondary,
  Icon,
};
