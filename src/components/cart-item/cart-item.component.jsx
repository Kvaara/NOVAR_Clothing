import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  NameSpan,
  PriceSpan,
} from "./cart-item.styles.jsx";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item"></CartItemImage>
      <CartItemDetailsContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>
          {quantity} x {price} €
        </PriceSpan>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
