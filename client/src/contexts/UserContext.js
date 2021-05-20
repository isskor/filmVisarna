import { createContext, useState } from "react"

export const UserContext = createContext();
const UserContextProvider = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [users, setUsers] = useState([
        {
            email: "Mika@gmail.com",
            password: "ABC"
        }
    ])

    const values =
    {
 
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider