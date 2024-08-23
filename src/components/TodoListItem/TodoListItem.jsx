import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ text, count, deleteTodo, id }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO {count}
        </Text>
        <Text>{text}</Text>
        <button
          onClick={() => deleteTodo(id)}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
