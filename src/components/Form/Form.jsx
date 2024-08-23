import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.search.value;
    const id = nanoid();
    onSubmit({
      text: value,
      id,
    });
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
