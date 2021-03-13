import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from './../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/contacts",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoulRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shoulRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
