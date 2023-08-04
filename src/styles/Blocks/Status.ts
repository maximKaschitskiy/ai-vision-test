import styled from "@emotion/styled";
import { CSSType } from "../../types";

const Status = styled.div<CSSType>`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.bgTint};
  color: ${props => props.theme.colors.textExtraLight};
  transition: 0.15s;
  box-shadow: 0px 15px 20px rgba(99, 99, 99, 0.4);
  ${props => props.theme.fonts.medium};
  ${props => props.style};
`;

export default Status;
