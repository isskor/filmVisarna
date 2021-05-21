import { createContext, useState } from "react"
import { Alert } from "react-bootstrap";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setloggedInUser] = useState({});


    const login = async (email, password) => {
        let userTologin = await fetch('/api/users/loginUser');
        if (userTologin) {
         setloggedInUser(userTologin);
         return userTologin;
        } console.log("Error user doesnt exist!");
    }

    const createUser = async (inputFirstName, inputLastName, inputEmail, inputPassword ) => {
        console.log("hello");
        let userToRegiser = await fetch('/api/users/createUser', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                password: inputPassword,
            }),

        });
       if(userToRegiser.success){
           Alert("User registered!");
       }
        
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
        createUser,
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider