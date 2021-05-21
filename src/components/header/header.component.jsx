import React from "react";
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

import { ReactComponent as Logo } from "../../assets/logo_transparent_svg.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden, hoverCartVisible }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          onClick={() => auth.signOut()}
          style={{ cursor: "pointer" }}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon></CartIcon>
    </OptionsContainer>

    {hidden ? (
      hoverCartVisible ? (
        <CartDropdown></CartDropdown>
      ) : null
    ) : (
      <CartDropdown></CartDropdown>
    )}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
  hoverCartVisible: hoverCartVisibleSelector,
});

export default connect(mapStateToProps)(Header);
