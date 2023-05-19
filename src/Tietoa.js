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
          <h3 className="toinenOtsikko">
            Lisätietoa Hiilineutraali Suomi 2035-hankkeesta
          </h3>
          <p className="tietoTekstiä">
          72 prosenttia koko maailman kasvihuonekaasupäästöistä aiheutuu kotitalouksien kulutuksesta. Tutkimuksen mukaan osuus on samaa luokkaa myös Suomessa: kotitalouksien kulutus muodostaa 68 prosenttia kotimaan loppukäytön kasvihuonekaasupäästöistä. Loput 32 prosenttia syntyvät julkisesta kulutuksesta ja investoinneista. Ilmastonmuutoksen hillintä edellyttääkin siis toimia koko yhteiskunnassa.
          Vuonna 2010 suomalaisen kulutusmenoista keskimäärin aiheutuvat kasvihuonekaasupäästöt olivat 11,5 tCO2e per henkilö. (CO2e on hiilijalanjäljen yksikkö. Lyhenne tarkoittaa hiilidioksidiekvivalenttia eli ihmisen tuottamien kasvihuonekaasujen ilmastoa lämmittävää vaikutusta. Kirjain t yksikön edessä tarkoittaa tonnia.) Henkilöä kohden lasketut kulutuksen kasvihuonekaasupäästöt ovat Euroopan mittakaavassa korkeat. Koko maailman keskiarvo oli 6,0 tCO2e eli suomalaisten päästöt ovat tähän verrattuna lähes kaksinkertaiset.
          </p>
          <h3 className="väliOtsikko">Arkielämän osa-alueita:</h3>
          <div className="osa-alueet">
          <div className="arkielamaa">
            <h4 className="väliväliOtsikko">Vedestä:</h4>
            <p classNmae="tietoTekstiä">
            Turha veden juoksutus, liian pitkät suihkut ja vuotavat vesikalusteet voi huomaamatta valuttaa hukkaan kymmeniä litroja vettä päivässä. Vähentämällä ylimääräistä veden kulutusta, voit sekä keventää ympäristön kuormaa että säästää omaa lompakkoasi.
            <br/><br/>Kahdeksan minuutin suihku joka päivä maksaa sinulle vuodessa noin 300 euroa. Puolittamalla suihkussa käytetyn ajan puolitat samalla vedestä maksamasi laskun. Lämmin vesi maksaa keskimäärin yli kaksi kertaa enemmän kuin kylmä vesi. Puolittamalla suihkuajan kahdeksasta minuutista neljään minuuttiin hiilijalanjälkesi pienenee 0,5 % vuodessa. Asentamalla vesimittarin ja säästämällä 20 % vedenkulutuksesta pienennät hiilijalanjälkeäsi toisella 0,5 % vuodessa. Jos miljoona suomalaista tekisi näin, säästyisi lähes 9 000 henkilön kokonaishiilijalanjälki.
            </p>
          </div>
          <div className="arkielamaa">
            <h4 className="väliväliOtsikko">Energiasta:</h4>
            <p classNmae="tietoTekstiä">
            Kodeissa energiaa kuluu eniten lämmitykseen. Toiseksi eniten sähköä vie veden lämmittäminen. Onkin erityisen tärkeää varmistaa, että asunnon lämpötila on korkeintaan 21 astetta ja lämmintä vettä ei tuhlata.
            <br/><br/>
            Kodin energiatehokkuutta parantavista ratkaisuista ilmalämpöpumppu on kustannustehokkain. Talvella se lämmittää kodin tehokkaasti ja edullisesti, kun taas helteillä se jäähdyttää huoneilmaa. Ilmalämpöpumpun avulla hiilijalanjälkesi pienenee 4 % vuodessa. Jos miljoona suomalaista asentaisi ilmalämpöpumpun, säästyisi noin 39 000 henkilön kokonaishiilijalanjälki.
            <br/><br/>
            Kun asennat omakotitalon tai mökin katolle aurinkokeräimen, saat lämmintä käyttövettä ilmaiseksi. Asennettua järjestelmää tarvitsee huoltaa vain harvoin. Alkuinvestoinnin jälkeen säästöä syntyy muun muassa lämmityskustannuksissa ja hiilijalanjälkesi pienenee 7 % vuodessa. Jos miljoonaa suomalaista asentaisi keräimen, säästyisi 66 000 asukkaan kokonaishiilijalanjälki.
            </p>
          </div>
          <div className="arkielamaa">
            <h4 className="väliväliOtsikko">Kulkemisesta:</h4>
            <p classNmae="tietoTekstiä">
            Liikenne tuottaa noin 20 prosenttia Suomen kasvihuonekaasupäästöistä. Onneksi bensiinille on nykyään vähäpäästöisempiä vaihtoehtoja. Yksi näistä on bioetanoli, joka on biojätteestä valmistettu kotimainen ja ympäristöystävällinen valinta. Suomessa RE85-etanolipolttoainetta valmistetaan tähteistä, kuten hävikkileivästä. Pienellä investoinnilla voit muuttaa bensiini- tai dieselkäyttöisen auton RE85 käyttöiseksi, kunhan autossa ei ole suorasuihkumoottoria. Biojätteestä valmistetun etanolin osuus polttonesteessä laskee autoilun fossiilisia päästöjä jopa 80 prosenttia. Etanolikäyttöisellä autolla ajaminen polttomoottoriauton sijaan pienentää hiilijalanjälkeäsi 16,5 prosenttia vuodessa. Jos miljoonaa suomalaista tekisi näin, laskennallisesti säästyisi noin 181 000 asukkaan kokonaishiilijalanjälki.
            <br/><br/>
            Tai mitä jos pyytäisit kaverin kyytiin tai perustaisit kimppakyytiryhmän? Jaettu työmatka on myös oiva hetki aamupalaverille työporukan kesken. Jos matkustat kolmen henkilön kimppakyydissä kolmesti viikossa yksin ajamisen sijasta, pienenee hiilijalanjälkesi 1 % vuodessa. Jos miljoona suomalaista tekee näin, säästyy 11 000 suomalaisen hiilijalanjälki vuodessa.
            <br/><br/>
            Toisaalta etätyöpäivänä työt voit tehdä kotoa tai vaikkapa kahvilasta käsin. Työmatkoihin kuluva aika jää muuhun, ja joidenkin töiden tekeminen on tehokkaampaa. Jos työpaikallasi ei ole ollut tapana tehdä etätöitä, saattaa koko käsite olla työkavereiden keskuudessa vieras. Yksi etätyöpäivä viikossa pienentää hiilijalanjälkeä prosentin. Jos miljoona suomalaista tekee lisäksesi yhden etäpäivän viikossa, säästyy 11 000 henkilön hiilijalanjälki vuodessa.
            </p>
          </div>
          <div className="arkielamaa">
            <h4 className="väliväliOtsikko">Hankinnoista</h4>
            <p classNmae="tietoTekstiä">
            Haasta itsesi testaamaan kasvisruokavaliota vuoden ajan. Luvassa on taattuja hyötyjä. Ruokavalio monipuolistuu ja kokkaustaidot karttuvat. Kasvisruoka on edullista, terveellistä ja herkullista. Yhä useampi meistä on kasvissyöjä, joten valikoimaa ja vertaistukea on tarjolla runsaasti. Lihasta luopumalla voit pienentää hiilijalanjälkeäsi seitsemän prosenttia vuodessa. Säästö vastaa esimerkiksi 4100 autoilukilometriä.
            <br/><br/>
            Vanhat aarniometsät ovat tärkeitä hiilivarastoja ja yhteistä perintöämme, jonka suojelijaksi jokainen voi ryhtyä. Lahjoittamalla esimerkiksi sata euroa vuosittain ikimetsien suojeluun varmistat, että alueet muuttuvat luonnonsuojelualueiksi, jotka varastoivat hiiltä sekä ylläpitävät lajien kirjoa. Sadalla eurolla Luonnonperintösäätiö ostaa 200 neliömetriä luonnonalueita ja rauhoittaa ne pysyvästi.            </p>
            </div>
          </div>
        </div>
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
              <h3 className="lahdeOtsikko">Motiva</h3>
              <p className="esittelyTeksti">
              Motiva on valtion kestävän kehityksen yhtiö, joka kannustaa energian ja materiaalien tehokkaaseen ja kestävään käyttöön. Tarjoamme julkishallinnolle, yrityksille, kunnille ja kuluttajille tietoa, ratkaisuja ja palveluja, joiden avulla ne voivat tehdä resurssitehokkaita, vaikuttavia ja kestäviä valintoja
              </p>
              <a href="https://www.motiva.fi/">
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
