import { getCastsMovie } from 'Api/serviseMovies/serviseMovies';
import CastItem from 'components/CastItem/CastItem';
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
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <CastItem casts={casts}></CastItem>
      </ul>
    </div>
  );
};
export default Cast;
