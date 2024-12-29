import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, handleDelete, currentTodo }) => {
  return (
    <Grid>
      {todos.map((item, i) => (
        <GridItem key={item.id}>
          <TodoListItem
            text={item.text}
            count={i + 1}
            id={item.id}
            handleDelete={handleDelete}
            currentTodo={currentTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
