import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todos-actions";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTodo(form.title.value));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="new todo" />
        <button type="submit">Create Todo</button>
      </form>
    </>
  );
};
