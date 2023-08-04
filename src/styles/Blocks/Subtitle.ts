import styled from "@emotion/styled";

const Subtitle = styled.h2`
  line-height: 54px;
  color: ${props => props.theme.colors.textTint};
  margin: 0;
  ${props => props.theme.fonts.subtitle};
`;
export default Subtitle;
