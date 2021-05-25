import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProfilePage() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="profileContainer">
      <div className="profileMain"> </div>
      <div className="profileSideBar">
        <div className="sideBarTop"></div>
      </div>
    </div>
  );
}
