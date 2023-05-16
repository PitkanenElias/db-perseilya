import React from "react";
import "./footerStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerVasen">
        <div className="some">
          <img
            src={require("./images/webp/Instagram.webp")}
            className="someItem"
            width={50}
            alt="Instagram-logo"
          />
          <p className="someItem">@hiiletonsuomi</p>
        </div>
        <div className="some">
          <img
            src={require("./images/webp/Twitter.webp")}
            className="someItem"
            alt="Twitter-logo"
          />
          <p className="someItem">@hiiletonsuomi</p>
        </div>
        <div className="some">
          <img
            src={require("./images/webp/Facebook.webp")}
            className="someItem"
            width={50}
            alt="Facebook-logo"
          />
          <p className="someItem">@hiiletonsuomi</p>
        </div>
      </div>
      <div className="footerOikea">
        <img
          className="ministeriöLogo"
          src={require("./images/ministerioLogo.svg")}
          alt="Ympäristöministeriö"
        />
      </div>
    </div>
  );
}
