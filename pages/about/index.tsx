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
            text: `Un día como hoy se comenzaron a hornear y preparar dentro de
          un complejo de 54mts cuadrados los primeros pedidos de
          postres, comenzando con pedidos pequeños de panques, roles de
          canela, galletas de royal icing y mucho más!. Así es como se
          decidió comenzar con este simple y delicioso proyecto
          ofreciendo nuestra propia marca de postres.`,
          },
          {
            image: "/assets/about/hornear-2.webp",
            text: ``,
          },
        ],
      },
      {
        name: "objective",
        columns: [
          {
            image: "/assets/logos/SClogo.png",
            text: ``,
          },
          {
            image: "",
            text: `Tenemos entendido que existe gran variedad de marcas de
          postres, cada una con sus diferentes características y sabores
          que los hacen únicos. Nosotros hacemos nuestros
          postres de una manera simple y 100% artesanal, utilizando ingredientes de calidad
          para llevar el mejor sabor directo a tu paladar. `,
          },
        ],
      },
      {
        name: "offer",
        columns: [
          {
            image: "",
            text: `Enfocados y comprometidos en satisfacer la demanda de nuestros clientes,
            ofrecemos nuestros postres de una manera simple, deliciosa y sobre todo económica`,
          },
          {
            image: "/assets/about/variety-products.jpg",
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
