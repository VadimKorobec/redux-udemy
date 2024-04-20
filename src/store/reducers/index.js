import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
import { todosReducer } from "./todos-reducer";
import { filterReducer } from "./filters-reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filters: filterReducer,
});
