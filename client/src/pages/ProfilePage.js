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
          <div className="profileAccountBox">
            <div> hello </div>
            <Form>
              <div className="profileAccountContent">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="login-info">First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={loggedInUser.firstName}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  REGISTER
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
