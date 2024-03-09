import PopularMovies from 'components/PopularMovies/PopularMovies';

import css from './ListMovies.module.css';

const ListMovies = ({ movies }) => {
  return (
    <>
      <ul className={css.list}>
        {movies && <PopularMovies movies={movies}></PopularMovies>}
      </ul>
    </>
  );
};
export default ListMovies;
