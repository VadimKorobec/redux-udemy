import { SET_FILTER } from "../constans/filters-constans";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
