import styled from "@emotion/styled";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 54px;
  color: ${props => props.theme.colors.textTint};
  margin: 0;
  ${props => props.theme.fonts.title};
`;
export default Title;
