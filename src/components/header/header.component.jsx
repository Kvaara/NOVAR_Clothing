import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

// TODO if something goes wrong, switch this to the crown.svg and uncomment the .logo-container styles in the header.styles.scss
import { ReactComponent as Logo } from "../../assets/logo_transparent_svg.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, hoverHidden }) => (
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

    {hidden ? null : <CartDropdown></CartDropdown>}
    {hoverHidden ? null : <CartDropdown></CartDropdown>}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden, hoverHidden },
}) => ({
  currentUser: currentUser,
  hidden: hidden,
  hoverHidden: hoverHidden,
});

export default connect(mapStateToProps)(Header);
