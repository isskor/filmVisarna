import { createContext, useState } from "react";
import { Alert } from "react-bootstrap";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setloggedInUser] = useState({});

  const login = async (email, password) => {
    let user = {
      email: email,
      password: password,
    };

    let userToLogin = await fetch("http://localhost:3001/api/users/loginUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    userToLogin = await userToLogin.json();

    if (userToLogin) {
      setloggedInUser(userToLogin);
      console.log("the logged in user is now:", userToLogin);
      return userToLogin;
    }
    console.log("Error user doesn't exist!");
  };

  const createUser = async (user) => {
    let userToRegiser = await fetch(
      "http://localhost:3001/api/users/createUser",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (userToRegiser.success) {
      Alert("User registered!");
    }
  };

  const editUser = async (user) => {
    let userToEdit = await fetch("http://localhost:3001/api/users/editUser", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (userToEdit.success) {
      Alert("User updated!");
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
    editUser,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
