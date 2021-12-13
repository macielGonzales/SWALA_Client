import React from "react";
import "./PaginaPrincipal.css";
import Phone from "./icons/phone.svg";
import Mail from "./icons/mail.svg";

const PaginaPrincipal = () => {
  return (
    <div className="nolose">
      <div className="grid-container">
        <div className="navbar1">
          <ul>
            <li>
              <h4>Contactanos</h4>
            </li>
            <li>
              <img src={Phone} alt="" width="15" />
            </li>
            <li>
              <h4>+51 965475904</h4>
            </li>
            <li className="escondete">
                <li>
                <img src={Mail} alt="" width="15" />
                </li>
                <li>
                <h4>leicam@outlook.com</h4>
                </li>
            </li>
          </ul>
        </div>
        <div className="header"> HEADER</div>
        <div className="navbar2"> NAVBAR</div>
        <div className="sidebar"> SIDEBAR</div>
        <div className="main"> MAIN </div>
        <div className="footer"> FOOTER </div>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
