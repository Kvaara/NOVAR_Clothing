import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImageContainer,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
} from "./collection-item.styles.jsx";

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer
        className="image"
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price} €</PriceSpan>
      </CollectionFooterContainer>
      <AddButton
        className="custom-button"
        inverted
        onClick={() => addItems(item)}
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
