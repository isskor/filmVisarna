import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMain">
        <div className="footerSection">
          <Link to="/About" className="footerLink">
            {" "}
            About Us{" "}
          </Link>
          <p className="footerLink"> Help </p>
          <p className="footerLink"> Contact Us </p>
          <p className="footerLink"> Information </p>
          <p className="footerLink"> Join our team </p>
        </div>
        <div className="footerSection">
          <p className="footerLink"> Cookie Policy </p>
          <p className="footerLink"> Privacy </p>
          <p className="footerLink"> Legal </p>
        </div>
        <div className="footerSection">
          <p className="footerLink"> Android Download </p>
          <p className="footerLink"> iOS Download </p>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerSocials">
          <div className="twitter"> </div>
          <div className="youtube"> </div>
          <div className="instagram"> </div>
          <div className="facebook"> </div>
        </div>
        <p> © Filmvisarna 2015 to 2021. All rights reserved. </p>
      </div>
    </div>
  );
}
