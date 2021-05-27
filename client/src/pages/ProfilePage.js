import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProfilePage() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="profileContainer">
      <div className="profileSideBar">
        <Link to="/Profile">My Profile</Link>
        <Link to="/">Account Info</Link>
        <Link to="/Bookings">Upcoming Bookings</Link>
        <Link to="/Bookings">Previous Bookings</Link>
      </div>
      <div className="profileMain">
        <h2> Hello {loggedInUser.firstName} </h2>{" "}
      </div>
    </div>
  );
}
