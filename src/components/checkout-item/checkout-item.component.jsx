import React from "react";

import { ReactComponent as RemoveIcon } from "./delete.svg";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price} €</span>
    <div className="remove-button">
      <RemoveIcon></RemoveIcon>
    </div>
  </div>
);

export default CheckoutItem;
