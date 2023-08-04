import styled from "@emotion/styled";

const AppWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.bgExtraLight};
  position: relative;
  border-radius: 25px;
  box-sizing: border-box;
  padding: 5%;
  gap: 20px;
`;
export default AppWrapper;
