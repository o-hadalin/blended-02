import Text from '../Text/Text';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

const TodoListItem = ({ text, count, handleDelete, id }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        onClick={() => handleDelete(id)}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
