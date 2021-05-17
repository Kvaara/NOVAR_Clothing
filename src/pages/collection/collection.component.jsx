import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";

import { collectionSelector } from "../../redux/shop/shop.selectors.js";

import "./collection.styles.scss";

const collectionPage = ({ match }) => (
  <div className="category">
    <h2>COLLECTION PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collectionPage);
