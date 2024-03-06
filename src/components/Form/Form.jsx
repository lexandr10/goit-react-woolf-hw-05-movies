import { useState } from 'react';
import css from './Form.module.css';
const Form = ({ onSubmit }) => {
  const [querty, setQuerty] = useState('');
  const handlerSubmit = evt => {
    evt.preventDefault();
    onSubmit(querty);
    setQuerty('');
  };
  const handlerChange = evt => {
    setQuerty(evt.target.value);
  };
  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.labelInput} htmlFor="search">
        Find movie by name
      </label>
      <input
        className={css.search}
        placeholder="Search movie..."
        name="search"
        value={querty}
        onChange={handlerChange}
        type="text"
      />
      <button className={css.btnSearch} type="submit">
        Search
      </button>
    </form>
  );
};
export default Form;
