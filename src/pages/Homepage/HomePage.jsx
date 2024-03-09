import { getMovies } from 'Api/serviseMovies/serviseMovies';
import ListMovies from 'components/ListMovies/ListMovies';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
const HomePage = () => {
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

      <ListMovies movies={movies}></ListMovies>
    </>
  );
};
export default HomePage;
