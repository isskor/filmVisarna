
import { Container, Form, Button, Alert } from "react-bootstrap"
import { useState, useEffect ,useContext } from "react"
import styles from "../styles/login.module.css"
import { UserContext } from "../contexts/UserContext"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputValidation, setInputValidation] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const { createUser } = useContext(UserContext);

    useEffect(() => {
        if (confirmPassword === "") {
          setInputValidation(true)
        } else {
          setInputValidation(false)
          if (confirmPassword.length >= 4 && password === confirmPassword) {
            setIsValid(true)
          }
          else {
            setIsValid(false)
          }
        }
      }, [password, confirmPassword])

    const emailInput = (e) => {
        setEmail(e.target.value)
      }
      
    const passwordInput = (e) => {
        setEmail(e.target.value)
      }

      const checkPassword = (e) => {
        setConfirmPassword(e.target.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
      }


  return (
    <Container >
    <h1 className="text-center login-info">Register</h1>
    <Form onsubmit={handleSubmit}>
    <Alert variant={"danger"} className={`${styles.Alert} ${Error ? styles.Alert.active : styles.Alert.inactive}`}>You did not enter the correct credentials</Alert>
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="login-info">First name</Form.Label>
            <Form.Control onChange={emailInput}  type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label className="login-info">Password</Form.Label>
            <Form.Control onChange={passwordInput} type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm the password</Form.Label>
          <Form.Control className={inputValidation ? "" : isValid ? "is-valid" : "is-invalid"} onChange={checkPassword} type="password" name="confirm" placeholder="Confirm Password" required />
        </Form.Group>

        <Container className="text-center">
            <Button  variant="primary" type="submit">
                REGISTER
            </Button>
        </Container>
    </Form>

</Container>
  )
}