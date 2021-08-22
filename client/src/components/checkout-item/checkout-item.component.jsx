import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

import { ReactComponent as RemoveIcon } from "./delete.svg";
import { ReactComponent as LeftArrow } from "./left_arrow.svg";
import { ReactComponent as RightArrow } from "./right_arrow.svg";

import {
  CheckoutItemContainer,
  ImageContainer,
  Span,
  QuantitySpanContainer,
  ArrowContainer,
  ValueSpan,
  RemoveButtonContainer,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"></img>
      </ImageContainer>
      <Span>{name}</Span>
      <QuantitySpanContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          <LeftArrow></LeftArrow>
        </ArrowContainer>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          <RightArrow></RightArrow>
        </ArrowContainer>
      </QuantitySpanContainer>
      <Span>{price} €</Span>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        <RemoveIcon></RemoveIcon>
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
