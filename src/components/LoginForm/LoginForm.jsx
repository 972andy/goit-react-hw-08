import style from './LoginForm.module.css';

import { Formik, Field, Form } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { LoginUserSchema } from '../utils/schema';

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: '',
    password: '',
  };
  const onHandleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onHandleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span>Email</span>
          <Field type="email" name="email" className={style.input} />
        </label>
        <label className={style.label}>
          <span>Password</span>
          <Field type="password" name="password" className={style.input} />
        </label>
        <button type="submit" className={style.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
