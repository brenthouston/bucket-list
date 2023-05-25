import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
    return (
      <div className="App text-center">
    <TodoForm/>
    <Todo/>
    <Todo/>
      </div>
    );
  }
  
  export default App;