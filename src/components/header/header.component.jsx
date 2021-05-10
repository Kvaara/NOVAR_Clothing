import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import {
  cartHiddenSelector,
  hoverCartVisibleSelector,
} from "../../redux/cart/cart.selectors.js";
import { currentUserSelector } from "../../redux/user/user.selectors.js";

// TODO if something goes wrong, switch this to the crown.svg and uncomment the .logo-container styles in the header.styles.scss
import { ReactComponent as Logo } from "../../assets/logo_transparent_svg.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, hoverCartVisible }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => auth.signOut()}
          style={{ cursor: "pointer" }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>

    {hidden ? (
      hoverCartVisible ? (
        <CartDropdown></CartDropdown>
      ) : null
    ) : (
      <CartDropdown></CartDropdown>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
  hoverCartVisible: hoverCartVisibleSelector,
});

export default connect(mapStateToProps)(Header);
