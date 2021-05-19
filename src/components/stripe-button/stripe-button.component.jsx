import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { imageUrl } from "./stripe-button-image.js";

const StripeCheckoutButton = (state) => {
  // Converting price to cents because of Stripe
  const priceForStripe = state.price * 100;
  const publishableKey =
    "pk_test_51IsXzaCZmXWt9Bdsd03K0dP90xHYF6znsV9ykd1TyzA797uu8Wp24XIoqJUXujwhFha5lnHng3bYQRI3VBrcCwvv00fj6vZgrY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Purchase now"
      name="NOVAR Clothing Ltd."
      billingAddress
      shippingAddress
      image={imageUrl}
      description={`Your total is: ${state.price} €`}
      amount={priceForStripe}
      panelLabel="Pay now:"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
