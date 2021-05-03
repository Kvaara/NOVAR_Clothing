import React from "react";

import MenuItem from "../menu-item/menu-item.component.jsx";

import "./directory.styles.scss";

export class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          title: "hats",
          imageUrl: "https://source.unsplash.com/_yVRLC75Ma8/",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://source.unsplash.com/ohWf6YuzOQk/",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://source.unsplash.com/Wte7upcKIVo/",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://source.unsplash.com/6W4F62sN_yI/",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://source.unsplash.com/lv43c8QONok/",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.categories.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps}></MenuItem>;
        })}
      </div>
    );
  }
}
