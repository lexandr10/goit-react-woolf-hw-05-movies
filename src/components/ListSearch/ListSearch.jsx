import PopularMovies from 'components/PopularMovies/PopularMovies';
import css from './ListSearch.module.css';
const ListSearch = ({ movies }) => {
  return (
    <ul className={css.list}>
      <PopularMovies movies={movies}></PopularMovies>
    </ul>
  );
};
export default ListSearch;
