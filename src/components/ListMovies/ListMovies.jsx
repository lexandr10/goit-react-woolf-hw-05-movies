import ListItem from 'components/ListItem/ListItem';

import css from './ListMovies.module.css';

const ListMovies = ({ movies }) => {
  return (
    <>
      <ul className={css.list}>
        {movies?.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <ListItem
              id={id}
              title={title}
              poster_path={poster_path}
              release_date={release_date}
              vote_average={vote_average}
            ></ListItem>
          )
        )}
      </ul>
    </>
  );
};
export default ListMovies;
