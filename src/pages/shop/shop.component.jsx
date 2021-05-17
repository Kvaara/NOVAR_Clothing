import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";
import collectionPage from "../collection/collection.component.jsx";

const ShopPage = (props) => {
  const { match } = props;
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={collectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
