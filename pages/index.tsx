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
    "/assets/banners/banner-1.png",
    "/assets/banners/banner-2.png",
  ];

  const collageImages: ICollageImage[] = [
    {
      category: "Pasteles",
      images: ["/assets/products/cookies/NY/NY-4.jpg"],
    },
    {
      category: "Galletas",
      images: ["/assets/products/cookies/NY/NY-2.jpg"],
    },
    {
      category: "Brownies",
      images: ["/assets/products/cakes/cake-1.jpg"],
    },
    {
      category: "Tartas",
      images: ["/assets/products/cakes/cake-2.jpg"],
    },
    {
      category: "Roles",
      images: ["/assets/products/rolls/rolls-1.jpg"],
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
