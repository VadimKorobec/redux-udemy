import { SET_FILTER } from "../constans/filters-constans";

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
