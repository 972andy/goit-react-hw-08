import style from './RegistrationForm.module.css';

import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { RegisterUserSchema } from '../utils/schema';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUE = {
    name: '',
    email: '',
    password: '',
  };

  const onHandleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={onHandleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            className={style.input} />
        </label>
        <label className={style.label}>
          <span>Email</span>
          <Field
            type="email"
            name="email"
            className={style.input} />
        </label>
        <label className={style.label}>
          <span>Password</span>
          <Field
            type="password"
            name="password"
            className={style.input} />
        </label>
        <button
          type="submit" className={style.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
