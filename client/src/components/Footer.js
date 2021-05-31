import { Container } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMain">
        <div className="footerSection">
          <p className="footerLink"> Contact Us </p>
        </div>
        <div className="footerSection">Hej2</div>
        <div className="footerSection">Hej3</div>
      </div>
      <div className="footerBottom"></div>
    </div>
  );
}
