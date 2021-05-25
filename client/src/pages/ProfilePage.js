import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

export default function ProfilePage() {
  const { loggedInUser } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputValidation, setInputValidation] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const { createUser } = useContext(UserContext);

  useEffect(() => {
    if (confirmPassword === "") {
      setInputValidation(true);
    } else {
      setInputValidation(false);
      if (confirmPassword.length >= 4 && password === confirmPassword) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [password, confirmPassword]);

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    createUser(user);
    history.push("/login");
  };

  return (
    <div className="profileContainer">
      <div className="profileSideBar">
        <Link to="/Profile">My Profile</Link>
        <Link to="/Bookings">Upcoming Bookings</Link>
        <Link to="/Bookings">Previous Bookings</Link>
      </div>
      <div className="profileMain">
        <h2> Hello {loggedInUser.firstName} </h2>{" "}
        <h4> Here you can view your bookings and account settings</h4>
        <hr />
        <div className="profileAccount">
          <h3> My Details</h3>

          <Form>
            <div className="profileAccountBox">
              <div className="profileIcon" />
              <div className="profileAccountContent">
                <div className="formController">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="login-info">First name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={loggedInUser.firstName}
                      required
                    />
                  </Form.Group>{" "}
                </div>
              </div>
              <div className="formController">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="login-info">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={loggedInUser.lastName}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="profileAccountBox">
              <div className="lockIcon" />
              <div className="profileAccountContent">
                <div className="formController">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="login-info">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*********"
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="formController">
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm the password</Form.Label>
                  <Form.Control
                    className={
                      inputValidation ? "" : isValid ? "is-valid" : "is-invalid"
                    }
                    onChange={checkPassword}
                    type="password"
                    name="confirm"
                    placeholder="*********"
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="profileAccountBox">
              <div className="emailIcon" />
              <div className="profileAccountContent">
                <div className="formController">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="login-info">Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={loggedInUser.email}
                      required
                    />
                  </Form.Group>{" "}
                </div>
              </div>
            </div>
            <Container className="text-center">
              <Button variant="primary" type="submit">
                UPDATE INFO
              </Button>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
}
