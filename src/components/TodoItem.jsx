import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/todos-actions";

export const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{title}</h2>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </div>
  );
};
