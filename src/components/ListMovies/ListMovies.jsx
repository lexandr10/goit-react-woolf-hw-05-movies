import { getMovies } from 'Api/serviseMovies/serviseMovies';
import PopularMovies from 'components/PopularMovies/PopularMovies';
import { useEffect, useState } from 'react';
import css from './ListMovies.module.css';
import { Loader } from 'components/Loader/Loader';
const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getSingleMovies();
  }, []);
  const getSingleMovies = async () => {
    try {
      setError('');
      setLoader(true);
      const data = await getMovies();
      setMovies(data.results);
    } catch (error) {
      alert('Sorry error');
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <Loader />}
      <ul className={css.list}>
        {movies && <PopularMovies movies={movies}></PopularMovies>}
      </ul>
    </>
  );
};
export default ListMovies;
