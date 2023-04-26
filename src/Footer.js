import React from "react";
import "./footerStyles.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerVasen">
                <div className="someLogot">
                </div>
                <div className="someLogot">
                    <p className="ig">@hiiletonsuomi</p>
                    <p className="twitter">@hiiletonsuomi</p>
                    <p className="facebook">@hiiletonsuomi</p>
                </div>
            </div>
            <div className="footerOikea">
                <img className="ministeriöLogo" src={require("./images/ministerioLogo.svg")} alt="Ympäristöministeriö"/>
            </div>
        </div>
    )
};