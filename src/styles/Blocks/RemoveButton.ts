import styled from "@emotion/styled";

const RemoveButton = styled.button`
  width: max-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.bgTint};
  color: ${props => props.theme.colors.textExtraLight};
  transition: 0.15s;
  box-shadow: 0px 15px 20px rgba(99, 99, 99, 0.4);
  ${props => props.theme.fonts.medium};

  &:hover {

  }

  &:disabled {
    color: ${props => props.theme.colors.textDark};
  }
`;
export default RemoveButton;
