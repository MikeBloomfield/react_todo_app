import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './CreateTodoField';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const data = [
  {
    _id: '1',
    title: 'Do the homework',
    isCompleted: false,
  },
  {
    _id: '2',
    title: 'Go to work',
    isCompleted: false,
  },
  {
    _id: '3',
    title: 'Check my reddit account',
    isCompleted: false,
  },
  {
    _id: '4',
    title: 'Watch movie',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));

  return (
    <div>
      <h1 className="text-3xl text-center mb-3 mt-5 text-black">My to do list</h1>
      <CreateTodoField setTodos={setTodos}></CreateTodoField>
      {todos.length ? (
        <TransitionGroup component={'div'}>
          {todos.map((todo) => (
          <CSSTransition key={todo._id} timeout={500} classNames="todo">
            <TodoItem todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
          </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div className="text-center text-2xl">Nothing To Do;(</div>
      )}
    </div>
  );
};

export default Home;
