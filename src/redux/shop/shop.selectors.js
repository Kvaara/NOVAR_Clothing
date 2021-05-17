import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shopSelector = (state) => state.shop;

export const collectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionSelector = memoize((collectionParam) =>
  createSelector([collectionsSelector], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionParam]
    )
  )
);
