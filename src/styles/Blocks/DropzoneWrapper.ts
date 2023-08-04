import styled from "@emotion/styled";
import { DropzoneType } from "../../types";

const DropzoneWrapper = styled.div<DropzoneType>`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgTint};
  box-sizing: border-box;
  padding: 30px;
  transition: 0.5s;
  border-radius: 25px;
  border: ${props => {
    if (props.dragged) {
      return '2.5px dashed ' + props.theme.colors.itemsDark
    }
    else if (props.validErr) {
      return '2.5px dashed red'
    }
    else {
      return '2.5px solid ' + props.theme.colors.itemsLight
    }
  }};
  gap: 10px;
`;
export default DropzoneWrapper;
