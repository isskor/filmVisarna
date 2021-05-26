import { Container } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

export default function LoginPage() {
  const [toBeMember, setToBeMember] = useState(true);
  const toggle = () => {
    setToBeMember(!toBeMember);
  };
  return (
    <div>
      <Container className="LoginPage mx-auto col-md-4 py-5">
      {toBeMember ? <Login /> : <Register />}
        <p onClick={toggle}>{toBeMember ? "Not a member yet?" : " Back to login"}</p>
      </Container>
    </div>
  );
}
