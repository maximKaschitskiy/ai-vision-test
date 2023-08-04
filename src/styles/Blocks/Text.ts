import styled from "@emotion/styled";
import { CSSType } from "../../types";

const Text = styled.p<CSSType>`
  color: ${props => props.theme.colors.textTint};
  margin: 0;
  color: ${props => props.color};
  text-align: ${props => props.style.textAlign || 'center'};
  white-space: pre-line;
  ${props => props.style};
`;
export default Text;
