import styled from "@emotion/styled";

const FilesWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgTint};
  box-sizing: border-box;
  gap: 10px;
  border-radius: 15px;
`;
export default FilesWrapper;
