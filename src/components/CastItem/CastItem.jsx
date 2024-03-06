const CastItem = ({ casts }) => {
  return casts?.map(({ cast_id, character, profile_path }) => (
    <li style={{ listStyle: 'none' }} key={cast_id}>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
      <h2>{character}</h2>
    </li>
  ));
};
export default CastItem;
