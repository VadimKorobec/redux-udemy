import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Filters } from "./Filters";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <TodoForm />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
