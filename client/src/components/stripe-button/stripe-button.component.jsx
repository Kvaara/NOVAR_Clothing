import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { imageUrl } from "./stripe-button-image.js";

const StripeCheckoutButton = (state) => {
  // Converting price to cents because of Stripe
  const priceForStripe = state.price * 100;
  const publishableKey =
    "pk_test_51IsXzaCZmXWt9Bdsd03K0dP90xHYF6znsV9ykd1TyzA797uu8Wp24XIoqJUXujwhFha5lnHng3bYQRI3VBrcCwvv00fj6vZgrY";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment was succesful!");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please use the provided credit card that's in red."
        );
      });
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
