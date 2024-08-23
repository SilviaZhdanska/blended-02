import { Text } from 'components';
import { useState } from 'react';
import { Form } from '../components/Form/Form';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function addToDo(value) {
    setTodos(prevToDos => [...prevToDos, value]);
  }
  console.log(todos);
  return (
    <div>
      <Form onSubmit={addToDo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </div>
  );
};
