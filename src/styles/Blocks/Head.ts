import styled from "@emotion/styled";

const Header = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.bgDark};
  box-sizing: border-box;
  padding: 5px 0 0 0;
  transition: 0.5s;
  border-radius: 25px;
`;
export default Header;
