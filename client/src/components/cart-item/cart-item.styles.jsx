import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  font-size: 18px;
`;

export const NameSpan = styled.span`
  font-size: 22.5px;
`;

export const PriceSpan = styled.span`
  font-size: 21.5px;
`;
