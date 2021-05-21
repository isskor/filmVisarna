import { createContext, useState } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setloggedInUser] = useState({});


    const login = async (email, password) => {
        let userTologin = await fetch('/api/users/loginuser');
        if (userTologin) {
         setloggedInUser(userTologin);
         return userTologin;
        } console.log("Error user doesnt exist!");


    }
    const values =
    {
        loginState,
        setLoginState,
        isMember,
        setIsMember,
        users,
        setUsers,
        loggedInUser,
        setloggedInUser,
        login,
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider