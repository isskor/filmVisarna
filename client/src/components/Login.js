
import { Container, Form, Button } from "react-bootstrap"

export default function Login() {

    return (
        <Container >
            <h1 className="text-center login-info">Login</h1>
            <Form>
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