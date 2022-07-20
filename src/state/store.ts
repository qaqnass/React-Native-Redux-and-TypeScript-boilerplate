
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageRecucer";

const rootReducer = combineReducers({
  l: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({ reducer: rootReducer });
