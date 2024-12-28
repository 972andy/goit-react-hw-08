import style from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.menu}>
      <p className={style.welcome}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={style.btn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
