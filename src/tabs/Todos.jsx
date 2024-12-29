import { useState } from 'react';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState([]);

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

  return <Form onSubmit={onSubmit} />;
};

export default Todos;
