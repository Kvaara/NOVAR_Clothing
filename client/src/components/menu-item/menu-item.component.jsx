import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleH1,
  SubtitleSpan,
} from "./menu-item.styles.jsx";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    ></BackgroundImageContainer>
    <ContentContainer className="content">
      <TitleH1>{title.toUpperCase()}</TitleH1>
      <SubtitleSpan>SHOP NOW</SubtitleSpan>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
