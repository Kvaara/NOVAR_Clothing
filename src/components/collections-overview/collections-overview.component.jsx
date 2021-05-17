import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsForPreviewSelector } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/collection-preview.component.jsx";

import "./collections-overview.styles.scss";

const CollectionsOverview = (state) => {
  const { collections } = state;
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsForPreviewSelector,
});

export default connect(mapStateToProps)(CollectionsOverview);
