import React from 'react'
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    // Renamed 'todo' to 'msg' to avoid confusion
    const [msg, setMsg] = React.useState("");  
    const { addTodo } = useTodoContext();

    const add = (e) => {
        e.preventDefault();
        
        if (!msg.trim()) return; 
        
        // Use the new property name 'todoMsg'
        addTodo({ todoMsg: msg, completed: false });
        setMsg("");
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;