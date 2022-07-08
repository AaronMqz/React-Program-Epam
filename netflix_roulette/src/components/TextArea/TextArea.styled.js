import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const TextArea = styled.textarea`
  border: 0;
  background: ${ThemeColor.Input};
  border-radius: 4px;
  height: 200px;
  padding: 2px 10px;
  width: 100%;
  color: ${ThemeColor.Text};
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
`;

export { TextArea };
