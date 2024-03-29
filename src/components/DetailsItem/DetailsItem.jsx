import css from './DetailsItem.module.css';
import { Link, useLocation } from 'react-router-dom';
const DetailsItem = ({ movie }) => {
  return (
    <li className={css.item} key={movie.id}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : 'http://placehold.it/200x300'
        }
        alt={movie.title}
      />
      <div className={css.boxInfo}>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>

        <div>
          <Link to="reviews" className={css.button}>
            Reviews
          </Link>
          <Link to="cast" className={css.button}>
            Cast
          </Link>
        </div>
      </div>
    </li>
  );
};
export default DetailsItem;
