
import { Container, Form, Button,Alert } from "react-bootstrap"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import styles from "../styles/login.module.css"
import { useHistory } from "react-router-dom"

export default function Login() {
    const history = useHistory();
    const { users, setLoginState, setloggedInUser } = useContext(UserContext);
    const [Error, setError] = useState(false);

    const [userNameInput, setUserName] = useState("");
    const [passwordInput, setPassword] = useState("");

    const handleUsername = (e) => {
        setUserName(e.target.value)
        setError(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setError(false);
    }

    const login = (e) => {
        e.preventDefault();
        users.map((user) => {
            if ((user.email === userNameInput) && user.password === passwordInput) {
                setLoginState(true)
                setloggedInUser({
                    email: user.email,
                    password: user.password
                });
                history.push("/");
            } else {
                setError(true);
            }
        })
    }


    return (
        <Container >
            <h1 className="text-center login-info">Login</h1>
            <Form onSubmit={login}>
            <Alert variant={"danger"} className={`${styles.Alert} ${Error ? styles.Alert.active : styles.Alert.inactive}`}>You did not enter the correct credentials</Alert>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="login-info">Email</Form.Label>
                    <Form.Control onChange={handleUsername} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="login-info">Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Container className="text-center">
                    <Button variant="primary" type="submit">
                        SIGN IN
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}