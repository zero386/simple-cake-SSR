import React from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import SCfooterComponent from "../../components/footer/footer.component";
import SCheaderComponent from "../../components/header/header.component";
import SCrowComponent from "../../components/row/row.component";
import { useEffect } from "react";

const ContactPage = () => {
  const pageStructure = {
    name: "contact",
    rows: [
      {
        name: "contactPhone",
        columns: [
          {
            image: "",
            text: `Mediante Whatsapp
            3324953033`,
          },
          {
            image: "/assets/contactus/ws-logo.jpg",
            text: ``,
          },
        ],
      },
      {
        name: "contactEmail",
        columns: [
          {
            image: "",
            text: `Mediante Email
            chriscardenas386@gmail.com`,
          },
          {
            image: "/assets/logos/email-logo.webp",
            text: "",
          },
        ],
      },
      {
        name: "locations",
        columns: [
          {
            image: "",
            text: `Por el momento <strong>no contamos con tienda fisica,</strong>
            pero puedes recoger tus productos en nuestro domicilio, o se
            pueden llevar directo a tu hogar dentro del Area Metropolitana de
            Guadalajara`,
          },
          {
            image: "/assets/logos/store-logo.png",
            text: "",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    // Call API to Fetch Page Layout
  }, []);

  return (
    <div>
      <SCheaderComponent></SCheaderComponent>
      <div className={`${styles["contact-container"]}`}>
        {pageStructure.rows.map((row, indexRow) => {
          return <SCrowComponent key={indexRow} columns={row.columns} />;
        })}
      </div>

      <SCfooterComponent />
    </div>
  );
};

export default ContactPage;
