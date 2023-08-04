import styled from "@emotion/styled";
import { CSSType } from "../../types";

const UploadButton = styled.label<CSSType>`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 9px 15px;
  border: none;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.itemsDark};
  color: ${props => props.theme.colors.textExtraLight};
  transition: 0.15s;
  box-shadow: 0px 15px 20px rgba(99, 99, 99, 0.4);
  ${props => props.theme.fonts.medium};
  ${props => props.style};

  &:hover {

  }

  &:disabled {
    color: ${props => props.theme.colors.textDark};
  }
`;
export default UploadButton;
