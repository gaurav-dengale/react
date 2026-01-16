import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // The "Master List"
    todos: [
        {
            id: 1,
            todoMsg: "Example Message", // CHANGED: Clearer name
            completed: false,
        }
    ],
    // The Functions
    addTodo: (todoMsg) => {},
    updateTodo: (id, todoMsg) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;