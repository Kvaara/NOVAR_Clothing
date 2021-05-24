import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsForPreviewSelector } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/collection-preview.component.jsx";

import { CollectionsOverviewContainer } from "./collections-overview.styles.jsx";

const CollectionsOverview = (state) => {
  const { collections } = state;
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsForPreviewSelector,
});

export default connect(mapStateToProps)(CollectionsOverview);
