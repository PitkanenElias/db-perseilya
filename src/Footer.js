import React from "react";
import "./footerStyles.css"

export default function Footer() {
    return (
        <div className="footer">
            <img className="ministeriöLogo" src={require("./images/ministerioLogo.svg")} alt="Ympäristöministeriö"/>
        </div>
    )
};