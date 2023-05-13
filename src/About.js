import React from "react";
import "./about.css";

export default function Info() {
  return (
    <>
      <head>
        <title>Circle Image Website</title>
        <link rel="stylesheet" type="text/css" href="about.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <section class="grid-container">
          <div class="bg-path">
            <img src={require("./images/line.svg")} alt="katkoviiva" />
          </div>
          <div class="timeline-el">
            <p>
              Vuoden 2022 marraskuussa järjestetyn Egyptin ilmastokokouksen
              jälkimainingeissa nousee esiin ajatus Suomesta ilmastotoimien
              johtomaana. Virkamiestyöstö alkaa kansallisen kampanjan
              aikaansaamiseksi.
            </p>
          </div>
          <div class="timeline-el">
            <img
              src={require("./images/webp/un-flags.webp")}
              alt="YK-maiden lippuja"
            ></img>
          </div>
          <div class="timeline-el">
            <img
              src={require("./images/webp/finnish-parliament.webp")}
              alt="tuoleja istuntosalissa"
            />
          </div>
          <div class="timeline-el">
            <p>
              Toukokuussa 2023 hallitus linjaa hallitusohjelmassaan tavoitteen
              siitä, että ilmastoteoilla, innovaatioilla ja osaamisella Suomen
              ilmastopolitiikasta rakennetaan vientituote. Ensimmäiset visiot
              kansallisen kampanjan muodosta alkavat hahmottua. Tässä kohtaa
              kampanja kulkee vain työnimellä “Tulevaisuushanke”.
            </p>
          </div>
          <div class="timeline-el">
            <p>
              Tammikuussa 2024 alkaa Hiilineutraali Suomi 2035 -kampanjan
              materiaalien levitys mediassa. Kyseessä on kunnianhimoinen
              kampanja, jonka tavoitteet pyrkivät aikaansaamaan 1920-luvun
              yhteiskunnan uusien tuulien kaltaisia asenteenmuutoksia.
            </p>
          </div>
          <div class="timeline-el">
            <img
              src={require("./images/webp/social-media.webp")}
              alt="some-tykkäys"
            />
          </div>
          <div class="timeline-el">
            <img
              src={require("./images/webp/crosswalk.webp")}
              alt="ihmisiä ylittämässä suojatietä"
            />
          </div>
          <div class="timeline-el">
            <p>
              Kampanjan toteutusaika on vuosien 2025 ja 2035 välillä ja se
              pyrkii ulottumaan jokaiseen suomalaisen yhteiskunnan lokeroon.
              Tarkastelet tällä hetkellä kampanjan kansalaisille suunnattua
              sivustoa, joka pureutuu jokapäiväiseen kuluttamiseen. Juuri sinä
              oletkin avainasemassa Suomen aseman kirjoittamisessa
              historiankirjoihin. Jäätkö odottamaan, vai aiotko uskaltaa?
            </p>
          </div>
          <div class="timeline-el">
            <p>
              Kampanja ei saavuta tavoitteitaan, ja Suomi päättää
              kollektiivisesti ja tietoisesti jäädä peesaamaan
              tulevaisuuskehityksen suhteen. Joudumme tanssimaan kehitysvastuun
              ottaneiden maiden pillien mukaan, kun yhteiskuntaamme järkyttää
              ulkopuolinen paine - vaikka meille puhdasta vettä ja laidunmaata
              riittääkin, poliittisesti voimakkaammat maat ja paremman
              neuvotteluaseman saavuttaneet tahot joutuvat tekemään meistä
              riippumattomia päätöksiä siitä, minne miljardit ihmiset siirretään
              ja heidän tarpeidensa tyydyttämiseen vaadittavat resurssit
              luodaan.
            </p>
            <img
              src={require("./images/webp/smog.webp")}
              alt="savusumua kaupungissa"
            />
          </div>
          <div class="timeline-el">
            <p>
              Suomi on hiilineutraali jo reippaasti ennen muuta Eurooppaa,
              saatika muuta maailmaa. Suomalainen luontoystävällinen elämäntapa
              on suosiossa maailmalla, ja maatamme kohtaan suhtaudutaan
              kunnioituksella ja ihainnoinnilla. Suomalaiset yritykset kulkevat
              kehityksen aallonharjalla ja luovat hyvinvointia valtakuntaan
              työpaikkojen, patenttiteknologian ja kestävän talouskasvun
              muodossa.
            </p>
            <img
              src={require("./images/webp/green-city.webp")}
              alt="vihreää nurmikkoa"
            />
          </div>
        </section>
      </body>
    </>
  );
}
