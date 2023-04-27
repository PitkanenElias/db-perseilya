import React, { useEffect, useState} from "react"
import "./meista.css"
export default function About() {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        // Tämä kertoo, missä kohtaa animaation kuuluu lähteä liikkelle, tai mitä ikinä halutaankaan tehdä
        const targetPosition = 200;
        if (scrollPosition > targetPosition) {
        setShouldAnimate(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
       
        <div  className="sivu">
            <img className="kuva1" src={require("./images/aboutKuva.jpg")} alt="kuva metsästä"></img>
            <h2  className="alaotsikko">A little effort towards saving the environment is better than no effort</h2>
            <div className="asiaa">
                <h3 className="toinenOtsikko">Lisätietoa Hiiletön Suomi-hankkeesta</h3>
                <div className="kohta1">
                    <p className="isoTeksti1"> Tänne tekstiä ilmastonmuutoksesta  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lectus vitae nisi efficitur, a tincidunt felis ornare. Nam varius varius pellentesque. Etiam malesuada, nunc eget interdum faucibus, erat nisl egestas lacus, eget ultrices nibh mi sit amet est. Mauris vel aliquet lorem. Integer gravida efficitur sagittis. Morbi efficitur, nunc in eleifend porta, lacus lectus aliquam diam, quis ultrices nulla dolor eget diam. Vestibulum nec elit ac lorem viverra sodales. Nam nec hendrerit leo, aliquam consectetur risus. Quisque eu elit quis est faucibus mollis. Pellentesque commodo nisl urna, nec auctor neque condimentum at. Quisque accumsan laoreet tortor vel sodales.

                        Proin gravida id odio quis accumsan. Cras a nulla massa. Sed gravida, sem at tempus pretium, elit ex aliquet nisl, ac accumsan metus mauris sit amet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a ornare nisl. Aliquam metus ex, posuere eget condimentum vitae, fermentum sit amet velit. Sed faucibus et diam pretium pharetra. Fusce sit amet tempor sem. Praesent non iaculis urna, vitae tincidunt nisi. Sed nec nibh et diam mollis consectetur vel nec mi. Sed quis enim ut tortor ultrices pharetra ac sit amet risus.
                        <br></br>
                        <br></br>
                        Nam metus erat, pharetra sed urna a, ultrices convallis lacus. Etiam aliquam ultricies enim, ut maximus lectus ultricies quis. Suspendisse potenti. Mauris eget suscipit nulla. Duis eleifend molestie libero, ac tristique velit ullamcorper ac. Aliquam erat volutpat. Sed ut turpis rutrum, placerat ipsum sed, elementum augue. Donec ut gravida ipsum, nec scelerisque libero. Vivamus non laoreet leo, in laoreet lorem. Phasellus tristique lectus sit amet lacinia venenatis. Duis lobortis sapien ac justo sagittis, non porta nibh facilisis. Vivamus egestas scelerisque arcu scelerisque commodo. Nulla facilisi.

                        Ut congue pretium venenatis.
                    </p>
                    <img src="" alt="ongelmia kuvan kanssa"></img>
                </div>
                <div className="kohta2">
                    <p className="isoTeksti2">
                        Cras vel felis id metus placerat consectetur. Fusce non vestibulum lectus, in maximus arcu. Integer suscipit enim ut magna sollicitudin, vitae facilisis tortor volutpat. Quisque in viverra justo, vitae fringilla ipsum. Vivamus non consequat risus. Donec volutpat lacus euismod convallis placerat. Praesent rutrum sapien ut erat elementum tempus. Phasellus consectetur pulvinar lectus. Vestibulum non porta augue. Etiam aliquet rutrum neque, in egestas erat pulvinar et. Nunc placerat efficitur dolor, nec fermentum lacus egestas at. Praesent porttitor consectetur augue nec tempus.
                        <br></br>
                        <br></br>
                        Quisque ultricies metus at sem ultricies luctus. Etiam ullamcorper purus id condimentum tempor. Vestibulum sit amet imperdiet dui. Quisque lacinia eget risus sed pellentesque. Mauris vestibulum est et turpis fermentum venenatis. Suspendisse velit orci, viverra eu rutrum in, tincidunt nec odio. Nulla eget quam facilisis, dignissim risus ac, rhoncus risus. Proin accumsan leo et ultricies commodo. In mauris risus, feugiat et magna ac, finibus dictum nunc. Sed tristique lacus in facilisis scelerisque.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lectus vitae nisi efficitur, a tincidunt felis ornare. Nam varius varius pellentesque. Etiam malesuada, nunc eget interdum faucibus, erat nisl egestas lacus, eget ultrices nibh mi sit amet est. Mauris vel aliquet lorem. Integer gravida efficitur sagittis. Morbi efficitur, nunc in eleifend porta, lacus lectus aliquam diam, quis ultrices nulla dolor eget diam. Vestibulum nec elit ac lorem viverra sodales. Nam nec hendrerit leo, aliquam consectetur risus. Quisque eu elit quis est faucibus mollis. Pellentesque commodo nisl urna, nec auctor neque condimentum at. Quisque accumsan laoreet tortor vel sodales.

                        Proin gravida id odio quis accumsan. Cras a nulla massa. 
                    </p>
                    <img src="" alt="ongelmia kuvan kanssa"></img>
                </div>
                <h2 className={shouldAnimate.toString()}>Tämä ilmestyy scrollatessa ja tämän voisi animoida kauniisti. Näitä voi myös tehdä paljon lisää</h2>
                <p className="igNimi"> Seuraa meitä myös Instagramissa @hiitelonsuomi</p>
            </div>
            <div className="someKuvat">
                <div className="igGrid">
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                    <img alt="ongelmia kuvan kanssa"></img>
                </div>
            </div>
        </div>
    )
};