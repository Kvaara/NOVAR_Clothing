import styled from "styled-components";
import { ReactComponent as CartIconImg } from "../../assets/shopping-bag-5.svg";

export const CartItemContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms ease all;

  &:hover {
    transform: rotate(12deg) scale(1.05);
  }

  @media screen and (max-width: 800px) {
    transform: scale(0.8);
  }
`;

export const CartIconImgStyles = styled(CartIconImg)`
  width: 60px;
  height: 60px;
`;

export const ItemCountSpan = styled.span`
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  bottom: 19px;
  left: 22px;
  color: #130f26;
`;
