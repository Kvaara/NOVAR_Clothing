import React from "react";
import { connect } from "react-redux";

import {
  toggleCartHidden,
  hoverCartHidden,
} from "../../redux/cart/cart.actions.js";

import { ReactComponent as CartIconImg } from "../../assets/shopping-bag-5.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, hoverCartHidden }) => {
  return (
    <div
      className="cart-icon"
      onClick={toggleCartHidden}
      onMouseEnter={hoverCartHidden}
      onMouseLeave={hoverCartHidden}
    >
      <CartIconImg className="shopping-icon"></CartIconImg>
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  hoverCartHidden: () => dispatch(hoverCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
