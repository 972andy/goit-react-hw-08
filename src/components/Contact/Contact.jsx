import style from './Contact.module.css';

import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.card}>
      <div>
        <h3 className={style.name}>
          <MdPerson  />
          {name}
        </h3>
        <p className={style.number}>
          <MdPhone />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={style.btn}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
