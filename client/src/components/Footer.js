import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMain">
        <div className="footerMainSection">
          <div>
            <Link to="/About" className="footerLink">
              About Us
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/calendar" className="footerLink">
              Calendar
            </Link>
          </div>
          <div>
            <Link to="/Login" className="footerLink">
              Sign in
            </Link>{" "}
          </div>
        </div>
        <div className="footerMainSection2">
          <p className="footerLink"> Filmvisarvägen 55 </p>
          <p className="footerLink"> Huaröd </p>
          <p className="footerLink"> 070 555 66 32 </p>
        </div>
        <div className="footerSection">
          <p className="footerLink"> Filmvisarna@contact.com </p>
        </div>
      </div>
      <hr />
      <div className="footerBottom">
        <div className="footerSection2 ">
          <div className="footerSocials">
            <div className="twitter"> </div>
            <div className="youtube"> </div>
            <div className="instagram"> </div>
            <div className="facebook"> </div>
          </div>
        </div>
        <div className="footerSection2 "></div>
        <p> © Filmvisarna 2015 to 2021. All rights reserved. </p>
      </div>
    </div>
  );
}
