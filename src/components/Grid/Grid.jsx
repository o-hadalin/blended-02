import css from './Grid.module.css';
const Grid = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
