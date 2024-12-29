import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, handleDelete }) => {
  return (
    <Grid>
      {todos.map((item, i) => (
        <GridItem key={item.id}>
          <TodoListItem
            text={item.text}
            count={i + 1}
            id={item.id}
            handleDelete={handleDelete}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
