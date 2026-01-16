import React, { useRef, useEffect } from 'react'
import { useTodoContext } from '../context/TodoContext';

// We receive the full object here
function TodoItem({ todoObject }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    
    // CHANGED: We are looking for 'todoMsg', not 'todo'
    const [todoMsg, setTodoMsg] = React.useState(todoObject.todoMsg);
    
    const { updateTodo, removeTodo, toggleTodo } = useTodoContext();
    const editInputRef = useRef(null);

    const editTodo = () => {
        // Send the updated message text
        updateTodo(todoObject.id, { todoMsg: todoMsg }); 
        setIsTodoEditable(false);
    } 
    
    const handleToggleTodo = () => {
        toggleTodo(todoObject.id);
    }

    useEffect(() => {
        if (isTodoEditable && editInputRef.current) {
            setTimeout(() => {
                editInputRef.current.focus();
                const length = editInputRef.current.value.length;
                editInputRef.current.setSelectionRange(length, length); 
            }, 0); 
        }
    }, [isTodoEditable]);

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todoObject.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoObject.completed}
                onChange={handleToggleTodo}
            />
            <input
                ref={editInputRef}
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoObject.completed ? "line-through" : ""}`}
                
                // Binding to our local text state
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoObject.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoObject.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todoObject.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;