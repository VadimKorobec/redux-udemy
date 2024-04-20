import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter } from "../store/selectors/filters-selectors";
import { setFilter } from "../store/actions/filters-actions";

export const Filters = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter("all"))}
        style={{ color: activeFilter === "all" ? "red" : "black" }}
      >
        all
      </button>
      <button
        onClick={() => dispatch(setFilter("active"))}
        style={{ color: activeFilter === "active" ? "red" : "black" }}
      >
        active
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        style={{ color: activeFilter === "completed" ? "red" : "black" }}
      >
        completed
      </button>
    </div>
  );
};
