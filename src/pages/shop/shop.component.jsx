import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";

const ShopPage = (state) => {
  const { collections } = state;
  return (
    <div className="shop-page">
      <CollectionsOverview></CollectionsOverview>
    </div>
  );
};

export default ShopPage;
