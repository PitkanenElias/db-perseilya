import React, {useEffect} from "react";
import "./kampanja.css";

export default function Info() {

  /**
   * Avaa sivun aina yläosasta
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);

  var oddChildren = document.querySelectorAll('.timeline-el:nth-child(odd)');
  var evenChildren = document.querySelectorAll('.timeline-el:nth-child(even)');

  function applyRandomOffset(elements) {
    elements.forEach(function (element) {
      var randomTranslateY = Math.floor(Math.random() * 11) - 5; // Random number between -25 and 25

      if (elements === oddChildren) {
        var randomTranslateX = Math.floor(Math.random() * 5); // Random number between 0 and 25
      } else if (elements === evenChildren) {
        var randomTranslateX = Math.floor(Math.random() * -5); // Random number between -25 and 0
      }

      element.style.transform =
        'translate(' + randomTranslateX + 'rem, ' + randomTranslateY + 'rem)';
    });
  }

  applyRandomOffset(oddChildren);
  applyRandomOffset(evenChildren);
  
  return (
    <>
    <body>
        <header className="intro-block">
          <img src={require("./images/about-header.jpg")} alt="taiga stream header" />
          <div className="headers">
            <h1 className="bigHeader">TIETOA</h1>
            <h1 className="bigHeader">KAMPANJASTA</h1>
          </div>
          <div className="intro-text">
            <h2>
              Tämäkin kampanja on kulkenut pitkän matkan, ennen kuin se on päätynyt
              katsottavaksesi. Tältä sivulta voit perehtyä menneeseen ja
              vaihtoehtoisiin tuleviin.
            </h2>
          </div>
        </header>
        <div id="menuColor"></div>
        <div className="transition-wave">
          <img src="/content/stacked-waves.svg" alt="section transition" />
        </div>
        <section className="content">
          <section className="grid-container">
            <div className="timeline-el">
              <div className="block">
                <p className="plainText" >
                  Vuoden 2022 marraskuussa järjestetyn Egyptin ilmastokokouksen
                  jälkimainingeissa nousee esiin ajatus Suomesta ilmastotoimien
                  johtomaana.
                  <br />
                  <br />
                  Virkamiestyöstö alkaa kansallisen kampanjan aikaansaamiseksi.
                </p>
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <img src={require("./images/uncompressed originals/un-flags.png")} alt="united nations" />
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <img
                  src={require("./images/uncompressed originals/finnish-parliament.png")}
                  alt="finnish parliament"
                />
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <p className="plainText" >
                  Toukokuussa 2023 hallitus linjaa hallitusohjelmassaan tavoitteen
                  siitä, että ilmastoteoilla, innovaatioilla ja osaamisella Suomen
                  ilmastopolitiikasta rakennetaan vientituote.
                  <br />
                  <br />
                  Ensimmäiset visiot kansallisen kampanjan muodosta alkavat
                  hahmottua. Tässä kohtaa kampanja kulkee vain työnimellä
                  “Tulevaisuushanke”.
                </p>
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <p className="plainText" >
                  Tammikuussa 2024 alkaa Hiilineutraali Suomi 2035 -kampanjan
                  materiaalien levitys mediassa.
                  <br />
                  <br />
                  Kyseessä on kunnianhimoinen kampanja, jonka tavoitteet pyrkivät
                  aikaansaamaan 1920-luvun yhteiskunnan uusien tuulien kaltaisia
                  asenteenmuutoksia.
                </p>
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <img src={require("./images/uncompressed originals/social-media.png")} alt="social media" />
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <img src={require("./images/uncompressed originals/crosswalk.png")} alt="crosswalk people" />
              </div>
            </div>
            <div className="timeline-el">
              <div className="block">
                <p className="plainText" >
                  Kampanjan toteutusaika on vuosien 2025 ja 2035 välillä ja se
                  pyrkii ulottumaan jokaiseen suomalaisen yhteiskunnan lokeroon.
                  <br />
                  <br />
                  Tarkastelet tällä hetkellä kampanjan kansalaisille suunnattua
                  sivustoa, joka pureutuu jokapäiväiseen kuluttamiseen. Juuri sinä
                  oletkin avainasemassa Suomen aseman kirjoittamisessa
                  historiankirjoihin.
                  <br />
                  <br />
                  Jäätkö odottamaan, vai aiotko uskaltaa?
                </p>
              </div>
            </div>
            <div className="timeline-el arrow-left">
              <img src={require("./images/arrow.svg")} alt="arrow left" />
            </div>
            <div className="timeline-el arrow-right">
              <img src={require("./images/arrow.svg")} alt="arrow right" />
            </div>
            <div className="timeline-el" id="bad">
              <div className="block">
                <img src={require("./images/uncompressed originals/smog.png")} alt="smog skyline" />
                <p className="plainText" >
                  Kampanja ei saavuta tavoitteitaan, ja Suomi päättää
                  kollektiivisesti ja tietoisesti jäädä peesaamaan
                  tulevaisuuskehityksen suhteen.
                  <br />
                  <br />
                  Joudumme tanssimaan kehitysvastuun ottaneiden maiden pillien
                  mukaan, kun yhteiskuntaamme järkyttää ulkopuolinen paine. Vaikka
                  meille puhdasta vettä ja laidunmaata riittääkin, poliittisesti
                  voimakkaammat maat ja paremman neuvotteluaseman saavuttaneet tahot
                  jyräävät.
                  <br />
                  <br />
                  Ne tekevät meistä riippumattomia päätöksiä siitä, minne miljardit
                  ihmiset siirretään ja heidän tarpeidensa tyydyttämiseen
                  vaadittavat resurssit luodaan.
                </p>
              </div>
            </div>
            <div className="timeline-el" id="good">
              <div className="block">
                <img src={require("./images/uncompressed originals/green-city.png")} alt="green city" />
                <p className="plainText" >
                  Suomi on hiilineutraali jo reippaasti ennen muuta Eurooppaa,
                  saatika muuta maailmaa.
                  <br />
                  <br />
                  Suomalainen luontoystävällinen elämäntapa on suosiossa maailmalla,
                  ja maatamme kohtaan suhtaudutaan kunnioituksella ja
                  ihainnoinnilla.
                  <br /><br />
                  Suomalaiset yritykset kulkevat kehityksen aallonharjalla ja luovat
                  hyvinvointia valtakuntaan työpaikkojen, patenttiteknologian ja
                  kestävän talouskasvun muodossa.
                </p>
              </div>
            </div>
          </section>
        </section>
        <h1 className="bigHeader" text-align="center" margin-top="20vh">Miten valitset?</h1>
        <div className="transition-wave" id="end">
          <img src={require("./images/stacked-waves.svg")} alt="section transition" />
        </div>
      </body>
    </>
  );
}
