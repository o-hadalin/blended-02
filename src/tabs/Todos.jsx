import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const getCurrentTodo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const updateTodo = text => {
    setTodos(prev =>
      prev.map(todo => (todo.id === currentTodo.id ? { ...todo, text } : todo)),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={onSubmit} />
      )}
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        currentTodo={getCurrentTodo}
      />
    </>
  );
};

export default Todos;
