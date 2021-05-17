import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionsForPreviewSelector = createSelector(
  [collectionsSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const collectionSelector = memoize((collectionParam) =>
  createSelector(
    [collectionsSelector],
    (collections) => collections[collectionParam]
  )
);
