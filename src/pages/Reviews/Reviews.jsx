import { getReviews } from 'Api/serviseMovies/serviseMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getReviewsMovie = async () => {
      try {
        setError('');
        setLoading(false);
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieId && getReviewsMovie();
  }, [movieId]);
  return (
    <div style={{ marginLeft: '60px', marginTop: '60px' }}>
      <h1>Reviews</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {reviews.map(({ id, author, author_details }) => (
          <li style={{ listStyle: 'none' }} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${author_details.avatar_path}`}
              alt=""
            />
            <p>Name: {author}</p>
            <p>Rating: {author_details.rating} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
