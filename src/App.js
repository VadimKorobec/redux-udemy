import "./App.css";
import { Counter } from "./Counter";
import { TodoForm } from "./TodoForm";
import { Todos } from "./Todos";

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
