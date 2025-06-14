import React from "react";
import "./home.css";
import { Info, Palette } from "lucide-react";
import estrellaEquina from "../../assets/images/estrella_equina.webp";
import chalaneria from "../../assets/images/chalaneria-4563086_1280.jpg";
import jinete from "../../assets/images/arte_de_ser_jinete.jpg";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero-container">
        <img src={chalaneria} alt="Chalanería" className="hero-image" />
        <div className="hero-text">
          <h1>Bienvenidos a la Chalanería Colombiana</h1>
          <p>Tradición, elegancia y cultura en cada paso</p>
        </div>
      </section>

      <section className="section-info reverse">
        <div className="section-image">
          <img src={estrellaEquina} alt="Caballo de paso" />
        </div>
        <div className="section-text">
          <h2>
            <Info size={28} /> ¿Qué es la chalanería?
          </h2>
          <p>
            La chalanería es una expresión ecuestre tradicional de Colombia, que
            destaca por la armonía entre jinete y caballo. Es un arte que
            resalta el manejo, la postura y el respeto por el caballo criollo
            colombiano, especialmente el caballo de paso fino. Además,
            representa una manifestación cultural viva, reconocida por su
            elegancia, destreza y profundo vínculo con nuestras raíces
            campesinas.
          </p>
        </div>
      </section>
      <section className="section-info">
        <div className="section-image">
          <img src={jinete} alt="Jinete y caballo" />
        </div>
        <div className="section-text">
          <h2>
            <Palette size={28} /> El arte de ser jinete
          </h2>
          <p>
            Un buen jinete o amazona se caracteriza por:
            <br />
            <br />
            • La capacidad de entender y hacerse entender del caballo.
            <br />
            • Tener buen pulso y oído.
            <br />
            • Ser suave con sus manos.
            <br />
            • Tener firmeza en las piernas.
            <br />
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};
