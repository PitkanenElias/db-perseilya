import React, {useEffect} from "react";
import "./tietoa.css";
export default function About() {

  /**
   * Avaa sivun aina yläosasta
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);


  return (
    <>
      <div className="sivu">
        <div className="yläosa">
          <img
            className="kuva1"
            src={require("./images/webp/aboutKuva.webp")}
            alt="kuva metsästä"
          ></img>
          <h2 className="alaotsikko">
            Muutos alkaa yksilöstä
          </h2>
        </div>  
        <div id="menuColor"></div>
        <div className="asiaa">
          <p className="tietoTekstiä">
          72 prosenttia koko maailman kasvihuonekaasupäästöistä aiheutuu kotitalouksien kulutuksesta. Myös Suomessa kotitalouksien kulutus muodostaa 68 prosenttia kotimaan kasvihuonekaasupäästöistä. Loput syntyvät julkisesta kulutuksesta ja investoinneista. Ilmastonmuutoksen hillintä edellyttääkin siis toimia koko yhteiskunnassa. <br/><br/>
          Vuonna 2010 suomalaisen kulutusmenoista keskimäärin aiheutuvat kasvihuonekaasupäästöt olivat 11,5 tCO2e / henkilö. Koko maailman keskiarvo oli 6,0 tCO2e,  eli suomalaisten päästöt ovat tähän verrattuna lähes kaksinkertaiset. Myös Euroopan mittakaavassa päästömäärä on korkea, ja yhteisvastuun nimissä suomalaisten on aika toimia.<br/><br/>
          Alta löydät arkielämää lähellä olevia aihealueita, joihin vaikuttamalla juuri sinä voit olla mukana nostamassa Suomea ilmastonmuutoksen vastaisen työn aallonharjalle.

          </p>
          <h3 className="väliOtsikko">Arkielämän osa-alueita:</h3>
          <div className="osa-alueet">
            <div className="arkielamaa">
              <h4 className="väliväliOtsikko">Vedestä:</h4>
              <p className="esittelyTeksti">
              Turha veden juoksutus, liian pitkät suihkut ja vuotavat vesikalusteet voi huomaamatta valuttaa hukkaan kymmeniä litroja vettä päivässä. Vähentämällä ylimääräistä veden kulutusta, voit sekä keventää ympäristön kuormaa että säästää omaa lompakkoasi.
              <br/><br/>Kahdeksan minuutin päivittäinen suihku maksaa vuodessa noin 300 euroa. Puolittamalla ajan puolitat samalla vesilaskun. Samalla hiilijalanjälkesi pienenee 0,5 % vuodessa. Tämän lisäksi asentamalla vesimittarin ja säästämällä 20 % vedenkulutuksesta pienennät hiilijalanjälkeäsi toisella 0,5 %:lla  vuodessa. Jos miljoona suomalaista tekisi näin, säästyisi lähes 9 000 henkilön kokonaishiilijalanjälki.
              </p>
              <img className="icon1"
              src={require("./images/Vesivuoto.svg")}
              alt="Vesihana"> 
              </img>
            </div>
            <div className="arkielamaa">
              <h4 className="väliväliOtsikko">Energiasta:</h4>
              <p className="esittelyTeksti">
              Kodeissa energiaa kuluu eniten lämmitykseen. Toiseksi eniten sähköä vie veden lämmittäminen. Onkin erityisen tärkeää varmistaa, että asunnon lämpötila on korkeintaan 21 astetta ja lämmintä vettä ei tuhlata.
              <br/><br/>
              Kodin energiatehokkuutta parantavista ratkaisuista ilmalämpöpumppu on kustannustehokkain. Ilmalämpöpumpun avulla hiilijalanjälkesi pienenee 4 % vuodessa. Jos miljoona suomalaista asentaisi ilmalämpöpumpun, säästyisi noin 39 000 henkilön kokonaishiilijalanjälki.
              <br/><br/>
              Asentamalla omakotitalon tai mökin katolle aurinkokeräimen saat lämmintä käyttövettä ilmaiseksi, ja järjestelmää tarvitsee huoltaa vain harvoin. Alkuinvestoinnin jälkeen säästöä syntyy muun muassa lämmityskustannuksista ja hiilijalanjälkesi pienenee 7 % vuodessa. Jos miljoonaa suomalaista asentaisi keräimen, säästyisi 66 000 asukkaan kokonaishiilijalanjälki.
              </p>
              <img className="icon1"
              src={require("./images/Sähkö.svg")}
              alt="Sähkö"> 
              </img>
            </div>
            <div className="arkielamaa">
              <h4 className="väliväliOtsikko">Kulkemisesta:</h4>
              <p className="esittelyTeksti">
              Liikenne tuottaa noin 20 prosenttia Suomen kasvihuonekaasupäästöistä. Pienellä investoinnilla voit muuttaa bensiini- tai dieselkäyttöisen auton bioetanolikäyttöiseksi, kunhan autossa ei ole suorasuihkumoottoria. Bioetanolin osuus polttonesteessä laskee autoilun fossiilisia päästöjä jopa 80 prosenttia ja pienentää hiilijalanjälkeäsi 16,5 prosenttia vuodessa. Laskennallisesti, jos miljoonaa suomalaista tekisi näin, säästyisi noin 181 000 asukkaan kokonaishiilijalanjälki.
              <br/><br/>
              Toisaalta jaettu työmatka on myös oiva hetki aamupalaverille työporukan kesken. Jos matkustat kolmen henkilön kimppakyydissä kolmesti viikossa yksin ajamisen sijasta, pienenee hiilijalanjälkesi 1 % vuodessa. Jos miljoona suomalaista tekeisi näin, säästyisi 11 000 asukkaan kokonaishiilijalanjälki.
              <br/><br/>
              Tämän lisäksi etätyöpäivänä työt voit tehdä kotoa tai vaikkapa kahvilasta käsin ja työmatkoihin kuluva aika jää muuhun. Jos työpaikallasi ei ole ollut tapana tehdä etätöitä, saattaa koko käsite olla työkavereiden keskuudessa vieras. Yksi etätyöpäivä viikossa pienentää hiilijalanjälkeäsi prosentilla. Jos miljoona suomalaista tekee lisäksesi yhden etäpäivän viikossa, säästyisi 11 000 asukkaan kokonaishiilijalanjälki.
              </p>
              <img className="icon1"
              src={require("./images/Auto.svg")}
              alt="Auto"> 
              </img>
            </div>
            <div className="arkielamaa">
              <h4 className="väliväliOtsikko">Hankinnoista</h4>
              <p className="esittelyTeksti">
                Entä, jos haastaisit itsesi testaamaan kasvisruokavaliota vuoden ajan? Ruokavalio monipuolistuu, kokkaustaidot karttuvat ja kasvisruoka on edullista, terveellistä ja herkullista. Yhä useampi meistä on kasvissyöjä, joten valikoimaa ja vertaistukea on tarjolla runsaasti. Lihasta luopumalla voit pienentää hiilijalanjälkeäsi 7 % vuodessa. Säästö vastaa esimerkiksi 4100 autoilukilometriä.
                <br/><br/>
                Kiinnostaisiko oikea voittajan peliliike? Vanhat aarniometsät ovat tärkeitä hiilivarastoja ja yhteistä perintöämme, jonka suojelijaksi jokainen voi ryhtyä. Lahjoittamalla esimerkiksi sata euroa vuosittain ikimetsien suojeluun varmistat, että alueet muuttuvat luonnonsuojelualueiksi, jotka varastoivat hiiltä sekä ylläpitävät lajien kirjoa. Sadalla eurolla Luonnonperintösäätiö ostaa 200 neliömetriä luonnonalueita ja rauhoittaa ne pysyvästi.
              </p>
              <img className="icon1"
              src={require("./images/Ostoskassi.svg")}
              alt="Ostoskassi"> 
              </img>
            </div>
         </div>
        </div>
        <h3 className="väliOtsikko">Ulkopuolisia lähteitä</h3>
        <div className="wrappaaja">
          <div className="information">
            <div className="lahde">
              <h3 className="lahdeOtsikko">Suomen ilmastopaneeli</h3>
              <p className="esittelyTeksti">
              Ilmastopaneeli on tieteellinen ja riippumaton asiantuntijaelin, joka tukee ilmastopolitiikan suunnittelua ja sitä koskevaa päätöksentekoa. Paneeli edistää tieteen ja politiikan välistä vuoropuhelua ilmastokysymyksissä. Paneeli lausuu ilmastosuunnitelmien luonnoksista, antaa suosituksia hallituksen ilmastopoliittiseen päätöksentekoon ja vahvistaa monitieteellistä otetta ilmastotieteissä.
              </p>
              <a href="https://www.ilmastopaneeli.fi/">
                <h4 className="haeTietoa">Lisää tietoa</h4>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="lahde">
              <h3 className="lahdeOtsikko">Sitoumus2050</h3>
              <p className="esittelyTeksti">
              Kansalaiset voivat tehdä henkilökohtaisia hiilijalanjälkisuunnitelmia Sitoumus2050-palvelussa. Kaikkia sitoumuksia yhdistää mitattavat tavoitteet, jotka vievät eteenpäin YK:n kestävän kehityksen Agenda 2030:n tavoitteita. Sitoumukset julkaistaan sitoumus2050 -palvelussa, joka toimii ikkunana Suomessa tehtävälle kestävän kehityksen työlle. Palvelussa oma sitoumus saa näkyvyyttä, toisaalta sitoumuksen julkaisu palvelussa edellyttää tulosten raportoimista.
              </p>
              <a href="https://sitoumus2050.fi/koti#/">
                <h4 className="haeTietoa">Lisää tietoa</h4>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="lahde">
              <h3 className="lahdeOtsikko">Luonnonperintösäätiö</h3>
              <p className="esittelyTeksti">
              Luonnonperintösäätiö suojelee Suomen luontoa, ensisijaisesti uhanalaista metsää. Säätiö hankkii omistukseensa luonnonalueita ja takaa niille luonnonsuojelulain mukaisen pysyvän rauhoituksen. Se on voittoa tuottamaton, yleishyödyllinen yhteisö, jonka säännöissä määritelty tehtävä on luonnonsuojelualueiden perustaminen ja säilyttäminen.               </p>
              <a href="https://luonnonperintosaatio.fi/">
                <h4 className="haeTietoa">Lisää tietoa</h4>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="lahde">
              <h3 className="lahdeOtsikko">Compensate</h3>
              <p className="esittelyTeksti">
              Compensate tarjoaa korkealaatuisia päästökompensaatiopalveluita pääasiassa yrityksille ja muille organisaatioille. Compensate-säätiö keskittyy vapaaehtoisten hiilimarkkinoiden uudistamiseen ja sääntelyn kehittämiseen. Se on voittoa tavoittelematon ja sen toiminta rahoitetaan täysin lahjoituksilla.              </p>
              <a href="https://sitoumus2050.fi/koti#/">
                <h4 className="haeTietoa">Lisää tietoa</h4>
              </a>
            </div>
          </div>
          <div className="information">
            <div className="lahde">
              <h3 className="lahdeOtsikko">Motiva</h3>
              <p className="esittelyTeksti">
              Motiva on valtion kestävän kehityksen yhtiö, joka kannustaa energian ja materiaalien tehokkaaseen ja kestävään käyttöön. Tarjoamme julkishallinnolle, yrityksille, kunnille ja kuluttajille tietoa, ratkaisuja ja palveluja, joiden avulla ne voivat tehdä resurssitehokkaita, vaikuttavia ja kestäviä valintoja
              </p>
              <a href="https://www.motiva.fi/">
                <h4 className="haeTietoa">Lisää tietoa</h4>
              </a>
            </div>
          </div>
        </div>
        <p className="igNimi">
          {" "}
          Seuraa meitä myös Instagramissa @hiiletonsuomi
        </p> 
        <div className="igRow">
          <img
            className="igPostaus"
            id="ig1"
            src={require("./images/webp/ig_fakta.webp")}
            alt="Instagram-sisältöä"
          />
          <img
            className="igPostaus"
            id="ig2"
            src={require("./images/webp/ig_ilmastoahdistus.webp")}
            alt="Instagram-sisältöä"
          />
          <img
            className="igPostaus"
            id="ig3"
            src={require("./images/webp/ig_kyselytulos.webp")}
            alt="Instagram-sisältöä"
          />
        </div>
        <div className="igRow">
          <img
            className="igPostaus"
            id="ig4"
            src={require("./images/webp/ig_kysymys.webp")}
            alt="Instagram-sisältöä"
          />
          <img
            className="igPostaus"
            id="ig5"
            src={require("./images/webp/ig_quote.webp")}
            alt="Instagram-sisältöä"
          />
          <img
            className="igPostaus"
            id="ig6"
            src={require("./images/webp/ig_tutkimus.webp")}
            alt="Instagram-sisältöä"
          />
        </div>
      </div>
    </>
  );
}
