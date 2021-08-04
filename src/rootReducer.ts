import { combineReducers } from "@reduxjs/toolkit";

import clicksReducer from "./counters";

const clicks = { count: clicksReducer };

export let rootReducer = combineReducers({
  ...clicks,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...clicks,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
