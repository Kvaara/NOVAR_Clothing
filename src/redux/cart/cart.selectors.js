import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const cartHiddenSelector = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);

export const hoverCartVisibleSelector = createSelector(
  [cartSelector],
  (cart) => cart.hoverCartVisible
);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.quantity * cartItem.price,
      0
    )
);
