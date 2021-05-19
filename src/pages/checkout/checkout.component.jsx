import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";

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
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}

    <div className="total">
      <span>TOTAL: {total} €</span>
    </div>
    <div className="test-warning">
      <span>*Please use the following test credit card for payments*</span>
      <br></br>
      <span>4242 4242 4242 4242 - Exp: 01/50 - CVV: 123</span>
    </div>
    <StripeCheckoutButton price={total}></StripeCheckoutButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
