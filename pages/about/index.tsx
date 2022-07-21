import React, { useState, useEffect } from "react";
import styles from "./about.module.scss";
import SCfooterComponent from "../../components/footer/footer.component";
import SCheaderComponent from "../../components/header/header.component";
import SCrowComponent from "../../components/row/row.component";
import SCwpButtonComponent from "../../components/wp-button/wp-button";

const AboutUsPage = () => {
  const [showWPButton, setShowWPButton] = useState(false);
  const pageStructure = {
    name: "about",
    rows: [
      {
        name: "intro",
        columns: [
          {
            image: "",
            text: `Un dia como hoy se comenzaron a hornear y preparar dentro de
          un complejo de 54mts cuadrados los primeros pedidos de
          postres, comenzando con pedidos pequenios de panques, roles de
          canela, galletas de royal icing y mucho mas. Asi es como se
          decidio comenzar con este simple y delicioso proyecto
          ofreciendo nuestra propia marca de postres.`,
          },
          {
            image: "/assets/logos/SClogo.png",
            text: ``,
          },
        ],
      },
      {
        name: "objective",
        columns: [
          {
            image: "/assets/logos/whatsapp-logo.webp",
            text: ``,
          },
          {
            image: "",
            text: `Tenemos entendido que existe gran variedad de lineas de
          postres, cada una con sus diferentes caracteristicas y valores
          que los hacen unicos. Del mismo modo Simple Cake ofrece sus
          productos de una manera simple`,
          },
        ],
      },
      {
        name: "chef-intro",
        columns: [
          {
            image: "",
            text: `Chef Sofia Vazquez, la mente maestra detras de todo lo simple que se hace detras del postre`,
          },
          {
            image: "/assets/logos/whatsapp-logo.webp",
            text: "",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    // Call API to Fetch Page Layout
    if (window !== undefined) {
      setShowWPButton(true);
    }
  }, []);

  return (
    <div>
      <SCheaderComponent></SCheaderComponent>
      <div className={`${styles["about-container"]}`}>
        {pageStructure.rows.map((row, indexRow) => {
          return <SCrowComponent key={indexRow} columns={row.columns} />;
        })}
        <SCwpButtonComponent />
      </div>

      <SCfooterComponent />
    </div>
  );
};

export default AboutUsPage;
