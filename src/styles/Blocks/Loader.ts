import styled from "@emotion/styled";

const Loader = styled.span<{load: boolean}>`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

&::after {
  content: " ";
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #555555;
  border-color: #555555 transparent #555555 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;
export default Loader;
