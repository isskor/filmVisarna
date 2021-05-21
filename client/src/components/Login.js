
import { Container, Form, Button,Alert } from "react-bootstrap"
import { useState } from "react"
import styles from "../custom.scss"

export default function Login() {
    const [isError, setIsError] = useState(false);

    return (
        <Container >
            <h1 className="text-center login-info">Login</h1>
            <Form>
            <Alert variant={"danger"} className={`${styles.Alert} ${isError ? styles.Alert.active : styles.Alert.inactive}`}>You did not enter the correct credentials</Alert>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="login-info">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="login-info">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
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