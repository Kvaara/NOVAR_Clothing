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

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          <LeftArrow></LeftArrow>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <RightArrow></RightArrow>
        </div>
      </span>
      <span className="price">{price} €</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <RemoveIcon></RemoveIcon>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
