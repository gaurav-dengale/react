import { useState, useEffect } from 'react'
import { TodoContextProvider } from './context'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  // Add: We receive the object, give it an ID, and put it first
  const addTodo = (todoObject) => {
      setTodos((prev) => [{id: Date.now(), ...todoObject}, ...prev]);
  }

  // Update: We find the ID, keep the old info, but swap the new 'todoObject' in
  const updateTodo = (id, todoObject) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todoObject } : prevTodo)));
  }

  // Delete: Keep everything that does NOT match the ID
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  // Toggle: Flip the 'completed' switch

  // Load from LocalStorage
  useEffect(() => {
   const savedTodos = JSON.parse(localStorage.getItem('todos'));
   if(savedTodos && savedTodos.length > 0){
        setTodos(savedTodos); 
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, removeTodo, toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop through the list and render an Item for each object */}
                        {todos.map((todoObject) => (
                          <div className='w-full' key={todoObject.id}>
                            <TodoItem todoObject={todoObject} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App;