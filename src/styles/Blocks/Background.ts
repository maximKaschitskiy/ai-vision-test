import styled from "@emotion/styled";

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${props => props.theme.colors.bgGradient};
  box-sizing: border-box;
  padding: 5%;
`;

export default Background;
