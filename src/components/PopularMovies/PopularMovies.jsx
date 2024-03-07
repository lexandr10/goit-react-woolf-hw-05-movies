import { Link, useLocation } from 'react-router-dom';
import css from './PopularMovies.module.css';
const PopularMovies = ({ movies }) => {
  const location = useLocation();
  return movies?.map(
    ({ id, title, poster_path, release_date, vote_average }) => (
      <Link className={css.link} to={`/movies/${id}`} state={location}>
        <li className={css.item} key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
          />
          <h2 className={css.title}>{title}</h2>
          <p>{release_date}</p>
          <p>{vote_average}</p>
        </li>
      </Link>
    )
  );
};
export default PopularMovies;
