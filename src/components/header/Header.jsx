import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useRef } from 'react';
const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.list}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
