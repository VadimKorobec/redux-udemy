import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TodoItem } from "./TodoItem";
import { selectVisibleTodos } from "../store/selectors/todos-selectors";

export const TodoList = () => {
  const { filter } = useParams();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

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
