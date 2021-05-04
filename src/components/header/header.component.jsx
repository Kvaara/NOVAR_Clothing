import React from "react";
import { Link } from "react-router-dom";

// TODO if something goes wrong, switch this to the crown.svg and uncomment the .logo-container styles in the header.styles.scss
import { ReactComponent as Logo } from "../../assets/logo_transparent_svg.svg";

import "./header.styles.scss";

const Header = () => (
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
    </div>
  </div>
);

export default Header;
