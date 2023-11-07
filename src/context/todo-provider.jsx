import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, value: "Membuat website sekolah", status: false },
    { id: 2, value: "Memperbaiki Laptop", status: false },
    { id: 3, value: "Belajar Ngoding", status: false },
    { id: 4, value: "Belajar React JS", status: false },
    { id: 5, value: "Belajar Todo-list", status: false },
  ]);
  const [todoInput, setTodoInput] = useState("");
  const [todoEdit, setTodoEdit] = useState({});

  const [isEdit, setIsEdit] = useState("");

  return (
    <TodoContext.Provider value={{ todos, setTodos, todoInput, setTodoInput, isEdit, setIsEdit, todoEdit, setTodoEdit }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
