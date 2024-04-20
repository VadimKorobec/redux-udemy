import { createStore } from "redux";
import { rootReducer } from "./reducers";

import { devToolsEnhancer } from "@redux-devtools/extension";
import { loadState, saveState } from "./local-storage";

const enhancer = devToolsEnhancer();

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, enhancer);
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    });
  });
  return store;
};
