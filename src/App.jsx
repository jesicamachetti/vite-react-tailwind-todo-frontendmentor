import { useState } from "react";
import Header from "./Components/iconos/Header";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFiltter from "./Components/Todofiltter";
import TodoFooter from "./Components/TodoFooter";
import TodoList from "./Components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Completar online Javascript", completed: true },
  { id: 2, title: "Ir al gimnasio", completed: false },
  { id: 3, title: "10 minutos meditación", completed: false },
  { id: 4, title: "Practicar deporte", completed: false },
  { id: 5, title: "Pasear a mi perro", completed: false },

];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  const createTodo = (title)=> {
    const newTodo = {
      id: Date.now(),
      title: title.trim(), 
      completed: false, 
    };

    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
        );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const ClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter)

  const filterTodos = () => {
    switch (filter) {
      case "all":
      return todos;
      case "active":
      return todos.filter((todo) => !todo.completed);
      case "completed":
      return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-duration: 1000ms">

      <Header/>

      <main className="container mx-auto mt-8 px-4">

      <TodoCreate createTodo={createTodo}/>

      <TodoList 
      todos={filterTodos()} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}
      />

      <TodoComputed computedItemsLeft={computedItemsLeft} ClearCompleted={ClearCompleted}/>

      <TodoFiltter changeFilter={changeFilter} filter={filter}/>
        
      
      </main>

      <TodoFooter/>
    </div>

  );
};
export default App;
