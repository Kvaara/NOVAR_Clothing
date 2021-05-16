import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const directoryCategoriesSelector = createSelector(
  [directorySelector],
  (directory) => directory.categories
);
