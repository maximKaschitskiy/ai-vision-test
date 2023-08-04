import styled from "@emotion/styled";

const FileWrapper = styled.div<{status: boolean}>`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => !props.status ? props.theme.colors.bgTint : "#f4f8ff"};
  gap: 10px;
  box-shadow: 0px 15px 20px rgba(99, 99, 99, 0.4);
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 15px;
`;
export default FileWrapper;
