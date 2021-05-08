import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { hoverCartVisible } from "../../redux/cart/cart.actions.js";

import { ReactComponent as CartIconImg } from "../../assets/shopping-bag-5.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, hoverCartVisible }) => {
  return (
    <div
      className="cart-icon"
      onClick={toggleCartHidden}
      onMouseEnter={hoverCartVisible}
      onMouseLeave={hoverCartVisible}
    >
      <CartIconImg className="shopping-icon"></CartIconImg>
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  hoverCartVisible: () => dispatch(hoverCartVisible()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
