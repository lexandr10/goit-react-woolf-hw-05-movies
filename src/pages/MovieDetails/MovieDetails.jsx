import { getSingleMovie } from 'Api/serviseMovies/serviseMovies';
import DetailsItem from 'components/DetailsItem/DetailsItem';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  console.log(location);
  const navigation = useNavigate();
  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getSingleMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieId && getDetailMovie();
  }, [movieId]);
  const handlerBack = () => {
    navigation(location.state ?? '/');
  };
  return (
    <>
      <button className={css.btn} onClick={handlerBack} type="button">
        Back
      </button>
      {loading && <Loader />}
      <DetailsItem movie={movie} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
