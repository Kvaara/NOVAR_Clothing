import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { directoryCategoriesSelector } from "../../redux/directory/directory.selectors.js";

import MenuItem from "../menu-item/menu-item.component.jsx";

import { DirectoryMenuContainer } from "./directory.styles.jsx";

const Directory = (state) => (
  <DirectoryMenuContainer>
    {state.categories.map(({ id, ...otherProps }) => {
      return <MenuItem key={id} {...otherProps}></MenuItem>;
    })}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  categories: directoryCategoriesSelector,
});

export default connect(mapStateToProps)(Directory);
