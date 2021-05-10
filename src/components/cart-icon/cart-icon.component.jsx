import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { hoverCartVisible } from "../../redux/cart/cart.actions.js";
import { cartItemsCountSelector } from "../../redux/cart/cart.selectors.js";

import { ReactComponent as CartIconImg } from "../../assets/shopping-bag-5.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, hoverCartVisible, itemCount }) => {
  return (
    <div
      className="cart-icon"
      onClick={toggleCartHidden}
      onMouseEnter={hoverCartVisible}
      onMouseLeave={hoverCartVisible}
    >
      <CartIconImg className="shopping-icon"></CartIconImg>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  hoverCartVisible: () => dispatch(hoverCartVisible()),
});

const mapStateToProps = (state) => ({
  itemCount: cartItemsCountSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
