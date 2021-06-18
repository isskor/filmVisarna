import { Container } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

export default function LoginPage() {
  const [toBeMember, setToBeMember] = useState(true);
  const toggle = () => {
    setToBeMember(!toBeMember);
  };
  //TobeMember is a useState variable that toggles between "login" and "register"  when the text "not a member" and "back to login" is beeing clicked 
  
  return (
    <div>
      <Container className="LoginPage mx-auto col-md-4 py-5">
        {toBeMember ? <Login /> : <Register />}
        <p onClick={toggle}>
          {toBeMember ? "Not a member yet?" : " Back to login"}
        </p>
      </Container>
    </div>
  );
}
