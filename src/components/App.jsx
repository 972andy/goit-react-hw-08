import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './Layout/Layout';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
