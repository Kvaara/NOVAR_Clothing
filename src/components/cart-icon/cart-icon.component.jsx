import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { hoverCartVisible } from "../../redux/cart/cart.actions.js";
import { cartItemsCountSelector } from "../../redux/cart/cart.selectors.js";

import {
  CartItemContainer,
  CartIconImgStyles,
  ItemCountSpan,
} from "./cart-icon.styles.jsx";

const CartIcon = ({ toggleCartHidden, hoverCartVisible, itemCount }) => {
  return (
    <CartItemContainer
      onClick={toggleCartHidden}
      onMouseEnter={hoverCartVisible}
      onMouseLeave={hoverCartVisible}
    >
      <CartIconImgStyles></CartIconImgStyles>
      <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  hoverCartVisible: () => dispatch(hoverCartVisible()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
