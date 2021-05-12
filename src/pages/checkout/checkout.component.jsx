import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../redux/cart/cart.selectors.js";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Delete</span>
      </div>
    </div>
    {cartItems.map((cartItem) => cartItem.name)}

    <div className="total">
      <span>TOTAL: {total} €</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
