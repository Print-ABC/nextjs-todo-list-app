import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
  };
};

export const useTodos = (initialList = []) => {
  const [todos, setTodos] = useState(initialList);

  return {
    todos,
    addTodo: (text) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false,
          })
        );
      }
    },
    checkTodo: (idx) => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    removeTodo: (idx) => {
      setTodos(todos.filter((todo, index) => idx !== index));
    },
  };
};
