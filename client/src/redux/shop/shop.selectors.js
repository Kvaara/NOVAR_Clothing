import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionsForPreviewSelector = createSelector(
  [collectionsSelector],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const collectionSelector = memoize((collectionParam) =>
  createSelector([collectionsSelector], (collections) =>
    collections ? collections[collectionParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
