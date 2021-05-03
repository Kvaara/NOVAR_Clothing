import React from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: SHOP_DATA,
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="shop-page">
        {categories.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
