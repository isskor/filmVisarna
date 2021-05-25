import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function ProfilePage() {
  const { loggedInUser } = useContext(UserContext);

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
                      type="text"
                      placeholder={loggedInUser.firstName}
                      required
                    />
                  </Form.Group>{" "}
                </div>
              </div>
              <div className="formController">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="login-info">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={loggedInUser.firstName}
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

            <Button variant="primary" type="submit">
              UPDATE INFO
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
