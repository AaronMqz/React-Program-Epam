import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Normal = styled.label`
  font-size: 20px;
  color: ${ThemeColor.Primary};
  font-weight: normal;
`;

const Strong = styled(Normal)`
  font-weight: bold;
`;

export const Logo = {
  Strong,
  Normal,
};
