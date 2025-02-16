import React, { useRef, useState } from "react";
import Logo3 from "../../assets/images/Government Logo.PNG";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="d-flex justify-content-center" style={{padding: "16px 0px"}}>
        <img src={Logo3.src} width="200px"/>
      </div>
      {/* <div className="footer-title-top">
        <span>© 2024 CODE. All rights reserved</span>
      </div> */}
      <div className="footer-title-bottom">
        <span>© 2025 National Security Framework of the </span>
        <span>Polar Regions. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
