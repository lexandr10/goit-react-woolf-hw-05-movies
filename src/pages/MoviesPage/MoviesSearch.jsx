import { getSearchMovies } from 'Api/serviseMovies/serviseMovies';
import Form from 'components/Form/Form';
import ListMovies from 'components/ListMovies/ListMovies';

import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    const getDataMovies = async () => {
      try {
        setError('');
        setLoader(true);
        const data = await getSearchMovies(search, page);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    if (!search) setMovies([]);
    getDataMovies();
  }, [search, page]);
  const onSubmit = value => {
    setSearchParams({ search: value, page: 1 });
  };
  return (
    <>
      <Form onSubmit={onSubmit}></Form>
      {loader && <Loader />}
      {movies.length > 0 && <ListMovies movies={movies}></ListMovies>}
    </>
  );
};
export default MoviesSearch;
