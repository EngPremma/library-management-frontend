import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { checkAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={props => (checkAuth() ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
