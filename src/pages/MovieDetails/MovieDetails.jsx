import { getSingleMovie } from 'Api/serviseMovies/serviseMovies';
import DetailsItem from 'components/DetailsItem/DetailsItem';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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

  return (
    <>
      <DetailsItem movie={movie} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
