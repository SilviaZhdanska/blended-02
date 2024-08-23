import { Text } from 'components';
import { useState, useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos ?? [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addToDo(value) {
    setTodos(prevToDos => [...prevToDos, value]);
  }
  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <Form onSubmit={addToDo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList toDos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
