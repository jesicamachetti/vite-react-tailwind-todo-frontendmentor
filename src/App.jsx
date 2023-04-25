import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./Components/iconos/Header";
import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFiltter from "./Components/Todofiltter";
import TodoFooter from "./Components/TodoFooter";
import TodoList from "./Components/TodoList";

//const initialStateTodos = [
  //{ id: 1, title: "Completar online Javascript", completed: true },
  //{ id: 2, title: "Ir al gimnasio", completed: false },
  //{ id: 3, title: "10 minutos meditación", completed: false },
  //{ id: 4, title: "Practicar deporte", completed: false },
  //{ id: 5, title: "Pasear a mi perro", completed: false },

//];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

//esta parte junto con (2) es para que se ordene y quede
const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
  };

  //esta parte junto con (2) es para que se ordene y quede
  const handleDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
    return;
    setTodos((prevTasks) => 
    reorder(prevTasks, source.index, destination.index)
    );

  };//hasta aca para que se ordene

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-duration: 1000ms dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">

      <Header/>

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">

      <TodoCreate createTodo={createTodo}/>


<DragDropContext onDragEnd={handleDragEnd}>
      <TodoList 
      todos={filterTodos()} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}
      />
      </DragDropContext>

      <TodoComputed computedItemsLeft={computedItemsLeft} ClearCompleted={ClearCompleted}/>

      <TodoFiltter changeFilter={changeFilter} filter={filter}/>
        
      
      </main>

      <TodoFooter/>
    </div>

  );
};
export default App;
