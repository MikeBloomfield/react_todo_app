import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = title => {
    setTodos(prev => [
    {
        _id: new Date(),
        title, 
        isCompleted: false
    }, ...prev
    ])
    setTitle('')
}

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl p-2 w-full'>
      <input className='flex items-center justify-between outline-none mb-4 rounded-2xl bg-white p-5 w-1/3 m-auto' placeholder='What to do?' type="text" value={title} onChange={e => setTitle(e.target.value)} onKeyPress={e => e.key === 'Enter' && addTodo(title)} />
    </div>
  )
}

export default CreateTodoField