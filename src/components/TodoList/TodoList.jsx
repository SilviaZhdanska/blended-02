import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ toDos, deleteTodo }) => {
  return (
    <Grid>
      {toDos.map(({ text, id }, index) => (
        <TodoListItem
          id={id}
          deleteTodo={deleteTodo}
          count={index + 1}
          key={id}
          text={text}
        />
      ))}
    </Grid>
  );
};
