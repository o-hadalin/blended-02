import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = value => {
    setTodos(prevTask => {
      return [
        ...prevTask,
        {
          id: nanoid(),
          text: value,
        },
      ];
    });
  };

  console.log(todos);

  const handleDelete = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
};

export default Todos;
