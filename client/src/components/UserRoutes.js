import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import RedirectPage from '../pages/RedirectPage';

//Gets all prop data
const UserRoutes = ({ children, ...rest }) => {
  const { loggedInUser } = useContext(UserContext);

  return loggedInUser ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <div>
      <RedirectPage userRoute={true} />
    </div>
  );
};

export default UserRoutes;
