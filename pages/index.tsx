import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import SCfooterComponent from "../components/footer/footer.component";
import SCheaderComponent from "../components/header/header.component";
import SCcarouselImagesComponent from "../components/carousel-images/carousel-images.component";
import SCwpButtonComponent from "../components/wp-button/wp-button";
import SCcollageImagesComponent from "../components/collage-images/collage-images.component";
import Image from "next/image";
import { ICollageImage } from "../components/collage-images/interfaces";

const Home: NextPage = () => {
  const portraitImages = [
    "/assets/banners/banner-galletas-chispas.jpg",
    "/assets/banners/banner-roles.jpg",
    "/assets/banners/banner-tartas.jpg",
  ];

  const collageImages: ICollageImage[] = [
    {
      category: "Pasteles",
      images: ["/assets/products/cakes/cake-6.jpg"],
    },
    {
      category: "Galletas",
      images: ["/assets/products/cookies/NY/nuez-y-chispas-chocolate/nuez-y-chispas-2.jpg"],
    },
    {
      category: "Tartas",
      images: ["/assets/products/tarts/tart-2.jpg"],
    },
    {
      category: "Roles",
      images: ["/assets/products/rolls/rolls-1.jpg"],
    },
    {
      category: "Brownies",
      images: ["/assets/products/brownies/brownie-2.jpg"],
    },
  ];

  const [transition, setTransition] = useState(false);

  useEffect(() => {
    // Call API to Fetch BannerImages and Collage Images
    setTimeout(() => setTransition(true), 1000);
  }, []);

  return (
    <div>
      <SCheaderComponent></SCheaderComponent>
      <div className={styles["home-container"]}>
        <SCcarouselImagesComponent images={portraitImages} />

        <hr
          className={`${transition ? styles.grow : ""} ${
            styles["trans--grow"]
          } hr1 l`}
        ></hr>
        <div className={`${styles["home-content"]} sc-text`}>
          <label className={styles["sc-text"]}>
            Cotiza y realiza tu pedido
          </label>
        </div>

        <SCcollageImagesComponent images={collageImages} />
        <SCwpButtonComponent />
      </div>
      <SCfooterComponent />
    </div>
  );
};

export default Home;
