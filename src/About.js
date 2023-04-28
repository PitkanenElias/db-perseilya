import React, { useEffect, useState} from "react"
import "./meista.css"
export default function About() {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        // Tämä kertoo, missä kohtaa animaation kuuluu lähteä liikkelle, tai mitä ikinä halutaankaan tehdä
        const targetPosition = 500;
        if (scrollPosition > targetPosition) {
        setShouldAnimate(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
 
    return (
        <div  className="teksti">
        <h2  className="alaotsikko">Tällä sivulla tulee skrollamalla esiin uusi teksti</h2>
        <img
        className="pallo1"
        src={require("./images/Ellipse 1.svg")}
        alt="tama on kuva">    
        </img>
        
        <h2 className={shouldAnimate.toString()}>Tämä ilmestyy scrollatessa ja tämän voisi animoida kauniisti. Näitä voi myös tehdä paljon lisää</h2>
        <p> Tänne tekstiä hiilineutraaliuudesta</p>
        </div>
    )
};