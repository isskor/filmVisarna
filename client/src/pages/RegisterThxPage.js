import React from "react";
import { useHistory } from "react-router-dom";

const RegisterThxPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };

  return (
    <div className="registerThxPage">
      <h1>Thanks for registering!</h1>
      <button onClick={goToHome}>Back to home</button>
    </div>
  );
};

export default RegisterThxPage;
