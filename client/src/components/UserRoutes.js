import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

//Gets all prop data
const UserRoutes = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(UserContext);

  return loggedInUser ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <div>
      <h3>404</h3>
    </div>
  );
};

export default UserRoutes;
