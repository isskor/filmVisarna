import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/login.module.css";
import { UserContext } from "../contexts/UserContext";

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputValidation, setInputValidation] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const { createUser } = useContext(UserContext);
  const [error, setError] = useState(false);

  // useState variabler for every input in the form, email, password, firstName, lastName
  //confirmpassword is for the comparison with the second password form to validate if its the same password
  // useEffecten contains the logic for checking that the password requirements are met
  // isValid are true or false, for showing the red triangle for the password input field

  useEffect(() => {
    if (confirmPassword === "") {
      setInputValidation(true);
    } else {
      setInputValidation(false);
      if ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(confirmPassword) && password === confirmPassword) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [password, confirmPassword]);

  const emailInput = (e) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value
      )
    ) {
      setError(false);
      setEmail(e.target.value);
    } else setError("You did not enter the correct credentials");
  };

  const passwordInput = (e) => {
    if (
       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
        e.target.value
      )
    ) {
      setError(false);
      setPassword(e.target.value);
    } else setError("You did not enter the correct credentials");
  };

  const firstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const checkPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setError(true);
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    let newUser = await createUser(user);
    console.log(newUser);
    if (newUser.error) {
      setError(newUser.error);
      return;
    } else {
      history.push("/thank-you-for-registering");
    }
  };

  return (
    <Container>
      <h1 className="text-center login-info">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Alert
          variant={"danger"}
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
          {error}
        </Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="login-info">Email</Form.Label>
          <Form.Control
            onChange={emailInput}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <small
          id="emailHelp"
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
          Please enter an email adress
        </small>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login-info">Password</Form.Label>
          <Form.Control
            onChange={passwordInput}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <small
          id="emailHelp"
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
           password must be more than 8 characters long, have at least one number and at least one special character
        </small>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm the password</Form.Label>
          <Form.Control
            className={
              inputValidation ? "" : isValid ? "is-valid" : "is-invalid"
            }
            onChange={checkPassword}
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login-info">First name</Form.Label>
          <Form.Control
            onChange={firstNameInput}
            type="text"
            placeholder="First Name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login-info">Last Name</Form.Label>
          <Form.Control
            onChange={lastNameInput}
            type="text"
            placeholder="Last Name"
            required
          />
        </Form.Group>

        <Container className="text-center">
          <Button variant="primary" type="submit">
            REGISTER
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
