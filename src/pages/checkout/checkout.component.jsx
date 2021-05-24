import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";

import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../redux/cart/cart.selectors.js";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  CheckoutTotalContainer,
  TestWarningContainer,
} from "./checkout.styles.jsx";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlockContainer>
        <span>Product</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Description</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Quantity</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Price</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Delete</span>
      </CheckoutHeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}

    <CheckoutTotalContainer>
      <span>TOTAL: {total} €</span>
    </CheckoutTotalContainer>
    <TestWarningContainer>
      <span>*Please use the following test credit card for payments*</span>
      <br></br>
      <span>4242 4242 4242 4242 - Exp: 01/50 - CVV: 123</span>
    </TestWarningContainer>
    <StripeCheckoutButton price={total}></StripeCheckoutButton>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
