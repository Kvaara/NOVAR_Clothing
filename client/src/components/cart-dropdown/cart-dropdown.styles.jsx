import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  @keyframes fadeIn {
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
  border: 2px solid black;
  border-radius: 0px 0px 15px 15px;
  background-color: white;
  top: 120px;
  right: 65px;
  z-index: 5;
  animation: 0.3s fadeIn;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media screen and (max-width: 800px) {
    right: 30px;
    top: 90px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessageSpan = styled.span`
  font-size: 24px;
  margin: auto auto;
`;
