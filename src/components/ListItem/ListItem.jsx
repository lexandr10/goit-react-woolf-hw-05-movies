import { Link, useLocation } from 'react-router-dom';
import css from './ListItem.module.css';
const ListItem = ({ id, title, poster_path, release_date, vote_average }) => {
  const location = useLocation();
  return (
    <Link className={css.link} to={`/movies/${id}`} state={location}>
      <li className={css.item} key={id}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200${poster_path}`
              : 'http://placehold.it/200x300'
          }
          alt={title}
        />
        <h2 className={css.title}>{title}</h2>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </li>
    </Link>
  );
};
export default ListItem;
