import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";
import { selectVisibleTodos } from "../store/selectors/todos-selectors";
import { selectActiveFilter } from "../store/selectors/filters-selectors";

export const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem {...todo} />
        </li>
      ))}
    </ul>
  );
};
