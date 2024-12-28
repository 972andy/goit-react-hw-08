import style from './AuthNav.module.css';

import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={style.link}>
        Log In
      </NavLink>
      <NavLink to="/register" className={style.link}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
