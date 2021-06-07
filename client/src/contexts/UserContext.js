import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setloggedInUser] = useState(null);
  const [userBookings, setUserBookings] = useState(null);

  const logout = async () => {
    let userToLogOut = await fetch('http://localhost:3001/api/users/logout', {
      method: 'GET',
      credentials: 'include',
    });
    userToLogOut = await userToLogOut.json();
    if (userToLogOut.success) {
      setLoginState(false);
      setIsMember(false);
      setloggedInUser(null);
    }
  };

  const whoami = async () => {
    let sessionUser = await fetch('http://localhost:3001/api/users/whoami', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    sessionUser = await sessionUser.json();
    // console.log('session user***************:', sessionUser);
    if (sessionUser.error) {
      setloggedInUser(null);
      setLoginState(false);
      return;
    }
    setloggedInUser(sessionUser);
    setLoginState(true);
  };

  useEffect(() => {
    whoami();
    // console.log('The SESSIONS in USER is: ', loggedInUser);
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

    if (userToLogin.error) {
      setloggedInUser(null);
      setLoginState(false);
      return userToLogin;
    }

    setloggedInUser(userToLogin);
    setLoginState(true);
    return userToLogin;
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
      alert('User registered!');
    }
  };

  const editUser = async (user) => {
    let userToEdit = await fetch('http://localhost:3001/api/users/editUser', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    userToEdit = await userToEdit.json();
    if (userToEdit.success) {
      // console.log('Here is userEdit.user', userToEdit.user);
      setloggedInUser(userToEdit.user);
    }
  };

  const deleteBooking = async (bookingId) => {
    console.log(bookingId);
    let bookingToDelete = await fetch('http://localhost:3001/api/delete', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingId),
    });
    console.log(bookingToDelete);
    getUserBookings();
    return bookingToDelete;
  };

  const getUserBookings = async () => {
    let allUserBookings = await fetch(
      'http://localhost:3001/api/get-user-bookings',
      { method: 'GET', credentials: 'include' }
    );
    if (allUserBookings.error) {
      alert('error');
      return;
    }
    allUserBookings = await allUserBookings.json();
    // console.log("allUserBookings, ", allUserBookings);
    setUserBookings(allUserBookings);
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
    editUser,
    whoami,
    logout,
    userBookings,
    getUserBookings,
    deleteBooking,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
