import { getCastsMovie } from 'Api/serviseMovies/serviseMovies';
import CastItem from 'components/CastItem/CastItem';
import { Loader } from 'components/Loader/Loader';
const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getCasts = async () => {
      try {
        setError('');
        setLoading(false);
        const data = await getCastsMovie(movieId);
        setCasts(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieId && getCasts();
  }, [movieId]);

  return (
    <div style={{ marginLeft: '60px', marginTop: '60px' }}>
      <h1>Casts</h1>
      {loading && <Loader />}
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {casts?.map(({ cast_id, character, profile_path }) => (
          <CastItem
            cast_id={cast_id}
            character={character}
            profile_path={profile_path}
          ></CastItem>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
