import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";

import { collectionSelector } from "../../redux/shop/shop.selectors.js";

import {
  CollectionPageContainer,
  TitleH2,
  ItemsContainer,
} from "./collection.styles.jsx";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleH2>{title}</TitleH2>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
