import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { directoryCategoriesSelector } from "../../redux/directory/directory.selectors.js";

import MenuItem from "../menu-item/menu-item.component.jsx";

import "./directory.styles.scss";

const Directory = (state) => (
  <div className="directory-menu">
    {state.categories.map(({ id, ...otherProps }) => {
      return <MenuItem key={id} {...otherProps}></MenuItem>;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: directoryCategoriesSelector,
});

export default connect(mapStateToProps)(Directory);
