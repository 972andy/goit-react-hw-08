import style from './SearchBox.module.css';

import { changeFilter } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = evt => dispatch(changeFilter(evt.target.value));

  return (
    <div>
      <label htmlFor="find" className={style.label}>
        <span>Find contacts by name</span>
        <input
          className={style.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
