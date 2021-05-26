import { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setloggedInUser] = useState({});

  const whoami = async () => {
    let sessionUser = await fetch('http://localhost:3001/api/users/whoami', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    sessionUser = await sessionUser.json();
    console.log('session user***************:', sessionUser);
    if (sessionUser) {
      setloggedInUser(sessionUser);
    }
  };

  useEffect(() => {
    whoami();
    console.log('The SESSIONS in USER is: ', loggedInUser);
  }, []);

  const login = async (email, password) => {
    let user = {
      email: email,
      password: password,
    };

    let userToLogin = await fetch('http://localhost:3001/api/users/loginUser', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    userToLogin = await userToLogin.json();

    if (userToLogin) {
      setloggedInUser(userToLogin);
      // console.log('the logged in user is now:', userToLogin);
      whoami();
      return userToLogin;
    }
    console.log("Error user doesn't exist!");
  };

  const createUser = async (user) => {
    let userToRegiser = await fetch(
      'http://localhost:3001/api/users/createUser',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
    if (userToRegiser.success) {
      Alert('User registered!');
    }
  };
  const values = {
    loginState,
    setLoginState,
    isMember,
    setIsMember,
    users,
    setUsers,
    loggedInUser,
    setloggedInUser,
    login,
    createUser,
    whoami,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
