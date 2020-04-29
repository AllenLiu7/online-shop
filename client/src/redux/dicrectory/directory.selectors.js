import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const selectSection = createSelector(
  [directorySelector],
  (directory) => directory.section
);
