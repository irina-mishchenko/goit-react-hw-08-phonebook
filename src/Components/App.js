import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './AppBar/AppBar';
import { authOperations, authSelectors } from './../redux/auth';

const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const HomePageView = lazy(() => import('../views/HomePageView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense
              fallback={
                <Spinner animation="grow" />
              }
            >
              <PublicRoute path="/" exact>
                <HomePageView />
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
