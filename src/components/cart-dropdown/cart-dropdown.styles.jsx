import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  @keyframes test {
    0% {
      height: 100px;
      opacity: 0;
    }
    100% {
      height: 400px;
      opacity: 1;
    }
  }

  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 65px;
  z-index: 5;
  animation: 0.3s test;
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageSpan = styled.span`
  font-size: 22px;
  margin: auto auto;
`;
