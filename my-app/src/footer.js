import React from "react";
import './App.css'


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4> Buthelezi Org.</h4>
            <h1 className="list-unstyled">
              <li>031 745 12589</li>
              <li>Durban, South Africa</li>
              <li>123 Street Musgrave, Berea</li>
            </h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ndumiso Buthelezi | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;