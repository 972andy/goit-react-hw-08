import style from './ContactForm.module.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { AddProfileSchema } from '../utils/schema';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span>Name</span>
          <Field type="text" name="name" className={style.input} />
          <ErrorMessage name="name" component="span" className={style.errorMsg} />
        </label>
        <label className={style.label}>
          <span>Number</span>
          <Field type="text" name="number" className={style.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={style.errorMsg}
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
