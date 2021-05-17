import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionSelector = memoize((collectionParam) =>
  createSelector(
    [collectionsSelector],
    (collections) => collections[collectionParam]
  )
);
