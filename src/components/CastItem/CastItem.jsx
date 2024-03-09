const CastItem = ({ casts }) => {
  return casts?.map(({ cast_id, character, profile_path }) => (
    <li style={{ listStyle: 'none' }} key={cast_id}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : 'http://placehold.it/200x300'
        }
        alt={character}
      />
      <h2 style={{ textWrap: 'wrap', maxWidth: '200px' }}>{character}</h2>
    </li>
  ));
};
export default CastItem;
