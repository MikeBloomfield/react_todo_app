import React from 'react'
import Check from './Check'
import { IoTrashBin } from 'react-icons/io5'

const TodoItem = ({todo, changeTodo, removeTodo }) => {
  
  return (
    <div className='flex items-center justify-between mb-4 rounded p-5 w-1/3 m-auto bg-white border-2 border-indigo-500' >
      <span className='flex justify-center cursor-pointer' onClick={() => changeTodo(todo._id)}>
        <Check isCompleted={todo.isCompleted}></Check>
        <p className={`${todo.isCompleted ? 'line-through' : ''} transition-colors`}> {todo.title}</p>
      </span>
      <button onClick={() => removeTodo(todo._id)}>
        <IoTrashBin size={22} className="text-black hover:text-red-700 transition-colors ease-in-out"/>
      </button>
    </div>
  )
}

export default TodoItem